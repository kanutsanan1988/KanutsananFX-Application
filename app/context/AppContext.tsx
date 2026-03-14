import React, { createContext, useContext, useState, useEffect, useCallback, ReactNode } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getTranslation, TranslationKey } from '../i18n/translations';

export type AiProvider = 'kanutsananfx' | 'openai' | 'anthropic' | 'gemini' | 'grok' | 'perplexity' | 'openrouter';

export interface AppState {
  metaApiAccountId: string;
  metaApiKey: string;
  aiProvider: AiProvider;
  aiApiKey: string;
  isMetaApiConnected: boolean;
  isAiConnected: boolean;
  locale: string;
  tradingPair: string;
  autoTradeInterval: number;
  isAutoTrading: boolean;
  chatHistory: ChatMessage[];
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'assistant' | 'system';
  content: string;
  timestamp: number;
}

interface AppContextType {
  state: AppState;
  t: (key: TranslationKey) => string;
  updateMetaApi: (accountId: string, apiKey: string) => Promise<boolean>;
  updateAiProvider: (provider: AiProvider, apiKey: string) => Promise<boolean>;
  setTradingPair: (pair: string) => void;
  setAutoTradeInterval: (interval: number) => void;
  setIsAutoTrading: (active: boolean) => void;
  addChatMessage: (msg: ChatMessage) => void;
  clearChat: () => void;
  isFullyConnected: boolean;
  resetConnection: () => void;
}

const defaultState: AppState = {
  metaApiAccountId: '',
  metaApiKey: '',
  aiProvider: 'kanutsananfx',
  aiApiKey: '',
  isMetaApiConnected: false,
  isAiConnected: false,
  locale: 'th',
  tradingPair: 'XAUUSD',
  autoTradeInterval: 30,
  isAutoTrading: false,
  chatHistory: [],
};

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, setState] = useState<AppState>(defaultState);

  useEffect(() => {
    loadState();
  }, []);

  const loadState = async () => {
    try {
      const saved = await AsyncStorage.getItem('kanutsananfx_state');
      if (saved) {
        const parsed = JSON.parse(saved);
        setState(prev => ({ ...prev, ...parsed, isAutoTrading: false }));
      }
    } catch (e) {
      console.error('Failed to load state:', e);
    }
  };

  const saveState = async (newState: Partial<AppState>) => {
    try {
      const updated = { ...state, ...newState };
      setState(updated);
      const { chatHistory, ...toSave } = updated;
      await AsyncStorage.setItem('kanutsananfx_state', JSON.stringify(toSave));
      if (newState.chatHistory) {
        await AsyncStorage.setItem('kanutsananfx_chat', JSON.stringify(newState.chatHistory));
      }
    } catch (e) {
      console.error('Failed to save state:', e);
    }
  };

  const t = useCallback((key: TranslationKey): string => {
    const trans = getTranslation(state.locale);
    return trans[key] || key;
  }, [state.locale]);

  const updateMetaApi = async (accountId: string, apiKey: string): Promise<boolean> => {
    try {
      // Validate by attempting connection
      const response = await fetch(`https://mt-client-api-v1.agiliumtrade.agiliumtrade.ai/users/current/accounts/${accountId}`, {
        headers: { 'auth-token': apiKey },
      });
      const success = response.ok;
      await saveState({
        metaApiAccountId: accountId,
        metaApiKey: apiKey,
        isMetaApiConnected: success,
      });
      return success;
    } catch {
      await saveState({
        metaApiAccountId: accountId,
        metaApiKey: apiKey,
        isMetaApiConnected: false,
      });
      return false;
    }
  };

  const updateAiProvider = async (provider: AiProvider, apiKey: string): Promise<boolean> => {
    const isBuiltIn = provider === 'kanutsananfx';
    const success = isBuiltIn || apiKey.length > 10;
    await saveState({
      aiProvider: provider,
      aiApiKey: isBuiltIn ? '' : apiKey,
      isAiConnected: success,
    });
    return success;
  };

  const setTradingPair = (pair: string) => saveState({ tradingPair: pair });
  const setAutoTradeInterval = (interval: number) => saveState({ autoTradeInterval: interval });
  const setIsAutoTrading = (active: boolean) => saveState({ isAutoTrading: active });
  
  const addChatMessage = (msg: ChatMessage) => {
    setState(prev => {
      const updated = [...prev.chatHistory, msg];
      AsyncStorage.setItem('kanutsananfx_chat', JSON.stringify(updated)).catch(() => {});
      return { ...prev, chatHistory: updated };
    });
  };

  const clearChat = () => {
    setState(prev => ({ ...prev, chatHistory: [] }));
    AsyncStorage.removeItem('kanutsananfx_chat').catch(() => {});
  };

  const resetConnection = () => {
    saveState({
      isMetaApiConnected: false,
      isAiConnected: false,
      metaApiAccountId: '',
      metaApiKey: '',
      aiApiKey: '',
    });
  };

  const isFullyConnected = state.isMetaApiConnected && state.isAiConnected;

  return (
    <AppContext.Provider
      value={{
        state,
        t,
        updateMetaApi,
        updateAiProvider,
        setTradingPair,
        setAutoTradeInterval,
        setIsAutoTrading,
        addChatMessage,
        clearChat,
        isFullyConnected,
        resetConnection,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = (): AppContextType => {
  const context = useContext(AppContext);
  if (!context) throw new Error('useApp must be used within AppProvider');
  return context;
};

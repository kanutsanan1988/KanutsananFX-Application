import React, { useState, useRef, useEffect } from 'react';
import {
  View, Text, TextInput, TouchableOpacity, StyleSheet, FlatList,
  KeyboardAvoidingView, Platform, ActivityIndicator, Alert,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useApp, ChatMessage } from '../context/AppContext';
import { sendMessage } from '../services/ai';
import { Colors, FontSize, Spacing, BorderRadius } from '../constants/theme';

export default function ChatScreen() {
  const { state, addChatMessage, isFullyConnected, t } = useApp();
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const flatListRef = useRef<FlatList>(null);

  useEffect(() => {
    if (state.chatHistory.length === 0) {
      addChatMessage({
        id: 'welcome',
        role: 'assistant',
        content: '🙏 สวัสดีครับ ผม KanutsananFX\n\nยินดีให้บริการครับ ผมสามารถช่วยคุณวิเคราะห์ตลาด Forex, ให้คำแนะนำการเทรด, หรือพูดคุยธรรมะได้ครับ\n\n📊 คำสั่งที่ใช้ได้:\n• "เช็คเทรด"\n• "อนุมัติเทรด"\n• "ตั้งเวลาเทรดอัตโนมัติ"\n• "ยกเลิกการตั้งเวลาเทรด"\n\nมีอะไรให้ช่วยครับ?',
        timestamp: Date.now(),
      });
    }
  }, []);

  const handleSend = async () => {
    const text = inputText.trim();
    if (!text || isLoading) return;

    const userMsg: ChatMessage = {
      id: `user_${Date.now()}`,
      role: 'user',
      content: text,
      timestamp: Date.now(),
    };
    addChatMessage(userMsg);
    setInputText('');
    setIsLoading(true);

    try {
      const messages = state.chatHistory
        .filter(m => m.role !== 'system')
        .slice(-20)
        .map(m => ({ role: m.role, content: m.content }));
      messages.push({ role: 'user', content: text });

      const response = await sendMessage(state.aiProvider, state.aiApiKey, messages);

      const aiMsg: ChatMessage = {
        id: `ai_${Date.now()}`,
        role: 'assistant',
        content: response,
        timestamp: Date.now(),
      };
      addChatMessage(aiMsg);
    } catch (e: any) {
      addChatMessage({
        id: `err_${Date.now()}`,
        role: 'assistant',
        content: `❌ เกิดข้อผิดพลาด: ${e.message}`,
        timestamp: Date.now(),
      });
    }

    setIsLoading(false);
  };

  const renderMessage = ({ item }: { item: ChatMessage }) => {
    const isUser = item.role === 'user';
    return (
      <View style={[styles.messageBubble, isUser ? styles.userBubble : styles.aiBubble]}>
        {!isUser && (
          <View style={styles.aiHeader}>
            <Text style={styles.aiAvatar}>📊</Text>
            <Text style={styles.aiName}>KanutsananFX</Text>
          </View>
        )}
        <Text style={[styles.messageText, isUser && styles.userText]}>{item.content}</Text>
        <Text style={styles.timestamp}>
          {new Date(item.timestamp).toLocaleTimeString('th-TH', { hour: '2-digit', minute: '2-digit' })}
        </Text>
      </View>
    );
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      keyboardVerticalOffset={90}
    >
      {/* Status bar */}
      <View style={styles.statusBar}>
        <View style={[styles.statusDot, isFullyConnected ? styles.dotConnected : styles.dotDisconnected]} />
        <Text style={styles.statusText}>
          {isFullyConnected ? `${t('connected')} | ${t('currentLlm')}: ${state.aiProvider.toUpperCase()}` : t('disconnected')}
        </Text>
      </View>

      {/* Chat messages */}
      <FlatList
        ref={flatListRef}
        data={state.chatHistory}
        renderItem={renderMessage}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.chatList}
        onContentSizeChange={() => flatListRef.current?.scrollToEnd({ animated: true })}
      />

      {/* Loading indicator */}
      {isLoading && (
        <View style={styles.loadingBar}>
          <ActivityIndicator size="small" color={Colors.accentGold} />
          <Text style={styles.loadingText}>{t('aiThinking')}</Text>
        </View>
      )}

      {/* Input bar */}
      <View style={styles.inputBar}>
        <TextInput
          style={styles.textInput}
          value={inputText}
          onChangeText={setInputText}
          placeholder={t('typeMessage')}
          placeholderTextColor={Colors.textMuted}
          multiline
          maxLength={2000}
          onSubmitEditing={handleSend}
        />
        <TouchableOpacity style={styles.voiceButton} onPress={() => Alert.alert('🎤', 'ฟีเจอร์สนทนาด้วยเสียง - พร้อมใช้งานในเวอร์ชันถัดไป')}>
          <Ionicons name="mic" size={22} color={Colors.textSecondary} />
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.sendButton, (!inputText.trim() || isLoading) && styles.sendDisabled]}
          onPress={handleSend}
          disabled={!inputText.trim() || isLoading}
        >
          <Ionicons name="send" size={20} color="#fff" />
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors.background },
  statusBar: {
    flexDirection: 'row', alignItems: 'center',
    backgroundColor: Colors.surface, paddingHorizontal: Spacing.md, paddingVertical: Spacing.sm,
    borderBottomWidth: 1, borderBottomColor: Colors.border,
  },
  statusDot: { width: 8, height: 8, borderRadius: 4, marginRight: Spacing.sm },
  dotConnected: { backgroundColor: Colors.success },
  dotDisconnected: { backgroundColor: Colors.error },
  statusText: { color: Colors.textSecondary, fontSize: FontSize.sm },
  chatList: { padding: Spacing.md, paddingBottom: Spacing.lg },
  messageBubble: {
    maxWidth: '85%', padding: Spacing.md, borderRadius: BorderRadius.lg,
    marginBottom: Spacing.sm,
  },
  userBubble: {
    backgroundColor: Colors.chatBubbleUser, alignSelf: 'flex-end',
    borderBottomRightRadius: BorderRadius.sm,
  },
  aiBubble: {
    backgroundColor: Colors.chatBubbleAI, alignSelf: 'flex-start',
    borderBottomLeftRadius: BorderRadius.sm,
  },
  aiHeader: { flexDirection: 'row', alignItems: 'center', marginBottom: Spacing.xs },
  aiAvatar: { fontSize: 18, marginRight: Spacing.xs },
  aiName: { color: Colors.accentGold, fontSize: FontSize.sm, fontWeight: 'bold' },
  messageText: { color: Colors.text, fontSize: FontSize.md, lineHeight: 22 },
  userText: { color: '#fff' },
  timestamp: { color: Colors.textMuted, fontSize: FontSize.xs, marginTop: Spacing.xs, textAlign: 'right' },
  loadingBar: {
    flexDirection: 'row', alignItems: 'center', justifyContent: 'center',
    paddingVertical: Spacing.sm, backgroundColor: Colors.surface,
  },
  loadingText: { color: Colors.textSecondary, marginLeft: Spacing.sm, fontSize: FontSize.sm },
  inputBar: {
    flexDirection: 'row', alignItems: 'flex-end',
    backgroundColor: Colors.surface, padding: Spacing.sm,
    borderTopWidth: 1, borderTopColor: Colors.border,
  },
  textInput: {
    flex: 1, backgroundColor: Colors.inputBg, borderRadius: BorderRadius.xl,
    paddingHorizontal: Spacing.md, paddingVertical: Spacing.sm,
    color: Colors.text, fontSize: FontSize.md, maxHeight: 100,
    borderWidth: 1, borderColor: Colors.border,
  },
  voiceButton: {
    width: 40, height: 40, borderRadius: 20, alignItems: 'center', justifyContent: 'center',
    marginLeft: Spacing.xs,
  },
  sendButton: {
    width: 40, height: 40, borderRadius: 20, backgroundColor: Colors.accent,
    alignItems: 'center', justifyContent: 'center', marginLeft: Spacing.xs,
  },
  sendDisabled: { opacity: 0.4 },
});

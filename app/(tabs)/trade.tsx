import React, { useState, useRef, useEffect } from 'react';
import {
  View, Text, TouchableOpacity, StyleSheet, ScrollView,
  Alert, ActivityIndicator,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useApp } from '../context/AppContext';
import { metaApiService, TradeCheckResult } from '../services/metaapi';
import { Colors, FontSize, Spacing, BorderRadius } from '../constants/theme';

export default function TradeScreen() {
  const { state, isFullyConnected, setIsAutoTrading, addChatMessage, t } = useApp();
  const [loading, setLoading] = useState<string | null>(null);
  const [lastCheck, setLastCheck] = useState<TradeCheckResult | null>(null);
  const autoTradeRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (state.isMetaApiConnected) {
      metaApiService.configure(state.metaApiAccountId, state.metaApiKey);
    }
    return () => {
      if (autoTradeRef.current) clearInterval(autoTradeRef.current);
    };
  }, [state.metaApiAccountId, state.metaApiKey]);

  const notifyChat = (message: string) => {
    addChatMessage({
      id: `sys_${Date.now()}`,
      role: 'assistant',
      content: message,
      timestamp: Date.now(),
    });
  };

  const formatInterval = (seconds: number): string => {
    if (seconds < 60) return `${seconds} ${t('seconds')}`;
    if (seconds < 3600) return `${seconds / 60} ${t('minutes')}`;
    return `${seconds / 3600} ${t('hours')}`;
  };

  const handleCheckTrade = async () => {
    if (!isFullyConnected) {
      Alert.alert(`⚠️ ${t('warning')}`, t('pleaseSetup'));
      return;
    }
    setLoading('check');
    try {
      const result = await metaApiService.checkTrade(state.tradingPair);
      setLastCheck(result);
      notifyChat(
        `📊 ${t('checkTrade')} ${state.tradingPair}\n\n${result.details}\n\n${result.canTrade ? `✅ ${t('connected')}` : `⏸️ ${t('notReady')}`}\n\nSignal: ${result.signalStrength}/10\nTrend: ${result.trend}\nEntry: ${result.entry.toFixed(2)}\nSL: ${result.sl.toFixed(2)}\nTP: ${result.tp.toFixed(2)}\nLot: ${result.lotSize}\nR/R: ${result.riskReward.toFixed(2)}:1`
      );
    } catch (e: any) {
      Alert.alert(`❌ ${t('error')}`, `${t('tradeFailed')}: ${e.message}`);
      notifyChat(`❌ ${t('tradeFailed')}: ${e.message}`);
    }
    setLoading(null);
  };

  const handleApproveTrade = async () => {
    if (!lastCheck) {
      Alert.alert(`⚠️ ${t('warning')}`, t('checkFirst'));
      return;
    }
    if (!lastCheck.canTrade) {
      Alert.alert(`⚠️ ${t('warning')}`, `${t('notReady')}: ${lastCheck.actionNote}`);
      return;
    }

    Alert.alert(
      `📊 ${t('confirmTrade')}`,
      `${lastCheck.signalType} ${state.tradingPair}\nEntry: ${lastCheck.entry.toFixed(2)}\nSL: ${lastCheck.sl.toFixed(2)}\nTP: ${lastCheck.tp.toFixed(2)}\nLot: ${lastCheck.lotSize}\nSignal: ${lastCheck.signalStrength}/10`,
      [
        { text: t('cancel'), style: 'cancel' },
        {
          text: t('approveTrade'),
          style: 'destructive',
          onPress: async () => {
            setLoading('approve');
            try {
              const result = await metaApiService.executeTrade(
                state.tradingPair,
                lastCheck.signalType as 'BUY' | 'SELL',
                lastCheck.lotSize,
                lastCheck.sl,
                lastCheck.tp
              );
              if (result.success) {
                notifyChat(`✅ ${t('tradeSuccess')}!\n${result.message}`);
                Alert.alert(`✅ ${t('success')}`, result.message);
              } else {
                notifyChat(`❌ ${t('tradeFailed')}: ${result.message}`);
                Alert.alert(`❌ ${t('error')}`, result.message);
              }
            } catch (e: any) {
              notifyChat(`❌ ${t('error')}: ${e.message}`);
            }
            setLoading(null);
          },
        },
      ]
    );
  };

  const handleStartAutoTrade = () => {
    if (!isFullyConnected) {
      Alert.alert(`⚠️ ${t('warning')}`, t('pleaseSetup'));
      return;
    }

    Alert.alert(
      `⏰ ${t('setAutoTrade')}`,
      `${t('autoCheckEvery')} ${formatInterval(state.autoTradeInterval)}\n${t('tradingPair')}: ${state.tradingPair}\n\n${t('setAutoTradeDesc')}`,
      [
        { text: t('cancel'), style: 'cancel' },
        {
          text: t('setAutoTrade'),
          onPress: () => {
            setIsAutoTrading(true);
            const intervalMs = state.autoTradeInterval * 1000;
            autoTradeRef.current = setInterval(async () => {
              try {
                const result = await metaApiService.checkTrade(state.tradingPair);
                if (result.canTrade) {
                  const tradeResult = await metaApiService.executeTrade(
                    state.tradingPair,
                    result.signalType as 'BUY' | 'SELL',
                    result.lotSize,
                    result.sl,
                    result.tp
                  );
                  notifyChat(`🤖 [Auto] ${tradeResult.success ? '✅' : '❌'} ${tradeResult.message}`);
                } else {
                  notifyChat(`🤖 [Auto] ⏸️ ${result.actionNote}`);
                }
              } catch (e: any) {
                notifyChat(`🤖 [Auto] ❌ ${t('error')}: ${e.message}`);
              }
            }, intervalMs);
            notifyChat(`⏰ ${t('autoTradeStarted')}\n${t('autoCheckEvery')} ${formatInterval(state.autoTradeInterval)}\n${t('tradingPair')}: ${state.tradingPair}`);
          },
        },
      ]
    );
  };

  const handleStopAutoTrade = () => {
    if (autoTradeRef.current) {
      clearInterval(autoTradeRef.current);
      autoTradeRef.current = null;
    }
    setIsAutoTrading(false);
    notifyChat(`🛑 ${t('autoTradeStopped')}`);
    Alert.alert(`🛑 ${t('cancelAutoTrade')}`, t('autoTradeStopped'));
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <View style={styles.statusCard}>
        <View style={styles.statusRow}>
          <View style={[styles.statusDot, isFullyConnected ? styles.dotGreen : styles.dotRed]} />
          <Text style={styles.statusText}>
            {isFullyConnected ? t('connected') : t('disconnected')}
          </Text>
        </View>
        <Text style={styles.pairText}>{t('tradingPair')}: {state.tradingPair}</Text>
        {state.isAutoTrading && (
          <View style={styles.autoIndicator}>
            <ActivityIndicator size="small" color={Colors.success} />
            <Text style={styles.autoText}>🤖 {t('autoTrading')}</Text>
          </View>
        )}
      </View>

      <Text style={styles.sectionTitle}>📋 {t('trade')}</Text>

      <TouchableOpacity
        style={[styles.commandButton, styles.checkButton]}
        onPress={handleCheckTrade}
        disabled={loading === 'check'}
      >
        {loading === 'check' ? (
          <ActivityIndicator color="#fff" />
        ) : (
          <>
            <Ionicons name="search" size={24} color="#fff" />
            <View style={styles.cmdTextContainer}>
              <Text style={styles.cmdTitle}>🔍 {t('checkTrade')}</Text>
              <Text style={styles.cmdDesc}>{t('checkTradeDesc')}</Text>
            </View>
          </>
        )}
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.commandButton, styles.approveButton, !lastCheck?.canTrade && styles.buttonDisabled]}
        onPress={handleApproveTrade}
        disabled={loading === 'approve' || !lastCheck?.canTrade}
      >
        {loading === 'approve' ? (
          <ActivityIndicator color="#fff" />
        ) : (
          <>
            <Ionicons name="checkmark-circle" size={24} color="#fff" />
            <View style={styles.cmdTextContainer}>
              <Text style={styles.cmdTitle}>✅ {t('approveTrade')}</Text>
              <Text style={styles.cmdDesc}>{t('approveTradeDesc')}</Text>
            </View>
          </>
        )}
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.commandButton, styles.autoButton, state.isAutoTrading && styles.buttonDisabled]}
        onPress={handleStartAutoTrade}
        disabled={state.isAutoTrading}
      >
        <Ionicons name="time" size={24} color="#fff" />
        <View style={styles.cmdTextContainer}>
          <Text style={styles.cmdTitle}>⏰ {t('setAutoTrade')}</Text>
          <Text style={styles.cmdDesc}>{t('autoCheckEvery')} {formatInterval(state.autoTradeInterval)}</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.commandButton, styles.cancelButton, !state.isAutoTrading && styles.buttonDisabled]}
        onPress={handleStopAutoTrade}
        disabled={!state.isAutoTrading}
      >
        <Ionicons name="close-circle" size={24} color="#fff" />
        <View style={styles.cmdTextContainer}>
          <Text style={styles.cmdTitle}>🛑 {t('cancelAutoTrade')}</Text>
          <Text style={styles.cmdDesc}>{t('cancelAutoTradeDesc')}</Text>
        </View>
      </TouchableOpacity>

      {lastCheck && (
        <View style={styles.resultCard}>
          <Text style={styles.resultTitle}>📊 {t('status')}</Text>
          <View style={styles.resultGrid}>
            <ResultItem label="Trend" value={lastCheck.trend} color={lastCheck.trend === 'UP' ? Colors.success : Colors.error} />
            <ResultItem label="Signal" value={`${lastCheck.signalStrength}/10`} color={lastCheck.signalStrength >= 7 ? Colors.success : lastCheck.signalStrength >= 4 ? Colors.warning : Colors.error} />
            <ResultItem label="Entry" value={lastCheck.entry.toFixed(2)} />
            <ResultItem label="SL" value={lastCheck.sl.toFixed(2)} color={Colors.error} />
            <ResultItem label="TP" value={lastCheck.tp.toFixed(2)} color={Colors.success} />
            <ResultItem label="Lot" value={`${lastCheck.lotSize}`} />
            <ResultItem label="R/R" value={`${lastCheck.riskReward.toFixed(2)}:1`} />
            <ResultItem label={t('status')} value={lastCheck.canTrade ? '✅ READY' : '⏸️ WAIT'} color={lastCheck.canTrade ? Colors.success : Colors.warning} />
          </View>
        </View>
      )}
    </ScrollView>
  );
}

const ResultItem = ({ label, value, color }: { label: string; value: string; color?: string }) => (
  <View style={resultStyles.item}>
    <Text style={resultStyles.label}>{label}</Text>
    <Text style={[resultStyles.value, color ? { color } : {}]}>{value}</Text>
  </View>
);

const resultStyles = StyleSheet.create({
  item: { width: '48%', marginBottom: Spacing.sm },
  label: { color: Colors.textMuted, fontSize: FontSize.xs },
  value: { color: Colors.text, fontSize: FontSize.lg, fontWeight: 'bold' },
});

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors.background },
  content: { padding: Spacing.md },
  statusCard: {
    backgroundColor: Colors.surface, borderRadius: BorderRadius.lg,
    padding: Spacing.md, marginBottom: Spacing.md,
  },
  statusRow: { flexDirection: 'row', alignItems: 'center' },
  statusDot: { width: 10, height: 10, borderRadius: 5, marginRight: Spacing.sm },
  dotGreen: { backgroundColor: Colors.success },
  dotRed: { backgroundColor: Colors.error },
  statusText: { color: Colors.text, fontSize: FontSize.md },
  pairText: { color: Colors.accentGold, fontSize: FontSize.md, marginTop: Spacing.xs },
  autoIndicator: { flexDirection: 'row', alignItems: 'center', marginTop: Spacing.sm },
  autoText: { color: Colors.success, fontSize: FontSize.sm, marginLeft: Spacing.sm },
  sectionTitle: { color: Colors.text, fontSize: FontSize.xl, fontWeight: 'bold', marginBottom: Spacing.md },
  commandButton: {
    flexDirection: 'row', alignItems: 'center',
    borderRadius: BorderRadius.lg, padding: Spacing.md, marginBottom: Spacing.sm,
  },
  checkButton: { backgroundColor: '#1565c0' },
  approveButton: { backgroundColor: '#2e7d32' },
  autoButton: { backgroundColor: '#e65100' },
  cancelButton: { backgroundColor: '#c62828' },
  buttonDisabled: { opacity: 0.4 },
  cmdTextContainer: { marginLeft: Spacing.md, flex: 1 },
  cmdTitle: { color: '#fff', fontSize: FontSize.lg, fontWeight: 'bold' },
  cmdDesc: { color: 'rgba(255,255,255,0.7)', fontSize: FontSize.sm, marginTop: 2 },
  resultCard: {
    backgroundColor: Colors.surface, borderRadius: BorderRadius.lg,
    padding: Spacing.md, marginTop: Spacing.md,
  },
  resultTitle: { color: Colors.accentGold, fontSize: FontSize.lg, fontWeight: 'bold', marginBottom: Spacing.md },
  resultGrid: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' },
});

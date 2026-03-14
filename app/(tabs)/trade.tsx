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

  // Command 1: เช็คเทรด
  const handleCheckTrade = async () => {
    if (!isFullyConnected) {
      Alert.alert('⚠️', t('pleaseSetup'));
      return;
    }
    setLoading('check');
    try {
      const result = await metaApiService.checkTrade(state.tradingPair);
      setLastCheck(result);
      notifyChat(`📊 ผลการเช็คเทรด ${state.tradingPair}\n\n${result.details}\n\n${result.canTrade ? '✅ พร้อมเทรด' : '⏸️ ยังไม่ควรเทรด'}\n\nSignal: ${result.signalStrength}/10\nTrend: ${result.trend}\nEntry: ${result.entry.toFixed(2)}\nSL: ${result.sl.toFixed(2)}\nTP: ${result.tp.toFixed(2)}\nLot: ${result.lotSize}\nR/R: ${result.riskReward.toFixed(2)}:1`);
    } catch (e: any) {
      Alert.alert('❌', `เช็คเทรดไม่สำเร็จ: ${e.message}`);
      notifyChat(`❌ เช็คเทรดไม่สำเร็จ: ${e.message}`);
    }
    setLoading(null);
  };

  // Command 2: อนุมัติเทรด
  const handleApproveTrade = async () => {
    if (!lastCheck) {
      Alert.alert('⚠️', 'กรุณาเช็คเทรดก่อน');
      return;
    }
    if (!lastCheck.canTrade) {
      Alert.alert('⚠️', `ไม่สามารถเทรดได้: ${lastCheck.actionNote}`);
      return;
    }

    Alert.alert(
      '📊 ยืนยันการเทรด',
      `${lastCheck.signalType} ${state.tradingPair}\nEntry: ${lastCheck.entry.toFixed(2)}\nSL: ${lastCheck.sl.toFixed(2)}\nTP: ${lastCheck.tp.toFixed(2)}\nLot: ${lastCheck.lotSize}\nSignal: ${lastCheck.signalStrength}/10`,
      [
        { text: 'ยกเลิก', style: 'cancel' },
        {
          text: 'อนุมัติเทรด',
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
                notifyChat(`✅ เทรดสำเร็จ!\n${result.message}`);
                Alert.alert('✅', result.message);
              } else {
                notifyChat(`❌ เทรดไม่สำเร็จ: ${result.message}`);
                Alert.alert('❌', result.message);
              }
            } catch (e: any) {
              notifyChat(`❌ เกิดข้อผิดพลาด: ${e.message}`);
            }
            setLoading(null);
          },
        },
      ]
    );
  };

  // Command 3: ตั้งเวลาเทรดอัตโนมัติ
  const handleStartAutoTrade = () => {
    if (!isFullyConnected) {
      Alert.alert('⚠️', t('pleaseSetup'));
      return;
    }

    Alert.alert(
      '⏰ ตั้งเวลาเทรดอัตโนมัติ',
      `ระบบจะเช็คเทรดทุกๆ ${formatInterval(state.autoTradeInterval)}\nคู่เทรด: ${state.tradingPair}\n\nถ้าเงื่อนไขผ่าน จะส่งคำสั่งซื้อขายอัตโนมัติ`,
      [
        { text: 'ยกเลิก', style: 'cancel' },
        {
          text: 'เริ่มเทรดอัตโนมัติ',
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
                  notifyChat(`🤖 [Auto] ⏸️ ${result.actionNote} - รอรอบถัดไป`);
                }
              } catch (e: any) {
                notifyChat(`🤖 [Auto] ❌ Error: ${e.message}`);
              }
            }, intervalMs);
            notifyChat(`⏰ เริ่มเทรดอัตโนมัติแล้ว\nเช็คทุกๆ ${formatInterval(state.autoTradeInterval)}\nคู่เทรด: ${state.tradingPair}`);
          },
        },
      ]
    );
  };

  // Command 4: ยกเลิกการตั้งเวลาเทรด
  const handleStopAutoTrade = () => {
    if (autoTradeRef.current) {
      clearInterval(autoTradeRef.current);
      autoTradeRef.current = null;
    }
    setIsAutoTrading(false);
    notifyChat('🛑 ยกเลิกการตั้งเวลาเทรดอัตโนมัติแล้ว');
    Alert.alert('🛑', 'ยกเลิกการตั้งเวลาเทรดอัตโนมัติแล้ว');
  };

  const formatInterval = (seconds: number): string => {
    if (seconds < 60) return `${seconds} วินาที`;
    if (seconds < 3600) return `${seconds / 60} นาที`;
    return `${seconds / 3600} ชั่วโมง`;
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      {/* Connection status */}
      <View style={styles.statusCard}>
        <View style={styles.statusRow}>
          <View style={[styles.statusDot, isFullyConnected ? styles.dotGreen : styles.dotRed]} />
          <Text style={styles.statusText}>
            {isFullyConnected ? 'เชื่อมต่อแล้ว' : 'ยังไม่ได้เชื่อมต่อ'}
          </Text>
        </View>
        <Text style={styles.pairText}>คู่เทรด: {state.tradingPair}</Text>
        {state.isAutoTrading && (
          <View style={styles.autoIndicator}>
            <ActivityIndicator size="small" color={Colors.success} />
            <Text style={styles.autoText}>🤖 เทรดอัตโนมัติทำงานอยู่</Text>
          </View>
        )}
      </View>

      {/* Trading Commands */}
      <Text style={styles.sectionTitle}>📋 คำสั่งเทรด</Text>

      {/* Command 1: เช็คเทรด */}
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
              <Text style={styles.cmdTitle}>🔍 เช็คเทรด</Text>
              <Text style={styles.cmdDesc}>วิเคราะห์ตลาดและให้คำแนะนำ (STEP 0-9)</Text>
            </View>
          </>
        )}
      </TouchableOpacity>

      {/* Command 2: อนุมัติเทรด */}
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
              <Text style={styles.cmdTitle}>✅ อนุมัติเทรด</Text>
              <Text style={styles.cmdDesc}>ส่งคำสั่งซื้อขายตามคำแนะนำ</Text>
            </View>
          </>
        )}
      </TouchableOpacity>

      {/* Command 3: ตั้งเวลาเทรดอัตโนมัติ */}
      <TouchableOpacity
        style={[styles.commandButton, styles.autoButton, state.isAutoTrading && styles.buttonDisabled]}
        onPress={handleStartAutoTrade}
        disabled={state.isAutoTrading}
      >
        <Ionicons name="time" size={24} color="#fff" />
        <View style={styles.cmdTextContainer}>
          <Text style={styles.cmdTitle}>⏰ ตั้งเวลาเทรดอัตโนมัติ</Text>
          <Text style={styles.cmdDesc}>เช็คทุกๆ {formatInterval(state.autoTradeInterval)}</Text>
        </View>
      </TouchableOpacity>

      {/* Command 4: ยกเลิกการตั้งเวลาเทรด */}
      <TouchableOpacity
        style={[styles.commandButton, styles.cancelButton, !state.isAutoTrading && styles.buttonDisabled]}
        onPress={handleStopAutoTrade}
        disabled={!state.isAutoTrading}
      >
        <Ionicons name="close-circle" size={24} color="#fff" />
        <View style={styles.cmdTextContainer}>
          <Text style={styles.cmdTitle}>🛑 ยกเลิกการตั้งเวลาเทรด</Text>
          <Text style={styles.cmdDesc}>หยุดระบบเทรดอัตโนมัติ</Text>
        </View>
      </TouchableOpacity>

      {/* Last check result */}
      {lastCheck && (
        <View style={styles.resultCard}>
          <Text style={styles.resultTitle}>📊 ผลการวิเคราะห์ล่าสุด</Text>
          <View style={styles.resultGrid}>
            <ResultItem label="Trend" value={lastCheck.trend} color={lastCheck.trend === 'UP' ? Colors.success : Colors.error} />
            <ResultItem label="Signal" value={`${lastCheck.signalStrength}/10`} color={lastCheck.signalStrength >= 7 ? Colors.success : lastCheck.signalStrength >= 4 ? Colors.warning : Colors.error} />
            <ResultItem label="Entry" value={lastCheck.entry.toFixed(2)} />
            <ResultItem label="SL" value={lastCheck.sl.toFixed(2)} color={Colors.error} />
            <ResultItem label="TP" value={lastCheck.tp.toFixed(2)} color={Colors.success} />
            <ResultItem label="Lot" value={`${lastCheck.lotSize}`} />
            <ResultItem label="R/R" value={`${lastCheck.riskReward.toFixed(2)}:1`} />
            <ResultItem label="Status" value={lastCheck.canTrade ? '✅ READY' : '⏸️ WAIT'} color={lastCheck.canTrade ? Colors.success : Colors.warning} />
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

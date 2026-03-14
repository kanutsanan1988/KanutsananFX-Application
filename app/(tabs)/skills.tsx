import React, { useState, useEffect } from 'react';
import {
  View, Text, TouchableOpacity, StyleSheet, ScrollView, ActivityIndicator,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useApp } from '../context/AppContext';
import { metaApiService } from '../services/metaapi';
import { Colors, FontSize, Spacing, BorderRadius } from '../constants/theme';

const INTERVAL_OPTIONS = [
  { label: '30 วินาที', value: 30 },
  { label: '40 วินาที', value: 40 },
  { label: '50 วินาที', value: 50 },
  { label: '1 นาที', value: 60 },
  { label: '2 นาที', value: 120 },
  { label: '3 นาที', value: 180 },
  { label: '4 นาที', value: 240 },
  { label: '5 นาที', value: 300 },
  { label: '6 นาที', value: 360 },
  { label: '7 นาที', value: 420 },
  { label: '8 นาที', value: 480 },
  { label: '9 นาที', value: 540 },
  { label: '10 นาที', value: 600 },
  { label: '20 นาที', value: 1200 },
  { label: '30 นาที', value: 1800 },
  { label: '40 นาที', value: 2400 },
  { label: '50 นาที', value: 3000 },
  { label: '1 ชั่วโมง', value: 3600 },
  { label: '2 ชั่วโมง', value: 7200 },
  { label: '3 ชั่วโมง', value: 10800 },
  { label: '4 ชั่วโมง', value: 14400 },
  { label: '5 ชั่วโมง', value: 18000 },
];

export default function SkillsScreen() {
  const { state, setAutoTradeInterval, setTradingPair, isFullyConnected, t } = useApp();
  const [symbols, setSymbols] = useState<string[]>([]);
  const [loadingSymbols, setLoadingSymbols] = useState(false);

  useEffect(() => {
    if (state.isMetaApiConnected) {
      loadSymbols();
    }
  }, [state.isMetaApiConnected]);

  const loadSymbols = async () => {
    setLoadingSymbols(true);
    try {
      metaApiService.configure(state.metaApiAccountId, state.metaApiKey);
      const syms = await metaApiService.getSymbols();
      setSymbols(syms);
    } catch {
      setSymbols(['XAUUSD', 'EURUSD', 'GBPUSD', 'USDJPY', 'AUDUSD', 'USDCHF']);
    }
    setLoadingSymbols(false);
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      {/* Auto Trade Interval */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>
          <Ionicons name="time-outline" size={20} color={Colors.accentGold} /> ช่วงเวลาเช็คเทรดอัตโนมัติ
        </Text>
        <Text style={styles.sectionDesc}>
          ปรับช่วงเวลาที่ระบบจะเช็คเทรดอัตโนมัติ
        </Text>
        <Text style={styles.currentValue}>
          ปัจจุบัน: {INTERVAL_OPTIONS.find(o => o.value === state.autoTradeInterval)?.label || `${state.autoTradeInterval} วินาที`}
        </Text>

        <View style={styles.optionGrid}>
          {INTERVAL_OPTIONS.map(option => (
            <TouchableOpacity
              key={option.value}
              style={[
                styles.optionChip,
                state.autoTradeInterval === option.value && styles.optionChipSelected,
              ]}
              onPress={() => setAutoTradeInterval(option.value)}
            >
              <Text style={[
                styles.optionChipText,
                state.autoTradeInterval === option.value && styles.optionChipTextSelected,
              ]}>
                {option.label}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      {/* Trading Pair Selection */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>
          <Ionicons name="swap-horizontal-outline" size={20} color={Colors.accentGold} /> เลือกคู่เทรด
        </Text>
        <Text style={styles.sectionDesc}>
          เลือกคู่เทรดจาก MetaAPI (ดึงจาก API ของ MetaAPI เท่านั้น)
        </Text>
        <Text style={styles.currentValue}>
          ปัจจุบัน: {state.tradingPair}
        </Text>

        {!isFullyConnected ? (
          <View style={styles.warningBox}>
            <Ionicons name="warning" size={20} color={Colors.warning} />
            <Text style={styles.warningText}>กรุณาเชื่อมต่อ MetaAPI ก่อนเพื่อดึงรายการคู่เทรด</Text>
          </View>
        ) : loadingSymbols ? (
          <View style={styles.loadingBox}>
            <ActivityIndicator color={Colors.accentGold} />
            <Text style={styles.loadingText}>{t('loadingPairs')}</Text>
          </View>
        ) : (
          <View style={styles.optionGrid}>
            {symbols.map(symbol => (
              <TouchableOpacity
                key={symbol}
                style={[
                  styles.optionChip,
                  state.tradingPair === symbol && styles.optionChipSelected,
                ]}
                onPress={() => setTradingPair(symbol)}
              >
                <Text style={[
                  styles.optionChipText,
                  state.tradingPair === symbol && styles.optionChipTextSelected,
                ]}>
                  {symbol}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        )}

        {isFullyConnected && (
          <TouchableOpacity style={styles.refreshButton} onPress={loadSymbols}>
            <Ionicons name="refresh" size={16} color={Colors.accentGold} />
            <Text style={styles.refreshText}>โหลดคู่เทรดใหม่</Text>
          </TouchableOpacity>
        )}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors.background },
  content: { padding: Spacing.md },
  section: {
    backgroundColor: Colors.surface, borderRadius: BorderRadius.lg,
    padding: Spacing.md, marginBottom: Spacing.md,
  },
  sectionTitle: { color: Colors.text, fontSize: FontSize.lg, fontWeight: 'bold', marginBottom: Spacing.xs },
  sectionDesc: { color: Colors.textSecondary, fontSize: FontSize.sm, marginBottom: Spacing.sm },
  currentValue: { color: Colors.accentGold, fontSize: FontSize.md, fontWeight: 'bold', marginBottom: Spacing.md },
  optionGrid: { flexDirection: 'row', flexWrap: 'wrap', gap: Spacing.xs },
  optionChip: {
    backgroundColor: Colors.inputBg, borderRadius: BorderRadius.xl,
    paddingHorizontal: Spacing.md, paddingVertical: Spacing.sm,
    borderWidth: 1, borderColor: Colors.border, marginBottom: Spacing.xs,
  },
  optionChipSelected: { backgroundColor: Colors.accent, borderColor: Colors.accent },
  optionChipText: { color: Colors.textSecondary, fontSize: FontSize.sm },
  optionChipTextSelected: { color: '#fff', fontWeight: 'bold' },
  warningBox: {
    flexDirection: 'row', alignItems: 'center',
    backgroundColor: 'rgba(246,173,85,0.1)', borderRadius: BorderRadius.sm,
    padding: Spacing.md,
  },
  warningText: { color: Colors.warning, fontSize: FontSize.sm, marginLeft: Spacing.sm, flex: 1 },
  loadingBox: { flexDirection: 'row', alignItems: 'center', padding: Spacing.md },
  loadingText: { color: Colors.textSecondary, marginLeft: Spacing.sm },
  refreshButton: {
    flexDirection: 'row', alignItems: 'center', justifyContent: 'center',
    marginTop: Spacing.md, padding: Spacing.sm,
  },
  refreshText: { color: Colors.accentGold, marginLeft: Spacing.xs, fontSize: FontSize.sm },
});

import React, { useState, useEffect } from 'react';
import {
  View, Text, TouchableOpacity, StyleSheet, ScrollView, ActivityIndicator,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useApp } from '../context/AppContext';
import { metaApiService } from '../services/metaapi';
import { Colors, FontSize, Spacing, BorderRadius } from '../constants/theme';

export default function SkillsScreen() {
  const { state, setAutoTradeInterval, setTradingPair, isFullyConnected, t } = useApp();
  const [symbols, setSymbols] = useState<string[]>([]);
  const [loadingSymbols, setLoadingSymbols] = useState(false);

  const formatInterval = (seconds: number): string => {
    if (seconds < 60) return `${seconds} ${t('seconds')}`;
    if (seconds < 3600) return `${seconds / 60} ${t('minutes')}`;
    return `${seconds / 3600} ${t('hours')}`;
  };

  const INTERVAL_OPTIONS = [
    { value: 30 },
    { value: 40 },
    { value: 50 },
    { value: 60 },
    { value: 120 },
    { value: 180 },
    { value: 240 },
    { value: 300 },
    { value: 360 },
    { value: 420 },
    { value: 480 },
    { value: 540 },
    { value: 600 },
    { value: 1200 },
    { value: 1800 },
    { value: 2400 },
    { value: 3000 },
    { value: 3600 },
    { value: 7200 },
    { value: 10800 },
    { value: 14400 },
    { value: 18000 },
  ];

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
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>
          <Ionicons name="time-outline" size={20} color={Colors.accentGold} /> {t('autoCheckInterval')}
        </Text>
        <Text style={styles.sectionDesc}>
          {t('setAutoTradeDesc')}
        </Text>
        <Text style={styles.currentValue}>
          {t('currentSetting')}: {formatInterval(state.autoTradeInterval)}
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
                {formatInterval(option.value)}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>
          <Ionicons name="swap-horizontal-outline" size={20} color={Colors.accentGold} /> {t('selectTradingPair')}
        </Text>
        <Text style={styles.sectionDesc}>
          {t('selectPair')}
        </Text>
        <Text style={styles.currentValue}>
          {t('currentSetting')}: {state.tradingPair}
        </Text>

        {!isFullyConnected ? (
          <View style={styles.warningBox}>
            <Ionicons name="warning" size={20} color={Colors.warning} />
            <Text style={styles.warningText}>{t('connectMetaApiFirst')}</Text>
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
            <Text style={styles.refreshText}>{t('refreshPairs')}</Text>
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

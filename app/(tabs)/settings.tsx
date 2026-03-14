import React, { useState } from 'react';
import {
  View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView,
  Alert, ActivityIndicator,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { useApp, AiProvider } from '../context/AppContext';
import { Colors, FontSize, Spacing, BorderRadius } from '../constants/theme';

const AI_PROVIDERS: { id: AiProvider; name: string }[] = [
  { id: 'kanutsananfx', name: 'KanutsananFX (ภายใน)' },
  { id: 'openai', name: 'OpenAI' },
  { id: 'anthropic', name: 'Anthropic' },
  { id: 'gemini', name: 'Google Gemini' },
  { id: 'grok', name: 'Grok' },
  { id: 'perplexity', name: 'Perplexity' },
  { id: 'openrouter', name: 'OpenRouter' },
];

export default function SettingsScreen() {
  const router = useRouter();
  const { state, updateMetaApi, updateAiProvider, resetConnection, isFullyConnected, t } = useApp();

  const [accountId, setAccountId] = useState(state.metaApiAccountId);
  const [apiKey, setApiKey] = useState(state.metaApiKey);
  const [selectedProvider, setSelectedProvider] = useState<AiProvider>(state.aiProvider);
  const [aiApiKey, setAiApiKey] = useState(state.aiApiKey);
  const [loading, setLoading] = useState<string | null>(null);

  const handleSaveMetaApi = async () => {
    setLoading('meta');
    const success = await updateMetaApi(accountId.trim(), apiKey.trim());
    setLoading(null);
    Alert.alert(success ? '✅' : '❌', success ? t('connectionSuccess') : t('connectionFailed'));
  };

  const handleSaveAi = async () => {
    setLoading('ai');
    const success = await updateAiProvider(selectedProvider, aiApiKey.trim());
    setLoading(null);
    Alert.alert(success ? '✅' : '❌', success ? t('connectionSuccess') : t('connectionFailed'));
  };

  const handleBackup = () => {
    Alert.alert(
      '☁️ สำรองข้อมูล',
      'ฟีเจอร์สำรองข้อมูลไปยัง Google Drive จะพร้อมใช้งานในเวอร์ชันถัดไป',
      [{ text: 'ตกลง' }]
    );
  };

  const handleRestore = () => {
    Alert.alert(
      '☁️ กู้คืนข้อมูล',
      'ฟีเจอร์กู้คืนข้อมูลจาก Google Drive จะพร้อมใช้งานในเวอร์ชันถัดไป',
      [{ text: 'ตกลง' }]
    );
  };

  const handleReset = () => {
    Alert.alert(
      '⚠️ รีเซ็ตการเชื่อมต่อ',
      'ข้อมูลการเชื่อมต่อทั้งหมดจะถูกลบ',
      [
        { text: 'ยกเลิก', style: 'cancel' },
        {
          text: 'รีเซ็ต',
          style: 'destructive',
          onPress: () => {
            resetConnection();
            setAccountId('');
            setApiKey('');
            setAiApiKey('');
            router.replace('/screens/setup');
          },
        },
      ]
    );
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      {/* Connection Status */}
      <View style={styles.statusCard}>
        <Text style={styles.statusTitle}>📡 สถานะการเชื่อมต่อ</Text>
        <View style={styles.statusRow}>
          <View style={[styles.dot, state.isMetaApiConnected ? styles.dotGreen : styles.dotRed]} />
          <Text style={styles.statusLabel}>MetaAPI: {state.isMetaApiConnected ? t('connected') : t('disconnected')}</Text>
        </View>
        <View style={styles.statusRow}>
          <View style={[styles.dot, state.isAiConnected ? styles.dotGreen : styles.dotRed]} />
          <Text style={styles.statusLabel}>
            {t('currentLlm')}: {state.aiProvider.toUpperCase()} - {state.isAiConnected ? t('connected') : t('disconnected')}
          </Text>
        </View>
      </View>

      {/* MetaAPI Settings */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>🔗 {t('metaApiSettings')}</Text>
        <Text style={styles.label}>{t('accountId')}</Text>
        <TextInput
          style={styles.input}
          value={accountId}
          onChangeText={setAccountId}
          placeholder="MetaAPI Account ID"
          placeholderTextColor={Colors.textMuted}
          autoCapitalize="none"
        />
        <Text style={styles.label}>{t('apiKey')}</Text>
        <TextInput
          style={styles.input}
          value={apiKey}
          onChangeText={setApiKey}
          placeholder="MetaAPI API Key (Token)"
          placeholderTextColor={Colors.textMuted}
          autoCapitalize="none"
          secureTextEntry
        />
        <TouchableOpacity
          style={[styles.saveButton, loading === 'meta' && styles.buttonDisabled]}
          onPress={handleSaveMetaApi}
          disabled={loading === 'meta'}
        >
          {loading === 'meta' ? <ActivityIndicator color="#fff" /> : <Text style={styles.saveText}>{t('save')}</Text>}
        </TouchableOpacity>
      </View>

      {/* AI Brain Settings */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>🧠 {t('aiBrainSettings')}</Text>
        <Text style={styles.label}>{t('selectAiProvider')}</Text>
        {AI_PROVIDERS.map(p => (
          <TouchableOpacity
            key={p.id}
            style={[styles.providerRow, selectedProvider === p.id && styles.providerSelected]}
            onPress={() => setSelectedProvider(p.id)}
          >
            <View style={[styles.radio, selectedProvider === p.id && styles.radioSelected]}>
              {selectedProvider === p.id && <View style={styles.radioInner} />}
            </View>
            <Text style={styles.providerName}>{p.name}</Text>
          </TouchableOpacity>
        ))}
        {selectedProvider !== 'kanutsananfx' && (
          <>
            <Text style={styles.label}>{t('apiKey')}</Text>
            <TextInput
              style={styles.input}
              value={aiApiKey}
              onChangeText={setAiApiKey}
              placeholder={t('apiKeyPlaceholder')}
              placeholderTextColor={Colors.textMuted}
              autoCapitalize="none"
              secureTextEntry
            />
          </>
        )}
        <TouchableOpacity
          style={[styles.saveButton, loading === 'ai' && styles.buttonDisabled]}
          onPress={handleSaveAi}
          disabled={loading === 'ai'}
        >
          {loading === 'ai' ? <ActivityIndicator color="#fff" /> : <Text style={styles.saveText}>{t('save')}</Text>}
        </TouchableOpacity>
      </View>

      {/* Backup & Restore */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>☁️ {t('backup')} / {t('restore')}</Text>
        <TouchableOpacity style={styles.actionButton} onPress={handleBackup}>
          <Ionicons name="cloud-upload-outline" size={20} color={Colors.accentGold} />
          <Text style={styles.actionText}>{t('backupToGDrive')}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton} onPress={handleRestore}>
          <Ionicons name="cloud-download-outline" size={20} color={Colors.accentGold} />
          <Text style={styles.actionText}>{t('restoreFromGDrive')}</Text>
        </TouchableOpacity>
      </View>

      {/* Reset */}
      <TouchableOpacity style={styles.resetButton} onPress={handleReset}>
        <Ionicons name="trash-outline" size={18} color={Colors.error} />
        <Text style={styles.resetText}>รีเซ็ตการเชื่อมต่อทั้งหมด</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors.background },
  content: { padding: Spacing.md },
  statusCard: {
    backgroundColor: Colors.surface, borderRadius: BorderRadius.lg,
    padding: Spacing.md, marginBottom: Spacing.md,
  },
  statusTitle: { color: Colors.text, fontSize: FontSize.lg, fontWeight: 'bold', marginBottom: Spacing.sm },
  statusRow: { flexDirection: 'row', alignItems: 'center', marginBottom: Spacing.xs },
  dot: { width: 8, height: 8, borderRadius: 4, marginRight: Spacing.sm },
  dotGreen: { backgroundColor: Colors.success },
  dotRed: { backgroundColor: Colors.error },
  statusLabel: { color: Colors.textSecondary, fontSize: FontSize.sm },
  section: {
    backgroundColor: Colors.surface, borderRadius: BorderRadius.lg,
    padding: Spacing.md, marginBottom: Spacing.md,
  },
  sectionTitle: { color: Colors.text, fontSize: FontSize.lg, fontWeight: 'bold', marginBottom: Spacing.md },
  label: { color: Colors.textSecondary, fontSize: FontSize.sm, marginBottom: Spacing.xs, marginTop: Spacing.sm },
  input: {
    backgroundColor: Colors.inputBg, borderRadius: BorderRadius.sm,
    padding: Spacing.md, color: Colors.text, fontSize: FontSize.md,
    borderWidth: 1, borderColor: Colors.border,
  },
  saveButton: {
    backgroundColor: Colors.accent, borderRadius: BorderRadius.sm,
    padding: Spacing.md, alignItems: 'center', marginTop: Spacing.md,
  },
  buttonDisabled: { opacity: 0.5 },
  saveText: { color: '#fff', fontSize: FontSize.md, fontWeight: 'bold' },
  providerRow: {
    flexDirection: 'row', alignItems: 'center',
    paddingVertical: Spacing.sm, paddingHorizontal: Spacing.sm,
    borderRadius: BorderRadius.sm, marginBottom: Spacing.xs,
  },
  providerSelected: { backgroundColor: Colors.inputBg },
  radio: {
    width: 18, height: 18, borderRadius: 9, borderWidth: 2,
    borderColor: Colors.textMuted, alignItems: 'center', justifyContent: 'center', marginRight: Spacing.sm,
  },
  radioSelected: { borderColor: Colors.accentGold },
  radioInner: { width: 8, height: 8, borderRadius: 4, backgroundColor: Colors.accentGold },
  providerName: { color: Colors.text, fontSize: FontSize.md },
  actionButton: {
    flexDirection: 'row', alignItems: 'center',
    backgroundColor: Colors.inputBg, borderRadius: BorderRadius.sm,
    padding: Spacing.md, marginBottom: Spacing.sm,
  },
  actionText: { color: Colors.text, fontSize: FontSize.md, marginLeft: Spacing.md },
  resetButton: {
    flexDirection: 'row', alignItems: 'center', justifyContent: 'center',
    padding: Spacing.md, marginTop: Spacing.md,
  },
  resetText: { color: Colors.error, fontSize: FontSize.md, marginLeft: Spacing.sm },
});

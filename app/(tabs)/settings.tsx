import React, { useState } from 'react';
import {
  View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView,
  Alert, ActivityIndicator, Modal, FlatList,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { useApp, AiProvider } from '../context/AppContext';
import { SUPPORTED_LANGUAGES } from '../i18n/translations';
import { Colors, FontSize, Spacing, BorderRadius } from '../constants/theme';

const AI_PROVIDERS: { id: AiProvider; name: string }[] = [
  { id: 'kanutsananfx', name: 'KanutsananFX (Built-in)' },
  { id: 'openai', name: 'OpenAI' },
  { id: 'anthropic', name: 'Anthropic' },
  { id: 'gemini', name: 'Google Gemini' },
  { id: 'grok', name: 'Grok' },
  { id: 'perplexity', name: 'Perplexity' },
  { id: 'openrouter', name: 'OpenRouter' },
];

export default function SettingsScreen() {
  const router = useRouter();
  const { state, updateMetaApi, updateAiProvider, resetConnection, setLocale, t } = useApp();

  const [accountId, setAccountId] = useState(state.metaApiAccountId);
  const [apiKey, setApiKey] = useState(state.metaApiKey);
  const [selectedProvider, setSelectedProvider] = useState<AiProvider>(state.aiProvider);
  const [aiApiKey, setAiApiKey] = useState(state.aiApiKey);
  const [loading, setLoading] = useState<string | null>(null);
  const [showLanguages, setShowLanguages] = useState(false);

  const currentLanguage = SUPPORTED_LANGUAGES.find(lang => lang.code === state.locale) || SUPPORTED_LANGUAGES[0];

  const handleSaveMetaApi = async () => {
    setLoading('meta');
    const success = await updateMetaApi(accountId.trim(), apiKey.trim());
    setLoading(null);
    Alert.alert(success ? `✅ ${t('success')}` : `❌ ${t('error')}`, success ? t('connectionSuccess') : t('connectionFailed'));
  };

  const handleSaveAi = async () => {
    setLoading('ai');
    const success = await updateAiProvider(selectedProvider, aiApiKey.trim());
    setLoading(null);
    Alert.alert(success ? `✅ ${t('success')}` : `❌ ${t('error')}`, success ? t('connectionSuccess') : t('connectionFailed'));
  };

  const handleBackup = () => {
    Alert.alert(`☁️ ${t('backup')}`, t('backupComingSoon'), [{ text: t('ok') }]);
  };

  const handleRestore = () => {
    Alert.alert(`☁️ ${t('restore')}`, t('restoreComingSoon'), [{ text: t('ok') }]);
  };

  const handleReset = () => {
    Alert.alert(
      `⚠️ ${t('resetConnection')}`,
      t('resetWarning'),
      [
        { text: t('cancel'), style: 'cancel' },
        {
          text: t('reset'),
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

  const handleSelectLanguage = (code: string) => {
    setLocale(code);
    setShowLanguages(false);
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <View style={styles.statusCard}>
        <Text style={styles.statusTitle}>📡 {t('connectionStatus')}</Text>
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

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>🌐 {t('language')}</Text>
        <TouchableOpacity style={styles.languageSelector} onPress={() => setShowLanguages(true)}>
          <View style={styles.languageInfo}>
            <Text style={styles.languagePrimary}>{currentLanguage.nativeName}</Text>
            <Text style={styles.languageSecondary}>{currentLanguage.englishName}</Text>
          </View>
          <Ionicons name="chevron-forward" size={20} color={Colors.textSecondary} />
        </TouchableOpacity>
      </View>

      <Modal visible={showLanguages} animationType="slide" transparent={true}>
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalTitle}>{t('selectLanguage')}</Text>
              <TouchableOpacity onPress={() => setShowLanguages(false)}>
                <Ionicons name="close" size={24} color={Colors.text} />
              </TouchableOpacity>
            </View>
            <FlatList
              data={SUPPORTED_LANGUAGES}
              keyExtractor={(item) => item.code}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={[styles.languageRow, state.locale === item.code && styles.languageSelected]}
                  onPress={() => handleSelectLanguage(item.code)}
                >
                  <View style={styles.languageInfo}>
                    <Text style={styles.languagePrimary}>{item.nativeName}</Text>
                    <Text style={styles.languageSecondary}>{item.englishName}</Text>
                  </View>
                  {state.locale === item.code && <Ionicons name="checkmark" size={20} color={Colors.accentGold} />}
                </TouchableOpacity>
              )}
            />
          </View>
        </View>
      </Modal>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>🔗 {t('metaApiSettings')}</Text>
        <Text style={styles.label}>{t('accountId')}</Text>
        <TextInput
          style={styles.input}
          value={accountId}
          onChangeText={setAccountId}
          placeholder={t('accountId')}
          placeholderTextColor={Colors.textMuted}
          autoCapitalize="none"
        />
        <Text style={styles.label}>{t('apiKey')}</Text>
        <TextInput
          style={styles.input}
          value={apiKey}
          onChangeText={setApiKey}
          placeholder={t('apiKey')}
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

      <TouchableOpacity style={styles.resetButton} onPress={handleReset}>
        <Ionicons name="trash-outline" size={18} color={Colors.error} />
        <Text style={styles.resetText}>{t('resetConnection')}</Text>
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
  languageSelector: {
    flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between',
    backgroundColor: Colors.inputBg, borderRadius: BorderRadius.sm,
    padding: Spacing.md, borderWidth: 1, borderColor: Colors.border,
  },
  languageInfo: { flex: 1 },
  languagePrimary: { color: Colors.text, fontSize: FontSize.md, fontWeight: '600' },
  languageSecondary: { color: Colors.textSecondary, fontSize: FontSize.sm, marginTop: 2 },
  modalOverlay: {
    flex: 1, backgroundColor: 'rgba(0,0,0,0.5)', justifyContent: 'flex-end',
  },
  modalContent: {
    backgroundColor: Colors.surface, borderTopLeftRadius: BorderRadius.lg, borderTopRightRadius: BorderRadius.lg,
    height: '80%', padding: Spacing.md,
  },
  modalHeader: {
    flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between',
    marginBottom: Spacing.md, paddingBottom: Spacing.sm, borderBottomWidth: 1, borderBottomColor: Colors.border,
  },
  modalTitle: { color: Colors.text, fontSize: FontSize.lg, fontWeight: 'bold' },
  languageRow: {
    flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between',
    padding: Spacing.md, borderBottomWidth: 1, borderBottomColor: Colors.border,
  },
  languageSelected: { backgroundColor: Colors.inputBg },
});

import React, { useState } from 'react';
import {
  View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView,
  Alert, ActivityIndicator, KeyboardAvoidingView, Platform,
} from 'react-native';
import { useRouter } from 'expo-router';
import { useApp, AiProvider } from '../context/AppContext';
import { Colors, FontSize, Spacing, BorderRadius } from '../constants/theme';

const AI_PROVIDERS: { id: AiProvider; name: string; desc: string }[] = [
  { id: 'kanutsananfx', name: 'KanutsananFX', desc: 'Built-in LLM (No API Key needed)' },
  { id: 'openai', name: 'OpenAI', desc: 'GPT-4o-mini' },
  { id: 'anthropic', name: 'Anthropic', desc: 'Claude 3 Haiku' },
  { id: 'gemini', name: 'Google Gemini', desc: 'Gemini Pro' },
  { id: 'grok', name: 'Grok', desc: 'Grok-2 by xAI' },
  { id: 'perplexity', name: 'Perplexity', desc: 'Llama 3.1 Sonar' },
  { id: 'openrouter', name: 'OpenRouter', desc: 'Auto Model Selection' },
];

export default function SetupScreen() {
  const router = useRouter();
  const { updateMetaApi, updateAiProvider, t } = useApp();

  const [step, setStep] = useState<1 | 2>(1);
  const [accountId, setAccountId] = useState('');
  const [apiKey, setApiKey] = useState('');
  const [selectedProvider, setSelectedProvider] = useState<AiProvider>('kanutsananfx');
  const [aiApiKey, setAiApiKey] = useState('');
  const [loading, setLoading] = useState(false);

  const handleMetaApiConnect = async () => {
    if (!accountId.trim() || !apiKey.trim()) {
      Alert.alert(t('warning'), t('pleaseSetup'));
      return;
    }
    setLoading(true);
    const success = await updateMetaApi(accountId.trim(), apiKey.trim());
    setLoading(false);
    if (success) {
      setStep(2);
    } else {
      Alert.alert(
        t('connectionFailed'),
        t('connectionFailedDesc'),
        [
          { text: t('retry'), style: 'cancel' },
          { text: t('skipSetup'), onPress: () => setStep(2) },
        ]
      );
    }
  };

  const handleAiConnect = async () => {
    if (selectedProvider !== 'kanutsananfx' && !aiApiKey.trim()) {
      Alert.alert(t('warning'), t('pleaseEnterAiKey'));
      return;
    }
    setLoading(true);
    const success = await updateAiProvider(selectedProvider, aiApiKey.trim());
    setLoading(false);
    if (success) {
      router.replace('/(tabs)/chat');
    } else {
      Alert.alert(t('error'), t('connectionFailed'));
    }
  };

  const handleSkipToGuide = () => {
    router.replace('/(tabs)/guide');
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <ScrollView contentContainerStyle={styles.scroll} keyboardShouldPersistTaps="handled">
        <Text style={styles.logo}>📊</Text>
        <Text style={styles.title}>KanutsananFX</Text>
        <Text style={styles.stepIndicator}>
          {t('setupStep')} {step} / 2
        </Text>

        {step === 1 ? (
          <View style={styles.card}>
            <Text style={styles.cardTitle}>{t('step1MetaApi')}</Text>
            <Text style={styles.cardDesc}>{t('setupMetaApiDesc')}</Text>

            <Text style={styles.label}>{t('accountId')}</Text>
            <TextInput
              style={styles.input}
              value={accountId}
              onChangeText={setAccountId}
              placeholder={t('accountIdPlaceholder')}
              placeholderTextColor={Colors.textMuted}
              autoCapitalize="none"
            />

            <Text style={styles.label}>{t('apiKey')} (Token)</Text>
            <TextInput
              style={styles.input}
              value={apiKey}
              onChangeText={setApiKey}
              placeholder={t('apiKeyPlaceholder')}
              placeholderTextColor={Colors.textMuted}
              autoCapitalize="none"
              secureTextEntry
            />

            <TouchableOpacity
              style={[styles.button, loading && styles.buttonDisabled]}
              onPress={handleMetaApiConnect}
              disabled={loading}
            >
              {loading ? (
                <ActivityIndicator color="#fff" />
              ) : (
                <Text style={styles.buttonText}>{t('connectMetaApi')}</Text>
              )}
            </TouchableOpacity>

            <TouchableOpacity style={styles.linkButton} onPress={handleSkipToGuide}>
              <Text style={styles.linkText}>{t('viewGuide')}</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <View style={styles.card}>
            <Text style={styles.cardTitle}>{t('step2AiBrain')}</Text>
            <Text style={styles.cardDesc}>{t('setupAiBrainDesc')}</Text>

            {AI_PROVIDERS.map(provider => (
              <TouchableOpacity
                key={provider.id}
                style={[
                  styles.providerItem,
                  selectedProvider === provider.id && styles.providerSelected,
                ]}
                onPress={() => setSelectedProvider(provider.id)}
              >
                <View style={styles.providerRadio}>
                  <View style={[
                    styles.radioOuter,
                    selectedProvider === provider.id && styles.radioOuterSelected,
                  ]}>
                    {selectedProvider === provider.id && <View style={styles.radioInner} />}
                  </View>
                  <View style={styles.providerInfo}>
                    <Text style={styles.providerName}>{provider.name}</Text>
                    <Text style={styles.providerDesc}>{provider.desc}</Text>
                  </View>
                </View>
              </TouchableOpacity>
            ))}

            {selectedProvider !== 'kanutsananfx' && (
              <>
                <Text style={styles.label}>{t('apiKey')}</Text>
                <TextInput
                  style={styles.input}
                  value={aiApiKey}
                  onChangeText={setAiApiKey}
                  placeholder={`${AI_PROVIDERS.find(p => p.id === selectedProvider)?.name} ${t('apiKey')}`}
                  placeholderTextColor={Colors.textMuted}
                  autoCapitalize="none"
                  secureTextEntry
                />
              </>
            )}

            <TouchableOpacity
              style={[styles.button, loading && styles.buttonDisabled]}
              onPress={handleAiConnect}
              disabled={loading}
            >
              {loading ? (
                <ActivityIndicator color="#fff" />
              ) : (
                <Text style={styles.buttonText}>{t('connectAiBrain')}</Text>
              )}
            </TouchableOpacity>

            <TouchableOpacity style={styles.linkButton} onPress={() => setStep(1)}>
              <Text style={styles.linkText}>{t('backToMetaApi')}</Text>
            </TouchableOpacity>
          </View>
        )}
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors.background },
  scroll: { padding: Spacing.lg, paddingTop: Spacing.xxl + 20, alignItems: 'center' },
  logo: { fontSize: 60, marginBottom: Spacing.sm },
  title: { fontSize: FontSize.title, fontWeight: 'bold', color: Colors.accentGold, marginBottom: Spacing.sm },
  stepIndicator: { fontSize: FontSize.md, color: Colors.textSecondary, marginBottom: Spacing.lg },
  card: {
    backgroundColor: Colors.surface,
    borderRadius: BorderRadius.lg,
    padding: Spacing.lg,
    width: '100%',
    maxWidth: 500,
  },
  cardTitle: { fontSize: FontSize.xl, fontWeight: 'bold', color: Colors.text, marginBottom: Spacing.sm },
  cardDesc: { fontSize: FontSize.md, color: Colors.textSecondary, marginBottom: Spacing.lg, lineHeight: 22 },
  label: { fontSize: FontSize.md, color: Colors.textSecondary, marginBottom: Spacing.xs, marginTop: Spacing.md },
  input: {
    backgroundColor: Colors.inputBg,
    borderRadius: BorderRadius.sm,
    padding: Spacing.md,
    color: Colors.text,
    fontSize: FontSize.md,
    borderWidth: 1,
    borderColor: Colors.border,
  },
  button: {
    backgroundColor: Colors.accent,
    borderRadius: BorderRadius.sm,
    padding: Spacing.md,
    alignItems: 'center',
    marginTop: Spacing.lg,
  },
  buttonDisabled: { opacity: 0.6 },
  buttonText: { color: Colors.text, fontSize: FontSize.lg, fontWeight: 'bold' },
  linkButton: { alignItems: 'center', marginTop: Spacing.lg, padding: Spacing.sm },
  linkText: { color: Colors.accentGold, fontSize: FontSize.md },
  providerItem: {
    backgroundColor: Colors.inputBg,
    borderRadius: BorderRadius.sm,
    padding: Spacing.md,
    marginBottom: Spacing.sm,
    borderWidth: 1,
    borderColor: Colors.border,
  },
  providerSelected: { borderColor: Colors.accentGold },
  providerRadio: { flexDirection: 'row', alignItems: 'center' },
  radioOuter: {
    width: 20, height: 20, borderRadius: 10, borderWidth: 2,
    borderColor: Colors.textMuted, alignItems: 'center', justifyContent: 'center', marginRight: Spacing.md,
  },
  radioOuterSelected: { borderColor: Colors.accentGold },
  radioInner: { width: 10, height: 10, borderRadius: 5, backgroundColor: Colors.accentGold },
  providerInfo: { flex: 1 },
  providerName: { fontSize: FontSize.md, color: Colors.text, fontWeight: 'bold' },
  providerDesc: { fontSize: FontSize.sm, color: Colors.textMuted, marginTop: 2 },
});

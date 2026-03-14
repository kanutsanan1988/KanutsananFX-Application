import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useApp } from '../context/AppContext';
import { Colors, FontSize, Spacing, BorderRadius } from '../constants/theme';

type GuideSection = 'menu' | 'metaapi' | 'aiprovider' | 'skills' | 'commands';

export default function GuideScreen() {
  const { t } = useApp();
  const [activeGuide, setActiveGuide] = useState<GuideSection>('menu');

  const GUIDES: Record<string, { titleKey: string; icon: string; contentKey: string }> = {
    metaapi: {
      titleKey: 'guideMetaApi',
      icon: 'cloud-outline',
      contentKey: 'guideMetaApiContent',
    },
    aiprovider: {
      titleKey: 'guideAiProvider',
      icon: 'hardware-chip-outline',
      contentKey: 'guideAiProviderContent',
    },
    skills: {
      titleKey: 'guideTradingSkills',
      icon: 'construct-outline',
      contentKey: 'guideTradingSkillsContent',
    },
    commands: {
      titleKey: 'guideCommands',
      icon: 'list-outline',
      contentKey: 'guideCommandsContent',
    },
  };

  if (activeGuide !== 'menu') {
    const guide = GUIDES[activeGuide];
    const content = t(guide.contentKey as any) || '';
    return (
      <ScrollView style={styles.container} contentContainerStyle={styles.content}>
        <TouchableOpacity style={styles.backButton} onPress={() => setActiveGuide('menu')}>
          <Ionicons name="arrow-back" size={20} color={Colors.accentGold} />
          <Text style={styles.backText}>{t('back')}</Text>
        </TouchableOpacity>
        <Text style={styles.guideTitle}>{t(guide.titleKey as any)}</Text>
        <View style={styles.guideContent}>
          {content.split('\n').map((line: string, i: number) => {
            if (line.startsWith('# ')) {
              return <Text key={i} style={styles.h1}>{line.replace('# ', '')}</Text>;
            }
            if (line.startsWith('## ')) {
              return <Text key={i} style={styles.h2}>{line.replace('## ', '')}</Text>;
            }
            if (line.startsWith('### ')) {
              return <Text key={i} style={styles.h3}>{line.replace('### ', '')}</Text>;
            }
            if (line.startsWith('- ')) {
              return (
                <View key={i} style={styles.bulletRow}>
                  <Text style={styles.bullet}>•</Text>
                  <Text style={styles.bulletText}>{line.replace('- ', '').replace(/\*\*/g, '')}</Text>
                </View>
              );
            }
            if (line.trim() === '') return <View key={i} style={styles.spacer} />;
            return <Text key={i} style={styles.paragraph}>{line.replace(/\*\*/g, '')}</Text>;
          })}
        </View>
      </ScrollView>
    );
  }

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.pageTitle}>{t('guide')}</Text>
      <Text style={styles.pageDesc}>{t('selectGuide')}</Text>

      {Object.entries(GUIDES).map(([key, guide]) => (
        <TouchableOpacity
          key={key}
          style={styles.guideCard}
          onPress={() => setActiveGuide(key as GuideSection)}
        >
          <Ionicons name={guide.icon as any} size={28} color={Colors.accentGold} />
          <View style={styles.guideCardText}>
            <Text style={styles.guideCardTitle}>{t(guide.titleKey as any)}</Text>
          </View>
          <Ionicons name="chevron-forward" size={20} color={Colors.textMuted} />
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors.background },
  content: { padding: Spacing.md },
  pageTitle: { color: Colors.text, fontSize: FontSize.xxl, fontWeight: 'bold', marginBottom: Spacing.xs },
  pageDesc: { color: Colors.textSecondary, fontSize: FontSize.md, marginBottom: Spacing.lg },
  guideCard: {
    flexDirection: 'row', alignItems: 'center',
    backgroundColor: Colors.surface, borderRadius: BorderRadius.lg,
    padding: Spacing.md, marginBottom: Spacing.sm,
  },
  guideCardText: { flex: 1, marginLeft: Spacing.md },
  guideCardTitle: { color: Colors.text, fontSize: FontSize.lg, fontWeight: '600' },
  backButton: {
    flexDirection: 'row', alignItems: 'center', marginBottom: Spacing.md,
    padding: Spacing.sm,
  },
  backText: { color: Colors.accentGold, marginLeft: Spacing.xs, fontSize: FontSize.md },
  guideTitle: { color: Colors.accentGold, fontSize: FontSize.xxl, fontWeight: 'bold', marginBottom: Spacing.lg },
  guideContent: {},
  h1: { color: Colors.text, fontSize: FontSize.xl, fontWeight: 'bold', marginBottom: Spacing.md, marginTop: Spacing.md },
  h2: { color: Colors.accentGold, fontSize: FontSize.lg, fontWeight: 'bold', marginBottom: Spacing.sm, marginTop: Spacing.md },
  h3: { color: Colors.text, fontSize: FontSize.md, fontWeight: 'bold', marginBottom: Spacing.xs, marginTop: Spacing.sm },
  paragraph: { color: Colors.textSecondary, fontSize: FontSize.md, lineHeight: 24, marginBottom: Spacing.xs },
  bulletRow: { flexDirection: 'row', marginBottom: Spacing.xs, paddingLeft: Spacing.md },
  bullet: { color: Colors.accentGold, fontSize: FontSize.md, marginRight: Spacing.sm, lineHeight: 24 },
  bulletText: { color: Colors.textSecondary, fontSize: FontSize.md, lineHeight: 24, flex: 1 },
  spacer: { height: Spacing.sm },
});

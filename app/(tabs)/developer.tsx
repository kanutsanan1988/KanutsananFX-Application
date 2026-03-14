import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Linking } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Colors, FontSize, Spacing, BorderRadius } from '../constants/theme';

const DEVELOPER_LINKS = [
  {
    title: 'พูดคุยกับผู้พัฒนา "เงินน่ารัก AI"',
    icon: 'chatbubble-ellipses',
    url: 'https://medium.com/@kanutsanan.pongpanna/%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B9%80%E0%B8%82%E0%B9%89%E0%B8%B2%E0%B9%83%E0%B8%8A%E0%B9%89%E0%B8%87%E0%B8%B2%E0%B8%99-lovemoneyai-on-chat-gpt-173ed16f983b',
    color: '#00ab6c',
  },
  {
    title: 'เงินน่ารัก AI "LoveMoneyAI on Chat GPT"',
    icon: 'sparkles',
    url: 'https://chatgpt.com/g/g-68d289535dec81919445deb9830f2d8e-kanutsanan-pongpanna',
    color: '#10a37f',
  },
  {
    title: 'ช่อง YouTube "เงินน่ารัก Official"',
    icon: 'logo-youtube',
    url: 'https://youtube.com/@lovemoneythofficial',
    color: '#ff0000',
  },
  {
    title: 'เพจ "เงินน่ารัก"',
    icon: 'logo-facebook',
    url: 'https://www.facebook.com/LoveMoneyTH',
    color: '#1877f2',
  },
  {
    title: 'คัมภีร์โลกาธิบดี',
    icon: 'book',
    url: 'https://www.facebook.com/story.php?story_fbid=122154015602929361&id=61577880854511',
    color: '#8b5cf6',
  },
  {
    title: 'สวนสาระธรรมวาสนาบารมี',
    icon: 'leaf',
    url: 'https://www.facebook.com/suansaradhamma',
    color: '#22c55e',
  },
  {
    title: 'กิจกรรมสวนสาระธรรมวาสนาบารมี',
    icon: 'calendar',
    url: 'https://www.facebook.com/profile.php?id=61577880854511',
    color: '#f59e0b',
  },
  {
    title: 'กลุ่มค้าข้าวออนไลน์',
    icon: 'storefront',
    url: 'https://www.facebook.com/groups/788560863379069/',
    color: '#ef4444',
  },
  {
    title: 'กลุ่มค้าขายหญ้าแพงโกล่า',
    icon: 'leaf',
    url: 'https://www.facebook.com/groups/674215035580516/',
    color: '#84cc16',
  },
  {
    title: 'กลุ่มพลังงานกลั่นน้ำมันใช้เอง',
    icon: 'flash',
    url: 'https://www.facebook.com/groups/803031405350933/',
    color: '#f97316',
  },
  {
    title: 'กลุ่มซื้อขายอสังหาริมทรัพย์',
    icon: 'home',
    url: 'https://www.facebook.com/groups/1475185377018429/',
    color: '#06b6d4',
  },
];

export default function DeveloperScreen() {
  const openLink = (url: string) => {
    Linking.openURL(url).catch(() => {});
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      {/* Developer Profile */}
      <View style={styles.profileCard}>
        <Text style={styles.profileEmoji}>👨‍💻</Text>
        <Text style={styles.profileName}>Kanutsanan Pongpanna</Text>
        <Text style={styles.profileTitle}>ผู้พัฒนา KanutsananFX</Text>
        <Text style={styles.profileBio}>
          พ่อค้าสินค้าเกษตรออนไลน์ | นักพัฒนา AI Trading{'\n'}
          จ.มหาสารคาม | วท.บ. ฟิสิกส์ประยุกต์ ม.มหาสารคาม
        </Text>
        <View style={styles.quoteBox}>
          <Text style={styles.quoteText}>
            "เราจะตั้งอยู่ในความเป็นผู้ไม่เบียดเบียนใคร{'\n'}แต่ก็ไม่ได้เกิดมาให้ใครเหยียบเล่น"
          </Text>
        </View>
      </View>

      {/* Links */}
      <Text style={styles.sectionTitle}>🔗 ลิงก์และช่องทางติดต่อ</Text>

      {DEVELOPER_LINKS.map((link, index) => (
        <TouchableOpacity
          key={index}
          style={styles.linkCard}
          onPress={() => openLink(link.url)}
        >
          <View style={[styles.iconCircle, { backgroundColor: link.color + '20' }]}>
            <Ionicons name={link.icon as any} size={22} color={link.color} />
          </View>
          <Text style={styles.linkTitle}>{link.title}</Text>
          <Ionicons name="open-outline" size={16} color={Colors.textMuted} />
        </TouchableOpacity>
      ))}

      {/* Reference */}
      <View style={styles.referenceCard}>
        <Text style={styles.referenceTitle}>📂 Source Code อ้างอิง</Text>
        <TouchableOpacity
          onPress={() => openLink('https://github.com/kanutsanan1988/Forex-Auto-Trading-MetaAPI-Skill-for-OpenClaw-by-Kanutsanan-Pongpanna')}
        >
          <Text style={styles.referenceLink}>
            Forex Auto Trading MetaAPI Skill for OpenClaw
          </Text>
        </TouchableOpacity>
      </View>

      {/* YouTube References */}
      <View style={styles.referenceCard}>
        <Text style={styles.referenceTitle}>🎬 วิดีโอ YouTube อ้างอิง</Text>
        <TouchableOpacity
          onPress={() => openLink('https://youtu.be/J8xo7WqhGhM?si=DLCzDA7NqOQCZI9T')}
        >
          <Text style={styles.referenceLink}>วิดีโอที่ 1</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => openLink('https://youtu.be/-km3bbGZ-LQ?si=71qGJ68v2712QHDB')}
        >
          <Text style={styles.referenceLink}>วิดีโอที่ 2</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors.background },
  content: { padding: Spacing.md },
  profileCard: {
    backgroundColor: Colors.surface, borderRadius: BorderRadius.lg,
    padding: Spacing.lg, alignItems: 'center', marginBottom: Spacing.lg,
  },
  profileEmoji: { fontSize: 60, marginBottom: Spacing.sm },
  profileName: { color: Colors.accentGold, fontSize: FontSize.xxl, fontWeight: 'bold' },
  profileTitle: { color: Colors.textSecondary, fontSize: FontSize.md, marginTop: Spacing.xs },
  profileBio: { color: Colors.textSecondary, fontSize: FontSize.sm, textAlign: 'center', marginTop: Spacing.sm, lineHeight: 20 },
  quoteBox: {
    backgroundColor: Colors.inputBg, borderRadius: BorderRadius.sm,
    padding: Spacing.md, marginTop: Spacing.md, borderLeftWidth: 3, borderLeftColor: Colors.accentGold,
  },
  quoteText: { color: Colors.textSecondary, fontSize: FontSize.sm, fontStyle: 'italic', lineHeight: 20 },
  sectionTitle: { color: Colors.text, fontSize: FontSize.lg, fontWeight: 'bold', marginBottom: Spacing.md },
  linkCard: {
    flexDirection: 'row', alignItems: 'center',
    backgroundColor: Colors.surface, borderRadius: BorderRadius.lg,
    padding: Spacing.md, marginBottom: Spacing.sm,
  },
  iconCircle: {
    width: 40, height: 40, borderRadius: 20, alignItems: 'center', justifyContent: 'center',
  },
  linkTitle: { flex: 1, color: Colors.text, fontSize: FontSize.md, marginLeft: Spacing.md },
  referenceCard: {
    backgroundColor: Colors.surface, borderRadius: BorderRadius.lg,
    padding: Spacing.md, marginTop: Spacing.md,
  },
  referenceTitle: { color: Colors.text, fontSize: FontSize.md, fontWeight: 'bold', marginBottom: Spacing.sm },
  referenceLink: { color: Colors.accentGold, fontSize: FontSize.sm, marginBottom: Spacing.xs, textDecorationLine: 'underline' },
});

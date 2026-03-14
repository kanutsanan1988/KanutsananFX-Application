import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Colors, FontSize, Spacing, BorderRadius } from '../constants/theme';

type GuideSection = 'menu' | 'metaapi' | 'aiprovider' | 'skills' | 'commands';

const GUIDES: Record<string, { title: string; icon: string; content: string }> = {
  metaapi: {
    title: '📡 คู่มือ MetaAPI',
    icon: 'cloud-outline',
    content: `# คู่มือการสร้างและใช้งาน Account ID + API Key ของ MetaAPI

## ขั้นตอนที่ 1: สมัครบัญชี MetaAPI
1. เข้าไปที่ https://app.metaapi.cloud
2. สมัครบัญชีใหม่ หรือเข้าสู่ระบบ
3. ยืนยันอีเมล

## ขั้นตอนที่ 2: เชื่อมต่อบัญชี MT5
1. กดปุ่ม "New Account" หรือ "Add Account"
2. เลือก "Connect existing account"
3. กรอกข้อมูลบัญชี MT5:
   - ชื่อบัญชี (ตั้งชื่อเอง)
   - Server ของโบรกเกอร์
   - Login (เลขบัญชี MT5)
   - Password (รหัสผ่าน MT5)
4. กด "Create Account"
5. รอระบบเชื่อมต่อ (อาจใช้เวลา 1-2 นาที)

## ขั้นตอนที่ 3: รับ Account ID
1. หลังสร้างบัญชีสำเร็จ จะเห็น Account ID
2. คัดลอก Account ID (เช่น "abc123def456...")
3. นำมากรอกในช่อง "Account ID" ของ KanutsananFX

## ขั้นตอนที่ 4: รับ API Key (Token)
1. ไปที่ Settings → API Access
2. สร้าง API Token ใหม่
3. คัดลอก Token (เช่น "eyJ0eXAi...")
4. นำมากรอกในช่อง "API Key" ของ KanutsananFX

## ข้อควรระวัง
- ห้ามแชร์ API Key กับผู้อื่น
- ห้าม commit API Key ลง Git
- ใช้ 2FA เพื่อความปลอดภัย
- MetaAPI มีแผนฟรีให้ทดลองใช้

## ลิงก์สำคัญ
- MetaAPI Dashboard: https://app.metaapi.cloud
- MetaAPI Docs: https://metaapi.cloud/docs/client/
`,
  },
  aiprovider: {
    title: '🧠 คู่มือผู้ให้บริการ AI',
    icon: 'hardware-chip-outline',
    content: `# คู่มือการเชื่อมต่อผู้ให้บริการ AI

## ตัวเลือกผู้ให้บริการ AI

### 1. KanutsananFX (ค่าเริ่มต้น)
- LLM ภายใน Application
- ไม่ต้องกรอก API Key
- ใช้งานได้ทันที
- เหมาะสำหรับการใช้งานเบื้องต้น

### 2. OpenAI
- เว็บไซต์: https://platform.openai.com
- สมัครบัญชี → API Keys → Create new secret key
- โมเดล: GPT-4o-mini
- ราคา: ตามการใช้งาน

### 3. Anthropic (Claude)
- เว็บไซต์: https://console.anthropic.com
- สมัครบัญชี → API Keys → Create Key
- โมเดล: Claude 3 Haiku
- ราคา: ตามการใช้งาน

### 4. Google Gemini
- เว็บไซต์: https://aistudio.google.com
- สมัครบัญชี → Get API Key
- โมเดล: Gemini Pro
- มีแผนฟรี

### 5. Grok (xAI)
- เว็บไซต์: https://console.x.ai
- สมัครบัญชี → API Keys
- โมเดล: Grok-2

### 6. Perplexity
- เว็บไซต์: https://www.perplexity.ai/settings/api
- สมัครบัญชี → API Keys
- โมเดล: Llama 3.1 Sonar

### 7. OpenRouter
- เว็บไซต์: https://openrouter.ai
- สมัครบัญชี → Keys → Create Key
- เลือกโมเดลอัตโนมัติ
- รองรับหลายโมเดลในที่เดียว

## วิธีกรอก API Key
1. ไปที่ ตั้งค่า → สมอง AI
2. เลือกผู้ให้บริการ
3. กรอก API Key
4. กด "เชื่อมต่อ"
`,
  },
  skills: {
    title: '⚙️ คู่มือปรับแต่งสกิลการเทรด',
    icon: 'construct-outline',
    content: `# คู่มือการปรับแต่งสกิลการเทรด

## ช่วงเวลาเช็คเทรดอัตโนมัติ
ปรับได้ว่าระบบจะเช็คเทรดทุกๆ กี่วินาที/นาที/ชั่วโมง

### ตัวเลือก:
- **30 วินาที** (ค่าเริ่มต้น) - เช็คถี่ที่สุด
- **40-50 วินาที** - เช็คถี่
- **1-10 นาที** - เช็คปานกลาง
- **20-50 นาที** - เช็คน้อย
- **1-5 ชั่วโมง** - เช็คน้อยที่สุด

### คำแนะนำ:
- ตลาดผันผวนมาก → ใช้ 30-50 วินาที
- ตลาดปกติ → ใช้ 1-5 นาที
- เทรดระยะยาว → ใช้ 30 นาที - 1 ชั่วโมง

## การเลือกคู่เทรด
- ดึงรายการคู่เทรดจาก MetaAPI โดยตรง
- แสดงเฉพาะคู่เทรดที่บัญชีของคุณรองรับ
- กดเลือกคู่เทรดที่ต้องการ

### คู่เทรดยอดนิยม:
- **XAUUSD** - ทองคำ
- **EURUSD** - ยูโร/ดอลลาร์
- **GBPUSD** - ปอนด์/ดอลลาร์
- **USDJPY** - ดอลลาร์/เยน

## ระบบวิเคราะห์ STEP 0-9
ระบบจะวิเคราะห์ตลาดตาม 10 ขั้นตอน:
- STEP 0: ตรวจสอบตลาดเปิด/ปิด
- STEP 1: ราคาปัจจุบัน
- STEP 2: วิเคราะห์กราฟ M15 (100 แท่ง)
- STEP 3: คำนวณ SL/TP แบบ Dynamic
- STEP 4: ตรวจสอบ Risk/Reward
- STEP 5: คำนวณ Position Size (กฎ 2%)
- STEP 6: ประเมินความแรงสัญญาณ
- STEP 7: ตรวจสอบทิศทาง SL/TP
- STEP 8: ยืนยัน API
- STEP 9: ตรวจสอบ Position เดิม
`,
  },
  commands: {
    title: '📋 คู่มือเมนูและคำสั่ง',
    icon: 'list-outline',
    content: `# คู่มือเมนูและคำสั่งทั้งหมด

## คำสั่งหลัก 4 คำสั่ง

### 1. เช็คเทรด 🔍
**คำสั่ง:** "เช็คเทรด" / "Check Trade"
- ระบบวิเคราะห์ตลาดตาม STEP 0-9
- แสดงผลการวิเคราะห์: Trend, Signal, Entry, SL, TP, Lot
- ไม่ส่งคำสั่งซื้อขาย (แค่วิเคราะห์)

### 2. อนุมัติเทรด ✅
**คำสั่ง:** "อนุมัติเทรด" / "Approve Trade"
- ต้องเช็คเทรดก่อน
- ส่งคำสั่งซื้อขายตามผลวิเคราะห์
- มีหน้ายืนยันก่อนส่งคำสั่ง

### 3. ตั้งเวลาเทรดอัตโนมัติ ⏰
**คำสั่ง:** "ตั้งเวลาเทรดอัตโนมัติ" / "Set Auto Trade"
- เช็คเทรดอัตโนมัติตามช่วงเวลาที่ตั้ง
- ถ้าเงื่อนไขผ่าน → ส่งคำสั่งซื้อขายอัตโนมัติ
- แจ้งเตือนผ่านหน้าแชท

### 4. ยกเลิกการตั้งเวลาเทรด 🛑
**คำสั่ง:** "ยกเลิกการตั้งเวลาเทรด" / "Cancel Auto Trade"
- หยุดระบบเทรดอัตโนมัติทันที

## เมนูในแอพ

### แชท AI 💬
- พูดคุยกับ AI Agent "KanutsananFX"
- ใช้คำสั่งเทรดผ่านแชท
- สนทนาด้วยเสียง (เวอร์ชันถัดไป)

### เทรด 📊
- ปุ่มคำสั่งเทรดทั้ง 4
- แสดงผลการวิเคราะห์ล่าสุด
- สถานะการเชื่อมต่อ

### ปรับแต่งสกิล ⚙️
- ตั้งช่วงเวลาเช็คอัตโนมัติ
- เลือกคู่เทรด

### คู่มือ 📖
- คู่มือ MetaAPI
- คู่มือผู้ให้บริการ AI
- คู่มือปรับแต่งสกิล
- คู่มือเมนูและคำสั่ง

### ผู้พัฒนา 👤
- ข้อมูลและลิงก์ติดต่อผู้พัฒนา

### ตั้งค่า ⚙️
- MetaAPI Settings
- สมอง AI Settings
- สำรองข้อมูล / กู้คืน
`,
  },
};

export default function GuideScreen() {
  const [activeGuide, setActiveGuide] = useState<GuideSection>('menu');

  if (activeGuide !== 'menu') {
    const guide = GUIDES[activeGuide];
    return (
      <ScrollView style={styles.container} contentContainerStyle={styles.content}>
        <TouchableOpacity style={styles.backButton} onPress={() => setActiveGuide('menu')}>
          <Ionicons name="arrow-back" size={20} color={Colors.accentGold} />
          <Text style={styles.backText}>กลับ</Text>
        </TouchableOpacity>
        <Text style={styles.guideTitle}>{guide.title}</Text>
        <View style={styles.guideContent}>
          {guide.content.split('\n').map((line, i) => {
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
      <Text style={styles.pageTitle}>📖 คู่มือการใช้งาน</Text>
      <Text style={styles.pageDesc}>เลือกคู่มือที่ต้องการอ่าน</Text>

      {Object.entries(GUIDES).map(([key, guide]) => (
        <TouchableOpacity
          key={key}
          style={styles.guideCard}
          onPress={() => setActiveGuide(key as GuideSection)}
        >
          <Ionicons name={guide.icon as any} size={28} color={Colors.accentGold} />
          <View style={styles.guideCardText}>
            <Text style={styles.guideCardTitle}>{guide.title}</Text>
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

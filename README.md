# KanutsananFX - Forex Trading AI Agent Application

**KanutsananFX** เป็นแอปพลิเคชันสำหรับ Android ที่พัฒนาด้วย React Native + Expo โดยมีเป้าหมายเพื่อเป็นผู้ช่วย AI ในการเทรด Forex อัตโนมัติผ่าน MetaAPI

## 🌟 คุณสมบัติหลัก (Features)

1. **AI Chat Agent**: พูดคุยกับ AI Agent ที่สามารถให้คำแนะนำการเทรดและสนทนาธรรมะได้
2. **Trading Commands**:
   - `เช็คเทรด`: วิเคราะห์ตลาดตาม STEP 0-9 และให้คำแนะนำ
   - `อนุมัติเทรด`: ส่งคำสั่งซื้อขายไปยัง MT4/MT5 ผ่าน MetaAPI
   - `ตั้งเวลาเทรดอัตโนมัติ`: ระบบจะเช็คเทรดและส่งคำสั่งซื้อขายอัตโนมัติตามช่วงเวลาที่กำหนด
   - `ยกเลิกการตั้งเวลาเทรด`: หยุดระบบเทรดอัตโนมัติ
3. **MetaAPI Integration**: เชื่อมต่อกับบัญชี MT4/MT5 ได้โดยตรง
4. **Multi-LLM Support**: รองรับผู้ให้บริการ AI หลากหลาย (OpenAI, Anthropic, Gemini, Grok, Perplexity, OpenRouter)
5. **Trading Skills Settings**: ปรับแต่งช่วงเวลาเช็คเทรดและเลือกคู่เทรดได้
6. **Multilingual Support**: รองรับหลายภาษา (เริ่มต้นด้วยภาษาไทยและอังกฤษ)

## 🛠️ เทคโนโลยีที่ใช้ (Tech Stack)

- **Framework**: React Native + Expo
- **Language**: TypeScript
- **Navigation**: Expo Router
- **State Management**: React Context API
- **Storage**: AsyncStorage
- **API Integration**: MetaAPI Cloud, Various LLM APIs

## 🚀 วิธีนำไปพัฒนาต่อ (How to Develop)

### 1. การติดตั้ง (Installation)

```bash
# โคลนโปรเจกต์
git clone https://github.com/kanutsanan1988/KanutsananFX-Application.git
cd KanutsananFX-Application

# ติดตั้ง dependencies
npm install
# หรือ
yarn install
# หรือ
pnpm install
```

### 2. การรันโปรเจกต์ (Running the App)

```bash
# รัน Expo server
npx expo start
```
จากนั้นสามารถใช้แอป Expo Go บนมือถือสแกน QR Code เพื่อทดสอบแอปได้

### 3. การ Build เป็น APK (Building APK)

```bash
# ติดตั้ง EAS CLI
npm install -g eas-cli

# ล็อกอินเข้าสู่ Expo
eas login

# Build สำหรับ Android
eas build --platform android --profile preview
```

## 📚 วิธีใช้งาน (How to Use)

1. **ตั้งค่า MetaAPI**: ไปที่เมนู "ตั้งค่า" กรอก Account ID และ API Key ของ MetaAPI
2. **ตั้งค่า AI**: เลือกผู้ให้บริการ AI และกรอก API Key (หรือใช้ KanutsananFX ที่เป็นค่าเริ่มต้น)
3. **ปรับแต่งสกิล**: ไปที่เมนู "ปรับแต่งสกิล" เพื่อเลือกคู่เทรดและช่วงเวลาเช็คเทรดอัตโนมัติ
4. **เริ่มใช้งาน**: ไปที่เมนู "แชท AI" หรือ "เทรด" เพื่อใช้คำสั่งต่างๆ

## 🔗 อ้างอิง (References)

- **Source Code สกิลต้นฉบับ**: [Forex-Auto-Trading-MetaAPI-Skill-for-OpenClaw-by-Kanutsanan-Pongpanna](https://github.com/kanutsanan1988/Forex-Auto-Trading-MetaAPI-Skill-for-OpenClaw-by-Kanutsanan-Pongpanna)
- **ผู้พัฒนา**: Kanutsanan Pongpanna

## 📄 License

MIT License

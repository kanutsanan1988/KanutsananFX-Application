# KanutsananFX - แอปพลิเคชัน AI Agent สำหรับการเทรด Forex

KanutsananFX เป็นแอปพลิเคชัน AI Agent สำหรับการเทรด Forex ที่พัฒนาขึ้นด้วย **Expo / React Native** เพื่อรองรับการใช้งานทั้งบนแพลตฟอร์ม **iOS และ Android** แอปพลิเคชันนี้ออกแบบมาเพื่อช่วยให้นักเทรดสามารถเข้าถึงข้อมูลและดำเนินการเทรดได้อย่างมีประสิทธิภาพด้วยพลังของปัญญาประดิษฐ์

## คุณสมบัติหลัก

*   **AI Chat Agent:** ตัวแทน AI สำหรับการสนทนาที่สามารถให้ข้อมูลและคำแนะนำเกี่ยวกับการเทรด Forex
*   **4 Trading Commands:** คำสั่งเทรดหลัก 4 รูปแบบเพื่อการดำเนินการที่รวดเร็วและแม่นยำ
*   **MetaAPI Integration:** การเชื่อมต่อกับ MetaAPI เพื่อการเข้าถึงข้อมูลตลาดและการดำเนินการเทรดแบบเรียลไทม์
*   **Multi-LLM Support:** รองรับโมเดลภาษาขนาดใหญ่ (LLM) หลายตัวเพื่อความยืดหยุ่นและความสามารถที่หลากหลาย
*   **Trading Skill Customization:** สามารถปรับแต่งทักษะการเทรดของ AI ได้ตามความต้องการของผู้ใช้
*   **Multilingual UI:** ส่วนต่อประสานผู้ใช้ที่รองรับหลายภาษา
*   **Backup/Restore:** ฟังก์ชันสำรองและกู้คืนข้อมูลเพื่อความปลอดภัยของข้อมูลผู้ใช้
*   **Developer Info:** ข้อมูลสำหรับนักพัฒนา
*   **Guides:** คู่มือการใช้งานและคำแนะนำต่างๆ

## เทคโนโลยีที่ใช้

*   **Framework:** React Native + Expo + TypeScript
*   **Navigation:** Expo Router
*   **State Management:** React Context API
*   **Storage:** AsyncStorage

## การติดตั้ง

ในการติดตั้งและตั้งค่าโปรเจกต์นี้ ให้ทำตามขั้นตอนด้านล่าง:

1.  โคลน repository:

    ```bash
    git clone https://github.com/your-username/KanutsananFX.git
    cd KanutsananFX
    ```

2.  ติดตั้ง dependencies (เลือกอย่างใดอย่างหนึ่ง):

    ```bash
    npm install
    # หรือ
    pnpm install
    ```

## การรันแอปพลิเคชัน

หลังจากติดตั้ง dependencies แล้ว คุณสามารถรันแอปพลิเคชันได้ดังนี้:

*   **เริ่ม Expo development server:**

    ```bash
    npx expo start
    ```

*   **รันบน Android emulator/device:**

    ```bash
    npm run android
    ```

*   **รันบน iOS simulator/device:**

    ```bash
    npm run ios
    ```

## การสร้าง Build สำหรับ Android และ iOS

### สำหรับ Android

*   **สร้าง Android preview APK:**

    ```bash
    npm run build:android:apk
    ```

*   **สร้าง Android production AAB:**

    ```bash
    npm run build:android:production
    ```

### สำหรับ iOS

*   **สร้าง iOS preview build:**

    ```bash
    npm run build:ios
    ```

*   **สร้าง iOS simulator build:**

    ```bash
    npm run build:ios:simulator
    ```

*   **สร้าง iOS production build:**

    ```bash
    npm run build:ios:production
    ```

## วิธีใช้งาน

(เพิ่มคำแนะนำการใช้งานโดยละเอียดที่นี่)

## การรองรับหลายภาษา

แอปพลิเคชัน KanutsananFX รองรับ **42 ภาษา** โดยมีการตรวจจับภาษาของอุปกรณ์โดยอัตโนมัติ ผู้ใช้ยังสามารถเลือกภาษาที่ต้องการได้ด้วยตนเองในส่วนการตั้งค่า (Settings) ภาษาเริ่มต้นสำรอง (fallback language) คือ **ภาษาไทย**

## การอ้างอิง

*   **Original Trading Skill Repository:** [Forex-Auto-Trading-MetaAPI-Skill-for-OpenClaw-by-Kanutsanan-Pongpanna](https://github.com/kanutsanan1988/Forex-Auto-Trading-MetaAPI-Skill-for-OpenClaw-by-Kanutsanan-Pongpanna)

## ใบอนุญาต

โปรเจกต์นี้อยู่ภายใต้ใบอนุญาต MIT License - ดูไฟล์ [LICENSE](LICENSE) สำหรับรายละเอียดเพิ่มเติม

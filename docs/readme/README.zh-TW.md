# KanutsananFX - 外匯交易 AI 代理應用程式

KanutsananFX 是一款先進的外匯交易 AI 代理應用程式，專為 **iOS 和 Android** 平台設計。它利用 **Expo / React Native** 的強大功能，提供無縫且響亮的用戶體驗。該應用程式支援 **42 種語言**，具有設備語言自動檢測和手動語言選擇功能，確保全球用戶都能輕鬆使用。

## 主要功能
*   **AI 聊天代理**: 智慧型 AI 聊天代理，提供交易見解和支援。
*   **4 種交易指令**: 執行買入、賣出、平倉和修改訂單等核心交易操作。
*   **MetaAPI 整合**: 與 MetaAPI 無縫整合，實現可靠的交易執行。
*   **多 LLM 支援**: 支援多種大型語言模型，提供靈活的 AI 互動。
*   **交易技能客製化**: 允許用戶客製化交易技能以適應個人策略。
*   **多語言使用者介面**: 支援 42 種語言，提供直觀的用戶體驗。
*   **備份/還原**: 輕鬆備份和還原應用程式數據。
*   **開發者資訊**: 提供開發者相關資訊和工具。
*   **指南**: 詳細的使用指南和教學。

## 技術棧
*   **框架**: React Native + Expo + TypeScript
*   **導航**: Expo Router
*   **狀態管理**: React Context API
*   **儲存**: AsyncStorage

## 安裝
要開始使用 KanutsananFX，請按照以下步驟操作：

1.  **克隆儲存庫**:
    ```bash
    git clone https://github.com/kanutsanan1988/KanutsananFX.git
    cd KanutsananFX
    ```
2.  **安裝依賴項**:
    ```bash
    npm install
    # 或者使用 pnpm
    pnpm install
    ```

## 運行應用程式
在開發模式下運行應用程式：

```bash
npx expo start
```

然後，您可以使用 Expo Go 應用程式掃描二維碼，或運行以下命令在模擬器/設備上啟動：

```bash
npm run android
npm run ios
```

## Android 和 iOS 建置
### Android
*   **預覽 APK**:
    ```bash
    npm run build:android:apk
    ```
*   **生產 AAB**:
    ```bash
    npm run build:android:production
    ```

### iOS
*   **預覽建置**:
    ```bash
    npm run build:ios
    ```
*   **模擬器建置**:
    ```bash
    npm run build:ios:simulator
    ```
*   **生產建置**:
    ```bash
    npm run build:ios:production
    ```

## 如何使用
1.  啟動應用程式後，您可以透過 AI 聊天代理進行互動。
2.  使用預設的 4 種交易指令執行交易操作。
3.  在設定中客製化您的交易技能和語言偏好。
4.  定期備份您的應用程式數據。

## 多語言支援
KanutsananFX 支援 **42 種語言**，提供無縫的全球用戶體驗。應用程式會自動檢測設備語言，您也可以在設定中手動選擇語言。預設的備用語言是泰語。

## 參考
*   **原始交易技能儲存庫**:
    [https://github.com/kanutsanan1988/Forex-Auto-Trading-MetaAPI-Skill-for-OpenClaw-by-Kanutsanan-Pongpanna](https://github.com/kanutsanan1988/Forex-Auto-Trading-MetaAPI-Skill-for-OpenClaw-by-Kanutsanan-Pongpanna)

## 許可證
[請在此處填寫許可證資訊]

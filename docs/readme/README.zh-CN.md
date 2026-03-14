# KanutsananFX - 外汇交易AI代理应用

## 概述

KanutsananFX 是一款先进的外汇交易 AI 代理应用，旨在通过智能自动化和多语言支持增强您的交易体验。该应用使用 **Expo / React Native** 框架开发，确保在 **iOS 和 Android** 设备上提供无缝的原生体验。

## 主要功能

*   **AI 聊天代理**: 通过直观的 AI 聊天界面与您的交易代理互动。
*   **4 种交易命令**: 支持核心交易操作，包括买入、卖出、平仓和修改订单。
*   **MetaAPI 集成**: 与 MetaAPI 无缝集成，实现可靠的交易执行。
*   **多 LLM 支持**: 灵活支持多种大型语言模型，以实现更智能的交互。
*   **交易技能定制**: 根据您的交易策略定制和优化 AI 代理的技能。
*   **多语言用户界面**: 提供 42 种语言支持，包括设备语言自动检测和在设置中手动选择语言。
*   **备份/恢复**: 轻松备份和恢复您的应用数据和设置。
*   **开发者信息**: 提供详细的开发者信息和贡献指南。
*   **指南**: 全面的用户指南和教程，帮助您充分利用应用。

## 技术栈

*   **项目名称**: KanutsananFX
*   **框架**: React Native + Expo + TypeScript
*   **导航**: Expo Router
*   **状态管理**: React Context API
*   **存储**: AsyncStorage
*   **平台**: iOS 和 Android
*   **语言支持**: 42 种语言
*   **默认备用语言**: 泰语

## 安装

要开始使用 KanutsananFX，请按照以下步骤安装必要的依赖项：

首先，克隆仓库：

```bash
git clone [您的仓库URL]
cd KanutsananFX
```

然后，安装项目依赖项：

```bash
npm install
# 或者使用 pnpm
pnpm install
```

## 运行应用

安装依赖项后，您可以通过以下命令在开发模式下运行应用：

```bash
npx expo start
```

这将启动 Expo 开发服务器。您可以使用 Expo Go 应用扫描二维码在您的设备上运行，或者使用以下命令直接在模拟器/设备上运行：

```bash
npm run android
# 或者
npm run ios
```

## 构建 Android 和 iOS

以下是为 Android 和 iOS 平台构建应用的说明：

### Android 构建

*   **构建 Android 预览 APK**: 用于测试和分发预览版本。

    ```bash
npm run build:android:apk
    ```

*   **构建 Android 生产 AAB**: 用于 Google Play 商店发布。

    ```bash
npm run build:android:production
    ```

### iOS 构建

*   **构建 iOS 预览版本**: 用于测试和分发预览版本。

    ```bash
npm run build:ios
    ```

*   **构建 iOS 模拟器版本**: 用于在 iOS 模拟器上测试。

    ```bash
npm run build:ios:simulator
    ```

*   **构建 iOS 生产版本**: 用于 Apple App Store 发布。

    ```bash
npm run build:ios:production
    ```

## 如何使用

1.  **启动应用**: 在您的 iOS 或 Android 设备上启动 KanutsananFX 应用。
2.  **配置 AI 代理**: 按照应用内指南配置您的 AI 聊天代理和交易参数。
3.  **连接 MetaAPI**: 输入您的 MetaAPI 凭据以连接到交易账户。
4.  **定制交易技能**: 根据您的交易偏好定制 AI 代理的交易技能。
5.  **开始交易**: 通过 AI 聊天界面或预设命令开始自动化交易。
6.  **管理语言**: 在设置中选择您偏好的语言，或使用设备自动检测的语言。

## 多语言支持

KanutsananFX 支持 **42 种语言**，旨在为全球用户提供服务。应用会自动检测您设备的语言并相应地调整界面。您也可以随时在应用的设置菜单中手动选择您偏好的语言。如果所选语言不可用，应用将默认回退到泰语。

## 参考

本项目的交易技能基于以下原始仓库：

*   [Forex-Auto-Trading-MetaAPI-Skill-for-OpenClaw-by-Kanutsanan-Pongpanna](https://github.com/kanutsanan1988/Forex-Auto-Trading-MetaAPI-Skill-for-OpenClaw-by-Kanutsanan-Pongpanna)

## 许可证

[在此处添加您的许可证信息，例如 MIT 或 Apache 2.0]

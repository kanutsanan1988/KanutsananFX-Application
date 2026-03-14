# KanutsananFX - Forex Trading AI Agent Application

## Overview

KanutsananFX is a powerful Forex trading AI Agent application designed for both **iOS and Android** platforms. Built with **Expo / React Native**, it offers a seamless cross-platform experience, allowing traders to manage their strategies and interact with an AI agent on their preferred mobile device.

This application boasts extensive multilingual support, accommodating **42 languages** with intelligent device-language auto-detection. Users also have the flexibility to manually select their preferred language within the app's Settings.

## Key Features

*   **AI Chat Agent**: Interact with an intelligent AI agent for trading insights, strategy development, and market analysis.
*   **4 Trading Commands**: Execute essential trading operations directly through the app.
*   **MetaAPI Integration**: Seamlessly connect with MetaAPI for real-time market data and trade execution.
*   **Multi-LLM Support**: Leverage various Large Language Models to enhance AI agent capabilities.
*   **Trading Skill Customization**: Personalize and fine-tune trading skills to match individual strategies and preferences.
*   **Multilingual UI**: Enjoy a fully localized user interface in 42 different languages.
*   **Backup/Restore**: Securely back up and restore your application data and settings.
*   **Developer Info & Guides**: Access comprehensive information and guides for developers and advanced users.

## Tech Stack

*   **Project Name**: KanutsananFX
*   **Framework**: React Native + Expo + TypeScript
*   **Navigation**: Expo Router
*   **State Management**: React Context API
*   **Local Storage**: AsyncStorage
*   **Supported Platforms**: iOS and Android
*   **Language Support**: 42 languages
*   **Default Fallback Language**: Thai

## Installation

To get started with KanutsananFX development, follow these steps:

1.  Clone the repository:

    ```bash
    git clone [repository-url]
    cd KanutsananFX
    ```

2.  Install dependencies using npm:

    ```bash
    npm install
    ```

    Or using pnpm:

    ```bash
    pnpm install
    ```

## Running the App

To run the application in development mode:

1.  Start the Expo development server:

    ```bash
    npx expo start
    ```

2.  Run on Android emulator/device:

    ```bash
    npm run android
    ```

3.  Run on iOS simulator/device:

    ```bash
    npm run ios
    ```

## Building for Android and iOS

Here are the commands to build the application for various platforms and purposes:

*   **General Android Build (for preview)**:

    ```bash
    npm run build:android
    ```

*   **Android Preview APK**: Generates an APK file for testing on Android devices.

    ```bash
    npm run build:android:apk
    ```

*   **Android Production AAB**: Generates an Android App Bundle (AAB) for production release on Google Play Store.

    ```bash
    npm run build:android:production
    ```

*   **General iOS Build (for preview)**:

    ```bash
    npm run build:ios
    ```

*   **iOS Simulator Build**: Builds the app for the iOS simulator.

    ```bash
    npm run build:ios:simulator
    ```

*   **iOS Production Build**: Builds the app for production release on the Apple App Store.

    ```bash
    npm run build:ios:production
    ```

## How to Use

Upon launching the KanutsananFX application, you will be greeted by an intuitive interface. Navigate through the app to access the AI Chat Agent, where you can input queries, receive trading advice, and execute commands. Utilize the Settings menu to customize your experience, including language preferences and trading skill configurations. The integrated MetaAPI ensures that your trading actions are reflected in real-time.

## Multilingual Support

KanutsananFX is designed for a global audience, offering support for **42 languages**. The application intelligently detects your device's language settings and automatically adjusts the UI accordingly. If you wish to change the language, simply navigate to the in-app Settings and select your preferred language from the available options. The default fallback language, if a specific translation is unavailable, is Thai.

## References

This project leverages concepts and integrations from the original trading skill repository:

*   [Forex-Auto-Trading-MetaAPI-Skill-for-OpenClaw-by-Kanutsanan-Pongpanna](https://github.com/kanutsanan1988/Forex-Auto-Trading-MetaAPI-Skill-for-OpenClaw-by-Kanutsanan-Pongpanna)

## License

This project is licensed under the MIT License - see the LICENSE file for details.

# KanutsananFX - Forex Trading AI Agent Application

> Multilingual documentation is available in 42 languages. Select your preferred README below.


| Language | File |
|---|---|
| Thai | [README.th.md](docs/readme/README.th.md) |
| English (default) | [README.md](docs/readme/README.md) |
| Chinese (Simplified) | [README.zh-CN.md](docs/readme/README.zh-CN.md) |
| Chinese (Traditional) | [README.zh-TW.md](docs/readme/README.zh-TW.md) |
| Japanese | [README.ja.md](docs/readme/README.ja.md) |
| Korean | [README.ko.md](docs/readme/README.ko.md) |
| Vietnamese | [README.vi.md](docs/readme/README.vi.md) |
| Indonesian | [README.id.md](docs/readme/README.id.md) |
| Malay | [README.ms.md](docs/readme/README.ms.md) |
| Filipino | [README.fil.md](docs/readme/README.fil.md) |
| Hindi | [README.hi.md](docs/readme/README.hi.md) |
| Bengali | [README.bn.md](docs/readme/README.bn.md) |
| Tamil | [README.ta.md](docs/readme/README.ta.md) |
| Telugu | [README.te.md](docs/readme/README.te.md) |
| Kannada | [README.kn.md](docs/readme/README.kn.md) |
| Malayalam | [README.ml.md](docs/readme/README.ml.md) |
| Marathi | [README.mr.md](docs/readme/README.mr.md) |
| Gujarati | [README.gu.md](docs/readme/README.gu.md) |
| Punjabi | [README.pa.md](docs/readme/README.pa.md) |
| Urdu | [README.ur.md](docs/readme/README.ur.md) |
| Arabic | [README.ar.md](docs/readme/README.ar.md) |
| Hebrew | [README.he.md](docs/readme/README.he.md) |
| Persian/Farsi | [README.fa.md](docs/readme/README.fa.md) |
| Turkish | [README.tr.md](docs/readme/README.tr.md) |
| Russian | [README.ru.md](docs/readme/README.ru.md) |
| Ukrainian | [README.uk.md](docs/readme/README.uk.md) |
| Polish | [README.pl.md](docs/readme/README.pl.md) |
| Czech | [README.cs.md](docs/readme/README.cs.md) |
| Romanian | [README.ro.md](docs/readme/README.ro.md) |
| Hungarian | [README.hu.md](docs/readme/README.hu.md) |
| German | [README.de.md](docs/readme/README.de.md) |
| French | [README.fr.md](docs/readme/README.fr.md) |
| Spanish | [README.es.md](docs/readme/README.es.md) |
| Portuguese | [README.pt.md](docs/readme/README.pt.md) |
| Italian | [README.it.md](docs/readme/README.it.md) |
| Dutch | [README.nl.md](docs/readme/README.nl.md) |
| Swedish | [README.sv.md](docs/readme/README.sv.md) |
| Norwegian | [README.no.md](docs/readme/README.no.md) |
| Danish | [README.da.md](docs/readme/README.da.md) |
| Finnish | [README.fi.md](docs/readme/README.fi.md) |
| Sinhala | [README.si.md](docs/readme/README.si.md) |
| Nepali | [README.ne.md](docs/readme/README.ne.md) |

---
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
    git clone https://github.com/kanutsanan1988/KanutsananFX-Application.git
    cd KanutsananFX
    ```

2.  Install dependencies using npm:

    ```bash
    npm install
    ```

## Running the App

To run the application in development mode:

1.  Start the Expo development server:

    ```bash
    npx expo start
    ```

2.  Run on Android emulator/device:
    Press `a` in the terminal.

3.  Run on iOS simulator/device:
    Press `i` in the terminal.

## Detailed Build Instructions (Android & iOS)

This project uses **Expo Application Services (EAS)** for building installable binaries. You do NOT need a paid account to build for Android (APK) or iOS (Simulator).

### 1. Prerequisites
- Install EAS CLI: `npm install -g eas-cli`
- Create a free account at [expo.dev](https://expo.dev)
- Login: `eas login`

### 2. Build for Android (.APK)
To generate a standalone APK file that you can install on any Android phone:

1.  Initialize EAS project: `eas build:configure`
2.  Run the build command:
    ```bash
    eas build --platform android --profile preview
    ```
3.  Wait for the build to complete on Expo's cloud servers.
4.  Once finished, a download link for the `.apk` file will be provided in the terminal and on your Expo dashboard.

### 3. Build for iOS
Building for iOS requires different approaches depending on your goal:

#### A. For iOS Simulator (No Apple Developer Account needed)
1.  Run the build command:
    ```bash
    eas build --platform ios --profile preview --simulator
    ```
2.  Download the resulting `.tar.gz` file.
3.  Extract and drag the `.app` file into your Xcode Simulator.

#### B. For Physical iOS Device (Requires Apple Developer Account)
1.  Run the build command:
    ```bash
    eas build --platform ios --profile preview
    ```
2.  Follow the prompts to sign in to your Apple Developer account and set up credentials.
3.  Install the resulting `.ipa` file via [TestFlight](https://developer.apple.com/testflight/) or ad-hoc distribution.

## How to Use

Upon launching the KanutsananFX application, you will be greeted by an intuitive interface. Navigate through the app to access the AI Chat Agent, where you can input queries, receive trading advice, and execute commands. Utilize the Settings menu to customize your experience, including language preferences and trading skill configurations. The integrated MetaAPI ensures that your trading actions are reflected in real-time.

## Multilingual Support

KanutsananFX is designed for a global audience, offering support for **42 languages**. The application intelligently detects your device's language settings and automatically adjusts the UI accordingly. If you wish to change the language, simply navigate to the in-app Settings and select your preferred language from the available options. The default fallback language, if a specific translation is unavailable, is Thai.

## References

This project leverages concepts and integrations from the original trading skill repository:

*   [Forex-Auto-Trading-MetaAPI-Skill-for-OpenClaw-by-Kanutsanan-Pongpanna](https://github.com/kanutsanan1988/Forex-Auto-Trading-MetaAPI-Skill-for-OpenClaw-by-Kanutsanan-Pongpanna)

## License

This project is licensed under the MIT License - see the LICENSE file for details.

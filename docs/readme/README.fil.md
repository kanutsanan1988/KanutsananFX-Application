# KanutsananFX - Forex Trading AI Agent Application

## Pangkalahatang-ideya

Ang **KanutsananFX** ay isang makabagong application na gumagamit ng AI para sa forex trading, na binuo gamit ang **Expo / React Native** para sa seamless na suporta sa parehong **iOS at Android** platform. Nagtatampok ito ng multilingual na interface na sumusuporta sa **42 wika**, na may awtomatikong pagtukoy ng wika ng device at opsyon para sa manual na pagpili ng wika sa Settings.

## Mga Pangunahing Tampok

*   **AI Chat Agent**: Isang matalinong AI assistant na handang tumulong sa iyong mga pangangailangan sa trading.
*   **4 Trading Commands**: Mga espesyal na command para sa mabilis at epektibong pagpapatupad ng trading.
*   **MetaAPI Integration**: Direktang koneksyon sa MetaAPI para sa real-time na data at pagpapatupad ng trade.
*   **Multi-LLM Support**: Kakayahang gumamit ng iba't ibang Large Language Models para sa pinahusay na AI functionality.
*   **Trading Skill Customization**: I-personalize ang mga kasanayan sa trading ng AI agent upang umayon sa iyong estratehiya.
*   **Multilingual UI**: User interface na sumusuporta sa 42 wika para sa pandaigdigang user base.
*   **Backup/Restore**: Madaling i-backup at i-restore ang iyong data at settings.
*   **Developer Info**: Impormasyon para sa mga developer na gustong mag-ambag o mag-integrate.
*   **Guides**: Komprehensibong gabay para sa paggamit ng application.

## Tech Stack

Ang KanutsananFX ay binuo gamit ang mga sumusunod na teknolohiya:

*   **Framework**: React Native + Expo + TypeScript
*   **Navigation**: Expo Router
*   **State Management**: React Context API
*   **Storage**: AsyncStorage
*   **Platforms**: iOS at Android
*   **Language Support**: 42 wika (Default fallback: Thai)

## Pag-install

Upang simulan ang pag-develop ng KanutsananFX, sundin ang mga hakbang na ito:

1.  I-clone ang repositoryo:

    ```bash
    git clone [URL ng Repositoryo]
    cd KanutsananFX
    ```

2.  I-install ang mga dependency gamit ang npm o pnpm:

    ```bash
    npm install
    # o
    pnpm install
    ```

## Pagpapatakbo ng App

Para patakbuhin ang app sa development mode:

```bash
npx expo start
```

Piliin ang sumusunod para patakbuhin sa iyong device o simulator:

```bash
npm run android
npm run ios
```

## Pagbuo para sa Android at iOS

Narito ang mga command para sa pagbuo ng application para sa iba't ibang platform at uri ng build:

### Android

*   **Preview APK**: Para sa pagsubok at preview sa Android device.

    ```bash
    npm run build:android:apk
    ```

*   **Production AAB**: Para sa pag-publish sa Google Play Store.

    ```bash
    npm run build:android:production
    ```

### iOS

*   **Preview Build**: Para sa pagsubok at preview sa iOS device.

    ```bash
    npm run build:ios
    ```

*   **Simulator Build**: Para sa pagsubok sa iOS Simulator.

    ```bash
    npm run build:ios:simulator
    ```

*   **Production Build**: Para sa pag-publish sa Apple App Store.

    ```bash
    npm run build:ios:production
    ```

## Paano Gamitin

[Dito ilalagay ang detalyadong instruksyon sa paggamit ng app. Halimbawa: Paano mag-login, paano gamitin ang AI chat agent, paano mag-execute ng trading commands, atbp.]

## Multilingual Support

Ang KanutsananFX ay idinisenyo upang maging accessible sa isang pandaigdigang madla, na sumusuporta sa **42 wika**. Awtomatikong nakikita ng app ang wika ng iyong device at ina-adjust ang UI nang naaayon. Maaari mo ring manu-manong baguhin ang wika sa seksyon ng Settings ng app. Ang default na fallback na wika ay **Thai**.

## Mga Sanggunian

Ang AI trading skill na ginamit sa application na ito ay batay sa sumusunod na repositoryo:

*   [Forex-Auto-Trading-MetaAPI-Skill-for-OpenClaw-by-Kanutsanan-Pongpanna](https://github.com/kanutsanan1988/Forex-Auto-Trading-MetaAPI-Skill-for-OpenClaw-by-Kanutsanan-Pongpanna)

## Lisensya

[Dito ilalagay ang impormasyon ng lisensya, halimbawa: MIT License]

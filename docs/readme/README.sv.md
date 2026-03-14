# KanutsananFX - Forex Trading AI Agent Application

## Översikt

KanutsananFX är en avancerad AI-agentapplikation för Forex-handel, utvecklad med **Expo / React Native** för att säkerställa fullt stöd för både **iOS och Android**-plattformar. Applikationen är utformad för att vara globalt tillgänglig och stöder imponerande **42 språk**, med automatisk språkdetektering baserad på enhetens inställningar samt möjlighet att manuellt välja språk i appens inställningar. Standardreservspråket är thailändska.

## Nyckelfunktioner

*   **AI Chat Agent**: Interagera med en intelligent AI-chattagent för handelsinsikter och exekvering.
*   **4 Handelskommandon**: Utför grundläggande handelsoperationer direkt via AI-agenten.
*   **MetaAPI-integration**: Sömlös anslutning till MetaAPI för realtidshandel och dataflöden.
*   **Stöd för flera LLM**: Flexibilitet att använda olika stora språkmodeller (LLM) för AI-agenten.
*   **Anpassning av handelsfärdigheter**: Skräddarsy AI-agentens handelsstrategier och färdigheter.
*   **Flerspråkigt användargränssnitt**: Ett användargränssnitt som är tillgängligt på 42 olika språk.
*   **Säkerhetskopiering och återställning**: Enkel hantering av applikationsdata för säkerhetskopiering och återställning.
*   **Utvecklarinformation och guider**: Omfattande resurser för utvecklare och användare.

## Teknisk stack

Applikationen är byggd med moderna och robusta teknologier:

*   **Ramverk**: React Native + Expo + TypeScript
*   **Navigering**: Expo Router
*   **Tillståndshantering**: React Context API
*   **Lagring**: AsyncStorage
*   **Plattformar**: iOS och Android

## Installation

Följ dessa steg för att installera och konfigurera projektet lokalt:

```bash
npm install
# eller
pnpm install
```

## Köra appen

För att starta utvecklingsservern och köra appen i en simulator eller på en enhet:

```bash
npx expo start
```

För att köra appen direkt på Android-emulatorn/enheten:

```bash
npm run android
```

För att köra appen direkt på iOS-simulatorn/enheten:

```bash
npm run ios
```

## Bygga för Android och iOS

Här är bygginstruktionerna för olika plattformar och syften:

### Android

*   **Förhandsgranskning APK**: Bygg en APK för testning och förhandsgranskning.

    ```bash
npm run build:android:apk
    ```

*   **Produktion AAB**: Bygg en Android App Bundle (AAB) för publicering i Google Play Store.

    ```bash
npm run build:android:production
    ```

### iOS

*   **Förhandsgranskning (Development Build)**: Bygg en utvecklingsversion för testning på enheter.

    ```bash
npm run build:ios
    ```

*   **Simulator Build**: Bygg för att köra i iOS-simulatorn.

    ```bash
npm run build:ios:simulator
    ```

*   **Produktion (App Store Build)**: Bygg för publicering i Apple App Store.

    ```bash
npm run build:ios:production
    ```

## Hur man använder

Efter att ha installerat och kört appen kan du:

1.  **Logga in**: Använd dina MetaAPI-uppgifter för att logga in.
2.  **Interagera med AI-agenten**: Använd chattgränssnittet för att ställa frågor eller ge handelskommandon.
3.  **Anpassa inställningar**: Gå till inställningar för att ändra språk eller justera handelsfärdigheter.
4.  **Övervaka handel**: Följ dina handelsaktiviteter och resultat.

## Flerspråkigt stöd

KanutsananFX erbjuder ett omfattande flerspråkigt stöd med **42 tillgängliga språk**. Appen detekterar automatiskt din enhets språk och anpassar användargränssnittet därefter. Du kan också manuellt välja önskat språk via inställningsmenyn. Om ett specifikt språk inte stöds eller inte kan detekteras, kommer appen att falla tillbaka till **thailändska** som standard.

## Referenser

Originalförrådet för handelsfärdigheter som används i denna applikation finns här:

*   [Forex-Auto-Trading-MetaAPI-Skill-for-OpenClaw-by-Kanutsanan-Pongpanna](https://github.com/kanutsanan1988/Forex-Auto-Trading-MetaAPI-Skill-for-OpenClaw-by-Kanutsanan-Pongpanna)

## Licens

Denna applikation är licensierad under MIT-licensen. Se `LICENSE`-filen för mer information. (Om tillämpligt, annars ta bort denna sektion eller uppdatera med korrekt licensinformation.)

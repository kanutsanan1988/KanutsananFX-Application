# KanutsananFX - Forex Trading AI Agent Applikation

Velkommen til KanutsananFX, en avanceret mobilapplikation designet til at revolutionere din Forex-handel gennem kunstig intelligens. Denne app understøtter problemfrit både **iOS og Android** platforme, bygget med **Expo / React Native** for en ensartet og robust brugeroplevelse.

Med understøttelse af **42 sprog**, herunder automatisk sprogregistrering baseret på din enheds indstillinger og muligheden for manuelt at vælge sprog i appens indstillinger, er KanutsananFX bygget til et globalt publikum. Standard fallback-sproget er Thai.

## Nøglefunktioner

KanutsananFX er spækket med funktioner, der forbedrer din handelsoplevelse:

*   **AI Chat Agent**: Interager med en intelligent AI-agent for handelsindsigt og assistance.
*   **4 Handelskommandoer**: Udfør vigtige handelsoperationer effektivt.
*   **MetaAPI-integration**: Problemfri forbindelse til MetaAPI for realtidsdata og udførelse.
*   **Understøttelse af flere LLM'er**: Fleksibilitet til at integrere med forskellige store sprogmodeller.
*   **Tilpasning af handelsfærdigheder**: Skræddersy AI'ens handelsstrategier til dine præferencer.
*   **Flersproget brugergrænseflade**: Nyd appen på dit foretrukne sprog med 42 tilgængelige muligheder.
*   **Sikkerhedskopiering og Gendannelse**: Beskyt dine data og indstillinger med nemme sikkerhedskopierings- og gendannelsesfunktioner.
*   **Udviklerinformation og Vejledninger**: Omfattende ressourcer til udviklere og detaljerede brugervejledninger.

## Teknisk Stak

Projektet er bygget på en moderne og skalerbar teknisk stak:

*   **Projektnavn**: KanutsananFX
*   **Framework**: React Native + Expo + TypeScript
*   **Navigation**: Expo Router
*   **Tilstandsstyring**: React Context API
*   **Lagring**: AsyncStorage
*   **Platforme**: iOS og Android

## Installation

For at komme i gang med udvikling eller køre appen lokalt, følg disse trin:

```bash
# Klon repository'et
git clone https://github.com/kanutsanan1988/KanutsananFX.git # Erstat med det faktiske repository-URL
cd KanutsananFX

# Installer afhængigheder med npm
npm install

# Eller med pnpm
pnpm install
```

## Kørsel af Appen

Efter installation af afhængigheder kan du starte appen:

```bash
# Start Expo-udviklingsserveren
npx expo start

# Kør på Android-emulator/enhed
npm run android

# Kør på iOS-simulator/enhed
npm run ios
```

## Bygning til Android og iOS

Her er kommandoerne til at bygge appen til forskellige platforme og formål:

### Android

*   **Preview APK**: Generer en APK-fil til test og forhåndsvisning.
    ```bash
    npm run build:android:apk
    ```
*   **Production AAB**: Generer en Android App Bundle (AAB) til udgivelse i Google Play Butik.
    ```bash
    npm run build:android:production
    ```

### iOS

*   **Preview Build**: Generer en iOS-app til forhåndsvisning.
    ```bash
    npm run build:ios
    ```
*   **Simulator Build**: Byg appen til at køre på en iOS-simulator.
    ```bash
    npm run build:ios:simulator
    ```
*   **Production Build**: Generer en produktionsklar iOS-app til udgivelse i Apple App Store.
    ```bash
    npm run build:ios:production
    ```

## Sådan bruges appen

1.  **Start appen**: Åbn KanutsananFX på din iOS- eller Android-enhed.
2.  **Sprogvalg**: Appen registrerer automatisk dit enhedssprog. Du kan ændre det manuelt i `Indstillinger`.
3.  **AI Chat Agent**: Brug chat-grænsefladen til at interagere med AI'en, stille spørgsmål og få handelsanbefalinger.
4.  **Handelskommandoer**: Udfør handelsoperationer direkte via AI-agenten eller de dedikerede kommandoer.
5.  **Tilpasning**: Tilpas AI'ens handelsfærdigheder og indstillinger for at matche din handelsstil.

## Flersproget Understøttelse

KanutsananFX er designet med et globalt publikum i tankerne og understøtter 42 sprog. Appen vil automatisk forsøge at matche din enheds sprogindstillinger. Hvis dit sprog ikke er tilgængeligt, eller hvis du foretrækker et andet sprog, kan du nemt vælge det fra en liste over understøttede sprog i appens indstillinger. Standard fallback-sproget er Thai.

## Referencer

Denne applikation bygger på og refererer til den originale handelsfærdigheds-repository:

*   [Forex-Auto-Trading-MetaAPI-Skill-for-OpenClaw-by-Kanutsanan-Pongpanna](https://github.com/kanutsanan1988/Forex-Auto-Trading-MetaAPI-Skill-for-OpenClaw-by-Kanutsanan-Pongpanna)

## Licens

[Indsæt licensinformation her, f.eks. MIT, Apache 2.0 osv.]

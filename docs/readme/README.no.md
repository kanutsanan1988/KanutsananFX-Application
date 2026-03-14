# KanutsananFX - Forex Trading AI Agent Application

## Oversikt

KanutsananFX er en avansert AI-drevet handelsagentapplikasjon designet for Forex-markedet. Bygget med **Expo / React Native**, tilbyr den sømløs støtte for både **iOS og Android**-plattformer, og gir tradere et kraftig verktøy for å automatisere og optimalisere sine handelsstrategier.

## Nøkkelfunksjoner

*   **AI Chat Agent**: En intelligent chat-agent som hjelper brukere med handelsbeslutninger og strategier.
*   **4 Handelskommandoer**: Utfør fire essensielle handelskommandoer direkte fra appen.
*   **MetaAPI-integrasjon**: Direkte integrasjon med MetaAPI for sanntids markedsdata og utførelse av handler.
*   **Støtte for flere LLM-er**: Fleksibilitet til å bruke ulike store språkmodeller (LLM-er) for forbedret AI-ytelse.
*   **Tilpasning av handelsferdigheter**: Tilpass AI-agentens handelsferdigheter for å matche individuelle preferanser og markedsforhold.
*   **Flerspråklig brukergrensesnitt**: Et intuitivt brukergrensesnitt tilgjengelig på 42 språk, med automatisk gjenkjenning av enhetsspråk og manuell valgmulighet i innstillingene.
*   **Sikkerhetskopiering og gjenoppretting**: Enkel sikkerhetskopiering og gjenoppretting av brukerdata og innstillinger.
*   **Utviklerinformasjon og guider**: Omfattende ressurser for utviklere og detaljerte bruksguider.

## Teknisk stabel

*   **Rammeverk**: React Native + Expo + TypeScript
*   **Navigasjon**: Expo Router
*   **Tilstandshåndtering**: React Context API
*   **Lagring**: AsyncStorage
*   **Plattformer**: iOS og Android
*   **Språkstøtte**: 42 språk (standard reserve: Thai)

## Installasjon

For å komme i gang med KanutsananFX, følg disse trinnene:

```bash
npm install
# eller
pnpm install
```

## Kjøre appen

Etter installasjon kan du starte appen i utviklingsmodus:

```bash
npx expo start
```

For å kjøre på en Android-enhet/emulator:

```bash
npm run android
```

For å kjøre på en iOS-enhet/simulator:

```bash
npm run ios
```

## Bygge for Android og iOS

Her er instruksjonene for å bygge appen for ulike plattformer og formål:

### Android

**Forhåndsvisning APK:**

```bash
npm run build:android:apk
```

**Produksjon AAB:**

```bash
npm run build:android:production
```

### iOS

**Forhåndsvisning:**

```bash
npm run build:ios
```

**Simulatorbygg:**

```bash
npm run build:ios:simulator
```

**Produksjonsbygg:**

```bash
npm run build:ios:production
```

## Hvordan bruke

Detaljerte bruksanvisninger og guider er tilgjengelige i appen og i utviklerinformasjonen. Appen lar deg konfigurere AI-handelsagenten, tilpasse handelsferdigheter og overvåke markedsaktivitet i sanntid. Bruk chat-agenten for å få innsikt og utføre kommandoer.

## Flerspråklig støtte

KanutsananFX støtter 42 språk for å imøtekomme et globalt publikum. Appen oppdager automatisk enhetens språk, men du kan også manuelt velge ønsket språk fra innstillingsmenyen.

## Referanser

Originalt handelsferdighetslager:
[https://github.com/kanutsanan1988/Forex-Auto-Trading-MetaAPI-Skill-for-OpenClaw-by-Kanutsanan-Pongpanna](https://github.com/kanutsanan1988/Forex-Auto-Trading-MetaAPI-Skill-for-OpenClaw-by-Kanutsanan-Pongpanna)

## Lisens

[Legg til lisensinformasjon her]

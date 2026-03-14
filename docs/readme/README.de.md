# KanutsananFX - Forex Trading AI Agent Application

## Überblick

KanutsananFX ist eine innovative mobile Anwendung, die als KI-Handelsagent für den Forex-Markt fungiert. Entwickelt mit **Expo / React Native**, bietet diese Anwendung nahtlose Unterstützung für **iOS und Android** und ermöglicht es Benutzern, ihre Handelsstrategien durch künstliche Intelligenz zu optimieren. Die App ist darauf ausgelegt, eine intuitive und leistungsstarke Plattform für Trader bereitzustellen, die sowohl Automatisierung als auch Anpassung schätzen.

## Hauptmerkmale

*   **KI-Chat-Agent**: Interagieren Sie mit einem intelligenten Chat-Agenten, der Handelsanalysen und Empfehlungen liefert.
*   **4 Handelsbefehle**: Führen Sie grundlegende Handelsoperationen direkt über die App aus.
*   **MetaAPI-Integration**: Nahtlose Verbindung zu MetaAPI für Echtzeit-Handelsdaten und -ausführung.
*   **Multi-LLM-Unterstützung**: Nutzen Sie verschiedene Large Language Models, um die Handelsintelligenz zu verbessern.
*   **Anpassung der Handelsfähigkeiten**: Passen Sie die Fähigkeiten des KI-Agenten an Ihre spezifischen Handelsstrategien an.
*   **Mehrsprachige Benutzeroberfläche**: Die App unterstützt **42 Sprachen** mit automatischer Spracherkennung des Geräts und manueller Auswahl in den Einstellungen.
*   **Sicherung und Wiederherstellung**: Sichern und stellen Sie Ihre App-Daten einfach wieder her.
*   **Entwicklerinformationen**: Zugang zu detaillierten Informationen für Entwickler.
*   **Umfassende Anleitungen**: Detaillierte Anleitungen zur Nutzung aller Funktionen der App.

## Technischer Stack

*   **Projektname**: KanutsananFX
*   **Framework**: React Native + Expo + TypeScript
*   **Navigation**: Expo Router
*   **Zustandsverwaltung**: React Context API
*   **Speicher**: AsyncStorage
*   **Plattformen**: iOS und Android
*   **Sprachunterstützung**: 42 Sprachen (Standard-Fallback: Thai)

## Installation

Um KanutsananFX lokal einzurichten, folgen Sie diesen Schritten:

1.  **Klonen Sie das Repository:**
    ```bash
    git clone <repository-url>
    cd KanutsananFX
    ```

2.  **Installieren Sie die Abhängigkeiten:**
    Verwenden Sie entweder `npm` oder `pnpm`:
    ```bash
    npm install
    # oder
    pnpm install
    ```

## Ausführen der App

Um die App im Entwicklungsmodus zu starten:

```bash
npx expo start
```

Um die App auf einem Android-Gerät oder Emulator auszuführen:

```bash
npm run android
```

Um die App auf einem iOS-Gerät oder Simulator auszuführen:

```bash
npm run ios
```

## Builds für Android und iOS

### Android

*   **Vorschau-APK erstellen:**
    ```bash
    npm run build:android:apk
    ```

*   **Produktions-AAB erstellen (für Google Play Store):**
    ```bash
    npm run build:android:production
    ```

### iOS

*   **Vorschau-Build erstellen:**
    ```bash
    npm run build:ios
    ```

*   **Simulator-Build erstellen:**
    ```bash
    npm run build:ios:simulator
    ```

*   **Produktions-Build erstellen (für Apple App Store):**
    ```bash
    npm run build:ios:production
    ```

## Wie man es benutzt

Nach der Installation und dem Start der Anwendung können Sie:

1.  **Den KI-Chat-Agenten nutzen**: Stellen Sie Fragen zu Handelsstrategien oder Marktanalysen.
2.  **Handelsbefehle ausführen**: Verwenden Sie die integrierten Befehle, um Trades zu platzieren.
3.  **Einstellungen anpassen**: Ändern Sie die Sprache, passen Sie Handelsfähigkeiten an und verwalten Sie Sicherungen.
4.  **MetaAPI-Integration konfigurieren**: Verbinden Sie Ihre MetaAPI-Konten, um die volle Funktionalität zu nutzen.

## Mehrsprachige Unterstützung

KanutsananFX bietet umfassende mehrsprachige Unterstützung für **42 Sprachen**. Die App erkennt automatisch die Sprache Ihres Geräts und passt die Benutzeroberfläche entsprechend an. Sie können die Sprache auch jederzeit manuell in den Einstellungen ändern.

## Referenzen

*   **Originales Handelsfähigkeiten-Repository**: [Forex-Auto-Trading-MetaAPI-Skill-for-OpenClaw-by-Kanutsanan-Pongpanna](https://github.com/kanutsanan1988/Forex-Auto-Trading-MetaAPI-Skill-for-OpenClaw-by-Kanutsanan-Pongpanna)

## Lizenz

[Fügen Sie hier Ihre Lizenzinformationen ein]

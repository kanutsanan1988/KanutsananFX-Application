# KanutsananFX - Aplikacja Agenta AI do Handlu Forex

## Przegląd

KanutsananFX to najnowocześniejsza aplikacja agenta AI do handlu Forex, zbudowana w oparciu o **React Native** i **Expo**, oferująca płynne wsparcie międzyplatformowe dla urządzeń **iOS i Android**. Aplikacja integruje się z MetaAPI, aby zapewnić możliwości handlu w czasie rzeczywistym, zasilane przez zaawansowanego agenta czatu AI. Dzięki obsłudze **42 języków**, automatycznemu wykrywaniu języka urządzenia i ręcznemu wyborowi, KanutsananFX zapewnia prawdziwie globalne i dostępne doświadczenie handlowe.

## Kluczowe Funkcje

*   **Agent Czat AI**: Interakcja z inteligentnym agentem AI w celu uzyskania wglądu w handel i wydawania poleceń.
*   **4 Polecenia Handlowe**: Wykonywanie podstawowych operacji handlowych bezpośrednio z poziomu aplikacji.
*   **Integracja z MetaAPI**: Łączy się z MetaAPI w celu zapewnienia solidnego i niezawodnego handlu Forex.
*   **Obsługa wielu LLM**: Wykorzystanie różnych dużych modeli językowych w celu zwiększenia możliwości AI.
*   **Dostosowywanie Umiejętności Handlowych**: Personalizacja i adaptacja strategii handlowych do własnych potrzeb.
*   **Wielojęzyczny Interfejs Użytkownika**: Interfejs użytkownika dostępny w 42 językach z automatycznym wykrywaniem i ręcznym wyborem.
*   **Kopia Zapasowa/Przywracanie**: Bezpieczne tworzenie kopii zapasowych i przywracanie danych aplikacji.
*   **Informacje dla Deweloperów i Przewodniki**: Kompleksowe zasoby dla deweloperów i zaawansowanych użytkowników.

## Stos Technologiczny

*   **Nazwa Projektu**: KanutsananFX
*   **Framework**: React Native + Expo + TypeScript
*   **Nawigacja**: Expo Router
*   **Zarządzanie Stanem**: React Context API
*   **Pamięć Lokalna**: AsyncStorage
*   **Platformy**: iOS i Android
*   **Obsługa Języków**: 42 języki
*   **Domyślny Język Zastępczy**: Tajski

## Instalacja

Aby rozpocząć pracę z KanutsananFX, wykonaj następujące kroki:

1.  **Sklonuj repozytorium**:

    ```bash
    git clone https://github.com/kanutsanan1988/KanutsananFX.git
    cd KanutsananFX
    ```

2.  **Zainstaluj zależności**:

    ```bash
    npm install
    # lub jeśli wolisz pnpm
    pnpm install
    ```

## Uruchamianie Aplikacji

Aby uruchomić aplikację w trybie deweloperskim:

```bash
npx expo start
```

Spowoduje to otwarcie narzędzi deweloperskich Expo w przeglądarce. Następnie możesz wybrać uruchomienie aplikacji na:

*   Emulatorze lub urządzeniu z systemem Android (`npm run android`)
*   Symulatorze lub urządzeniu z systemem iOS (`npm run ios`)

## Budowanie dla Androida i iOS

KanutsananFX obsługuje różne konfiguracje kompilacji zarówno dla Androida, jak i iOS.

### Android

*   **APK podglądu (do testowania)**:

    ```bash
    npm run build:android:apk
    ```

*   **Produkcyjny AAB (dla Google Play Store)**:

    ```bash
    npm run build:android:production
    ```

### iOS

*   **Kompilacja podglądu (do testowania na urządzeniu)**:

    ```bash
    npm run build:ios
    ```

*   **Kompilacja dla symulatora (dla symulatora iOS)**:

    ```bash
    npm run build:ios:simulator
    ```

*   **Kompilacja produkcyjna (dla Apple App Store)**:

    ```bash
    npm run build:ios:production
    ```

## Jak Używać

Po uruchomieniu aplikacji KanutsananFX, powita Cię intuicyjny interfejs użytkownika. Aplikacja automatycznie wykrywa język Twojego urządzenia i odpowiednio ustawia interfejs. Możesz również ręcznie zmienić język w sekcji Ustawienia.

Interakcja z Agentem Czat AI pozwala uzyskać wgląd w handel lub wykonać jedno z czterech dostępnych poleceń handlowych. Dostosuj swoje umiejętności handlowe, aby dopasować je do swoich osobistych strategii. Pamiętaj, aby regularnie tworzyć kopie zapasowe swoich danych dla bezpieczeństwa.

## Wsparcie Wielojęzyczne

KanutsananFX oferuje szerokie wsparcie wielojęzyczne, z interfejsem użytkownika dostępnym w **42 językach**. Aplikacja inteligentnie wykrywa ustawienia języka Twojego urządzenia i automatycznie dostosowuje język wyświetlania. Dla użytkowników, którzy preferują inny język lub których język urządzenia nie znajduje się wśród obsługiwanych 42, opcja ręcznego wyboru języka jest wygodnie zlokalizowana w menu Ustawienia aplikacji. Domyślnym językiem zastępczym, jeśli preferowany język nie jest dostępny lub wybrany, jest tajski.

## Referencje

*   Oryginalne repozytorium umiejętności handlowych: [Forex-Auto-Trading-MetaAPI-Skill-for-OpenClaw-by-Kanutsanan-Pongpanna](https://github.com/kanutsanan1988/Forex-Auto-Trading-MetaAPI-Skill-for-OpenClaw-by-Kanutsanan-Pongpanna)

## Licencja

[Wstaw Informacje Licencyjne Tutaj, np. Licencja MIT]

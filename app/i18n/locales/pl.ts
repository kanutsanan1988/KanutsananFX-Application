import { TranslationKey } from '../keys';

const pl: Record<TranslationKey, string> = {
  appName: 'KanutsananFX',
  welcome: 'Witaj w KanutsananFX',
  settings: 'Ustawienia',
  chat: 'Czat AI',
  trade: 'Handel',
  guide: 'Przewodnik',
  developer: 'Deweloper',
  tradingSkills: 'Umiejętności handlowe',
  metaApiSettings: 'Ustawienia MetaAPI',
  accountId: 'Account ID',
  apiKey: 'API Key',
  aiBrainSettings: 'Mózg AI',
  selectAiProvider: 'Wybierz dostawcę AI',
  apiKeyPlaceholder: 'Wprowadź API Key',
  save: 'Zapisz',
  cancel: 'Anuluj',
  connect: 'Połącz',
  disconnect: 'Rozłącz',
  connected: 'Połączono',
  disconnected: 'Rozłączono',
  connectionSuccess: 'Połączenie udane',
  connectionFailed: 'Połączenie nieudane',
  pleaseSetup: 'Najpierw skonfiguruj MetaAPI i Mózg AI',
  checkTrade: 'Sprawdź transakcję',
  approveTrade: 'Zatwierdź transakcję',
  setAutoTrade: 'Ustaw automatyczny handel',
  cancelAutoTrade: 'Anuluj automatyczny handel',
  autoTrading: 'Automatyczny handel',
  tradingInterval: 'Interwał sprawdzania transakcji',
  selectPair: 'Wybierz parę handlową',
  checkTradeDesc: 'Analizuj rynek i dostarczaj rekomendacje (STEP 0-9)',
  approveTradeDesc: 'Wyślij zlecenie handlowe na podstawie rekomendacji',
  setAutoTradeDesc: 'Ustaw harmonogram automatycznego sprawdzania i handlu',
  cancelAutoTradeDesc: 'Zatrzymaj system automatycznego handlu',
  analyzeMarket: 'Analizuj rynek',
  sendTradeOrder: 'Wyślij zlecenie handlowe',
  autoCheckEvery: 'Sprawdzaj co',
  stopAutoTrading: 'Zatrzymaj automatyczny handel',
  confirmTrade: 'Potwierdź transakcję',
  tradeSuccess: 'Transakcja udana',
  tradeFailed: 'Transakcja nieudana',
  notReady: 'Nie gotowy do handlu',
  checkFirst: 'Najpierw sprawdź transakcję',
  autoTradeStarted: 'Automatyczny handel rozpoczęty',
  autoTradeStopped: 'Automatyczny handel zatrzymany',
  typeMessage: 'Wpisz wiadomość...',
  voiceInput: 'Wprowadzanie głosowe',
  aiThinking: 'Myślenie...',
  welcomeMessage: 'Cześć! Jestem KanutsananFX, chętnie ci pomogę.',
  voiceComingSoon: 'Funkcja rozmowy głosowej - dostępna w następnej wersji',
  guideMetaApi: 'Przewodnik MetaAPI',
  guideAiProvider: 'Przewodnik dostawcy AI',
  guideTradingSkills: 'Przewodnik po umiejętnościach handlowych',
  guideCommands: 'Przewodnik po poleceniach',
  selectGuide: 'Wybierz przewodnik do przeczytania',
  back: 'Wstecz',
  noInternet: 'Brak połączenia z internetem',
  setupRequired: 'Wymagana konfiguracja',
  close: 'Zamknij',
  seconds: 'sekundy',
  minutes: 'minuty',
  hours: 'godziny',
  backup: 'Kopia zapasowa',
  restore: 'Przywróć',
  backupToGDrive: 'Utwórz kopię zapasową na Google Drive',
  restoreFromGDrive: 'Przywróć z Google Drive',
  backupComingSoon: 'Funkcja tworzenia kopii zapasowych dostępna w następnej wersji',
  restoreComingSoon: 'Funkcja przywracania dostępna w następnej wersji',
  currentLlm: 'Obecny Mózg AI',
  status: 'Status',
  tradingPair: 'Para handlowa',
  connectionStatus: 'Status połączenia',
  autoCheckInterval: 'Interwał automatycznego sprawdzania',
  selectTradingPair: 'Wybierz parę handlową',
  loadingPairs: 'Ładowanie par handlowych...',
  currentSetting: 'Obecne',
  refreshPairs: 'Odśwież pary handlowe',
  connectMetaApiFirst: 'Najpierw połącz się z MetaAPI, aby załadować pary handlowe',
  developerName: 'Kanutsanan Pongpanna',
  developerTitle: 'Deweloper KanutsananFX',
  developerBio: 'Handlowiec rolny online | Deweloper handlu AI
Maha Sarakham | B.Sc. Fizyka Stosowana, Mahasarakham University',
  developerQuote: 'Stoimy jako ci, którzy nikogo nie uciskają, ale nie urodziliśmy się, by być deptani.',
  linksAndContacts: 'Linki i kontakty',
  sourceCodeRef: 'Odniesienie do kodu źródłowego',
  youtubeRef: 'Odniesienie do wideo na YouTube',
  language: 'Język',
  selectLanguage: 'Wybierz język',
  languageName: 'Polski',
  setupTitle: 'Wstępna konfiguracja',
  setupDesc: 'Wprowadź informacje, aby zacząć korzystać z KanutsananFX',
  step1MetaApi: 'Krok 1: Skonfiguruj MetaAPI',
  step2AiBrain: 'Krok 2: Skonfiguruj Mózg AI',
  startUsing: 'Zacznij używać',
  skipSetup: 'Pomiń konfigurację',
  letsGo: 'Zaczynajmy!',
  resetConnection: 'Zresetuj połączenie',
  resetWarning: 'Wszystkie dane połączenia zostaną usunięte',
  reset: 'Resetuj',
  ok: 'OK',
  confirm: 'Potwierdź',
  warning: 'Ostrzeżenie',
  error: 'Błąd',
  success: 'Sukces',
  loading: 'Ładowanie...',
  retry: 'Spróbuj ponownie',
  comingSoon: 'Wkrótce',
  version: 'Wersja',
  guideMetaApiContent: '# MetaAPI Guide

## Krok 1: Zarejestruj konto MetaAPI
- Przejdź do https://app.metaapi.cloud
- Utwórz nowe konto lub zaloguj się
- Zweryfikuj swój e-mail

## Krok 2: Połącz konto MT5
- Kliknij Nowe konto
- Wybierz Połącz istniejące konto
- Wprowadź dane MT5: Serwer, Login, Hasło
- Kliknij Utwórz konto

## Krok 3: Pobierz Account ID
- Po utworzeniu konta zobaczysz Account ID
- Skopiuj Account ID
- Wprowadź je w KanutsananFX

## Krok 4: Pobierz API Key
- Przejdź do Ustawienia, następnie Dostęp API
- Utwórz nowy Token API
- Skopiuj Token
- Wprowadź go w KanutsananFX

## Ważne
- Nigdy nie udostępniaj swojego API Key
- Używaj 2FA dla bezpieczeństwa"New Account"\n- Select "Connect existing account"\n- Enter MT5 details: Server, Login, Password\n- Click "Create Account"\n\n## Step 3: Get Account ID\n- After creating the account, you will see the Account ID\n- Copy the Account ID\n- Enter it in KanutsananFX\n\n## Step 4: Get API Key\n- Go to Settings → API Access\n- Create a new API Token\n- Copy the Token\n- Enter it in KanutsananFX\n\n## Important\n- Never share your API Key\n- Use 2FA for security',
  guideAiProviderContent: '# AI Provider Guide

## 1. KanutsananFX (Domyślny)
- Wbudowany LLM, nie wymaga API Key

## 2. OpenAI
- Strona: https://platform.openai.com

## 3. Anthropic (Claude)
- Strona: https://console.anthropic.com

## 4. Google Gemini
- Strona: https://aistudio.google.com

## 5. Grok (xAI)
- Strona: https://console.x.ai

## 6. Perplexity
- Strona: https://www.perplexity.ai/settings/api

## 7. OpenRouter
- Strona: https://openrouter.ai',
  guideTradingSkillsContent: '# Trading Skills Guide

## Auto Check Intervals
- 30 sekund - Najczęstsze
- 1-10 minut - Umiarkowane
- 1-5 godzin - Najrzadsze

## Analysis System STEP 0-9
- STEP 0: Sprawdź otwarcie/zamknięcie rynku
- STEP 1: Aktualna cena
- STEP 2: Analiza wykresu M15
- STEP 3: Oblicz SL/TP
- STEP 4: Sprawdź Risk/Reward
- STEP 5: Oblicz wielkość pozycji
- STEP 6: Oceń siłę sygnału
- STEP 7: Sprawdź kierunek
- STEP 8: Zweryfikuj API
- STEP 9: Sprawdź istniejące pozycje',
  guideCommandsContent: '# Commands Guide

## 1. Sprawdź Trade
- Analizuj rynek używając STEP 0-9
- Wyświetl wyniki analizy

## 2. Zatwierdź Trade
- Wykonaj zlecenie na podstawie analizy

## 3. Ustaw Auto Trading
- Automatycznie sprawdzaj i handluj według harmonogramu

## 4. Anuluj Auto Trading
- Natychmiast zatrzymaj automatyczny handel',
  developerLinks: 'Linki i kontakty',
  sourceCodeReference: 'Odniesienie do kodu źródłowego',
  youtubeReferences: 'Odniesienia do filmów na YouTube',
  videoOne: 'Wideo 1',
  videoTwo: 'Wideo 2',
  developerLinkChat: 'Czat z deweloperem LoveMoney AI',
  developerLinkLoveMoneyAi: 'LoveMoney AI na ChatGPT',
  developerLinkYoutubeOfficial: 'Kanał YouTube LoveMoney Official',
  developerLinkFacebookPage: 'Strona Facebook LoveMoney',
  developerLinkLokathibodi: 'Pismo Lokathibodi',
  developerLinkGardenMain: 'Ogród Dharmy Zasług',
  developerLinkGardenActivities: 'Aktywności Ogrodu Dharmy',
  developerLinkRiceTrade: 'Grupa handlu ryżem online',
  developerLinkGrassTrade: 'Grupa handlu trawą Pangola',
  developerLinkEnergyGroup: 'Grupa samoczyszczącej energii',
  developerLinkPropertyGroup: 'Grupa handlu nieruchomościami',
  setupStep: 'Krok',
  setupMetaApiDesc: 'Wprowadź Account ID i API Key z MetaAPI, aby połączyć swoje konto handlowe MT5',
  setupAiBrainDesc: 'Wybierz dostawcę AI do analizy i rozmów',
  accountIdPlaceholder: 'Wprowadź MetaAPI Account ID',
  connectMetaApi: 'Połącz MetaAPI',
  connectAiBrain: 'Połącz AI Brain',
  viewGuide: 'Zobacz przewodnik',
  backToMetaApi: 'Powrót do ustawień MetaAPI',
  connectionFailedDesc: 'Proszę sprawdź swój Account ID i API Key. Zobacz menu Przewodnik po pomoc.',
  pleaseEnterAiKey: 'Proszę wprowadzić API Key dla wybranego dostawcy AI',
  aiResponseCheckTrade: 'Analizowanie rynku... Użyj przycisku Check Trade na ekranie Trade, aby uzyskać analizę w czasie rzeczywistym od MetaAPI.',
  aiResponseApproveTrade: 'Użyj przycisku Approve Trade na ekranie Trade po sprawdzeniu transakcji. System wykona zlecenia na podstawie analizy.',
  aiResponseAutoTrade: 'Skonfiguruj najpierw czas auto-trade w Trading Skills, następnie naciśnij Set Auto Trading na ekranie Trade.',
  aiResponseCancelAuto: 'Naciśnij przycisk Cancel Auto Trading na ekranie Trade.',
  aiResponseDharma: 'Dharma jest istotna w życiu. Handel jest taki sam - wymaga uważności, koncentracji, braku chciwości, braku złości. Anapanasati (świadomość oddechu) to doskonała podstawa do uspokojenia umysłu.',
  aiResponseGreeting: 'Witaj! Jestem KanutsananFX, cieszę się, że mogę Ci służyć. Pomogę Ci z analizą rynku Forex, rekomendacjami handlowymi, dostosowaniem umiejętności handlowych oraz rozmową o Dharmie i globalnych systemach finansowych.',
  aiResponseDefault: 'Dziękuję za Twoją wiadomość. Jestem KanutsananFX, gotowy pomóc Ci w handlu Forex i rozmowach o Dharmie. Możesz używać poleceń: Check Trade, Approve Trade, Set Auto Trading, Cancel Auto Trading.',
  aiErrorGeneric: 'Przepraszam, obecnie nie mogę odpowiedzieć.',
  aiErrorConnection: 'Wystąpił błąd. Proszę sprawdź swój API Key i połączenie internetowe.',
  darkMode: 'Tryb ciemny',
  notifications: 'Powiadomienia',
  clearChatHistory: 'Wyczyść historię czatu',
  clearChatConfirm: 'Czy chcesz wyczyścić całą historię czatu?',
  exportSettings: 'Eksportuj ustawienia',
  importSettings: 'Importuj ustawienia',
  settingsMetaApiSection: 'MetaAPI',
  settingsAiBrainSection: 'AI Brain',
  settingsLanguageSection: 'Język',
  settingsBackupSection: 'Kopia zapasowa / Przywracanie',
  settingsAboutSection: 'O aplikacji',
  tradeAnalysisResult: 'Wynik analizy',
  trendUp: 'Trend wzrostowy',
  trendDown: 'Trend spadkowy',
  signalStrength: 'Siła sygnału',
  entryPrice: 'Cena wejścia',
  stopLoss: 'Stop Loss',
  takeProfit: 'Take Profit',
  lotSize: 'Lot Size',
  riskReward: 'Risk/Reward',
  noAnalysisYet: 'Brak analizy',
  analyzing: 'Analizowanie...',
  executing: 'Wykonywanie...',
  autoTradeActive: 'Automatyczny handel jest aktywny',
  autoTradeInactive: 'Automatyczny handel jest nieaktywny',
};

export default pl;
import { TranslationKey } from '../keys';

const ro: Record<TranslationKey, string> = {
  appName: 'KanutsananFX',
  welcome: 'Bun venit la KanutsananFX',
  settings: 'Setări',
  chat: 'Chat AI',
  trade: 'Tranzacționare',
  guide: 'Ghid',
  developer: 'Dezvoltator',
  tradingSkills: 'Abilități de tranzacționare',
  metaApiSettings: 'Setări MetaAPI',
  accountId: 'Account ID',
  apiKey: 'API Key',
  aiBrainSettings: 'Creier AI',
  selectAiProvider: 'Selectați furnizorul AI',
  apiKeyPlaceholder: 'Introduceți API Key',
  save: 'Salvare',
  cancel: 'Anulare',
  connect: 'Conectare',
  disconnect: 'Deconectare',
  connected: 'Conectat',
  disconnected: 'Deconectat',
  connectionSuccess: 'Conectare reușită',
  connectionFailed: 'Conectare eșuată',
  pleaseSetup: 'Vă rugăm să configurați mai întâi MetaAPI și Creierul AI',
  checkTrade: 'Verificare tranzacție',
  approveTrade: 'Aprobare tranzacție',
  setAutoTrade: 'Setare tranzacționare automată',
  cancelAutoTrade: 'Anulare tranzacționare automată',
  autoTrading: 'Tranzacționare automată',
  tradingInterval: 'Interval de verificare a tranzacționării',
  selectPair: 'Selectați perechea de tranzacționare',
  checkTradeDesc: 'Analizați piața și oferiți recomandări (STEP 0-9)',
  approveTradeDesc: 'Trimiteți ordinul de tranzacționare pe baza recomandărilor',
  setAutoTradeDesc: 'Setați programul automat de verificare și tranzacționare',
  cancelAutoTradeDesc: 'Opriți sistemul de tranzacționare automată',
  analyzeMarket: 'Analizați piața',
  sendTradeOrder: 'Trimiteți ordinul de tranzacționare',
  autoCheckEvery: 'Verificare la fiecare',
  stopAutoTrading: 'Opriți tranzacționarea automată',
  confirmTrade: 'Confirmare tranzacție',
  tradeSuccess: 'Tranzacție reușită',
  tradeFailed: 'Tranzacție eșuată',
  notReady: 'Nu sunteți gata de tranzacționare',
  checkFirst: 'Vă rugăm să verificați mai întâi tranzacția',
  autoTradeStarted: 'Tranzacționarea automată a început',
  autoTradeStopped: 'Tranzacționarea automată s-a oprit',
  typeMessage: 'Scrieți un mesaj...',
  voiceInput: 'Intrare vocală',
  aiThinking: 'Gândire...',
  welcomeMessage: 'Bună! Sunt KanutsananFX, bucuros să vă servesc.',
  voiceComingSoon: 'Funcția de conversație vocală - disponibilă în versiunea următoare',
  guideMetaApi: 'Ghid MetaAPI',
  guideAiProvider: 'Ghid furnizor AI',
  guideTradingSkills: 'Ghid abilități de tranzacționare',
  guideCommands: 'Ghid comenzi',
  selectGuide: 'Selectați un ghid de citit',
  back: 'Înapoi',
  noInternet: 'Fără conexiune la internet',
  setupRequired: 'Configurare necesară',
  close: 'Închide',
  seconds: 'secunde',
  minutes: 'minute',
  hours: 'ore',
  backup: 'Backup',
  restore: 'Restaurare',
  backupToGDrive: 'Backup pe Google Drive',
  restoreFromGDrive: 'Restaurare de pe Google Drive',
  backupComingSoon: 'Funcția de backup va fi disponibilă în versiunea următoare',
  restoreComingSoon: 'Funcția de restaurare va fi disponibilă în versiunea următoare',
  currentLlm: 'Creier AI actual',
  status: 'Stare',
  tradingPair: 'Pereche de tranzacționare',
  connectionStatus: 'Starea conexiunii',
  autoCheckInterval: 'Interval de verificare automată',
  selectTradingPair: 'Selectați perechea de tranzacționare',
  loadingPairs: 'Se încarcă perechile de tranzacționare...',
  currentSetting: 'Actual',
  refreshPairs: 'Reîmprospătare perechi de tranzacționare',
  connectMetaApiFirst: 'Vă rugăm să vă conectați mai întâi la MetaAPI pentru a încărca perechile de tranzacționare',
  developerName: 'Kanutsanan Pongpanna',
  developerTitle: 'Dezvoltator KanutsananFX',
  developerBio: 'Trader Agricol Online | Dezvoltator Tranzacționare AI
Maha Sarakham | B.Sc. Fizică Aplicată, Mahasarakham University',
  developerQuote: 'Suntem cei care nu oprimă pe nimeni, dar nu ne-am născut pentru a fi călcați în picioare.',
  linksAndContacts: 'Linkuri și contacte',
  sourceCodeRef: 'Referință cod sursă',
  youtubeRef: 'Referință video YouTube',
  language: 'Limbă',
  selectLanguage: 'Selectați limba',
  languageName: 'Română',
  setupTitle: 'Configurare inițială',
  setupDesc: 'Introduceți informațiile pentru a începe să utilizați KanutsananFX',
  step1MetaApi: 'Pasul 1: Configurare MetaAPI',
  step2AiBrain: 'Pasul 2: Configurare Creier AI',
  startUsing: 'Începeți să utilizați',
  skipSetup: 'Omitere configurare',
  letsGo: 'Să mergem!',
  resetConnection: 'Resetare conexiune',
  resetWarning: 'Toate datele de conectare vor fi șterse',
  reset: 'Resetare',
  ok: 'OK',
  confirm: 'Confirmare',
  warning: 'Avertisment',
  error: 'Eroare',
  success: 'Succes',
  loading: 'Se încarcă...',
  retry: 'Reîncercare',
  comingSoon: 'În curând',
  version: 'Versiune',
  guideMetaApiContent: '# Ghid MetaAPI

## Pasul 1: Înregistrați un cont MetaAPI
- Accesați https://app.metaapi.cloud
- Creați un cont nou sau autentificați-vă
- Verificați-vă e-mailul

## Pasul 2: Conectați contul MT5
- Faceți clic pe Cont nou
- Selectați Conectare cont existent
- Introduceți detaliile MT5: Server, Login, Parolă
- Faceți clic pe Creare cont

## Pasul 3: Obțineți ID-ul contului
- După crearea contului, veți vedea ID-ul contului
- Copiați ID-ul contului
- Introduceți-l în KanutsananFX

## Pasul 4: Obțineți cheia API
- Accesați Setări, apoi Acces API
- Creați un nou token API
- Copiați tokenul
- Introduceți-l în KanutsananFX

## Important
- Nu partajați niciodată cheia API
- Utilizați 2FA pentru securitate"New Account"\n- Select "Connect existing account"\n- Enter MT5 details: Server, Login, Password\n- Click "Create Account"\n\n## Step 3: Get Account ID\n- After creating the account, you will see the Account ID\n- Copy the Account ID\n- Enter it in KanutsananFX\n\n## Step 4: Get API Key\n- Go to Settings → API Access\n- Create a new API Token\n- Copy the Token\n- Enter it in KanutsananFX\n\n## Important\n- Never share your API Key\n- Use 2FA for security',
  guideAiProviderContent: '# Ghid furnizor AI

## 1. KanutsananFX (Implicit)
- LLM încorporat, nu este necesară nicio cheie API

## 2. OpenAI
- Website: https://platform.openai.com

## 3. Anthropic (Claude)
- Website: https://console.anthropic.com

## 4. Google Gemini
- Website: https://aistudio.google.com

## 5. Grok (xAI)
- Website: https://console.x.ai

## 6. Perplexity
- Website: https://www.perplexity.ai/settings/api

## 7. OpenRouter
- Website: https://openrouter.ai',
  guideTradingSkillsContent: '# Ghid de abilități de tranzacționare

## Intervale de verificare automată
- 30 de secunde - Cel mai frecvent
- 1-10 minute - Moderat
- 1-5 ore - Cel mai puțin frecvent

## Sistem de analiză PASUL 0-9
- PASUL 0: Verificați deschiderea/închiderea pieței
- PASUL 1: Prețul curent
- PASUL 2: Analizați graficul M15
- PASUL 3: Calculați SL/TP
- PASUL 4: Verificați Risk/Reward
- PASUL 5: Calculați dimensiunea poziției
- PASUL 6: Evaluați puterea semnalului
- PASUL 7: Verificați direcția
- PASUL 8: Verificați API-ul
- PASUL 9: Verificați pozițiile existente',
  guideCommandsContent: '# Ghid de comenzi

## 1. Verificați tranzacția
- Analizați piața folosind PASUL 0-9
- Afișați rezultatele analizei

## 2. Aprobați tranzacția
- Executați tranzacția pe baza analizei

## 3. Setați tranzacționarea automată
- Verificați și tranzacționați automat la program

## 4. Anulați tranzacționarea automată
- Opriți imediat tranzacționarea automată',
  developerLinks: 'Linkuri și contacte',
  sourceCodeReference: 'Referință cod sursă',
  youtubeReferences: 'Referințe video YouTube',
  videoOne: 'Video 1',
  videoTwo: 'Video 2',
  developerLinkChat: 'Discutați cu dezvoltatorul LoveMoney AI',
  developerLinkLoveMoneyAi: 'LoveMoney AI pe ChatGPT',
  developerLinkYoutubeOfficial: 'Canalul YouTube oficial LoveMoney',
  developerLinkFacebookPage: 'Pagina de Facebook LoveMoney',
  developerLinkLokathibodi: 'Scriptura Lokathibodi',
  developerLinkGardenMain: 'Grădina de merite Dharma',
  developerLinkGardenActivities: 'Activități în grădina Dharma',
  developerLinkRiceTrade: 'Grup de tranzacționare online cu orez',
  developerLinkGrassTrade: 'Grup de tranzacționare cu iarbă Pangola',
  developerLinkEnergyGroup: 'Grup de energie cu auto-rafinare',
  developerLinkPropertyGroup: 'Grup de tranzacționare imobiliară',
  setupStep: 'Pasul',
  setupMetaApiDesc: 'Introduceți ID-ul contului și cheia API de la MetaAPI pentru a vă conecta contul de tranzacționare MT5',
  setupAiBrainDesc: 'Selectați un furnizor AI pentru analiză și conversație',
  accountIdPlaceholder: 'Introduceți ID-ul contului MetaAPI',
  connectMetaApi: 'Conectați MetaAPI',
  connectAiBrain: 'Conectați creierul AI',
  viewGuide: 'Vizualizați ghidul',
  backToMetaApi: 'Înapoi la configurarea MetaAPI',
  connectionFailedDesc: 'Vă rugăm să verificați ID-ul contului și cheia API. Consultați meniul Ghid pentru ajutor.',
  pleaseEnterAiKey: 'Vă rugăm să introduceți cheia API pentru furnizorul AI selectat',
  aiResponseCheckTrade: 'Se analizează piața... Vă rugăm să utilizați butonul Verificați tranzacția de pe ecranul Tranzacționare pentru o analiză în timp real de la MetaAPI.',
  aiResponseApproveTrade: 'Vă rugăm să utilizați butonul Aprobați tranzacția de pe ecranul Tranzacționare după verificarea tranzacției. Sistemul va executa ordinele pe baza analizei.',
  aiResponseAutoTrade: 'Vă rugăm să configurați mai întâi sincronizarea tranzacționării automate în Abilități de tranzacționare, apoi apăsați Setați tranzacționarea automată pe ecranul Tranzacționare.',
  aiResponseCancelAuto: 'Vă rugăm să apăsați butonul Anulați tranzacționarea automată de pe ecranul Tranzacționare.',
  aiResponseDharma: 'Dharma este esențială în viață. Tranzacționarea este la fel - necesită atenție, concentrare, fără lăcomie, fără furie. Anapanasati (conștientizarea respirației) este o bază excelentă pentru calmarea minții.',
  aiResponseGreeting: 'Salut! Sunt KanutsananFX, bucuros să vă servesc. Vă pot ajuta cu analiza pieței Forex, recomandări de tranzacționare, personalizarea abilităților de tranzacționare și discuții despre Dharma și sistemele financiare globale.',
  aiResponseDefault: 'Vă mulțumim pentru mesaj. Sunt KanutsananFX, gata să vă ajut cu tranzacționarea Forex și discuțiile despre Dharma. Puteți utiliza comenzile: Verificați tranzacția, Aprobați tranzacția, Setați tranzacționarea automată, Anulați tranzacționarea automată.',
  aiErrorGeneric: 'Ne pare rău, nu putem răspunde în acest moment.',
  aiErrorConnection: 'A apărut o eroare. Vă rugăm să verificați cheia API și conexiunea la internet.',
  darkMode: 'Mod întunecat',
  notifications: 'Notificări',
  clearChatHistory: 'Ștergeți istoricul chat-ului',
  clearChatConfirm: 'Doriți să ștergeți tot istoricul chat-ului?',
  exportSettings: 'Exportați setările',
  importSettings: 'Importați setările',
  settingsMetaApiSection: 'MetaAPI',
  settingsAiBrainSection: 'Creier AI',
  settingsLanguageSection: 'Limbă',
  settingsBackupSection: 'Backup/Restaurare',
  settingsAboutSection: 'Despre',
  tradeAnalysisResult: 'Rezultatul analizei',
  trendUp: 'Trend ascendent',
  trendDown: 'Trend descendent',
  signalStrength: 'Puterea semnalului',
  entryPrice: 'Prețul de intrare',
  stopLoss: 'Stop Loss',
  takeProfit: 'Take Profit',
  lotSize: 'Lot Size',
  riskReward: 'Risk/Reward',
  noAnalysisYet: 'Nicio analiză încă',
  analyzing: 'Se analizează...',
  executing: 'Se execută...',
  autoTradeActive: 'Tranzacționarea automată este activă',
  autoTradeInactive: 'Tranzacționarea automată este inactivă',
};

export default ro;
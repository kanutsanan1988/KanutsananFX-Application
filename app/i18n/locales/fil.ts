import { TranslationKey } from '../keys';

const fil: Record<TranslationKey, string> = {
  appName: 'KanutsananFX',
  welcome: 'Maligayang pagdating sa KanutsananFX',
  settings: 'Mga Setting',
  chat: 'AI Chat',
  trade: 'Trade',
  guide: 'Gabay',
  developer: 'Developer',
  tradingSkills: 'Mga Kasanayan sa Trading',
  metaApiSettings: 'Mga Setting ng MetaAPI',
  accountId: 'Account ID',
  apiKey: 'API Key',
  aiBrainSettings: 'AI Brain',
  selectAiProvider: 'Pumili ng AI Provider',
  apiKeyPlaceholder: 'Ilagay ang API Key',
  save: 'I-save',
  cancel: 'Kanselahin',
  connect: 'Ikonekta',
  disconnect: 'Idiskonekta',
  connected: 'Konektado',
  disconnected: 'Hindi Konektado',
  connectionSuccess: 'Matagumpay ang Koneksyon',
  connectionFailed: 'Nabigo ang Koneksyon',
  pleaseSetup: 'Paki-setup muna ang MetaAPI at AI Brain',
  checkTrade: 'Suriin ang Trade',
  approveTrade: 'Aprubahan ang Trade',
  setAutoTrade: 'Itakda ang Auto Trading',
  cancelAutoTrade: 'Kanselahin ang Auto Trading',
  autoTrading: 'Auto Trading',
  tradingInterval: 'Pagitan ng Pagsusuri sa Trading',
  selectPair: 'Pumili ng Trading Pair',
  checkTradeDesc: 'Suriin ang merkado at magbigay ng mga rekomendasyon (STEP 0-9)',
  approveTradeDesc: 'Magpadala ng trade order batay sa mga rekomendasyon',
  setAutoTradeDesc: 'Itakda ang awtomatikong iskedyul ng pagsusuri at trade',
  cancelAutoTradeDesc: 'Ihinto ang awtomatikong sistema ng trading',
  analyzeMarket: 'Suriin ang Merkado',
  sendTradeOrder: 'Magpadala ng Trade Order',
  autoCheckEvery: 'Suriin bawat',
  stopAutoTrading: 'Ihinto ang Auto Trading',
  confirmTrade: 'Kumpirmahin ang Trade',
  tradeSuccess: 'Matagumpay ang Trade',
  tradeFailed: 'Nabigo ang Trade',
  notReady: 'Hindi Handa para sa Trade',
  checkFirst: 'Pakisuri muna ang trade',
  autoTradeStarted: 'Nagsimula na ang auto trading',
  autoTradeStopped: 'Huminto na ang auto trading',
  typeMessage: 'Mag-type ng mensahe...',
  voiceInput: 'Voice Input',
  aiThinking: 'Nag-iisip...',
  welcomeMessage: 'Kumusta! Ako si KanutsananFX, masaya akong maglingkod sa iyo.',
  voiceComingSoon: 'Tampok na pag-uusap gamit ang boses - darating sa susunod na bersyon',
  guideMetaApi: 'Gabay sa MetaAPI',
  guideAiProvider: 'Gabay sa AI Provider',
  guideTradingSkills: 'Gabay sa Mga Kasanayan sa Trading',
  guideCommands: 'Gabay sa Mga Utos',
  selectGuide: 'Pumili ng gabay na babasahin',
  back: 'Bumalik',
  noInternet: 'Walang Koneksyon sa Internet',
  setupRequired: 'Kailangan ng Setup',
  close: 'Isara',
  seconds: 'segundo',
  minutes: 'minuto',
  hours: 'oras',
  backup: 'Backup',
  restore: 'Ibalik',
  backupToGDrive: 'I-backup sa Google Drive',
  restoreFromGDrive: 'Ibalik mula sa Google Drive',
  backupComingSoon: 'Darating ang tampok na backup sa susunod na bersyon',
  restoreComingSoon: 'Darating ang tampok na pagbabalik sa susunod na bersyon',
  currentLlm: 'Kasalukuyang AI Brain',
  status: 'Katayuan',
  tradingPair: 'Trading Pair',
  connectionStatus: 'Katayuan ng Koneksyon',
  autoCheckInterval: 'Pagitan ng Auto Check',
  selectTradingPair: 'Pumili ng Trading Pair',
  loadingPairs: 'Nilo-load ang mga trading pair...',
  currentSetting: 'Kasalukuyan',
  refreshPairs: 'I-refresh ang mga trading pair',
  connectMetaApiFirst: 'Pakikonekta muna ang MetaAPI para ma-load ang mga trading pair',
  developerName: 'Kanutsanan Pongpanna',
  developerTitle: 'Developer ng KanutsananFX',
  developerBio: 'Online Agricultural Trader | AI Trading Developer
Maha Sarakham | B.Sc. Applied Physics, Mahasarakham University',
  developerQuote: 'Tumatayo kami bilang mga hindi nang-aapi kaninuman, ngunit hindi kami ipinanganak para yurakan.',
  linksAndContacts: 'Mga Link at Kontak',
  sourceCodeRef: 'Sanggunian ng Source Code',
  youtubeRef: 'Sanggunian ng Video sa YouTube',
  language: 'Wika',
  selectLanguage: 'Pumili ng Wika',
  languageName: 'Filipino',
  setupTitle: 'Paunang Setup',
  setupDesc: 'Ilagay ang impormasyon para simulang gamitin ang KanutsananFX',
  step1MetaApi: 'Hakbang 1: I-setup ang MetaAPI',
  step2AiBrain: 'Hakbang 2: I-setup ang AI Brain',
  startUsing: 'Simulang Gamitin',
  skipSetup: 'Laktawan ang Setup',
  letsGo: 'Tara na!',
  resetConnection: 'I-reset ang Koneksyon',
  resetWarning: 'Lahat ng data ng koneksyon ay mabubura',
  reset: 'I-reset',
  ok: 'OK',
  confirm: 'Kumpirmahin',
  warning: 'Babala',
  error: 'Error',
  success: 'Tagumpay',
  loading: 'Nilo-load...',
  retry: 'Subukang Muli',
  comingSoon: 'Malapit na',
  version: 'Bersyon',
  guideMetaApiContent: '# Gabay sa MetaAPI

## Hakbang 1: Magrehistro ng MetaAPI Account
- Pumunta sa https://app.metaapi.cloud
- Gumawa ng bagong account o mag-sign in
- I-verify ang iyong email

## Hakbang 2: Ikonekta ang MT5 Account
- I-click ang Bagong Account
- Piliin ang Ikonekta ang umiiral na account
- Ilagay ang mga detalye ng MT5: Server, Login, Password
- I-click ang Gumawa ng Account

## Hakbang 3: Kunin ang Account ID
- Pagkatapos gawin ang account, makikita mo ang Account ID
- Kopyahin ang Account ID
- Ilagay ito sa KanutsananFX

## Hakbang 4: Kunin ang API Key
- Pumunta sa Mga Setting tapos API Access
- Gumawa ng bagong API Token
- Kopyahin ang Token
- Ilagay ito sa KanutsananFX

## Mahalaga
- Huwag kailanman ibahagi ang iyong API Key
- Gumamit ng 2FA para sa seguridad"New Account"\n- Select "Connect existing account"\n- Enter MT5 details: Server, Login, Password\n- Click "Create Account"\n\n## Step 3: Get Account ID\n- After creating the account, you will see the Account ID\n- Copy the Account ID\n- Enter it in KanutsananFX\n\n## Step 4: Get API Key\n- Go to Settings → API Access\n- Create a new API Token\n- Copy the Token\n- Enter it in KanutsananFX\n\n## Important\n- Never share your API Key\n- Use 2FA for security',
  guideAiProviderContent: '# Gabay sa AI Provider

## 1. KanutsananFX (Default)
- Built-in na LLM, hindi kailangan ng API Key

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
  guideTradingSkillsContent: '# Gabay sa Mga Kasanayan sa Trading

## Mga Agwat ng Auto Check
- 30 segundo - Pinakamadalas
- 1-10 minuto - Katamtaman
- 1-5 oras - Pinakabihira

## Sistema ng Pagsusuri STEP 0-9
- STEP 0: Suriin kung bukas/sarado ang merkado
- STEP 1: Kasalukuyang presyo
- STEP 2: Suriin ang M15 chart
- STEP 3: Kalkulahin ang SL/TP
- STEP 4: Suriin ang Risk/Reward
- STEP 5: Kalkulahin ang Laki ng Posisyon
- STEP 6: Tayahin ang lakas ng signal
- STEP 7: Suriin ang direksyon
- STEP 8: I-verify ang API
- STEP 9: Suriin ang mga umiiral na posisyon',
  guideCommandsContent: '# Gabay sa Mga Utos

## 1. Suriin ang Trade
- Suriin ang merkado gamit ang STEP 0-9
- Ipakita ang mga resulta ng pagsusuri

## 2. Aprubahan ang Trade
- Isagawa ang trade batay sa pagsusuri

## 3. Itakda ang Auto Trading
- Awtomatikong suriin at mag-trade ayon sa iskedyul

## 4. Kanselahin ang Auto Trading
- Itigil agad ang awtomatikong trading',
  developerLinks: 'Mga Link at Contact',
  sourceCodeReference: 'Sanggunian ng Source Code',
  youtubeReferences: 'Mga Sanggunian sa Video sa YouTube',
  videoOne: 'Video 1',
  videoTwo: 'Video 2',
  developerLinkChat: 'Makipag-chat sa Developer LoveMoney AI',
  developerLinkLoveMoneyAi: 'LoveMoney AI sa ChatGPT',
  developerLinkYoutubeOfficial: 'YouTube Channel LoveMoney Official',
  developerLinkFacebookPage: 'Facebook Page LoveMoney',
  developerLinkLokathibodi: 'Kasulatan ng Lokathibodi',
  developerLinkGardenMain: 'Hardin ng Dharma ng Kagalingan',
  developerLinkGardenActivities: 'Mga Aktibidad sa Hardin ng Dharma',
  developerLinkRiceTrade: 'Online na Grupo sa Kalakalan ng Bigas',
  developerLinkGrassTrade: 'Grupo sa Kalakalan ng Pangola Grass',
  developerLinkEnergyGroup: 'Grupo ng Enerhiya na Self-Refining',
  developerLinkPropertyGroup: 'Grupo sa Kalakalan ng Real Estate',
  setupStep: 'Hakbang',
  setupMetaApiDesc: 'Ilagay ang Account ID at API Key mula sa MetaAPI para ikonekta ang iyong MT5 trading account',
  setupAiBrainDesc: 'Pumili ng isang AI provider para sa pagsusuri at pag-uusap',
  accountIdPlaceholder: 'Ilagay ang MetaAPI Account ID',
  connectMetaApi: 'Ikonekta ang MetaAPI',
  connectAiBrain: 'Ikonekta ang AI Brain',
  viewGuide: 'Tingnan ang Gabay',
  backToMetaApi: 'Bumalik sa Setup ng MetaAPI',
  connectionFailedDesc: 'Pakisuri ang iyong Account ID at API Key. Tingnan ang menu ng Gabay para sa tulong.',
  pleaseEnterAiKey: 'Pakilagay ang API Key para sa napiling AI provider',
  aiResponseCheckTrade: 'Sinusuri ang merkado... Pakigamit ang pindutan ng Suriin ang Trade sa screen ng Trade para sa real-time na pagsusuri mula sa MetaAPI.',
  aiResponseApproveTrade: 'Pakigamit ang pindutan ng Aprubahan ang Trade sa screen ng Trade pagkatapos suriin ang trade. Isasagawa ng sistema ang mga order batay sa pagsusuri.',
  aiResponseAutoTrade: 'Paki-configure muna ang timing ng auto-trade sa Mga Kasanayan sa Trading, pagkatapos ay pindutin ang Itakda ang Auto Trading sa screen ng Trade.',
  aiResponseCancelAuto: 'Pakipindot ang pindutan ng Kanselahin ang Auto Trading sa screen ng Trade.',
  aiResponseDharma: 'Mahalaga ang Dharma sa buhay. Ang trading ay pareho rin - nangangailangan ito ng pag-iisip, konsentrasyon, walang kasakiman, walang galit. Ang Anapanasati (pagiging malay sa hininga) ay isang mahusay na pundasyon para sa pagpapakalma ng isip.',
  aiResponseGreeting: 'Kamusta! Ako si KanutsananFX, masaya akong maglingkod sa iyo. Matutulungan kita sa pagsusuri ng merkado ng Forex, mga rekomendasyon sa trading, i-customize ang mga kasanayan sa trading, at talakayin ang Dharma at mga pandaigdigang sistema ng pananalapi.',
  aiResponseDefault: 'Salamat sa iyong mensahe. Ako si KanutsananFX, handang tumulong sa iyo sa Forex trading at mga talakayan sa Dharma. Maaari mong gamitin ang mga utos: Suriin ang Trade, Aprubahan ang Trade, Itakda ang Auto Trading, Kanselahin ang Auto Trading.',
  aiErrorGeneric: 'Paumanhin, hindi makatugon sa ngayon.',
  aiErrorConnection: 'Nagkaroon ng error. Pakisuri ang iyong API Key at koneksyon sa internet.',
  darkMode: 'Dark Mode',
  notifications: 'Mga Abiso',
  clearChatHistory: 'I-clear ang Kasaysayan ng Chat',
  clearChatConfirm: 'Gusto mo bang i-clear ang lahat ng kasaysayan ng chat?',
  exportSettings: 'I-export ang Mga Setting',
  importSettings: 'I-import ang Mga Setting',
  settingsMetaApiSection: 'MetaAPI',
  settingsAiBrainSection: 'AI Brain',
  settingsLanguageSection: 'Wika',
  settingsBackupSection: 'Backup/Ibalik',
  settingsAboutSection: 'Tungkol sa',
  tradeAnalysisResult: 'Resulta ng Pagsusuri',
  trendUp: 'Uptrend',
  trendDown: 'Downtrend',
  signalStrength: 'Lakas ng Signal',
  entryPrice: 'Presyo ng Pagpasok',
  stopLoss: 'Stop Loss',
  takeProfit: 'Take Profit',
  lotSize: 'Lot Size',
  riskReward: 'Risk/Reward',
  noAnalysisYet: 'Wala pang pagsusuri',
  analyzing: 'Sinusuri...',
  executing: 'Isinasagawa...',
  autoTradeActive: 'Aktibo ang auto trading',
  autoTradeInactive: 'Hindi aktibo ang auto trading',
};

export default fil;
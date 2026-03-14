import { TranslationKey } from '../keys';

const ml: Record<TranslationKey, string> = {
  appName: 'KanutsananFX',
  welcome: 'KanutsananFX-ലേക്ക് സ്വാഗതം',
  settings: 'ക്രമീകരണങ്ങൾ',
  chat: 'AI ചാറ്റ്',
  trade: 'ട്രേഡ്',
  guide: 'ഗൈഡ്',
  developer: 'ഡെവലപ്പർ',
  tradingSkills: 'ട്രേഡിംഗ് കഴിവുകൾ',
  metaApiSettings: 'MetaAPI ക്രമീകരണങ്ങൾ',
  accountId: 'Account ID',
  apiKey: 'API Key',
  aiBrainSettings: 'AI ബ്രെയിൻ',
  selectAiProvider: 'AI പ്രൊവൈഡറെ തിരഞ്ഞെടുക്കുക',
  apiKeyPlaceholder: 'API Key നൽകുക',
  save: 'സേവ് ചെയ്യുക',
  cancel: 'റദ്ദാക്കുക',
  connect: 'ബന്ധിപ്പിക്കുക',
  disconnect: 'വിച്ഛേദിക്കുക',
  connected: 'ബന്ധിപ്പിച്ചു',
  disconnected: 'വിച്ഛേദിച്ചു',
  connectionSuccess: 'കണക്ഷൻ വിജയകരം',
  connectionFailed: 'കണക്ഷൻ പരാജയപ്പെട്ടു',
  pleaseSetup: 'ദയവായി ആദ്യം MetaAPI, AI ബ്രെയിൻ എന്നിവ സജ്ജീകരിക്കുക',
  checkTrade: 'ട്രേഡ് പരിശോധിക്കുക',
  approveTrade: 'ട്രേഡ് അംഗീകരിക്കുക',
  setAutoTrade: 'ഓട്ടോ ട്രേഡിംഗ് സജ്ജമാക്കുക',
  cancelAutoTrade: 'ഓട്ടോ ട്രേഡിംഗ് റദ്ദാക്കുക',
  autoTrading: 'ഓട്ടോ ട്രേഡിംഗ്',
  tradingInterval: 'ട്രേഡിംഗ് പരിശോധന ഇടവേള',
  selectPair: 'ട്രേഡിംഗ് ജോഡി തിരഞ്ഞെടുക്കുക',
  checkTradeDesc: 'വിപണി വിശകലനം ചെയ്ത് ശുപാർശകൾ നൽകുക (STEP 0-9)',
  approveTradeDesc: 'ശുപാർശകളുടെ അടിസ്ഥാനത്തിൽ ട്രേഡ് ഓർഡർ അയയ്ക്കുക',
  setAutoTradeDesc: 'ഓട്ടോമാറ്റിക് പരിശോധന, ട്രേഡ് ഷെഡ്യൂൾ എന്നിവ സജ്ജമാക്കുക',
  cancelAutoTradeDesc: 'ഓട്ടോമാറ്റിക് ട്രേഡിംഗ് സിസ്റ്റം നിർത്തുക',
  analyzeMarket: 'വിപണി വിശകലനം ചെയ്യുക',
  sendTradeOrder: 'ട്രേഡ് ഓർഡർ അയയ്ക്കുക',
  autoCheckEvery: 'ഓരോന്നും പരിശോധിക്കുക',
  stopAutoTrading: 'ഓട്ടോ ട്രേഡിംഗ് നിർത്തുക',
  confirmTrade: 'ട്രേഡ് സ്ഥിരീകരിക്കുക',
  tradeSuccess: 'ട്രേഡ് വിജയിച്ചു',
  tradeFailed: 'ട്രേഡ് പരാജയപ്പെട്ടു',
  notReady: 'ട്രേഡ് ചെയ്യാൻ തയ്യാറല്ല',
  checkFirst: 'ദയവായി ആദ്യം ട്രേഡ് പരിശോധിക്കുക',
  autoTradeStarted: 'ഓട്ടോ ട്രേഡിംഗ് ആരംഭിച്ചു',
  autoTradeStopped: 'ഓട്ടോ ട്രേഡിംഗ് നിർത്തി',
  typeMessage: 'ഒരു സന്ദേശം ടൈപ്പ് ചെയ്യുക...',
  voiceInput: 'വോയിസ് ഇൻപുട്ട്',
  aiThinking: 'ചിന്തിക്കുന്നു...',
  welcomeMessage: 'നമസ്കാരം! ഞാൻ KanutsananFX, നിങ്ങളെ സേവിക്കുന്നതിൽ സന്തോഷമുണ്ട്.',
  voiceComingSoon: 'വോയിസ് സംഭാഷണ ഫീച്ചർ - അടുത്ത പതിപ്പിൽ വരുന്നു',
  guideMetaApi: 'MetaAPI ഗൈഡ്',
  guideAiProvider: 'AI പ്രൊവൈഡർ ഗൈഡ്',
  guideTradingSkills: 'ട്രേഡിംഗ് കഴിവുകൾ ഗൈഡ്',
  guideCommands: 'കമാൻഡുകൾ ഗൈഡ്',
  selectGuide: 'വായിക്കാൻ ഒരു ഗൈഡ് തിരഞ്ഞെടുക്കുക',
  back: 'പുറകോട്ട്',
  noInternet: 'ഇന്റർനെറ്റ് കണക്ഷൻ ഇല്ല',
  setupRequired: 'സജ്ജീകരണം ആവശ്യമാണ്',
  close: 'അടയ്ക്കുക',
  seconds: 'സെക്കൻഡ്',
  minutes: 'മിനിറ്റ്',
  hours: 'മണിക്കൂർ',
  backup: 'ബാക്കപ്പ്',
  restore: 'പുനഃസ്ഥാപിക്കുക',
  backupToGDrive: 'Google Drive-ലേക്ക് ബാക്കപ്പ് ചെയ്യുക',
  restoreFromGDrive: 'Google Drive-ൽ നിന്ന് പുനഃസ്ഥാപിക്കുക',
  backupComingSoon: 'ബാക്കപ്പ് ഫീച്ചർ അടുത്ത പതിപ്പിൽ വരുന്നു',
  restoreComingSoon: 'പുനഃസ്ഥാപിക്കൽ ഫീച്ചർ അടുത്ത പതിപ്പിൽ വരുന്നു',
  currentLlm: 'നിലവിലെ AI ബ്രെയിൻ',
  status: 'നില',
  tradingPair: 'ട്രേഡിംഗ് ജോഡി',
  connectionStatus: 'കണക്ഷൻ നില',
  autoCheckInterval: 'ഓട്ടോ പരിശോധന ഇടവേള',
  selectTradingPair: 'ട്രേഡിംഗ് ജോഡി തിരഞ്ഞെടുക്കുക',
  loadingPairs: 'ട്രേഡിംഗ് ജോഡികൾ ലോഡ് ചെയ്യുന്നു...',
  currentSetting: 'നിലവിൽ',
  refreshPairs: 'ട്രേഡിംഗ് ജോഡികൾ പുതുക്കുക',
  connectMetaApiFirst: 'ട്രേഡിംഗ് ജോഡികൾ ലോഡ് ചെയ്യുന്നതിന് ദയവായി ആദ്യം MetaAPI ബന്ധിപ്പിക്കുക',
  developerName: 'Kanutsanan Pongpanna',
  developerTitle: 'KanutsananFX ഡെവലപ്പർ',
  developerBio: 'ഓൺലൈൻ കാർഷിക വ്യാപാരി | AI ട്രേഡിംഗ് ഡെവലപ്പർ\nMaha Sarakham | B.Sc. അപ്ലൈഡ് ഫിസിക്സ്, Mahasarakham University',
  developerQuote: 'ഞങ്ങൾ ആരെയും അടിച്ചമർത്താത്തവരായി നിലകൊള്ളുന്നു, എന്നാൽ ചവിട്ടിമെതിക്കപ്പെടാൻ ഞങ്ങൾ ജനിച്ചവരല്ല.',
  linksAndContacts: 'ലിങ്കുകളും കോൺടാക്റ്റുകളും',
  sourceCodeRef: 'സോഴ്സ് കോഡ് റഫറൻസ്',
  youtubeRef: 'YouTube വീഡിയോ റഫറൻസ്',
  language: 'ഭാഷ',
  selectLanguage: 'ഭാഷ തിരഞ്ഞെടുക്കുക',
  languageName: 'മലയാളം',
  setupTitle: 'പ്രാരംഭ സജ്ജീകരണം',
  setupDesc: 'KanutsananFX ഉപയോഗിക്കാൻ തുടങ്ങുന്നതിന് വിവരങ്ങൾ നൽകുക',
  step1MetaApi: 'ഘട്ടം 1: MetaAPI സജ്ജീകരിക്കുക',
  step2AiBrain: 'ഘട്ടം 2: AI ബ്രെയിൻ സജ്ജീകരിക്കുക',
  startUsing: 'ഉപയോഗിക്കാൻ തുടങ്ങുക',
  skipSetup: 'സജ്ജീകരണം ഒഴിവാക്കുക',
  letsGo: 'പോകാം!',
  resetConnection: 'കണക്ഷൻ പുനഃസജ്ജമാക്കുക',
  resetWarning: 'എല്ലാ കണക്ഷൻ ഡാറ്റയും ഇല്ലാതാക്കപ്പെടും',
  reset: 'പുനഃസജ്ജമാക്കുക',
  ok: 'ശരി',
  confirm: 'സ്ഥിരീകരിക്കുക',
  warning: 'മുന്നറിയിപ്പ്',
  error: 'പിശക്',
  success: 'വിജയം',
  loading: 'ലോഡ് ചെയ്യുന്നു...',
  retry: 'വീണ്ടും ശ്രമിക്കുക',
  comingSoon: 'ഉടൻ വരുന്നു',
  version: 'പതിപ്പ്',
  guideMetaApiContent: '# MetaAPI ഗൈഡ്

## ഘട്ടം 1: MetaAPI അക്കൗണ്ട് രജിസ്റ്റർ ചെയ്യുക
- https://app.metaapi.cloud എന്നതിലേക്ക് പോകുക
- ഒരു പുതിയ അക്കൗണ്ട് ഉണ്ടാക്കുക അല്ലെങ്കിൽ സൈൻ ഇൻ ചെയ്യുക
- നിങ്ങളുടെ ഇമെയിൽ സ്ഥിരീകരിക്കുക

## ഘട്ടം 2: MT5 അക്കൗണ്ട് ബന്ധിപ്പിക്കുക
- പുതിയ അക്കൗണ്ടിൽ ക്ലിക്ക് ചെയ്യുക
- നിലവിലുള്ള അക്കൗണ്ട് ബന്ധിപ്പിക്കുക തിരഞ്ഞെടുക്കുക
- MT5 വിശദാംശങ്ങൾ നൽകുക: സെർവർ, ലോഗിൻ, പാസ്‌വേഡ്
- അക്കൗണ്ട് ഉണ്ടാക്കുക ക്ലിക്ക് ചെയ്യുക

## ഘട്ടം 3: അക്കൗണ്ട് ഐഡി നേടുക
- അക്കൗണ്ട് ഉണ്ടാക്കിയ ശേഷം, നിങ്ങൾക്ക് അക്കൗണ്ട് ഐഡി കാണാൻ കഴിയും
- അക്കൗണ്ട് ഐഡി പകർത്തുക
- അത് KanutsananFX-ൽ നൽകുക

## ഘട്ടം 4: API കീ നേടുക
- ക്രമീകരണങ്ങളിലേക്ക് പോകുക, തുടർന്ന് API ആക്‌സസ്സ്
- ഒരു പുതിയ API ടോക്കൺ ഉണ്ടാക്കുക
- ടോക്കൺ പകർത്തുക
- അത് KanutsananFX-ൽ നൽകുക

## പ്രധാനം
- നിങ്ങളുടെ API കീ ഒരിക്കലും പങ്കിടരുത്
- സുരക്ഷയ്ക്കായി 2FA ഉപയോഗിക്കുക"New Account"\n- Select "Connect existing account"\n- Enter MT5 details: Server, Login, Password\n- Click "Create Account"\n\n## Step 3: Get Account ID\n- After creating the account, you will see the Account ID\n- Copy the Account ID\n- Enter it in KanutsananFX\n\n## Step 4: Get API Key\n- Go to Settings → API Access\n- Create a new API Token\n- Copy the Token\n- Enter it in KanutsananFX\n\n## Important\n- Never share your API Key\n- Use 2FA for security',
  guideAiProviderContent: '# AI പ്രൊവൈഡർ ഗൈഡ്

## 1. KanutsananFX (ഡിഫോൾട്ട്)
- ബിൽറ്റ്-ഇൻ എൽഎൽഎം, API കീ ആവശ്യമില്ല

## 2. OpenAI
- വെബ്സൈറ്റ്: https://platform.openai.com

## 3. Anthropic (Claude)
- വെബ്സൈറ്റ്: https://console.anthropic.com

## 4. Google Gemini
- വെബ്സൈറ്റ്: https://aistudio.google.com

## 5. Grok (xAI)
- വെബ്സൈറ്റ്: https://console.x.ai

## 6. Perplexity
- വെബ്സൈറ്റ്: https://www.perplexity.ai/settings/api

## 7. OpenRouter
- വെബ്സൈറ്റ്: https://openrouter.ai',
  guideTradingSkillsContent: '# ട്രേഡിംഗ് സ്കിൽസ് ഗൈഡ്

## ഓട്ടോ ചെക്ക് ഇടവേളകൾ
- 30 സെക്കൻഡ് - ഏറ്റവും കൂടുതൽ
- 1-10 മിനിറ്റ് - മിതമായ
- 1-5 മണിക്കൂർ - ഏറ്റവും കുറഞ്ഞത്

## അനാലിസിസ് സിസ്റ്റം STEP 0-9
- STEP 0: മാർക്കറ്റ് തുറന്നോ/അടച്ചോ എന്ന് പരിശോധിക്കുക
- STEP 1: നിലവിലെ വില
- STEP 2: M15 ചാർട്ട് വിശകലനം ചെയ്യുക
- STEP 3: SL/TP കണക്കാക്കുക
- STEP 4: Risk/Reward പരിശോധിക്കുക
- STEP 5: പൊസിഷൻ വലുപ്പം കണക്കാക്കുക
- STEP 6: സിഗ്നൽ ശക്തി വിലയിരുത്തുക
- STEP 7: ദിശ പരിശോധിക്കുക
- STEP 8: API പരിശോധിക്കുക
- STEP 9: നിലവിലുള്ള പൊസിഷനുകൾ പരിശോധിക്കുക',
  guideCommandsContent: '# കമാൻഡ്സ് ഗൈഡ്

## 1. ട്രേഡ് പരിശോധിക്കുക
- STEP 0-9 ഉപയോഗിച്ച് മാർക്കറ്റ് വിശകലനം ചെയ്യുക
- വിശകലന ഫലങ്ങൾ പ്രദർശിപ്പിക്കുക

## 2. ട്രേഡ് അംഗീകരിക്കുക
- വിശകലനത്തെ അടിസ്ഥാനമാക്കി ട്രേഡ് നടപ്പിലാക്കുക

## 3. ഓട്ടോ ട്രേഡിംഗ് സജ്ജമാക്കുക
- ഷെഡ്യൂളിൽ യാന്ത്രികമായി പരിശോധിച്ച് ട്രേഡ് ചെയ്യുക

## 4. ഓട്ടോ ട്രേഡിംഗ് റദ്ദാക്കുക
- യാന്ത്രിക ട്രേഡിംഗ് ഉടനടി നിർത്തുക',
  developerLinks: 'ലിങ്കുകളും കോൺടാക്റ്റുകളും',
  sourceCodeReference: 'സോഴ്സ് കോഡ് റഫറൻസ്',
  youtubeReferences: 'YouTube വീഡിയോ റഫറൻസുകൾ',
  videoOne: 'വീഡിയോ 1',
  videoTwo: 'വീഡിയോ 2',
  developerLinkChat: 'ഡെവലപ്പർ LoveMoney AI-യുമായി ചാറ്റ് ചെയ്യുക',
  developerLinkLoveMoneyAi: 'ChatGPT-യിലെ LoveMoney AI',
  developerLinkYoutubeOfficial: 'YouTube ചാനൽ LoveMoney ഒഫീഷ്യൽ',
  developerLinkFacebookPage: 'ഫേസ്ബുക്ക് പേജ് LoveMoney',
  developerLinkLokathibodi: 'ലോകാതിബോധി ഗ്രന്ഥം',
  developerLinkGardenMain: 'ധർമ്മ ഗാർഡൻ ഓഫ് മെറിറ്റ്',
  developerLinkGardenActivities: 'ധർമ്മ ഗാർഡൻ പ്രവർത്തനങ്ങൾ',
  developerLinkRiceTrade: 'ഓൺലൈൻ റൈസ് ട്രേഡിംഗ് ഗ്രൂപ്പ്',
  developerLinkGrassTrade: 'പംഗോള ഗ്രാസ് ട്രേഡിംഗ് ഗ്രൂപ്പ്',
  developerLinkEnergyGroup: 'സെൽഫ്-റിഫൈനിംഗ് എനർജി ഗ്രൂപ്പ്',
  developerLinkPropertyGroup: 'റിയൽ എസ്റ്റേറ്റ് ട്രേഡിംഗ് ഗ്രൂപ്പ്',
  setupStep: 'ഘട്ടം',
  setupMetaApiDesc: 'നിങ്ങളുടെ MT5 ട്രേഡിംഗ് അക്കൗണ്ട് ബന്ധിപ്പിക്കുന്നതിന് MetaAPI-ൽ നിന്ന് അക്കൗണ്ട് ഐഡിയും API കീയും നൽകുക',
  setupAiBrainDesc: 'വിശകലനത്തിനും സംഭാഷണത്തിനും ഒരു AI പ്രൊവൈഡറെ തിരഞ്ഞെടുക്കുക',
  accountIdPlaceholder: 'MetaAPI അക്കൗണ്ട് ഐഡി നൽകുക',
  connectMetaApi: 'MetaAPI ബന്ധിപ്പിക്കുക',
  connectAiBrain: 'AI ബ്രെയിൻ ബന്ധിപ്പിക്കുക',
  viewGuide: 'ഗൈഡ് കാണുക',
  backToMetaApi: 'MetaAPI സജ്ജീകരണത്തിലേക്ക് മടങ്ങുക',
  connectionFailedDesc: 'ദയവായി നിങ്ങളുടെ അക്കൗണ്ട് ഐഡിയും API കീയും പരിശോധിക്കുക. സഹായത്തിനായി ഗൈഡ് മെനു കാണുക.',
  pleaseEnterAiKey: 'തിരഞ്ഞെടുത്ത AI പ്രൊവൈഡറിനായി ദയവായി API കീ നൽകുക',
  aiResponseCheckTrade: 'മാർക്കറ്റ് വിശകലനം ചെയ്യുന്നു... MetaAPI-ൽ നിന്ന് തത്സമയ വിശകലനത്തിനായി ട്രേഡ് സ്ക്രീനിലെ ചെക്ക് ട്രേഡ് ബട്ടൺ ഉപയോഗിക്കുക.',
  aiResponseApproveTrade: 'ട്രേഡ് പരിശോധിച്ചതിന് ശേഷം ട്രേഡ് സ്ക്രീനിലെ അപ്രൂവ് ട്രേഡ് ബട്ടൺ ഉപയോഗിക്കുക. സിസ്റ്റം വിശകലനത്തെ അടിസ്ഥാനമാക്കി ഓർഡറുകൾ നടപ്പിലാക്കും.',
  aiResponseAutoTrade: 'ദയവായി ട്രേഡിംഗ് സ്കിൽസിൽ ഓട്ടോ-ട്രേഡ് സമയം ക്രമീകരിക്കുക, തുടർന്ന് ട്രേഡ് സ്ക്രീനിലെ സെറ്റ് ഓട്ടോ ട്രേഡിംഗ് അമർത്തുക.',
  aiResponseCancelAuto: 'ദയവായി ട്രേഡ് സ്ക്രീനിലെ ക്യാൻസൽ ഓട്ടോ ട്രേഡിംഗ് ബട്ടൺ അമർത്തുക.',
  aiResponseDharma: 'ജീവിതത്തിൽ ധർമ്മം അത്യാവശ്യമാണ്. ട്രേഡിംഗും അതുപോലെയാണ് - ഇതിന് ശ്രദ്ധ, ഏകാഗ്രത, അത്യാഗ്രഹമില്ലായ്മ, കോപമില്ലായ്മ എന്നിവ ആവശ്യമാണ്. മനസ്സിനെ ശാന്തമാക്കുന്നതിനുള്ള മികച്ച അടിത്തറയാണ് ആനാപാനസതി (ശ്വാസത്തെക്കുറിച്ചുള്ള അവബോധം).',
  aiResponseGreeting: 'നമസ്കാരം! ഞാൻ KanutsananFX, നിങ്ങളെ സേവിക്കുന്നതിൽ സന്തോഷമുണ്ട്. ഫോറെക്സ് മാർക്കറ്റ് വിശകലനം, ട്രേഡിംഗ് ശുപാർശകൾ, ട്രേഡിംഗ് കഴിവുകൾ ഇഷ്ടാനുസൃതമാക്കൽ, ധർമ്മത്തെയും ആഗോള സാമ്പത്തിക വ്യവസ്ഥകളെയും കുറിച്ച് ചർച്ച ചെയ്യാൻ എനിക്ക് നിങ്ങളെ സഹായിക്കാനാകും.',
  aiResponseDefault: 'നിങ്ങളുടെ സന്ദേശത്തിന് നന്ദി. ഞാൻ KanutsananFX, ഫോറെക്സ് ട്രേഡിംഗിലും ധർമ്മ ചർച്ചകളിലും നിങ്ങളെ സഹായിക്കാൻ തയ്യാറാണ്. നിങ്ങൾക്ക് കമാൻഡുകൾ ഉപയോഗിക്കാം: ട്രേഡ് പരിശോധിക്കുക, ട്രേഡ് അംഗീകരിക്കുക, ഓട്ടോ ട്രേഡിംഗ് സജ്ജമാക്കുക, ഓട്ടോ ട്രേഡിംഗ് റദ്ദാക്കുക.',
  aiErrorGeneric: 'ക്ഷമിക്കണം, ഈ സമയത്ത് പ്രതികരിക്കാൻ കഴിയില്ല.',
  aiErrorConnection: 'ഒരു പിശക് സംഭവിച്ചു. ദയവായി നിങ്ങളുടെ API കീയും ഇന്റർനെറ്റ് കണക്ഷനും പരിശോധിക്കുക.',
  darkMode: 'ഡാർക്ക് മോഡ്',
  notifications: 'അറിയിപ്പുകൾ',
  clearChatHistory: 'ചാറ്റ് ചരിത്രം മായ്‌ക്കുക',
  clearChatConfirm: 'എല്ലാ ചാറ്റ് ചരിത്രവും മായ്‌ക്കാൻ നിങ്ങൾ ആഗ്രഹിക്കുന്നുണ്ടോ?',
  exportSettings: 'ക്രമീകരണങ്ങൾ എക്‌സ്‌പോർട്ടുചെയ്യുക',
  importSettings: 'ക്രമീകരണങ്ങൾ ഇമ്പോർട്ടുചെയ്യുക',
  settingsMetaApiSection: 'MetaAPI',
  settingsAiBrainSection: 'AI ബ്രെയിൻ',
  settingsLanguageSection: 'ഭാഷ',
  settingsBackupSection: 'ബാക്കപ്പ്/പുനഃസ്ഥാപിക്കുക',
  settingsAboutSection: 'വിവരം',
  tradeAnalysisResult: 'വിശകലന ഫലം',
  trendUp: 'അപ്ട്രെൻഡ്',
  trendDown: 'ഡൗൺട്രെൻഡ്',
  signalStrength: 'സിഗ്നൽ ശക്തി',
  entryPrice: 'എൻട്രി വില',
  stopLoss: 'Stop Loss',
  takeProfit: 'Take Profit',
  lotSize: 'Lot Size',
  riskReward: 'Risk/Reward',
  noAnalysisYet: 'ഇതുവരെ വിശകലനമില്ല',
  analyzing: 'വിശകലനം ചെയ്യുന്നു...',
  executing: 'നടപ്പിലാക്കുന്നു...',
  autoTradeActive: 'ഓട്ടോ ട്രേഡിംഗ് സജീവമാണ്',
  autoTradeInactive: 'ഓട്ടോ ട്രേഡിംഗ് നിഷ്ക്രിയമാണ്',
};

export default ml;
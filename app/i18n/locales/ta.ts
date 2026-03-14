import { TranslationKey } from '../keys';

const ta: Record<TranslationKey, string> = {
  appName: 'KanutsananFX',
  welcome: 'KanutsananFX இற்கு வரவேற்கிறோம்',
  settings: 'அமைப்புகள்',
  chat: 'AI அரட்டை',
  trade: 'வர்த்தகம்',
  guide: 'வழிகாட்டி',
  developer: 'அறிவியலாளர்',
  tradingSkills: 'வர்த்தக திறன்கள்',
  metaApiSettings: 'MetaAPI அமைப்புகள்',
  accountId: 'Account ID',
  apiKey: 'API Key',
  aiBrainSettings: 'AI மூளை',
  selectAiProvider: 'AI வழங்குநரைத் தேர்ந்தெடுக',
  apiKeyPlaceholder: 'API Key ஐ உள்ளிடவும்',
  save: 'சேமிக்கவும்',
  cancel: 'ரத்துசெய்யவும்',
  connect: 'இணைக்கவும்',
  disconnect: 'துறக்கவும்',
  connected: 'இணைக்கப்பட்டது',
  disconnected: 'துறக்கப்பட்டது',
  connectionSuccess: 'இணைக்கல் வெற்றி',
  connectionFailed: 'இணைக்கல் தோல்வி',
  pleaseSetup: 'முதலில் MetaAPI மற்றும் AI மூளை அமைக்கவும்',
  checkTrade: 'வர்த்தகத்தை சரிபார்க்கவும்',
  approveTrade: 'வர்த்தகத்தை அங்கீகரிக்கவும்',
  setAutoTrade: 'தன்னியக்க வர்த்தகம் அமைக்கவும்',
  cancelAutoTrade: 'தன்னியக்க வர்த்தகத்தை ரத்துசெய்யவும்',
  autoTrading: 'தன்னியக்க வர்த்தகம்',
  tradingInterval: 'வர்த்தக சரிபார்ப்பு இடைவேளம்',
  selectPair: 'வர்த்தக ஜோடியைத் தேர்ந்தெடுக',
  checkTradeDesc: 'சந்தையை புத்திசாலித்தனமாக பகுப்பாய்வு செய்து பரிந்துரைகளை வழங்கவும் (STEP 0-9)',
  approveTradeDesc: 'பரிந்துரைகளின் அடிப்படையில் வர்த்தக ஆணையம் அனுப்பவும்',
  setAutoTradeDesc: 'தன்னியக்க சரிபார்ப்பு மற்றும் வர்த்தக அட்டவணையை அமைக்கவும்',
  cancelAutoTradeDesc: 'தன்னியக்க வர்த்தக அமைப்பை நிறுத்தவும்',
  analyzeMarket: 'சந்தையை பகுப்பாய்வு செய்யவும்',
  sendTradeOrder: 'வர்த்தக ஆணையை அனுப்பவும்',
  autoCheckEvery: 'ஒவ்வொன்றும் சரிபார்க்கவும்',
  stopAutoTrading: 'தன்னியக்க வர்த்தகத்தை நிறுத்தவும்',
  confirmTrade: 'வர்த்தகத்தை உறுதிசெய்யவும்',
  tradeSuccess: 'வர்த்தக வெற்றி',
  tradeFailed: 'வர்த்தக தோல்வி',
  notReady: 'வர்த்தகத்திற்கு தயார் இல்லை',
  checkFirst: 'முதலில் வர்த்தகத்தை சரிபார்க்கவும்',
  autoTradeStarted: 'தன்னியக்க வர்த்தகம் தொடங்கியது',
  autoTradeStopped: 'தன்னியக்க வர்த்தகம் நிறுத்தப்பட்டது',
  typeMessage: 'ஒரு செய்தியைத் தட்டச்சு செய்யவும்...',
  voiceInput: 'குரல் உள்ளீடு',
  aiThinking: 'விவரிக்கிறது...',
  welcomeMessage: 'வணக்கம்! நான் KanutsananFX, உங்களுக்கு சேவை செய்ய மகிழ்ச்சி.',
  voiceComingSoon: 'குரல் உரையாடல் வசதி - அடுத்த பதிப்பில் வருகின்றது',
  guideMetaApi: 'MetaAPI வழிகாட்டி',
  guideAiProvider: 'AI வழங்குநர் வழிகாட்டி',
  guideTradingSkills: 'வர்த்தகத் திறன் வழிகாட்டி',
  guideCommands: 'கட்டளைகள் வழிகாட்டி',
  selectGuide: 'வழிகாட்டி ஒன்றை வாசிக்கத் தேர்ந்தெடுக',
  back: 'மீண்டும்',
  noInternet: 'இணைய இணைப்பு இல்லை',
  setupRequired: 'அமைக்கல் தேவை',
  close: 'மூடவும்',
  seconds: 'வினாடிகள்',
  minutes: 'நிமிடங்கள்',
  hours: 'மணிநேரங்கள்',
  backup: 'காப்பு',
  restore: 'மீட்டமை',
  backupToGDrive: 'Google Drive இல் காப்பு',
  restoreFromGDrive: 'Google Drive இல் இருந்து மீட்டமை',
  backupComingSoon: 'காப்பு அம்சம் அடுத்த பதிப்பில் வருகிறது',
  restoreComingSoon: 'மீட்டமை அம்சம் அடுத்த பதிப்பில் வருகிறது',
  currentLlm: 'தற்காலிக AI மூளை',
  status: 'நிலை',
  tradingPair: 'வர்த்தக ஜோடி',
  connectionStatus: 'இணைப்பு நிலை',
  autoCheckInterval: 'தன்னியக்க சரிபார்ப்பு இடைவேளம்',
  selectTradingPair: 'வர்த்தக ஜோடியைத் தேர்ந்தெடுக',
  loadingPairs: 'வர்த்தக ஜோடிகளை ஏற்றுகிறது...',
  currentSetting: 'தற்காலிகம்',
  refreshPairs: 'வர்த்தக ஜோடிகளை புதுப்பிக்கவும்',
  connectMetaApiFirst: 'முதலில் MetaAPI ஐ இணைத்து வர்த்தக ஜோடிகளை ஏற்றவும்',
  developerName: 'Kanutsanan Pongpanna',
  developerTitle: 'KanutsananFX Developer',
  developerBio: 'நிலைமையற்ற வேளாண் வர்த்தகர் | AI வர்த்தக நிறுவனர்\nMaha Sarakham | B.Sc. ஆப்லைட் பிசிக்ஸ், Mahasarakham University',
  developerQuote: 'நாங்கள் எவரையும் அடக்குவதில்லை, ஆனால் எங்களைப் பற்ற ஏஞ்சி வாழ அல்ல.',
  linksAndContacts: 'இணைப்புகள் & தொடர்புகள்',
  sourceCodeRef: 'மூல நிரல் குறிப்புகள்',
  youtubeRef: 'YouTube வீடியோ குறிப்புகள்',
  language: 'மொழி',
  selectLanguage: 'மொழியைத் தேர்ந்தெடுக',
  languageName: 'தமிழ்',
  setupTitle: 'தொடக்க அமைப்பு',
  setupDesc: 'KanutsananFX ஐப் பயன்படுத்தத் தொடங்க விவரங்களை உள்ளிடவும்',
  step1MetaApi: 'படி 1: MetaAPI அமைக்கவும்',
  step2AiBrain: 'படி 2: AI மூளை அமைக்கவும்',
  startUsing: 'பயன்பாடு தொடங்கவும்',
  skipSetup: 'அமைப்பைத் தவிர்க்கவும்',
  letsGo: 'செல்க!',
  resetConnection: 'இணைப்பினை மீட்டமை',
  resetWarning: 'அனைத்து இணைப்பு தகவல்களும் நீக்கப்படும்',
  reset: 'மீட்டமை',
  ok: 'சரி',
  confirm: 'உறுதிசெய்யவும்',
  warning: 'எச்சரிக்கை',
  error: 'தவறு',
  success: 'வெற்றி',
  loading: 'ஏற்றுகிறது...',
  retry: 'மீண்டும் முயற்சிக்கவும்',
  comingSoon: 'விரைவில் வருகிறது',
  version: 'பதிப்பு',
  guideMetaApiContent: '# MetaAPI Guide

## குறிப்பு 1: MetaAPI கணக்கு பதிவு செய்யவும்
- https://app.metaapi.cloud செல்லவும்
- புதிய கணக்கு உருவாக்கவும் அல்லது உள்நுழைக
- உங்கள் மின்னஞ்சலை சரிபார்க்கவும்

## குறிப்பு 2: MT5 கணக்கை இணைக்கவும்
- புதிய கணக்கை கிளிக் செய்யவும்
- இருந்த கணக்கை இணைக்க தேர்வு செய்யவும்
- MT5 விவரங்களை உள்ளிடுங்கள்: சர்வர், உள்நுழைவு, கடவுச்சொல்
- கணக்கை உருவாக்குங்கள்

## குறிப்பு 3: கணக்கு ஐடி பெறுக
- கணக்கு உருவாக்கியது போதுமானபின், நீங்கள் கணக்கு ஐடி காண்பீர்கள்
- கணக்கு ஐடியை நகலெடுக்கவும்
- அதை KanutsananFX இல் உள்ளிடவும்

## குறிப்பு 4: API Key ஐ பெறுக
- அமைப்புகள் சென்று பிறகு API அணுகல் தேர்வுகள் செல்லவும்
- புதிய API டோக்கனை உருவாக்கவும்
- டோக்கனை நகலெடுக்கவும்
- அதை KanutsananFX இல் உள்ளிடவும்

## முக்கியமானது
- உங்கள் API Key ஐ எப்போதும் பகிர வேண்டாம்
- பாதுகாப்புக்கு 2FA பயன்படுத்தவும்"New Account"\n- Select "Connect existing account"\n- Enter MT5 details: Server, Login, Password\n- Click "Create Account"\n\n## Step 3: Get Account ID\n- After creating the account, you will see the Account ID\n- Copy the Account ID\n- Enter it in KanutsananFX\n\n## Step 4: Get API Key\n- Go to Settings → API Access\n- Create a new API Token\n- Copy the Token\n- Enter it in KanutsananFX\n\n## Important\n- Never share your API Key\n- Use 2FA for security',
  guideAiProviderContent: '# AI வழங்குநர் வழிகாட்டி

## 1. KanutsananFX (இயல்புநிலை)
- உட்படுத்தப்பட்ட LLM, API Key பாதுகாப்பு இல்லை

## 2. OpenAI
- இணையதளம்: https://platform.openai.com

## 3. Anthropic (Claude)
- இணையதளம்: https://console.anthropic.com

## 4. Google Gemini
- இணையதளம்: https://aistudio.google.com

## 5. Grok (xAI)
- இணையதளம்: https://console.x.ai

## 6. Perplexity
- இணையதளம்: https://www.perplexity.ai/settings/api

## 7. OpenRouter
- இணையதளம்: https://openrouter.ai',
  guideTradingSkillsContent: '# வர்த்தக திறன்கள் வழிகாட்டி

## தானியங்கி சரிபார்க்கும் இடைவெளிகள்
- 30 விநாடிகள் - மிகவும் அடிக்கடி
- 1-10 நிமிடங்கள் - மிதமான
- 1-5 மணிநேரங்கள் - குறைவான அடிக்கடி

## பகுப்பாய்வு அமைப்பு STEP 0-9
- STEP 0: சந்தை திறப்பு/மூடுதல் சரிபார்க்கவும்
- STEP 1: நடப்பு விலை
- STEP 2: M15 வரைபடத்தை பகுப்பாய்வு செய்யவும்
- STEP 3: SL/TP கணக்கிடுங்கள்
- STEP 4: Risk/Reward பார்வையில் எதிர்கொள்ளவும்
- STEP 5: நிலை அளவீட்டு கணக்கிடுங்கள்
- STEP 6: சிக்னல் வலிமையை மதிப்பீடு செய்யவும்
- STEP 7: திசையை சரிபார்க்கவும்
- STEP 8: API சரிபார்க்கவும்
- STEP 9: இருப்பில் உள்ள நிலைகளை சரிபார்க்கவும்',
  guideCommandsContent: '# கட்டளைகள் வழிகாட்டி

## 1. வர்த்தகம் சரிபார்க்கவும்
- STEP 0-9 ஐ பயன்படுத்தி சந்தையை பகுப்பாய்வு செய்யவும்
- பகுப்பாய்வு முடிவுகளை காண்பிக்கவும்

## 2. வர்த்தகத்தை அங்கீகரிக்கவும்
- பகுப்பாய்வின் அடிப்படையில் வர்த்தகத்தை செயல்படுத்தவும்

## 3. தானியங்கி வர்த்தகத்தை அமைக்கவும்
- விளக்க துணை மற்றும் வர்த்தகம் அவைகள் செய்யங்கள் மாத்தும்

## 4. தானியங்கி வர்த்தகத்தை ரத்து செய்யவும்
- தாமதத்தை வெளிப்படையாக நிறுத்தவும்',
  developerLinks: 'இணைப்புகள் மற்றும் தொடர்புகள்',
  sourceCodeReference: 'மூலநிரல் குறிப்பு',
  youtubeReferences: 'YouTube வீடியோ குறிப்புகள்',
  videoOne: 'வீடியோ 1',
  videoTwo: 'வீடியோ 2',
  developerLinkChat: 'LoveMoney AI உடன் டெவலப்பர் உடன் நடத்துங்க',
  developerLinkLoveMoneyAi: 'ChatGPT இல் LoveMoney AI',
  developerLinkYoutubeOfficial: 'YouTube சேனல் LoveMoney அதிகாரப்பூர்வமாக',
  developerLinkFacebookPage: 'பேஸ்புக் பக்கம் LoveMoney',
  developerLinkLokathibodi: 'லோகதிபோதீ சாஸ்திரம்',
  developerLinkGardenMain: 'தர்ம கார்டன் ஆஃப் மெரிட்',
  developerLinkGardenActivities: 'தர்ம கார்டன் செயல்பாடுகள்',
  developerLinkRiceTrade: 'ஆன்லைன் அரிசி வர்த்தகக் குழு',
  developerLinkGrassTrade: 'பங்கோலா புல் வர்த்தகக் குழு',
  developerLinkEnergyGroup: 'சுய அழுத்த ஆற்றல் குழு',
  developerLinkPropertyGroup: 'அசையா சொத்து வர்த்தக குழு',
  setupStep: 'படி',
  setupMetaApiDesc: 'உங்கள் MT5 வர்த்தக கணக்கை இணைக்க MetaAPI இதிலிருந்து கணக்கு ஐடி மற்றும் API Key ஐ உள்ளீடு செய்யவும்',
  setupAiBrainDesc: 'பகுப்பாய்வு மற்றும் உரையாடலுக்கான AI மதிப்பீட்டாளர் தேர்வு செய்யவும்',
  accountIdPlaceholder: 'MetaAPI கணக்கு ஐடி உள்ளிடவும்',
  connectMetaApi: 'MetaAPI இணைக்கவும்',
  connectAiBrain: 'AI தலைமை இணைக்கவும்',
  viewGuide: 'வழிகாட்டியை பார்வையிடுக',
  backToMetaApi: 'MetaAPI அமைவுத் திரும்ப',
  connectionFailedDesc: 'உங்கள் கணக்கு ஐடி மற்றும் API Key ஐ சரிபார்க்கவும். உதவியாக வழிகாட்டி மெனுவைப் பார்வையிடவும்.',
  pleaseEnterAiKey: 'தேர்வு செய்த AI வழங்குநருக்கான API Key ஐ உள்ளிடவும்',
  aiResponseCheckTrade: 'சந்தையை பகுப்பாய்வு செய்யும்... நேரடி பகுப்பாய்வுக்கு வர்த்தக திரையில் Check Trade பட்டனை பயன்படுத்தவும்.',
  aiResponseApproveTrade: 'குறிப்பைச் சரிபார்க்க Check Trade பட்டனைத் தொடர்ந்து அமல்படுத்தவும். சமிக்ஞையின் அடிப்படையில் உத்தரவுகள் செயல்படுத்தப்படும்.',
  aiResponseAutoTrade: 'முதலில் வர்த்தக திறன்களில் தானியங்கி-விற்பனை நேரத்தை அமைக்கவும், பிறகு வர்த்தக திரை குறைந்த Auto Trading ஐ அழுத்தவும்.',
  aiResponseCancelAuto: 'வர்த்தக திரையில் Cancel Auto Trading பட்டனை அழுத்தவும்.',
  aiResponseDharma: 'தர்மம் வாழ்க்கையில் அத்தியாவசியமானது. வர்த்தகம் ஒன்றே அதே - அது மன அழுத்தம், தாபம், நிலையற்ற நிலை இல்லாத பிரச்சாரம் தேவைப்படும். ஆனாபானசதி (சுவாச அமைதி) மனதை அமைதிகரிக்க சிறந்த அடித்தளமாக உள்ளது.',
  aiResponseGreeting: 'வணக்கம்! நான் KanutsananFX, சந்தில் பகுப்பாய்வு செய்ய உங்களுக்கு உதவ நான் மகிழ்ச்சியடைகிறேன். நான் உங்களுக்கு Forex சந்தை பகுப்பாய்வு, வர்த்தக பரிந்துரைகள், வர்த்தக திறன்களை தனிப்பயனாக்க மற்றும் தர்மம் மற்றும் உலகளாவிய நிதி அமைப்புகளுடன் விவாதிக்க உதவ முடியும்.',
  aiResponseDefault: 'குடும்பத்துக்கு நன்றி. நான் Forex வர்த்தகத்திற்கும் தர்ம விவாதங்களுக்கும் உதவ தயாராக உள்ள KanutsananFX. நீங்கள் பயன்படுத்த முடியும் கட்டளைகள்: வர்த்தகம் சரிபார்க்கவும், வர்த்தகத்தை அங்கீகரிக்கவும், தானியங்கி வர்த்தகம் அமைக்கவும், தானியங்கி வர்த்தகம் ரத்து செய்யவும்.',
  aiErrorGeneric: 'மன்னிக்கவும், இவ்வேளையில் பதில் அளிக்க முடியவில்லை.',
  aiErrorConnection: 'ஒரு பிழை ஏற்பட்டது. உங்கள் API Key மற்றும் இணைய இணைப்பை சரிபார்க்கவும்.',
  darkMode: 'டார்க் மோட்',
  notifications: 'அறிவிப்புகள்',
  clearChatHistory: 'அரட்டைக் கதை வரலாற்றை அழிக்கவும்',
  clearChatConfirm: 'அனைத்து அரட்டைகதைகள் வரலாற்றையும் அழிக்கவா விரும்புகிறீர்களா?',
  exportSettings: 'அமைப்புகளை மட்டுப்படுத்துக',
  importSettings: 'அமைப்புகள் இறக்குமதி செய்யவும்',
  settingsMetaApiSection: 'MetaAPI',
  settingsAiBrainSection: 'AI தலைமை',
  settingsLanguageSection: 'மொழி',
  settingsBackupSection: 'காப்புப்பிரதி/மீட்டமை',
  settingsAboutSection: 'பற்றி',
  tradeAnalysisResult: 'பகுப்பாய்வு முடிவு',
  trendUp: 'முன்னன் சைக்ஃப்',
  trendDown: 'பின்னன் சைக்ஃப்',
  signalStrength: 'சைக்ஃப் வலிமை',
  entryPrice: 'நுழைவுத் விலை',
  stopLoss: 'Stop Loss',
  takeProfit: 'Take Profit',
  lotSize: 'Lot Size',
  riskReward: 'Risk/Reward',
  noAnalysisYet: 'இன்னும் பகுப்பாய்வு செய்யவில்லை',
  analyzing: 'பகுப்பாய்வு செய்கிறது...',
  executing: 'செயலாக்கம்...',
  autoTradeActive: 'தானியங்கிய வர்த்தகம் செயல்பாட்டில் உள்ளது',
  autoTradeInactive: 'தானியங்கிய வர்த்தகம் செயலிழந்துள்ளது',
};

export default ta;
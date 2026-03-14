import { TranslationKey } from '../keys';

const te: Record<TranslationKey, string> = {
  appName: 'KanutsananFX',
  welcome: 'KanutsananFXకి స్వాగతం',
  settings: 'సెట్టింగ్‌లు',
  chat: 'AI చాట్',
  trade: 'ట్రేడ్',
  guide: 'గైడ్',
  developer: 'డెవలపర్',
  tradingSkills: 'ట్రేడింగ్ నైపుణ్యాలు',
  metaApiSettings: 'MetaAPI సెట్టింగ్‌లు',
  accountId: 'Account ID',
  apiKey: 'API Key',
  aiBrainSettings: 'AI బ్రెయిన్',
  selectAiProvider: 'AI ప్రొవైడర్‌ను ఎంచుకోండి',
  apiKeyPlaceholder: 'API కీని నమోదు చేయండి',
  save: 'సేవ్ చేయండి',
  cancel: 'రద్దు చేయండి',
  connect: 'కనెక్ట్ చేయండి',
  disconnect: 'డిస్‌కనెక్ట్ చేయండి',
  connected: 'కనెక్ట్ చేయబడింది',
  disconnected: 'డిస్‌కనెక్ట్ చేయబడింది',
  connectionSuccess: 'కనెక్షన్ విజయవంతమైంది',
  connectionFailed: 'కనెక్షన్ విఫలమైంది',
  pleaseSetup: 'దయచేసి ముందుగా MetaAPI మరియు AI బ్రెయిన్‌ను సెటప్ చేయండి',
  checkTrade: 'ట్రేడ్‌ను తనిఖీ చేయండి',
  approveTrade: 'ట్రేడ్‌ను ఆమోదించండి',
  setAutoTrade: 'ఆటో ట్రేడింగ్‌ను సెట్ చేయండి',
  cancelAutoTrade: 'ఆటో ట్రేడింగ్‌ను రద్దు చేయండి',
  autoTrading: 'ఆటో ట్రేడింగ్',
  tradingInterval: 'ట్రేడింగ్ తనిఖీ విరామం',
  selectPair: 'ట్రేడింగ్ జతను ఎంచుకోండి',
  checkTradeDesc: 'మార్కెట్‌ను విశ్లేషించి, సిఫార్సులను అందించండి (STEP 0-9)',
  approveTradeDesc: 'సిఫార్సుల ఆధారంగా ట్రేడ్ ఆర్డర్‌ను పంపండి',
  setAutoTradeDesc: 'ఆటోమేటిక్ తనిఖీ మరియు ట్రేడ్ షెడ్యూల్‌ను సెట్ చేయండి',
  cancelAutoTradeDesc: 'ఆటోమేటిక్ ట్రేడింగ్ సిస్టమ్‌ను ఆపండి',
  analyzeMarket: 'మార్కెట్‌ను విశ్లేషించండి',
  sendTradeOrder: 'ట్రేడ్ ఆర్డర్‌ను పంపండి',
  autoCheckEvery: 'ప్రతిసారీ తనిఖీ చేయండి',
  stopAutoTrading: 'ఆటో ట్రేడింగ్‌ను ఆపండి',
  confirmTrade: 'ట్రేడ్‌ను నిర్ధారించండి',
  tradeSuccess: 'ట్రేడ్ విజయవంతమైంది',
  tradeFailed: 'ట్రేడ్ విఫలమైంది',
  notReady: 'ట్రేడ్ చేయడానికి సిద్ధంగా లేదు',
  checkFirst: 'దయచేసి ముందుగా ట్రేడ్‌ను తనిఖీ చేయండి',
  autoTradeStarted: 'ఆటో ట్రేడింగ్ ప్రారంభమైంది',
  autoTradeStopped: 'ఆటో ట్రేడింగ్ ఆగిపోయింది',
  typeMessage: 'ఒక సందేశాన్ని టైప్ చేయండి...',
  voiceInput: 'వాయిస్ ఇన్‌పుట్',
  aiThinking: 'ఆలోచిస్తోంది...',
  welcomeMessage: 'నమస్కారం! నేను KanutsananFX, మీకు సేవ చేయడానికి సంతోషిస్తున్నాను.',
  voiceComingSoon: 'వాయిస్ సంభాషణ ఫీచర్ - తదుపరి వెర్షన్‌లో వస్తుంది',
  guideMetaApi: 'MetaAPI గైడ్',
  guideAiProvider: 'AI ప్రొవైడర్ గైడ్',
  guideTradingSkills: 'ట్రేడింగ్ నైపుణ్యాల గైడ్',
  guideCommands: 'కమాండ్స్ గైడ్',
  selectGuide: 'చదవడానికి ఒక గైడ్‌ను ఎంచుకోండి',
  back: 'వెనుకకు',
  noInternet: 'ఇంటర్నెట్ కనెక్షన్ లేదు',
  setupRequired: 'సెటప్ అవసరం',
  close: 'మూసివేయండి',
  seconds: 'సెకన్లు',
  minutes: 'నిమిషాలు',
  hours: 'గంటలు',
  backup: 'బ్యాకప్',
  restore: 'పునరుద్ధరించండి',
  backupToGDrive: 'Google Driveకు బ్యాకప్ చేయండి',
  restoreFromGDrive: 'Google Drive నుండి పునరుద్ధరించండి',
  backupComingSoon: 'బ్యాకప్ ఫీచర్ తదుపరి వెర్షన్‌లో వస్తుంది',
  restoreComingSoon: 'పునరుద్ధరణ ఫీచర్ తదుపరి వెర్షన్‌లో వస్తుంది',
  currentLlm: 'ప్రస్తుత AI బ్రెయిన్',
  status: 'స్థితి',
  tradingPair: 'ట్రేడింగ్ జత',
  connectionStatus: 'కనెక్షన్ స్థితి',
  autoCheckInterval: 'ఆటో తనిఖీ విరామం',
  selectTradingPair: 'ట్రేడింగ్ జతను ఎంచుకోండి',
  loadingPairs: 'ట్రేడింగ్ జతలను లోడ్ చేస్తోంది...',
  currentSetting: 'ప్రస్తుత',
  refreshPairs: 'ట్రేడింగ్ జతలను రిఫ్రెష్ చేయండి',
  connectMetaApiFirst: 'ట్రేడింగ్ జతలను లోడ్ చేయడానికి దయచేసి ముందుగా MetaAPIని కనెక్ట్ చేయండి',
  developerName: 'Kanutsanan Pongpanna',
  developerTitle: 'KanutsananFX డెవలపర్',
  developerBio: 'ఆన్‌లైన్ వ్యవసాయ వ్యాపారి | AI ట్రేడింగ్ డెవలపర్
మహా సారఖం | B.Sc. అప్లైడ్ ఫిజిక్స్, మహాసారఖం విశ్వవిద్యాలయం',
  developerQuote: 'మేము ఎవరినీ అణచివేయని వారిగా నిలుస్తాము, కానీ మేము తొక్కబడటానికి పుట్టలేదు.',
  linksAndContacts: 'లింకులు & పరిచయాలు',
  sourceCodeRef: 'సోర్స్ కోడ్ రిఫరెన్స్',
  youtubeRef: 'YouTube వీడియో రిఫరెన్స్',
  language: 'భాష',
  selectLanguage: 'భాషను ఎంచుకోండి',
  languageName: 'తెలుగు',
  setupTitle: 'ప్రారంభ సెటప్',
  setupDesc: 'KanutsananFXని ఉపయోగించడం ప్రారంభించడానికి సమాచారాన్ని నమోదు చేయండి',
  step1MetaApi: 'దశ 1: MetaAPIని సెటప్ చేయండి',
  step2AiBrain: 'దశ 2: AI బ్రెయిన్‌ను సెటప్ చేయండి',
  startUsing: 'ఉపయోగించడం ప్రారంభించండి',
  skipSetup: 'సెటప్‌ను దాటవేయండి',
  letsGo: 'వెళ్దాం!',
  resetConnection: 'కనెక్షన్‌ను రీసెట్ చేయండి',
  resetWarning: 'అన్ని కనెక్షన్ డేటా తొలగించబడుతుంది',
  reset: 'రీసెట్',
  ok: 'సరే',
  confirm: 'నిర్ధారించండి',
  warning: 'హెచ్చరిక',
  error: 'లోపం',
  success: 'విజయం',
  loading: 'లోడ్ అవుతోంది...',
  retry: 'మళ్లీ ప్రయత్నించండి',
  comingSoon: 'త్వరలో వస్తుంది',
  version: 'వెర్షన్',
  guideMetaApiContent: '# MetaAPI గైడ్

## దశ 1: MetaAPI ఖాతాను నమోదు చేసుకోండి
- https://app.metaapi.cloudకు వెళ్లండి
- కొత్త ఖాతాను సృష్టించండి లేదా సైన్ ఇన్ చేయండి
- మీ ఇమెయిల్‌ను ధృవీకరించండి

## దశ 2: MT5 ఖాతాను కనెక్ట్ చేయండి
- కొత్త ఖాతాపై క్లిక్ చేయండి
- ఇప్పటికే ఉన్న ఖాతాను కనెక్ట్ చేయి ఎంచుకోండి
- MT5 వివరాలను నమోదు చేయండి: సర్వర్, లాగిన్, పాస్‌వర్డ్
- ఖాతాను సృష్టించుపై క్లిక్ చేయండి

## దశ 3: ఖాతా IDని పొందండి
- ఖాతాను సృష్టించిన తర్వాత, మీరు ఖాతా IDని చూస్తారు
- ఖాతా IDని కాపీ చేయండి
- దానిని KanutsananFXలో నమోదు చేయండి

## దశ 4: API కీని పొందండి
- సెట్టింగ్‌లకు వెళ్లి, ఆపై API యాక్సెస్‌కు వెళ్లండి
- కొత్త API టోకెన్‌ను సృష్టించండి
- టోకెన్‌ను కాపీ చేయండి
- దానిని KanutsananFXలో నమోదు చేయండి

## ముఖ్యం
- మీ API కీని ఎప్పుడూ పంచుకోవద్దు
- భద్రత కోసం 2FAను ఉపయోగించండి"New Account"\n- Select "Connect existing account"\n- Enter MT5 details: Server, Login, Password\n- Click "Create Account"\n\n## Step 3: Get Account ID\n- After creating the account, you will see the Account ID\n- Copy the Account ID\n- Enter it in KanutsananFX\n\n## Step 4: Get API Key\n- Go to Settings → API Access\n- Create a new API Token\n- Copy the Token\n- Enter it in KanutsananFX\n\n## Important\n- Never share your API Key\n- Use 2FA for security',
  guideAiProviderContent: '# AI ప్రొవైడర్ గైడ్

## 1. KanutsananFX (డిఫాల్ట్)
- అంతర్నిర్మిత LLM, API కీ అవసరం లేదు

## 2. OpenAI
- వెబ్‌సైట్: https://platform.openai.com

## 3. Anthropic (Claude)
- వెబ్‌సైట్: https://console.anthropic.com

## 4. Google Gemini
- వెబ్‌సైట్: https://aistudio.google.com

## 5. Grok (xAI)
- వెబ్‌సైట్: https://console.x.ai

## 6. Perplexity
- వెబ్‌సైట్: https://www.perplexity.ai/settings/api

## 7. OpenRouter
- వెబ్‌సైట్: https://openrouter.ai',
  guideTradingSkillsContent: '# ట్రేడింగ్ నైపుణ్యాల గైడ్

## ఆటో చెక్ విరామాలు
- 30 సెకన్లు - అత్యంత తరచుగా
- 1-10 నిమిషాలు - మధ్యస్థం
- 1-5 గంటలు - అత్యంత అరుదుగా

## విశ్లేషణ వ్యవస్థ STEP 0-9
- STEP 0: మార్కెట్ తెరిచి/మూసివేయడం తనిఖీ చేయండి
- STEP 1: ప్రస్తుత ధర
- STEP 2: M15 చార్ట్‌ను విశ్లేషించండి
- STEP 3: SL/TP లెక్కించండి
- STEP 4: Risk/Reward తనిఖీ చేయండి
- STEP 5: పొజిషన్ సైజును లెక్కించండి
- STEP 6: సిగ్నల్ బలాన్ని అంచనా వేయండి
- STEP 7: దిశను తనిఖీ చేయండి
- STEP 8: APIని ధృవీకరించండి
- STEP 9: ఇప్పటికే ఉన్న స్థానాలను తనిఖీ చేయండి',
  guideCommandsContent: '# ఆదేశాల గైడ్

## 1. ట్రేడ్‌ను తనిఖీ చేయండి
- STEP 0-9 ఉపయోగించి మార్కెట్‌ను విశ్లేషించండి
- విశ్లేషణ ఫలితాలను ప్రదర్శించండి

## 2. ట్రేడ్‌ను ఆమోదించండి
- విశ్లేషణ ఆధారంగా ట్రేడ్‌ను అమలు చేయండి

## 3. ఆటో ట్రేడింగ్‌ను సెట్ చేయండి
- షెడ్యూల్‌లో స్వయంచాలకంగా తనిఖీ చేసి, ట్రేడ్ చేయండి

## 4. ఆటో ట్రేడింగ్‌ను రద్దు చేయండి
- స్వయంచాలక ట్రేడింగ్‌ను వెంటనే ఆపండి',
  developerLinks: 'లింకులు & పరిచయాలు',
  sourceCodeReference: 'సోర్స్ కోడ్ రిఫరెన్స్',
  youtubeReferences: 'YouTube వీడియో రిఫరెన్సులు',
  videoOne: 'వీడియో 1',
  videoTwo: 'వీడియో 2',
  developerLinkChat: 'డెవలపర్ LoveMoney AIతో చాట్ చేయండి',
  developerLinkLoveMoneyAi: 'ChatGPTలో LoveMoney AI',
  developerLinkYoutubeOfficial: 'YouTube ఛానెల్ LoveMoney అధికారిక',
  developerLinkFacebookPage: 'ఫేస్‌బుక్ పేజీ LoveMoney',
  developerLinkLokathibodi: 'లోకతిబోడి గ్రంథం',
  developerLinkGardenMain: 'ధర్మ గార్డెన్ ఆఫ్ మెరిట్',
  developerLinkGardenActivities: 'ధర్మ గార్డెన్ కార్యకలాపాలు',
  developerLinkRiceTrade: 'ఆన్‌లైన్ రైస్ ట్రేడింగ్ గ్రూప్',
  developerLinkGrassTrade: 'పంగోలా గ్రాస్ ట్రేడింగ్ గ్రూప్',
  developerLinkEnergyGroup: 'స్వీయ-శుద్ధి శక్తి సమూహం',
  developerLinkPropertyGroup: 'రియల్ ఎస్టేట్ ట్రేడింగ్ గ్రూప్',
  setupStep: 'దశ',
  setupMetaApiDesc: 'మీ MT5 ట్రేడింగ్ ఖాతాను కనెక్ట్ చేయడానికి MetaAPI నుండి ఖాతా ID మరియు API కీని నమోదు చేయండి',
  setupAiBrainDesc: 'విశ్లేషణ మరియు సంభాషణ కోసం AI ప్రొవైడర్‌ను ఎంచుకోండి',
  accountIdPlaceholder: 'MetaAPI ఖాతా IDని నమోదు చేయండి',
  connectMetaApi: 'MetaAPIని కనెక్ట్ చేయండి',
  connectAiBrain: 'AI బ్రెయిన్‌ను కనెక్ట్ చేయండి',
  viewGuide: 'గైడ్‌ను వీక్షించండి',
  backToMetaApi: 'MetaAPI సెటప్‌కు తిరిగి వెళ్ళు',
  connectionFailedDesc: 'దయచేసి మీ ఖాతా ID మరియు API కీని తనిఖీ చేయండి. సహాయం కోసం గైడ్ మెనుని చూడండి.',
  pleaseEnterAiKey: 'దయచేసి ఎంచుకున్న AI ప్రొవైడర్ కోసం API కీని నమోదు చేయండి',
  aiResponseCheckTrade: 'మార్కెట్‌ను విశ్లేషిస్తోంది... MetaAPI నుండి నిజ-సమయ విశ్లేషణ కోసం దయచేసి ట్రేడ్ స్క్రీన్‌పై ఉన్న చెక్ ట్రేడ్ బటన్‌ను ఉపయోగించండి.',
  aiResponseApproveTrade: 'దయచేసి ట్రేడ్‌ను తనిఖీ చేసిన తర్వాత ట్రేడ్ స్క్రీన్‌పై ఉన్న ఆమోదించు ట్రేడ్ బటన్‌ను ఉపయోగించండి. సిస్టమ్ విశ్లేషణ ఆధారంగా ఆర్డర్‌లను అమలు చేస్తుంది.',
  aiResponseAutoTrade: 'దయచేసి ముందుగా ట్రేడింగ్ నైపుణ్యాలలో ఆటో-ట్రేడ్ సమయాన్ని కాన్ఫిగర్ చేయండి, ఆపై ట్రేడ్ స్క్రీన్‌పై సెట్ ఆటో ట్రేడింగ్‌ను నొక్కండి.',
  aiResponseCancelAuto: 'దయచేసి ట్రేడ్ స్క్రీన్‌పై ఉన్న ఆటో ట్రేడింగ్‌ను రద్దు చేయి బటన్‌ను నొక్కండి.',
  aiResponseDharma: 'జీవితంలో ధర్మం అవసరం. ట్రేడింగ్ కూడా అంతే - దీనికి బుద్ధిపూర్వకత, ఏకాగ్రత, దురాశ లేదు, కోపం లేదు. ఆనాపానసతి (శ్వాసపై అవగాహన) మనస్సును శాంతపరచడానికి గొప్ప పునాది.',
  aiResponseGreeting: 'నమస్కారం! నేను KanutsananFX, మీకు సేవ చేయడానికి సంతోషిస్తున్నాను. నేను మీకు ఫారెక్స్ మార్కెట్ విశ్లేషణ, ట్రేడింగ్ సిఫార్సులు, ట్రేడింగ్ నైపుణ్యాలను అనుకూలీకరించడం మరియు ధర్మం మరియు ప్రపంచ ఆర్థిక వ్యవస్థల గురించి చర్చించడంలో సహాయపడగలను.',
  aiResponseDefault: 'మీ సందేశానికి ధన్యవాదాలు. నేను KanutsananFX, ఫారెక్స్ ట్రేడింగ్ మరియు ధర్మ చర్చలతో మీకు సహాయం చేయడానికి సిద్ధంగా ఉన్నాను. మీరు ఆదేశాలను ఉపయోగించవచ్చు: ట్రేడ్‌ను తనిఖీ చేయండి, ట్రేడ్‌ను ఆమోదించండి, ఆటో ట్రేడింగ్‌ను సెట్ చేయండి, ఆటో ట్రేడింగ్‌ను రద్దు చేయండి.',
  aiErrorGeneric: 'క్షమించండి, ఈ సమయంలో స్పందించలేకపోతున్నాము.',
  aiErrorConnection: 'ఒక లోపం సంభవించింది. దయచేసి మీ API కీ మరియు ఇంటర్నెట్ కనెక్షన్‌ని తనిఖీ చేయండి.',
  darkMode: 'డార్క్ మోడ్',
  notifications: 'నోటిఫికేషన్‌లు',
  clearChatHistory: 'చాట్ చరిత్రను క్లియర్ చేయండి',
  clearChatConfirm: 'మీరు మొత్తం చాట్ చరిత్రను క్లియర్ చేయాలనుకుంటున్నారా?',
  exportSettings: 'సెట్టింగ్‌లను ఎగుమతి చేయండి',
  importSettings: 'సెట్టింగ్‌లను దిగుమతి చేయండి',
  settingsMetaApiSection: 'MetaAPI',
  settingsAiBrainSection: 'AI బ్రెయిన్',
  settingsLanguageSection: 'భాష',
  settingsBackupSection: 'బ్యాకప్/పునరుద్ధరించు',
  settingsAboutSection: 'గురించి',
  tradeAnalysisResult: 'విశ్లేషణ ఫలితం',
  trendUp: 'అప్‌ట్రెండ్',
  trendDown: 'డౌన్‌ట్రెండ్',
  signalStrength: 'సిగ్నల్ బలం',
  entryPrice: 'ప్రవేశ ధర',
  stopLoss: 'Stop Loss',
  takeProfit: 'Take Profit',
  lotSize: 'Lot Size',
  riskReward: 'Risk/Reward',
  noAnalysisYet: 'ఇంకా విశ్లేషణ లేదు',
  analyzing: 'విశ్లేషిస్తోంది...',
  executing: 'అమలు చేస్తోంది...',
  autoTradeActive: 'ఆటో ట్రేడింగ్ యాక్టివ్‌గా ఉంది',
  autoTradeInactive: 'ఆటో ట్రేడింగ్ నిష్క్రియంగా ఉంది',
};

export default te;
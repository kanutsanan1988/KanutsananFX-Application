import { TranslationKey } from '../keys';

const hi: Record<TranslationKey, string> = {
  appName: 'KanutsananFX',
  welcome: 'KanutsananFX में आपका स्वागत है',
  settings: 'सेटिंग्स',
  chat: 'AI चैट',
  trade: 'ट्रेड',
  guide: 'गाइड',
  developer: 'डेवलपर',
  tradingSkills: 'ट्रेडिंग कौशल',
  metaApiSettings: 'MetaAPI सेटिंग्स',
  accountId: 'Account ID',
  apiKey: 'API Key',
  aiBrainSettings: 'AI ब्रेन',
  selectAiProvider: 'AI प्रोवाइडर चुनें',
  apiKeyPlaceholder: 'API Key दर्ज करें',
  save: 'सहेजें',
  cancel: 'रद्द करें',
  connect: 'कनेक्ट करें',
  disconnect: 'डिस्कनेक्ट करें',
  connected: 'कनेक्टेड',
  disconnected: 'डिस्कनेक्टेड',
  connectionSuccess: 'कनेक्शन सफल',
  connectionFailed: 'कनेक्शन विफल',
  pleaseSetup: 'कृपया पहले MetaAPI और AI ब्रेन सेटअप करें',
  checkTrade: 'ट्रेड जांचें',
  approveTrade: 'ट्रेड स्वीकृत करें',
  setAutoTrade: 'ऑटो ट्रेडिंग सेट करें',
  cancelAutoTrade: 'ऑटो ट्रेडिंग रद्द करें',
  autoTrading: 'ऑटो ट्रेडिंग',
  tradingInterval: 'ट्रेडिंग जांच अंतराल',
  selectPair: 'ट्रेडिंग जोड़ी चुनें',
  checkTradeDesc: 'बाजार का विश्लेषण करें और सिफारिशें प्रदान करें (STEP 0-9)',
  approveTradeDesc: 'सिफारिशों के आधार पर ट्रेड ऑर्डर भेजें',
  setAutoTradeDesc: 'स्वचालित जांच और ट्रेड शेड्यूल सेट करें',
  cancelAutoTradeDesc: 'स्वचालित ट्रेडिंग सिस्टम बंद करें',
  analyzeMarket: 'बाजार का विश्लेषण करें',
  sendTradeOrder: 'ट्रेड ऑर्डर भेजें',
  autoCheckEvery: 'हर',
  stopAutoTrading: 'ऑटो ट्रेडिंग बंद करें',
  confirmTrade: 'ट्रेड की पुष्टि करें',
  tradeSuccess: 'ट्रेड सफल',
  tradeFailed: 'ट्रेड विफल',
  notReady: 'ट्रेड के लिए तैयार नहीं',
  checkFirst: 'कृपया पहले ट्रेड जांचें',
  autoTradeStarted: 'ऑटो ट्रेडिंग शुरू हो गई है',
  autoTradeStopped: 'ऑटो ट्रेडिंग बंद हो गई है',
  typeMessage: 'एक संदेश टाइप करें...',
  voiceInput: 'वॉयस इनपुट',
  aiThinking: 'सोच रहा है...',
  welcomeMessage: 'नमस्ते! मैं KanutsananFX हूं, आपकी सेवा करके खुशी हुई।',
  voiceComingSoon: 'वॉयस वार्तालाप सुविधा - अगले संस्करण में आ रही है',
  guideMetaApi: 'MetaAPI गाइड',
  guideAiProvider: 'AI प्रोवाइडर गाइड',
  guideTradingSkills: 'ट्रेडिंग कौशल गाइड',
  guideCommands: 'कमांड्स गाइड',
  selectGuide: 'पढ़ने के लिए एक गाइड चुनें',
  back: 'वापस',
  noInternet: 'कोई इंटरनेट कनेक्शन नहीं',
  setupRequired: 'सेटअप आवश्यक है',
  close: 'बंद करें',
  seconds: 'सेकंड',
  minutes: 'मिनट',
  hours: 'घंटे',
  backup: 'बैकअप',
  restore: 'रिस्टोर',
  backupToGDrive: 'Google Drive में बैकअप करें',
  restoreFromGDrive: 'Google Drive से रिस्टोर करें',
  backupComingSoon: 'बैकअप सुविधा अगले संस्करण में आ रही है',
  restoreComingSoon: 'रिस्टोर सुविधा अगले संस्करण में आ रही है',
  currentLlm: 'वर्तमान AI ब्रेन',
  status: 'स्थिति',
  tradingPair: 'ट्रेडिंग जोड़ी',
  connectionStatus: 'कनेक्शन स्थिति',
  autoCheckInterval: 'ऑटो जांच अंतराल',
  selectTradingPair: 'ट्रेडिंग जोड़ी चुनें',
  loadingPairs: 'ट्रेडिंग जोड़ियां लोड हो रही हैं...',
  currentSetting: 'वर्तमान',
  refreshPairs: 'ट्रेडिंग जोड़ियां रीफ्रेश करें',
  connectMetaApiFirst: 'ट्रेडिंग जोड़ियों को लोड करने के लिए कृपया पहले MetaAPI कनेक्ट करें',
  developerName: 'Kanutsanan Pongpanna',
  developerTitle: 'KanutsananFX डेवलपर',
  developerBio: 'ऑनलाइन कृषि व्यापारी | AI ट्रेडिंग डेवलपर\nमहा सरखम | बी.एससी. एप्लाइड फिजिक्स, Mahasarakham University',
  developerQuote: 'हम उन लोगों के रूप में खड़े हैं जो किसी पर अत्याचार नहीं करते हैं, लेकिन हम रौंदने के लिए पैदा नहीं हुए थे।',
  linksAndContacts: 'लिंक और संपर्क',
  sourceCodeRef: 'सोर्स कोड संदर्भ',
  youtubeRef: 'YouTube वीडियो संदर्भ',
  language: 'भाषा',
  selectLanguage: 'भाषा चुनें',
  languageName: 'हिन्दी',
  setupTitle: 'प्रारंभिक सेटअप',
  setupDesc: 'KanutsananFX का उपयोग शुरू करने के लिए जानकारी दर्ज करें',
  step1MetaApi: 'Step 1: MetaAPI सेटअप करें',
  step2AiBrain: 'Step 2: AI ब्रेन सेटअप करें',
  startUsing: 'उपयोग शुरू करें',
  skipSetup: 'सेटअप छोड़ें',
  letsGo: 'चलो चलें!',
  resetConnection: 'कनेक्शन रीसेट करें',
  resetWarning: 'सभी कनेक्शन डेटा हटा दिया जाएगा',
  reset: 'रीसेट',
  ok: 'ठीक है',
  confirm: 'पुष्टि करें',
  warning: 'चेतावनी',
  error: 'त्रुटि',
  success: 'सफलता',
  loading: 'लोड हो रहा है...',
  retry: 'पुनः प्रयास करें',
  comingSoon: 'जल्द आ रहा है',
  version: 'संस्करण',
  guideMetaApiContent: '# MetaAPI गाइड

## स्टेप 1: MetaAPI खाता पंजीकरण करें
- https://app.metaapi.cloud पर जाएं
- नया खाता बनाएँ या साइन इन करें
- अपना ईमेल सत्यापित करें

## स्टेप 2: MT5 खाता कनेक्ट करें
- New Account पर क्लिक करें
- Connect existing account चुनें
- MT5 विवरण दर्ज करें: सर्वर, लॉगिन, पासवर्ड
- Create Account पर क्लिक करें

## स्टेप 3: खाता आईडी प्राप्त करें
- खाता बनाने के बाद, आपको खाता आईडी दिखाई देगी
- खाता आईडी कॉपी करें
- इसे KanutsananFX में दर्ज करें

## स्टेप 4: API Key प्राप्त करें
- Settings में जाएं फिर API Access
- नया API Token बनाएँ
- टोकन कॉपी करें
- इसे KanutsananFX में दर्ज करें

## महत्वपूर्ण
- अपनी API Key कभी साझा न करें
- सुरक्षा के लिए 2FA का उपयोग करें"New Account"\n- Select "Connect existing account"\n- Enter MT5 details: Server, Login, Password\n- Click "Create Account"\n\n## Step 3: Get Account ID\n- After creating the account, you will see the Account ID\n- Copy the Account ID\n- Enter it in KanutsananFX\n\n## Step 4: Get API Key\n- Go to Settings → API Access\n- Create a new API Token\n- Copy the Token\n- Enter it in KanutsananFX\n\n## Important\n- Never share your API Key\n- Use 2FA for security',
  guideAiProviderContent: '# AI प्रदाता गाइड

## 1. KanutsananFX (डिफ़ॉल्ट)
- अंतर्निर्मित LLM, API Key की आवश्यकता नहीं

## 2. OpenAI
- वेबसाइट: https://platform.openai.com

## 3. Anthropic (Claude)
- वेबसाइट: https://console.anthropic.com

## 4. Google Gemini
- वेबसाइट: https://aistudio.google.com

## 5. Grok (xAI)
- वेबसाइट: https://console.x.ai

## 6. Perplexity
- वेबसाइट: https://www.perplexity.ai/settings/api

## 7. OpenRouter
- वेबसाइट: https://openrouter.ai',
  guideTradingSkillsContent: '# ट्रेडिंग स्किल्स गाइड

## ऑटो चेक अंतराल
- 30 सेकंड - सबसे अधिक बार
- 1-10 मिनट - मध्यम
- 1-5 घंटे - सबसे कम बार

## विश्लेषण प्रणाली STEP 0-9
- STEP 0: बाजार खुले/बंद की जाँच
- STEP 1: वर्तमान कीमत
- STEP 2: M15 चार्ट विश्लेषण
- STEP 3: SL/TP की गणना
- STEP 4: जोखिम/इनाम की जाँच
- STEP 5: पोजीशन साइज की गणना
- STEP 6: सिग्नल की ताकत का मूल्यांकन
- STEP 7: दिशा की जाँच
- STEP 8: API सत्यापन
- STEP 9: मौजूदा पोजीशन्स की जाँच',
  guideCommandsContent: '# कमांड्स गाइड

## 1. Check Trade
- STEP 0-9 का उपयोग कर बाजार का विश्लेषण करें
- विश्लेषण परिणाम दिखाएं

## 2. Approve Trade
- विश्लेषण के आधार पर ट्रेड निष्पादित करें

## 3. Set Auto Trading
- अनुसूची के अनुसार स्वतः जांच और ट्रेड करें

## 4. Cancel Auto Trading
- तुरंत ऑटो ट्रेडिंग बंद करें',
  developerLinks: 'लिंक और संपर्क',
  sourceCodeReference: 'स्रोत कोड संदर्भ',
  youtubeReferences: 'YouTube वीडियो संदर्भ',
  videoOne: 'वीडियो 1',
  videoTwo: 'वीडियो 2',
  developerLinkChat: 'डेवलपर से चैट करें LoveMoney AI',
  developerLinkLoveMoneyAi: 'LoveMoney AI ChatGPT पर',
  developerLinkYoutubeOfficial: 'YouTube चैनल LoveMoney आधिकारिक',
  developerLinkFacebookPage: 'Facebook पेज LoveMoney',
  developerLinkLokathibodi: 'लोकाथिबोदी शास्त्र',
  developerLinkGardenMain: 'मेरिट का धर्म उद्यान',
  developerLinkGardenActivities: 'धर्म उद्यान गतिविधियाँ',
  developerLinkRiceTrade: 'ऑनलाइन चावल व्यापार समूह',
  developerLinkGrassTrade: 'पैंगोला घास व्यापार समूह',
  developerLinkEnergyGroup: 'सेल्फ-रिफाइनिंग ऊर्जा समूह',
  developerLinkPropertyGroup: 'रियल एस्टेट ट्रेडिंग समूह',
  setupStep: 'चरण',
  setupMetaApiDesc: 'MetaAPI से Account ID और API Key दर्ज करें ताकि आपका MT5 ट्रेडिंग खाता जुड़ जाए',
  setupAiBrainDesc: 'विश्लेषण और बातचीत के लिए एक AI प्रदाता चुनें',
  accountIdPlaceholder: 'MetaAPI खाता आईडी दर्ज करें',
  connectMetaApi: 'MetaAPI से कनेक्ट करें',
  connectAiBrain: 'AI ब्रेन से कनेक्ट करें',
  viewGuide: 'गाइड देखें',
  backToMetaApi: 'MetaAPI सेटअप पर वापस जाएं',
  connectionFailedDesc: 'कृपया अपना खाता आईडी और API Key जांचें। सहायता के लिए गाइड मेनू देखें।',
  pleaseEnterAiKey: 'कृपया चयनित AI प्रदाता के लिए API Key दर्ज करें',
  aiResponseCheckTrade: 'बाजार का विश्लेषण हो रहा है... कृपया MetaAPI से वास्तविक समय विश्लेषण के लिए ट्रेड स्क्रीन पर Check Trade बटन का उपयोग करें।',
  aiResponseApproveTrade: 'कृपया ट्रेड जांचने के बाद ट्रेड स्क्रीन पर Approve Trade बटन का उपयोग करें। सिस्टम विश्लेषण के आधार पर आदेश निष्पादित करेगा।',
  aiResponseAutoTrade: 'कृपया पहले Trading Skills में ऑटो-ट्रेडिंग समय सेट करें, फिर ट्रेड स्क्रीन पर Set Auto Trading दबाएं।',
  aiResponseCancelAuto: 'कृपया ट्रेड स्क्रीन पर Cancel Auto Trading बटन दबाएं।',
  aiResponseDharma: 'धर्म जीवन में आवश्यक है। ट्रेडिंग भी ऐसा ही है - यह सतर्कता, ध्यान, न लोभ, न क्रोध की मांग करता है। अनापनसति (श्वास जागरूकता) मन को शांत करने के लिए एक महान आधार है।',
  aiResponseGreeting: 'नमस्ते! मैं KanutsananFX हूँ, सेवा में खुश हूँ। मैं आपको फॉरेक्स बाजार विश्लेषण, ट्रेडिंग सिफारिशें, ट्रेडिंग स्किल्स अनुकूलन, और धर्म व वैश्विक वित्तीय प्रणालियों पर चर्चा में मदद कर सकता हूँ।',
  aiResponseDefault: 'आपके संदेश के लिए धन्यवाद। मैं KanutsananFX हूँ, फॉरेक्स ट्रेडिंग और धर्म चर्चा में आपकी मदद के लिए तैयार। आप कमांड्स का उपयोग कर सकते हैं: Check Trade, Approve Trade, Set Auto Trading, Cancel Auto Trading।',
  aiErrorGeneric: 'क्षमा करें, इस समय उत्तर नहीं दिया जा सकता।',
  aiErrorConnection: 'त्रुटि हुई। कृपया अपनी API Key और इंटरनेट कनेक्शन जांचें।',
  darkMode: 'डार्क मोड',
  notifications: 'सूचनाएं',
  clearChatHistory: 'चैट इतिहास साफ करें',
  clearChatConfirm: 'क्या आप सभी चैट इतिहास साफ करना चाहते हैं?',
  exportSettings: 'सेटिंग्स निर्यात करें',
  importSettings: 'सेटिंग्स आयात करें',
  settingsMetaApiSection: 'MetaAPI',
  settingsAiBrainSection: 'AI ब्रेन',
  settingsLanguageSection: 'भाषा',
  settingsBackupSection: 'बैकअप/पुनर्स्थापना',
  settingsAboutSection: 'बारे में',
  tradeAnalysisResult: 'विश्लेषण परिणाम',
  trendUp: 'उपर की प्रवृत्ति',
  trendDown: 'नीचे की प्रवृत्ति',
  signalStrength: 'सिग्नल मजबूती',
  entryPrice: 'प्रवेश मूल्य',
  stopLoss: 'स्टॉप लॉस',
  takeProfit: 'टेक प्रॉफिट',
  lotSize: 'लॉट साइज',
  riskReward: 'जोखिम/इनाम',
  noAnalysisYet: 'अभी तक कोई विश्लेषण नहीं',
  analyzing: 'विश्लेषण कर रहा है...',
  executing: 'निष्पादित कर रहा है...',
  autoTradeActive: 'ऑटो ट्रेडिंग सक्रिय है',
  autoTradeInactive: 'ऑटो ट्रेडिंग निष्क्रिय है',
};

export default hi;
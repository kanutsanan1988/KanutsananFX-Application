import { TranslationKey } from '../keys';

const bn: Record<TranslationKey, string> = {
  appName: 'KanutsananFX',
  welcome: 'KanutsananFX-এ স্বাগতম',
  settings: 'সেটিংস',
  chat: 'AI চ্যাট',
  trade: 'ট্রেড',
  guide: 'গাইড',
  developer: 'ডেভেলপার',
  tradingSkills: 'ট্রেডিং দক্ষতা',
  metaApiSettings: 'MetaAPI সেটিংস',
  accountId: 'Account ID',
  apiKey: 'API Key',
  aiBrainSettings: 'AI ব্রেন',
  selectAiProvider: 'AI প্রোভাইডার নির্বাচন করুন',
  apiKeyPlaceholder: 'API Key লিখুন',
  save: 'সংরক্ষণ করুন',
  cancel: 'বাতিল করুন',
  connect: 'সংযোগ করুন',
  disconnect: 'সংযোগ বিচ্ছিন্ন করুন',
  connected: 'সংযুক্ত',
  disconnected: 'সংযোগ বিচ্ছিন্ন',
  connectionSuccess: 'সংযোগ সফল হয়েছে',
  connectionFailed: 'সংযোগ ব্যর্থ হয়েছে',
  pleaseSetup: 'অনুগ্রহ করে প্রথমে MetaAPI এবং AI ব্রেন সেটআপ করুন',
  checkTrade: 'ট্রেড পরীক্ষা করুন',
  approveTrade: 'ট্রেড অনুমোদন করুন',
  setAutoTrade: 'অটো ট্রেডিং সেট করুন',
  cancelAutoTrade: 'অটো ট্রেডিং বাতিল করুন',
  autoTrading: 'অটো ট্রেডিং',
  tradingInterval: 'ট্রেডিং পরীক্ষার ব্যবধান',
  selectPair: 'ট্রেডিং পেয়ার নির্বাচন করুন',
  checkTradeDesc: 'বাজার বিশ্লেষণ করুন এবং সুপারিশ প্রদান করুন (STEP 0-9)',
  approveTradeDesc: 'সুপারিশের উপর ভিত্তি করে ট্রেড অর্ডার পাঠান',
  setAutoTradeDesc: 'স্বয়ংক্রিয় পরীক্ষা এবং ট্রেড সময়সূচী সেট করুন',
  cancelAutoTradeDesc: 'স্বয়ংক্রিয় ট্রেডিং সিস্টেম বন্ধ করুন',
  analyzeMarket: 'বাজার বিশ্লেষণ করুন',
  sendTradeOrder: 'ট্রেড অর্ডার পাঠান',
  autoCheckEvery: 'প্রতিবার পরীক্ষা করুন',
  stopAutoTrading: 'অটো ট্রেডিং বন্ধ করুন',
  confirmTrade: 'ট্রেড নিশ্চিত করুন',
  tradeSuccess: 'ট্রেড সফল হয়েছে',
  tradeFailed: 'ট্রেড ব্যর্থ হয়েছে',
  notReady: 'ট্রেড করার জন্য প্রস্তুত নয়',
  checkFirst: 'অনুগ্রহ করে প্রথমে ট্রেড পরীক্ষা করুন',
  autoTradeStarted: 'অটো ট্রেডিং শুরু হয়েছে',
  autoTradeStopped: 'অটো ট্রেডিং বন্ধ হয়েছে',
  typeMessage: 'একটি বার্তা টাইপ করুন...',
  voiceInput: 'ভয়েস ইনপুট',
  aiThinking: 'চিন্তা করছে...',
  welcomeMessage: 'নমস্কার! আমি KanutsananFX, আপনাকে সেবা করতে পেরে আনন্দিত।',
  voiceComingSoon: 'ভয়েস কথোপকথন বৈশিষ্ট্য - পরবর্তী সংস্করণে আসছে',
  guideMetaApi: 'MetaAPI গাইড',
  guideAiProvider: 'AI প্রোভাইডার গাইড',
  guideTradingSkills: 'ট্রেডিং দক্ষতা গাইড',
  guideCommands: 'কমান্ডস গাইড',
  selectGuide: 'পড়ার জন্য একটি গাইড নির্বাচন করুন',
  back: 'ফিরে যান',
  noInternet: 'কোনো ইন্টারনেট সংযোগ নেই',
  setupRequired: 'সেটআপ প্রয়োজন',
  close: 'বন্ধ করুন',
  seconds: 'সেকেন্ড',
  minutes: 'মিনিট',
  hours: 'ঘন্টা',
  backup: 'ব্যাকআপ',
  restore: 'পুনরুদ্ধার',
  backupToGDrive: 'Google Drive-এ ব্যাকআপ করুন',
  restoreFromGDrive: 'Google Drive থেকে পুনরুদ্ধার করুন',
  backupComingSoon: 'ব্যাকআপ বৈশিষ্ট্য পরবর্তী সংস্করণে আসছে',
  restoreComingSoon: 'পুনরুদ্ধার বৈশিষ্ট্য পরবর্তী সংস্করণে আসছে',
  currentLlm: 'বর্তমান AI ব্রেন',
  status: 'স্ট্যাটাস',
  tradingPair: 'ট্রেডিং পেয়ার',
  connectionStatus: 'সংযোগ স্ট্যাটাস',
  autoCheckInterval: 'অটো পরীক্ষার ব্যবধান',
  selectTradingPair: 'ট্রেডিং পেয়ার নির্বাচন করুন',
  loadingPairs: 'ট্রেডিং পেয়ার লোড হচ্ছে...',
  currentSetting: 'বর্তমান',
  refreshPairs: 'ট্রেডিং পেয়ার রিফ্রেশ করুন',
  connectMetaApiFirst: 'ট্রেডিং পেয়ার লোড করার জন্য অনুগ্রহ করে প্রথমে MetaAPI সংযোগ করুন',
  developerName: 'Kanutsanan Pongpanna',
  developerTitle: 'KanutsananFX ডেভেলপার',
  developerBio: 'অনলাইন কৃষি ব্যবসায়ী | AI ট্রেডিং ডেভেলপার
Maha Sarakham | বি.এসসি. অ্যাপ্লাইড ফিজিক্স, Mahasarakham University',
  developerQuote: 'আমরা তাদের মতো দাঁড়াই যারা কাউকে অত্যাচার করে না, কিন্তু আমরা পদদলিত হওয়ার জন্য জন্মাইনি।',
  linksAndContacts: 'লিঙ্ক এবং পরিচিতি',
  sourceCodeRef: 'সোর্স কোড রেফারেন্স',
  youtubeRef: 'YouTube ভিডিও রেফারেন্স',
  language: 'ভাষা',
  selectLanguage: 'ভাষা নির্বাচন করুন',
  languageName: 'বাংলা',
  setupTitle: 'প্রাথমিক সেটআপ',
  setupDesc: 'KanutsananFX ব্যবহার শুরু করতে তথ্য লিখুন',
  step1MetaApi: 'ধাপ 1: MetaAPI সেটআপ করুন',
  step2AiBrain: 'ধাপ 2: AI ব্রেন সেটআপ করুন',
  startUsing: 'ব্যবহার শুরু করুন',
  skipSetup: 'সেটআপ এড়িয়ে যান',
  letsGo: 'চলুন শুরু করা যাক!',
  resetConnection: 'সংযোগ রিসেট করুন',
  resetWarning: 'সমস্ত সংযোগ ডেটা মুছে ফেলা হবে',
  reset: 'রিসেট',
  ok: 'ঠিক আছে',
  confirm: 'নিশ্চিত করুন',
  warning: 'সতর্কতা',
  error: 'ত্রুটি',
  success: 'সাফল্য',
  loading: 'লোড হচ্ছে...',
  retry: 'পুনরায় চেষ্টা করুন',
  comingSoon: 'শীঘ্রই আসছে',
  version: 'সংস্করণ',
  guideMetaApiContent: '# MetaAPI গাইড

## ধাপ 1: MetaAPI অ্যাকাউন্টে নিবন্ধন করুন
- https://app.metaapi.cloud এ যান
- একটি নতুন অ্যাকাউন্ট তৈরি করুন বা সাইন ইন করুন
- আপনার ইমেল যাচাই করুন

## ধাপ 2: MT5 অ্যাকাউন্ট সংযুক্ত করুন
- নতুন অ্যাকাউন্টে ক্লিক করুন
- বিদ্যমান অ্যাকাউন্ট সংযুক্ত করুন নির্বাচন করুন
- MT5 বিবরণ লিখুন: সার্ভার, লগইন, পাসওয়ার্ড
- অ্যাকাউন্ট তৈরি করুন ক্লিক করুন

## ধাপ 3: অ্যাকাউন্ট আইডি পান
- অ্যাকাউন্ট তৈরি করার পরে, আপনি অ্যাকাউন্ট আইডি দেখতে পাবেন
- অ্যাকাউন্ট আইডি অনুলিপি করুন
- এটি KanutsananFX এ লিখুন

## ধাপ 4: API কী পান
- সেটিংসে যান তারপর API অ্যাক্সেস
- একটি নতুন API টোকেন তৈরি করুন
- টোকেনটি অনুলিপি করুন
- এটি KanutsananFX এ লিখুন

## গুরুত্বপূর্ণ
- আপনার API কী কখনও শেয়ার করবেন না
- নিরাপত্তার জন্য 2FA ব্যবহার করুন"New Account"\n- Select "Connect existing account"\n- Enter MT5 details: Server, Login, Password\n- Click "Create Account"\n\n## Step 3: Get Account ID\n- After creating the account, you will see the Account ID\n- Copy the Account ID\n- Enter it in KanutsananFX\n\n## Step 4: Get API Key\n- Go to Settings → API Access\n- Create a new API Token\n- Copy the Token\n- Enter it in KanutsananFX\n\n## Important\n- Never share your API Key\n- Use 2FA for security',
  guideAiProviderContent: '# এআই প্রোভাইডার গাইড

## 1. KanutsananFX (ডিফল্ট)
- বিল্ট-ইন এলএলএম, কোনো API কী প্রয়োজন নেই

## 2. OpenAI
- ওয়েবসাইট: https://platform.openai.com

## 3. Anthropic (Claude)
- ওয়েবসাইট: https://console.anthropic.com

## 4. Google Gemini
- ওয়েবসাইট: https://aistudio.google.com

## 5. Grok (xAI)
- ওয়েবসাইট: https://console.x.ai

## 6. Perplexity
- ওয়েবসাইট: https://www.perplexity.ai/settings/api

## 7. OpenRouter
- ওয়েবসাইট: https://openrouter.ai',
  guideTradingSkillsContent: '# ট্রেডিং দক্ষতা গাইড

## স্বয়ংক্রিয় পরীক্ষার ব্যবধান
- 30 সেকেন্ড - সবচেয়ে ঘন ঘন
- 1-10 মিনিট - মাঝারি
- 1-5 ঘন্টা - সর্বনিম্ন ঘন ঘন

## বিশ্লেষণ সিস্টেম STEP 0-9
- STEP 0: বাজার খোলা/বন্ধ পরীক্ষা করুন
- STEP 1: বর্তমান মূল্য
- STEP 2: M15 চার্ট বিশ্লেষণ করুন
- STEP 3: SL/TP গণনা করুন
- STEP 4: Risk/Reward পরীক্ষা করুন
- STEP 5: পজিশন সাইজ গণনা করুন
- STEP 6: সংকেত শক্তি মূল্যায়ন করুন
- STEP 7: দিক পরীক্ষা করুন
- STEP 8: API যাচাই করুন
- STEP 9: বিদ্যমান পজিশন পরীক্ষা করুন',
  guideCommandsContent: '# কমান্ড গাইড

## 1. ট্রেড পরীক্ষা করুন
- STEP 0-9 ব্যবহার করে বাজার বিশ্লেষণ করুন
- বিশ্লেষণের ফলাফল প্রদর্শন করুন

## 2. ট্রেড অনুমোদন করুন
- বিশ্লেষণের উপর ভিত্তি করে ট্রেড সম্পাদন করুন

## 3. স্বয়ংক্রিয় ট্রেডিং সেট করুন
- সময়সূচী অনুযায়ী স্বয়ংক্রিয়ভাবে পরীক্ষা করুন এবং ট্রেড করুন

## 4. স্বয়ংক্রিয় ট্রেডিং বাতিল করুন
- অবিলম্বে স্বয়ংক্রিয় ট্রেডিং বন্ধ করুন',
  developerLinks: 'লিঙ্ক এবং পরিচিতি',
  sourceCodeReference: 'সোর্স কোড রেফারেন্স',
  youtubeReferences: 'ইউটিউব ভিডিও রেফারেন্স',
  videoOne: 'ভিডিও 1',
  videoTwo: 'ভিডিও 2',
  developerLinkChat: 'ডেভেলপার LoveMoney AI এর সাথে চ্যাট করুন',
  developerLinkLoveMoneyAi: 'ChatGPT তে LoveMoney AI',
  developerLinkYoutubeOfficial: 'ইউটিউব চ্যানেল LoveMoney Official',
  developerLinkFacebookPage: 'ফেসবুক পেজ LoveMoney',
  developerLinkLokathibodi: 'লোকধিবোদি শাস্ত্র',
  developerLinkGardenMain: 'পুণ্যের ধর্ম বাগান',
  developerLinkGardenActivities: 'ধর্ম বাগান কার্যক্রম',
  developerLinkRiceTrade: 'অনলাইন চাল ট্রেডিং গ্রুপ',
  developerLinkGrassTrade: 'প্যাঙ্গোলা ঘাস ট্রেডিং গ্রুপ',
  developerLinkEnergyGroup: 'স্ব-পরিশোধক শক্তি গ্রুপ',
  developerLinkPropertyGroup: 'রিয়েল এস্টেট ট্রেডিং গ্রুপ',
  setupStep: 'ধাপ',
  setupMetaApiDesc: 'আপনার MT5 ট্রেডিং অ্যাকাউন্ট সংযোগ করতে MetaAPI থেকে অ্যাকাউন্ট আইডি এবং API কী লিখুন',
  setupAiBrainDesc: 'বিশ্লেষণ এবং কথোপকথনের জন্য একটি এআই প্রোভাইডার নির্বাচন করুন',
  accountIdPlaceholder: 'MetaAPI অ্যাকাউন্ট আইডি লিখুন',
  connectMetaApi: 'MetaAPI সংযোগ করুন',
  connectAiBrain: 'এআই ব্রেন সংযোগ করুন',
  viewGuide: 'গাইড দেখুন',
  backToMetaApi: 'MetaAPI সেটআপে ফিরে যান',
  connectionFailedDesc: 'অনুগ্রহ করে আপনার অ্যাকাউন্ট আইডি এবং API কী পরীক্ষা করুন। সাহায্যের জন্য গাইড মেনু দেখুন।',
  pleaseEnterAiKey: 'অনুগ্রহ করে নির্বাচিত এআই প্রোভাইডারের জন্য API কী লিখুন',
  aiResponseCheckTrade: 'বাজার বিশ্লেষণ করা হচ্ছে... MetaAPI থেকে রিয়েল-টাইম বিশ্লেষণের জন্য ট্রেড স্ক্রিনে ট্রেড পরীক্ষা করুন বোতামটি ব্যবহার করুন।',
  aiResponseApproveTrade: 'ট্রেড পরীক্ষা করার পরে ট্রেড স্ক্রিনে ট্রেড অনুমোদন করুন বোতামটি ব্যবহার করুন। সিস্টেম বিশ্লেষণের উপর ভিত্তি করে অর্ডার সম্পাদন করবে।',
  aiResponseAutoTrade: 'অনুগ্রহ করে প্রথমে ট্রেডিং দক্ষতায় স্বয়ংক্রিয়-বাণিজ্য সময় কনফিগার করুন, তারপর ট্রেড স্ক্রিনে স্বয়ংক্রিয় ট্রেডিং সেট করুন চাপুন।',
  aiResponseCancelAuto: 'অনুগ্রহ করে ট্রেড স্ক্রিনে স্বয়ংক্রিয় ট্রেডিং বাতিল করুন বোতামটি চাপুন।',
  aiResponseDharma: 'জীবনে ধর্ম অপরিহার্য। ট্রেডিংও একই - এর জন্য মননশীলতা, একাগ্রতা, লোভহীনতা, ক্রোধহীনতা প্রয়োজন। আনাपानসতি (শ্বাস সচেতনতা) মনকে শান্ত করার জন্য একটি দুর্দান্ত ভিত্তি।',
  aiResponseGreeting: 'নমস্কার! আমি KanutsananFX, আপনাকে সেবা করতে পেরে খুশি। আমি আপনাকে ফরেক্স বাজার বিশ্লেষণ, ট্রেডিং সুপারিশ, ট্রেডিং দক্ষতা কাস্টমাইজ করতে এবং ধর্ম এবং বিশ্বব্যাপী আর্থিক ব্যবস্থা নিয়ে আলোচনা করতে সাহায্য করতে পারি।',
  aiResponseDefault: 'আপনার বার্তার জন্য ধন্যবাদ। আমি KanutsananFX, আপনাকে ফরেক্স ট্রেডিং এবং ধর্ম আলোচনায় সাহায্য করার জন্য প্রস্তুত। আপনি কমান্ড ব্যবহার করতে পারেন: ট্রেড পরীক্ষা করুন, ট্রেড অনুমোদন করুন, স্বয়ংক্রিয় ট্রেডিং সেট করুন, স্বয়ংক্রিয় ট্রেডিং বাতিল করুন।',
  aiErrorGeneric: 'দুঃখিত, এই মুহূর্তে উত্তর দিতে পারছি না।',
  aiErrorConnection: 'একটি ত্রুটি ঘটেছে। অনুগ্রহ করে আপনার API কী এবং ইন্টারনেট সংযোগ পরীক্ষা করুন।',
  darkMode: 'ডার্ক মোড',
  notifications: 'বিজ্ঞপ্তি',
  clearChatHistory: 'চ্যাট ইতিহাস সাফ করুন',
  clearChatConfirm: 'আপনি কি সমস্ত চ্যাট ইতিহাস সাফ করতে চান?',
  exportSettings: 'সেটিংস রপ্তানি করুন',
  importSettings: 'সেটিংস আমদানি করুন',
  settingsMetaApiSection: 'MetaAPI',
  settingsAiBrainSection: 'এআই ব্রেন',
  settingsLanguageSection: 'ভাষা',
  settingsBackupSection: 'ব্যাকআপ/পুনরুদ্ধার',
  settingsAboutSection: 'সম্পর্কে',
  tradeAnalysisResult: 'বিশ্লেষণের ফলাফল',
  trendUp: 'আপট্রেন্ড',
  trendDown: 'ডাউনট্রেন্ড',
  signalStrength: 'সংকেত শক্তি',
  entryPrice: 'প্রবেশ মূল্য',
  stopLoss: 'Stop Loss',
  takeProfit: 'Take Profit',
  lotSize: 'Lot Size',
  riskReward: 'Risk/Reward',
  noAnalysisYet: 'এখনও কোনো বিশ্লেষণ নেই',
  analyzing: 'বিশ্লেষণ করা হচ্ছে...',
  executing: 'সম্পাদন করা হচ্ছে...',
  autoTradeActive: 'স্বয়ংক্রিয় ট্রেডিং সক্রিয়',
  autoTradeInactive: 'স্বয়ংক্রিয় ট্রেডিং নিষ্ক্রিয়',
};

export default bn;
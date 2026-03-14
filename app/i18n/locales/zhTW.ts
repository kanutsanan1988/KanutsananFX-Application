import { TranslationKey } from '../keys';

const zhTW: Record<TranslationKey, string> = {
  appName: 'KanutsananFX',
  welcome: '歡迎使用 KanutsananFX',
  settings: '設定',
  chat: 'AI 聊天',
  trade: '交易',
  guide: '指南',
  developer: '開發者',
  tradingSkills: '交易技巧',
  metaApiSettings: 'MetaAPI 設定',
  accountId: 'Account ID',
  apiKey: 'API Key',
  aiBrainSettings: 'AI 大腦',
  selectAiProvider: '選擇 AI 供應商',
  apiKeyPlaceholder: '輸入 API Key',
  save: '儲存',
  cancel: '取消',
  connect: '連線',
  disconnect: '中斷連線',
  connected: '已連線',
  disconnected: '已中斷連線',
  connectionSuccess: '連線成功',
  connectionFailed: '連線失敗',
  pleaseSetup: '請先設定 MetaAPI 和 AI 大腦',
  checkTrade: '檢查交易',
  approveTrade: '批准交易',
  setAutoTrade: '設定自動交易',
  cancelAutoTrade: '取消自動交易',
  autoTrading: '自動交易',
  tradingInterval: '交易檢查間隔',
  selectPair: '選擇交易對',
  checkTradeDesc: '分析市場並提供建議 (STEP 0-9)',
  approveTradeDesc: '根據建議發送交易訂單',
  setAutoTradeDesc: '設定自動檢查與交易排程',
  cancelAutoTradeDesc: '停止自動交易系統',
  analyzeMarket: '分析市場',
  sendTradeOrder: '發送交易訂單',
  autoCheckEvery: '每',
  stopAutoTrading: '停止自動交易',
  confirmTrade: '確認交易',
  tradeSuccess: '交易成功',
  tradeFailed: '交易失敗',
  notReady: '尚未準備好交易',
  checkFirst: '請先檢查交易',
  autoTradeStarted: '自動交易已啟動',
  autoTradeStopped: '自動交易已停止',
  typeMessage: '輸入訊息...',
  voiceInput: '語音輸入',
  aiThinking: '思考中...',
  welcomeMessage: '您好！我是 KanutsananFX，很高興為您服務。',
  voiceComingSoon: '語音對話功能 - 將於下一版本推出',
  guideMetaApi: 'MetaAPI 指南',
  guideAiProvider: 'AI 供應商指南',
  guideTradingSkills: '交易技巧指南',
  guideCommands: '指令指南',
  selectGuide: '選擇要閱讀的指南',
  back: '返回',
  noInternet: '沒有網路連線',
  setupRequired: '需要設定',
  close: '關閉',
  seconds: '秒',
  minutes: '分鐘',
  hours: '小時',
  backup: '備份',
  restore: '還原',
  backupToGDrive: '備份至 Google Drive',
  restoreFromGDrive: '從 Google Drive 還原',
  backupComingSoon: '備份功能將於下一版本推出',
  restoreComingSoon: '還原功能將於下一版本推出',
  currentLlm: '目前的 AI 大腦',
  status: '狀態',
  tradingPair: '交易對',
  connectionStatus: '連線狀態',
  autoCheckInterval: '自動檢查間隔',
  selectTradingPair: '選擇交易對',
  loadingPairs: '正在載入交易對...',
  currentSetting: '目前',
  refreshPairs: '重新整理交易對',
  connectMetaApiFirst: '請先連線 MetaAPI 以載入交易對',
  developerName: 'Kanutsanan Pongpanna',
  developerTitle: 'KanutsananFX 開發者',
  developerBio: '線上農產品交易員 | AI 交易開發者
Maha Sarakham | 理學士應用物理學, Mahasarakham University',
  developerQuote: '我們是那些不欺壓任何人的人，但我們生來也不是要被踐踏的。',
  linksAndContacts: '連結與聯絡方式',
  sourceCodeRef: '原始碼參考',
  youtubeRef: 'YouTube 影片參考',
  language: '語言',
  selectLanguage: '選擇語言',
  languageName: '繁體中文',
  setupTitle: '初始設定',
  setupDesc: '輸入資訊以開始使用 KanutsananFX',
  step1MetaApi: '步驟 1：設定 MetaAPI',
  step2AiBrain: '步驟 2：設定 AI 大腦',
  startUsing: '開始使用',
  skipSetup: '跳過設定',
  letsGo: '開始吧！',
  resetConnection: '重設連線',
  resetWarning: '所有連線資料將被刪除',
  reset: '重設',
  ok: '確定',
  confirm: '確認',
  warning: '警告',
  error: '錯誤',
  success: '成功',
  loading: '載入中...',
  retry: '重試',
  comingSoon: '即將推出',
  version: '版本',
  guideMetaApiContent: '# MetaAPI 指南

## 步驟 1: 註冊 MetaAPI 帳戶
- 前往 https://app.metaapi.cloud
- 建立新帳戶或登入
- 驗證您的電子郵件

## 步驟 2: 連接 MT5 帳戶
- 點擊 New Account
- 選擇 Connect existing account
- 輸入 MT5 詳細資訊: Server, Login, Password
- 點擊 Create Account

## 步驟 3: 獲取帳戶 ID
- 建立帳戶後, 您將看到帳戶 ID
- 複製帳戶 ID
- 在 KanutsananFX 中輸入

## 步驟 4: 獲取 API Key
- 前往設定,然後 API Access
- 建立新的 API 金鑰
- 複製該金鑰
- 在 KanutsananFX 中輸入

## 重要
- 切勿分享您的 API Key
- 使用 2FA 提高安全性"New Account"\n- Select "Connect existing account"\n- Enter MT5 details: Server, Login, Password\n- Click "Create Account"\n\n## Step 3: Get Account ID\n- After creating the account, you will see the Account ID\n- Copy the Account ID\n- Enter it in KanutsananFX\n\n## Step 4: Get API Key\n- Go to Settings → API Access\n- Create a new API Token\n- Copy the Token\n- Enter it in KanutsananFX\n\n## Important\n- Never share your API Key\n- Use 2FA for security',
  guideAiProviderContent: '# AI 提供商指南

## 1. KanutsananFX (預設)
- 內建 LLM, 無需 API Key

## 2. OpenAI
- 網站: https://platform.openai.com

## 3. Anthropic (Claude)
- 網站: https://console.anthropic.com

## 4. Google Gemini
- 網站: https://aistudio.google.com

## 5. Grok (xAI)
- 網站: https://console.x.ai

## 6. Perplexity
- 網站: https://www.perplexity.ai/settings/api

## 7. OpenRouter
- 網站: https://openrouter.ai',
  guideTradingSkillsContent: '# 交易技能指南

## 自動檢查間隔
- 30 秒 - 最頻繁
- 1-10 分鐘 - 適中
- 1-5 小時 - 最不頻繁

## 分析系統 STEP 0-9
- STEP 0: 檢查市場開/收盤
- STEP 1: 當前價格
- STEP 2: 分析 M15 圖表
- STEP 3: 計算 SL/TP
- STEP 4: 檢查 Risk/Reward
- STEP 5: 計算倉位大小
- STEP 6: 評估信號強度
- STEP 7: 檢查方向
- STEP 8: 驗證 API
- STEP 9: 檢查現有倉位',
  guideCommandsContent: '# 指令指南

## 1. 檢查交易
- 使用 STEP 0-9 分析市場
- 顯示分析結果

## 2. 批准交易
- 根據分析執行交易

## 3. 設置自動交易
- 按預定計劃自動檢查和交易

## 4. 取消自動交易
- 立即停止自動交易',
  developerLinks: '網絡資源與聯絡方式',
  sourceCodeReference: '原始碼參考資料',
  youtubeReferences: 'YouTube 影片參考資料',
  videoOne: '影片 1',
  videoTwo: '影片 2',
  developerLinkChat: '與開發者 LoveMoney AI 聊天',
  developerLinkLoveMoneyAi: 'LoveMoney AI 的 ChatGPT 帳號',
  developerLinkYoutubeOfficial: 'LoveMoney 官方 YouTube 頻道',
  developerLinkFacebookPage: 'LoveMoney 的 Facebook 粉絲專頁',
  developerLinkLokathibodi: 'Lokathibodi 經典抄本',
  developerLinkGardenMain: '功德園主要園區',
  developerLinkGardenActivities: '功德園活動資訊',
  developerLinkRiceTrade: '線上水稻交易社群',
  developerLinkGrassTrade: '巴拉草貿易社群',
  developerLinkEnergyGroup: '自我修煉能量社群',
  developerLinkPropertyGroup: '房地產交易社群',
  setupStep: '步驟',
  setupMetaApiDesc: '輸入從 MetaAPI 取得的帳戶 ID 和 API Key 以連接您的 MT5 交易帳戶',
  setupAiBrainDesc: '選擇分析和對話所使用的 AI 提供商',
  accountIdPlaceholder: '輸入 MetaAPI 帳戶 ID',
  connectMetaApi: '連接 MetaAPI',
  connectAiBrain: '連接 AI 大腦',
  viewGuide: '查看指南',
  backToMetaApi: '返回 MetaAPI 設定',
  connectionFailedDesc: '請檢查您的帳戶 ID 和 API Key。請參考指南選單以獲取協助。',
  pleaseEnterAiKey: '請輸入所選 AI 提供商的 API Key',
  aiResponseCheckTrade: '正在分析市場... 請在交易畫面上使用 Check Trade 按鈕以獲取來自 MetaAPI 的即時分析。',
  aiResponseApproveTrade: '請在檢查交易後在交易畫面上使用 Approve Trade 按鈕。系統將根據分析執行訂單。',
  aiResponseAutoTrade: '請先在交易技能中設定自動交易計劃, 然後在交易畫面上按下 Set Auto Trading。',
  aiResponseCancelAuto: '請在交易畫面上按下 Cancel Auto Trading 按鈕。',
  aiResponseDharma: '正法是生活的根本。交易亦是如此 - 需要正念、專注、無貪、無瞋。安般念是穩定心智的好方法。',
  aiResponseGreeting: '您好! 我是 KanutsananFX, 很高興能為您服務。我可以協助您分析外匯市場、提供交易建議、設定交易技能,以及探討正法與全球金融體系。',
  aiResponseDefault: '感謝您的留言。我是 KanutsananFX, 隨時準備協助您的外匯交易和正法探討。您可以使用以下指令: Check Trade, Approve Trade, Set Auto Trading, Cancel Auto Trading。',
  aiErrorGeneric: '非常抱歉, 目前無法回應您。',
  aiErrorConnection: '發生錯誤。請檢查您的 API Key 和網絡連接。',
  darkMode: '深色模式',
  notifications: '通知',
  clearChatHistory: '清除聊天記錄',
  clearChatConfirm: '確定要清除全部聊天記錄嗎?',
  exportSettings: '匯出設定',
  importSettings: '匯入設定',
  settingsMetaApiSection: 'MetaAPI',
  settingsAiBrainSection: 'AI 大腦',
  settingsLanguageSection: '語言',
  settingsBackupSection: '備份/還原',
  settingsAboutSection: '關於',
  tradeAnalysisResult: '分析結果',
  trendUp: '上漲趨勢',
  trendDown: '下跌趨勢',
  signalStrength: '信號強度',
  entryPrice: '進場價格',
  stopLoss: 'Stop Loss',
  takeProfit: 'Take Profit',
  lotSize: 'Lot Size',
  riskReward: 'Risk/Reward',
  noAnalysisYet: '尚未進行分析',
  analyzing: '分析中...',
  executing: '執行中...',
  autoTradeActive: '自動交易已啟用',
  autoTradeInactive: '自動交易已停用',
};

export default zhTW;
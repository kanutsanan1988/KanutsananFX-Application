import { TranslationKey } from '../keys';

const zh: Record<TranslationKey, string> = {
  appName: 'KanutsananFX',
  welcome: '欢迎使用 KanutsananFX',
  settings: '设置',
  chat: 'AI 聊天',
  trade: '交易',
  guide: '指南',
  developer: '开发者',
  tradingSkills: '交易技巧',
  metaApiSettings: 'MetaAPI 设置',
  accountId: 'Account ID',
  apiKey: 'API Key',
  aiBrainSettings: 'AI 大脑',
  selectAiProvider: '选择 AI 提供商',
  apiKeyPlaceholder: '输入 API Key',
  save: '保存',
  cancel: '取消',
  connect: '连接',
  disconnect: '断开连接',
  connected: '已连接',
  disconnected: '已断开',
  connectionSuccess: '连接成功',
  connectionFailed: '连接失败',
  pleaseSetup: '请先设置 MetaAPI 和 AI 大脑',
  checkTrade: '检查交易',
  approveTrade: '批准交易',
  setAutoTrade: '设置自动交易',
  cancelAutoTrade: '取消自动交易',
  autoTrading: '自动交易',
  tradingInterval: '交易检查间隔',
  selectPair: '选择交易对',
  checkTradeDesc: '分析市场并提供建议 (STEP 0-9)',
  approveTradeDesc: '根据建议发送交易订单',
  setAutoTradeDesc: '设置自动检查和交易计划',
  cancelAutoTradeDesc: '停止自动交易系统',
  analyzeMarket: '分析市场',
  sendTradeOrder: '发送交易订单',
  autoCheckEvery: '每',
  stopAutoTrading: '停止自动交易',
  confirmTrade: '确认交易',
  tradeSuccess: '交易成功',
  tradeFailed: '交易失败',
  notReady: '未准备好交易',
  checkFirst: '请先检查交易',
  autoTradeStarted: '自动交易已开始',
  autoTradeStopped: '自动交易已停止',
  typeMessage: '输入消息...',
  voiceInput: '语音输入',
  aiThinking: '思考中...',
  welcomeMessage: '你好！我是 KanutsananFX，很高兴为您服务。',
  voiceComingSoon: '语音对话功能 - 下一版本推出',
  guideMetaApi: 'MetaAPI 指南',
  guideAiProvider: 'AI 提供商指南',
  guideTradingSkills: '交易技巧指南',
  guideCommands: '命令指南',
  selectGuide: '选择一个指南阅读',
  back: '返回',
  noInternet: '无网络连接',
  setupRequired: '需要设置',
  close: '关闭',
  seconds: '秒',
  minutes: '分钟',
  hours: '小时',
  backup: '备份',
  restore: '恢复',
  backupToGDrive: '备份到 Google Drive',
  restoreFromGDrive: '从 Google Drive 恢复',
  backupComingSoon: '备份功能将在下一版本推出',
  restoreComingSoon: '恢复功能将在下一版本推出',
  currentLlm: '当前 AI 大脑',
  status: '状态',
  tradingPair: '交易对',
  connectionStatus: '连接状态',
  autoCheckInterval: '自动检查间隔',
  selectTradingPair: '选择交易对',
  loadingPairs: '正在加载交易对...',
  currentSetting: '当前',
  refreshPairs: '刷新交易对',
  connectMetaApiFirst: '请先连接 MetaAPI 以加载交易对',
  developerName: 'Kanutsanan Pongpanna',
  developerTitle: 'KanutsananFX 开发者',
  developerBio: '在线农产品交易员 | AI 交易开发者
玛哈沙拉堪 | 理学学士应用物理学，玛哈沙拉堪大学',
  developerQuote: '我们是那些不欺压任何人的人，但我们生来也不是为了被践踏。',
  linksAndContacts: '链接与联系方式',
  sourceCodeRef: '源代码参考',
  youtubeRef: 'YouTube 视频参考',
  language: '语言',
  selectLanguage: '选择语言',
  languageName: '简体中文',
  setupTitle: '初始设置',
  setupDesc: '输入信息以开始使用 KanutsananFX',
  step1MetaApi: '步骤 1：设置 MetaAPI',
  step2AiBrain: '步骤 2：设置 AI 大脑',
  startUsing: '开始使用',
  skipSetup: '跳过设置',
  letsGo: '开始！',
  resetConnection: '重置连接',
  resetWarning: '所有连接数据将被删除',
  reset: '重置',
  ok: '确定',
  confirm: '确认',
  warning: '警告',
  error: '错误',
  success: '成功',
  loading: '加载中...',
  retry: '重试',
  comingSoon: '即将推出',
  version: '版本',
  guideMetaApiContent: '# MetaAPI 指南

## 步骤 1: 注册 MetaAPI 账户
- 前往 https://app.metaapi.cloud
- 创建一个新账户或登录
- 验证您的电子邮件

## 步骤 2: 连接 MT5 账户
- 点击 New Account
- 选择 Connect existing account
- 输入 MT5 详细信息：服务器、登录名、密码
- 点击 Create Account

## 步骤 3: 获取 Account ID
- 创建账户后，您将看到 Account ID
- 复制 Account ID
- 在 KanutsananFX 中输入

## 步骤 4: 获取 API Key
- 前往 “设置” 然后 “API 访问”
- 创建一个新的 API Token
- 复制 Token
- 在 KanutsananFX 中输入

## 重要提示
- 切勿分享您的 API Key
- 使用 2FA 以确保安全"New Account"\n- Select "Connect existing account"\n- Enter MT5 details: Server, Login, Password\n- Click "Create Account"\n\n## Step 3: Get Account ID\n- After creating the account, you will see the Account ID\n- Copy the Account ID\n- Enter it in KanutsananFX\n\n## Step 4: Get API Key\n- Go to Settings → API Access\n- Create a new API Token\n- Copy the Token\n- Enter it in KanutsananFX\n\n## Important\n- Never share your API Key\n- Use 2FA for security',
  guideAiProviderContent: '# AI 提供商指南

## 1. KanutsananFX (默认)
- 内置 LLM，无需 API Key

## 2. OpenAI
- 网站: https://platform.openai.com

## 3. Anthropic (Claude)
- 网站: https://console.anthropic.com

## 4. Google Gemini
- 网站: https://aistudio.google.com

## 5. Grok (xAI)
- 网站: https://console.x.ai

## 6. Perplexity
- 网站: https://www.perplexity.ai/settings/api

## 7. OpenRouter
- 网站: https://openrouter.ai',
  guideTradingSkillsContent: '# 交易技巧指南

## 自动检查间隔
- 30 秒 - 最频繁
- 1-10 分钟 - 中等
- 1-5 小时 - 最不频繁

## 分析系统 STEP 0-9
- STEP 0: 检查市场开市/收市
- STEP 1: 当前价格
- STEP 2: 分析 M15 图表
- STEP 3: 计算 SL/TP
- STEP 4: 检查 Risk/Reward
- STEP 5: 计算头寸大小
- STEP 6: 评估信号强度
- STEP 7: 检查方向
- STEP 8: 验证 API
- STEP 9: 检查现有头寸',
  guideCommandsContent: '# 命令指南

## 1. 检查交易
- 使用 STEP 0-9 分析市场
- 显示分析结果

## 2. 批准交易
- 根据分析执行交易

## 3. 设置自动交易
- 按计划自动检查和交易

## 4. 取消自动交易
- 立即停止自动交易',
  developerLinks: '链接与联系方式',
  sourceCodeReference: '源代码参考',
  youtubeReferences: 'YouTube 视频参考',
  videoOne: '视频 1',
  videoTwo: '视频 2',
  developerLinkChat: '与开发者 LoveMoney AI 聊天',
  developerLinkLoveMoneyAi: 'ChatGPT 上的 LoveMoney AI',
  developerLinkYoutubeOfficial: 'YouTube 频道 LoveMoney Official',
  developerLinkFacebookPage: 'Facebook 页面 LoveMoney',
  developerLinkLokathibodi: 'Lokathibodi 经文',
  developerLinkGardenMain: '功德法园',
  developerLinkGardenActivities: '法园活动',
  developerLinkRiceTrade: '在线大米交易群',
  developerLinkGrassTrade: 'Pangola 草交易群',
  developerLinkEnergyGroup: '自我精炼能源群',
  developerLinkPropertyGroup: '房地产交易群',
  setupStep: '步骤',
  setupMetaApiDesc: '输入来自 MetaAPI 的 Account ID 和 API Key 以连接您的 MT5 交易账户',
  setupAiBrainDesc: '选择一个 AI 提供商进行分析和对话',
  accountIdPlaceholder: '输入 MetaAPI Account ID',
  connectMetaApi: '连接 MetaAPI',
  connectAiBrain: '连接 AI 大脑',
  viewGuide: '查看指南',
  backToMetaApi: '返回 MetaAPI 设置',
  connectionFailedDesc: '请检查您的 Account ID 和 API Key。请参阅“指南”菜单以获取帮助。',
  pleaseEnterAiKey: '请输入所选 AI 提供商的 API Key',
  aiResponseCheckTrade: '正在分析市场... 请使用“交易”屏幕上的“检查交易”按钮从 MetaAPI 获取实时分析。',
  aiResponseApproveTrade: '检查交易后，请按“交易”屏幕上的“批准交易”按钮。系统将根据分析执行订单。',
  aiResponseAutoTrade: '请先在“交易技巧”中配置自动交易时间，然后在“交易”屏幕上按“设置自动交易”。',
  aiResponseCancelAuto: '请按“交易”屏幕上的“取消自动交易”按钮。',
  aiResponseDharma: '佛法在生活中至关重要。交易也是如此——它需要正念、专注、不贪、不嗔。Anapanasati（呼吸觉知）是平靜心靈的良好基礎。',
  aiResponseGreeting: '您好！我是 KanutsananFX，很高兴为您服务。我可以帮助您进行外汇市场分析、提供交易建议、定制交易技巧，以及讨论佛法和全球金融体系。',
  aiResponseDefault: '感谢您的留言。我是 KanutsananFX，随时准备帮助您进行外汇交易和佛法讨论。您可以使用以下命令：检查交易、批准交易、设置自动交易、取消自动交易。',
  aiErrorGeneric: '抱歉，暂时无法回应。',
  aiErrorConnection: '发生错误。请检查您的 API Key 和网络连接。',
  darkMode: '夜间模式',
  notifications: '通知',
  clearChatHistory: '清除聊天记录',
  clearChatConfirm: '您要清除所有聊天记录吗？',
  exportSettings: '汇出设定',
  importSettings: '汇入设定',
  settingsMetaApiSection: 'MetaAPI',
  settingsAiBrainSection: 'AI 大脑',
  settingsLanguageSection: '语言',
  settingsBackupSection: '备份/恢复',
  settingsAboutSection: '关于',
  tradeAnalysisResult: '分析结果',
  trendUp: '上升趋势',
  trendDown: '下降趋势',
  signalStrength: '信号强度',
  entryPrice: '入场价',
  stopLoss: 'Stop Loss',
  takeProfit: 'Take Profit',
  lotSize: 'Lot Size',
  riskReward: 'Risk/Reward',
  noAnalysisYet: '尚无分析',
  analyzing: '正在分析...',
  executing: '正在执行...',
  autoTradeActive: '自动交易已激活',
  autoTradeInactive: '自动交易未激活',
};

export default zh;
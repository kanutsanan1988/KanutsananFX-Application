import { TranslationKey } from '../keys';

const ja: Record<TranslationKey, string> = {
  appName: 'KanutsananFX',
  welcome: 'KanutsananFXへようこそ',
  settings: '設定',
  chat: 'AIチャット',
  trade: 'トレード',
  guide: 'ガイド',
  developer: '開発者',
  tradingSkills: 'トレーディングスキル',
  metaApiSettings: 'MetaAPI設定',
  accountId: 'Account ID',
  apiKey: 'API Key',
  aiBrainSettings: 'AIブレイン',
  selectAiProvider: 'AIプロバイダーを選択',
  apiKeyPlaceholder: 'API Keyを入力',
  save: '保存',
  cancel: 'キャンセル',
  connect: '接続',
  disconnect: '切断',
  connected: '接続済み',
  disconnected: '切断済み',
  connectionSuccess: '接続に成功しました',
  connectionFailed: '接続に失敗しました',
  pleaseSetup: '最初にMetaAPIとAIブレインを設定してください',
  checkTrade: 'トレードを確認',
  approveTrade: 'トレードを承認',
  setAutoTrade: '自動売買を設定',
  cancelAutoTrade: '自動売買をキャンセル',
  autoTrading: '自動売買',
  tradingInterval: '取引確認間隔',
  selectPair: '取引ペアを選択',
  checkTradeDesc: '市場を分析し、推奨事項を提供します (STEP 0-9)',
  approveTradeDesc: '推奨に基づいて取引注文を送信します',
  setAutoTradeDesc: '自動確認と取引のスケジュールを設定します',
  cancelAutoTradeDesc: '自動売買システムを停止します',
  analyzeMarket: '市場を分析',
  sendTradeOrder: '取引注文を送信',
  autoCheckEvery: 'ごとに確認',
  stopAutoTrading: '自動売買を停止',
  confirmTrade: 'トレードを確認',
  tradeSuccess: 'トレードに成功しました',
  tradeFailed: 'トレードに失敗しました',
  notReady: 'トレードの準備ができていません',
  checkFirst: '最初にトレードを確認してください',
  autoTradeStarted: '自動売買が開始されました',
  autoTradeStopped: '自動売買が停止しました',
  typeMessage: 'メッセージを入力...',
  voiceInput: '音声入力',
  aiThinking: '考え中...',
  welcomeMessage: 'こんにちは！私はKanutsananFXです。喜んでお手伝いします。',
  voiceComingSoon: '音声会話機能 - 次のバージョンで登場予定',
  guideMetaApi: 'MetaAPIガイド',
  guideAiProvider: 'AIプロバイダーガイド',
  guideTradingSkills: 'トレーディングスキルガイド',
  guideCommands: 'コマンドガイド',
  selectGuide: '読むガイドを選択してください',
  back: '戻る',
  noInternet: 'インターネット接続がありません',
  setupRequired: '設定が必要です',
  close: '閉じる',
  seconds: '秒',
  minutes: '分',
  hours: '時間',
  backup: 'バックアップ',
  restore: '復元',
  backupToGDrive: 'Google Driveにバックアップ',
  restoreFromGDrive: 'Google Driveから復元',
  backupComingSoon: 'バックアップ機能は次のバージョンで登場予定',
  restoreComingSoon: '復元機能は次のバージョンで登場予定',
  currentLlm: '現在のAIブレイン',
  status: 'ステータス',
  tradingPair: '取引ペア',
  connectionStatus: '接続ステータス',
  autoCheckInterval: '自動確認間隔',
  selectTradingPair: '取引ペアを選択',
  loadingPairs: '取引ペアを読み込み中...',
  currentSetting: '現在',
  refreshPairs: '取引ペアを更新',
  connectMetaApiFirst: '取引ペアを読み込むには、まずMetaAPIに接続してください',
  developerName: 'Kanutsanan Pongpanna',
  developerTitle: 'KanutsananFX 開発者',
  developerBio: 'オンライン農業トレーダー | AIトレーディング開発者\nMaha Sarakham | B.Sc. 応用物理学, Mahasarakham University',
  developerQuote: '我々は誰も抑圧しない者として立つが、踏みにじられるために生まれたのではない。',
  linksAndContacts: 'リンクと連絡先',
  sourceCodeRef: 'ソースコードリファレンス',
  youtubeRef: 'YouTubeビデオレファレンス',
  language: '言語',
  selectLanguage: '言語を選択',
  languageName: '日本語',
  setupTitle: '初期設定',
  setupDesc: 'KanutsananFXを使い始めるための情報を入力してください',
  step1MetaApi: 'Step 1: MetaAPIの設定',
  step2AiBrain: 'Step 2: AIブレインの設定',
  startUsing: '使用を開始',
  skipSetup: '設定をスキップ',
  letsGo: '始めましょう！',
  resetConnection: '接続をリセット',
  resetWarning: 'すべての接続データが削除されます',
  reset: 'リセット',
  ok: 'OK',
  confirm: '確認',
  warning: '警告',
  error: 'エラー',
  success: '成功',
  loading: '読み込み中...',
  retry: '再試行',
  comingSoon: '近日公開',
  version: 'バージョン',
  guideMetaApiContent: '# MetaAPIガイド

## ステップ1：MetaAPIアカウントの登録
- https://app.metaapi.cloud にアクセス
- 新規アカウントを作成またはサインイン
- メールアドレスを認証

## ステップ2：MT5アカウントの接続
- 「新規アカウント」をクリック
- 「既存のアカウントを接続」を選択
- MT5の詳細情報を入力：サーバー、ログイン、パスワード
- 「アカウント作成」をクリック

## ステップ3：Account IDの取得
- アカウント作成後、Account IDが表示されます
- Account IDをコピー
- KanutsananFXに入力

## ステップ4：API Keyの取得
- 「設定」→「APIアクセス」に移動
- 新しいAPIトークンを作成
- トークンをコピー
- KanutsananFXに入力

## 重要
- API Keyは絶対に共有しないでください
- セキュリティのため2FAを使用してください"New Account"\n- Select "Connect existing account"\n- Enter MT5 details: Server, Login, Password\n- Click "Create Account"\n\n## Step 3: Get Account ID\n- After creating the account, you will see the Account ID\n- Copy the Account ID\n- Enter it in KanutsananFX\n\n## Step 4: Get API Key\n- Go to Settings → API Access\n- Create a new API Token\n- Copy the Token\n- Enter it in KanutsananFX\n\n## Important\n- Never share your API Key\n- Use 2FA for security',
  guideAiProviderContent: '# AIプロバイダーガイド

## 1. KanutsananFX (デフォルト)
- 内蔵LLM、API Keyは不要

## 2. OpenAI
- ウェブサイト：https://platform.openai.com

## 3. Anthropic (Claude)
- ウェブサイト：https://console.anthropic.com

## 4. Google Gemini
- ウェブサイト：https://aistudio.google.com

## 5. Grok (xAI)
- ウェブサイト：https://console.x.ai

## 6. Perplexity
- ウェブサイト：https://www.perplexity.ai/settings/api

## 7. OpenRouter
- ウェブサイト：https://openrouter.ai',
  guideTradingSkillsContent: '# 取引スキルガイド

## 自動チェック間隔
- 30秒 - 最も頻繁
- 1-10分 - 中程度
- 1-5時間 - 最も少ない

## 分析システム STEP 0-9
- STEP 0：市場の開閉をチェック
- STEP 1：現在価格
- STEP 2：M15チャートを分析
- STEP 3：SL/TPを計算
- STEP 4：Risk/Rewardをチェック
- STEP 5：ポジションサイズを計算
- STEP 6：シグナルの強さを評価
- STEP 7：方向性を確認
- STEP 8：APIを検証
- STEP 9：既存のポジションをチェック',
  guideCommandsContent: '# コマンドガイド

## 1. 取引チェック
- STEP 0-9を使用して市場を分析
- 分析結果を表示

## 2. 取引承認
- 分析に基づいて取引を実行

## 3. 自動取引設定
- スケジュール通りに自動でチェックして取引

## 4. 自動取引キャンセル
- 自動取引を直ちに停止',
  developerLinks: 'リンクと連絡先',
  sourceCodeReference: 'ソースコードリファレンス',
  youtubeReferences: 'YouTubeビデオ参照',
  videoOne: 'ビデオ1',
  videoTwo: 'ビデオ2',
  developerLinkChat: '開発者LoveMoney AIとチャット',
  developerLinkLoveMoneyAi: 'ChatGPT上のLoveMoney AI',
  developerLinkYoutubeOfficial: 'YouTubeチャンネル LoveMoney Official',
  developerLinkFacebookPage: 'Facebookページ LoveMoney',
  developerLinkLokathibodi: 'ロカティボディ経典',
  developerLinkGardenMain: '功徳の法園',
  developerLinkGardenActivities: '法園の活動',
  developerLinkRiceTrade: 'オンライン米取引グループ',
  developerLinkGrassTrade: 'パンゴラ草取引グループ',
  developerLinkEnergyGroup: '自己精製エネルギーグループ',
  developerLinkPropertyGroup: '不動産取引グループ',
  setupStep: 'ステップ',
  setupMetaApiDesc: 'MetaAPIからAccount IDとAPI Keyを入力して、MT5取引アカウントに接続します',
  setupAiBrainDesc: '分析と会話のためのAIプロバイダーを選択してください',
  accountIdPlaceholder: 'MetaAPI Account IDを入力',
  connectMetaApi: 'MetaAPIに接続',
  connectAiBrain: 'AIブレインに接続',
  viewGuide: 'ガイドを見る',
  backToMetaApi: 'MetaAPI設定に戻る',
  connectionFailedDesc: 'Account IDとAPI Keyを確認してください。ヘルプはガイドメニューを参照してください。',
  pleaseEnterAiKey: '選択したAIプロバイダーのAPI Keyを入力してください',
  aiResponseCheckTrade: '市場を分析中... MetaAPIからのリアルタイム分析は、取引画面の「取引チェック」ボタンを使用してください。',
  aiResponseApproveTrade: '取引を確認した後、取引画面の「取引承認」ボタンを使用してください。システムは分析に基づいて注文を実行します。',
  aiResponseAutoTrade: 'まず取引スキルで自動取引のタイミングを設定し、その後、取引画面で「自動取引設定」を押してください。',
  aiResponseCancelAuto: '取引画面の「自動取引キャンセル」ボタンを押してください。',
  aiResponseDharma: 'ダルマは人生に不可欠です。取引も同じで、マインドフルネス、集中力、貪欲さや怒りのなさが必要です。アナパナサティ（呼吸への気づき）は心を落ち着かせるための素晴らしい基盤です。',
  aiResponseGreeting: 'こんにちは！私はKanutsananFXです。喜んでお手伝いします。外国為替市場の分析、取引の推奨、取引スキルのカスタマイズ、ダルマや世界の金融システムについての議論をお手伝いできます。',
  aiResponseDefault: 'メッセージありがとうございます。私はKanutsananFXです。外国為替取引やダルマに関する議論のお手伝いをします。コマンド：取引チェック、取引承認、自動取引設定、自動取引キャンセルが使用できます。',
  aiErrorGeneric: '申し訳ありませんが、現在応答できません。',
  aiErrorConnection: 'エラーが発生しました。API Keyとインターネット接続を確認してください。',
  darkMode: 'ダークモード',
  notifications: '通知',
  clearChatHistory: 'チャット履歴をクリア',
  clearChatConfirm: 'すべてのチャット履歴をクリアしますか？',
  exportSettings: '設定をエクスポート',
  importSettings: '設定をインポート',
  settingsMetaApiSection: 'MetaAPI',
  settingsAiBrainSection: 'AIブレイン',
  settingsLanguageSection: '言語',
  settingsBackupSection: 'バックアップ/復元',
  settingsAboutSection: '概要',
  tradeAnalysisResult: '分析結果',
  trendUp: '上昇トレンド',
  trendDown: '下降トレンド',
  signalStrength: 'シグナルの強さ',
  entryPrice: 'エントリー価格',
  stopLoss: 'Stop Loss',
  takeProfit: 'Take Profit',
  lotSize: 'Lot Size',
  riskReward: 'Risk/Reward',
  noAnalysisYet: 'まだ分析がありません',
  analyzing: '分析中...',
  executing: '実行中...',
  autoTradeActive: '自動取引が有効です',
  autoTradeInactive: '自動取引は無効です',
};

export default ja;
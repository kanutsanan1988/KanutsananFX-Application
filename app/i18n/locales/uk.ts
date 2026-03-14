import { TranslationKey } from '../keys';

const uk: Record<TranslationKey, string> = {
  appName: 'KanutsananFX',
  welcome: 'Ласкаво просимо до KanutsananFX',
  settings: 'Налаштування',
  chat: 'AI Чат',
  trade: 'Торгівля',
  guide: 'Посібник',
  developer: 'Розробник',
  tradingSkills: 'Торгові навички',
  metaApiSettings: 'Налаштування MetaAPI',
  accountId: 'Account ID',
  apiKey: 'API Key',
  aiBrainSettings: 'Мозок AI',
  selectAiProvider: 'Вибрати постачальника AI',
  apiKeyPlaceholder: 'Введіть API Key',
  save: 'Зберегти',
  cancel: 'Скасувати',
  connect: 'Підключити',
  disconnect: 'Відключити',
  connected: 'Підключено',
  disconnected: 'Відключено',
  connectionSuccess: 'Підключення успішне',
  connectionFailed: 'Помилка підключення',
  pleaseSetup: 'Будь ласка, спочатку налаштуйте MetaAPI та Мозок AI',
  checkTrade: 'Перевірити торгівлю',
  approveTrade: 'Схвалити торгівлю',
  setAutoTrade: 'Налаштувати автоторгівлю',
  cancelAutoTrade: 'Скасувати автоторгівлю',
  autoTrading: 'Автоторгівля',
  tradingInterval: 'Інтервал перевірки торгівлі',
  selectPair: 'Вибрати торгову пару',
  checkTradeDesc: 'Аналізувати ринок та надавати рекомендації (STEP 0-9)',
  approveTradeDesc: 'Надіслати торговий ордер на основі рекомендацій',
  setAutoTradeDesc: 'Налаштувати автоматичний розклад перевірки та торгівлі',
  cancelAutoTradeDesc: 'Зупинити систему автоматичної торгівлі',
  analyzeMarket: 'Аналізувати ринок',
  sendTradeOrder: 'Надіслати торговий ордер',
  autoCheckEvery: 'Перевіряти кожні',
  stopAutoTrading: 'Зупинити автоторгівлю',
  confirmTrade: 'Підтвердити торгівлю',
  tradeSuccess: 'Торгівля успішна',
  tradeFailed: 'Помилка торгівлі',
  notReady: 'Не готовий до торгівлі',
  checkFirst: 'Будь ласка, спочатку перевірте торгівлю',
  autoTradeStarted: 'Автоторгівлю розпочато',
  autoTradeStopped: 'Автоторгівлю зупинено',
  typeMessage: 'Введіть повідомлення...',
  voiceInput: 'Голосове введення',
  aiThinking: 'Думаю...',
  welcomeMessage: 'Привіт! Я KanutsananFX, радий вам служити.',
  voiceComingSoon: 'Функція голосової розмови - з\'явиться в наступній версії',
  guideMetaApi: 'Посібник з MetaAPI',
  guideAiProvider: 'Посібник з постачальника AI',
  guideTradingSkills: 'Посібник з торгових навичок',
  guideCommands: 'Посібник з команд',
  selectGuide: 'Виберіть посібник для читання',
  back: 'Назад',
  noInternet: 'Немає підключення до Інтернету',
  setupRequired: 'Потрібне налаштування',
  close: 'Закрити',
  seconds: 'секунди',
  minutes: 'хвилини',
  hours: 'години',
  backup: 'Резервне копіювання',
  restore: 'Відновлення',
  backupToGDrive: 'Резервне копіювання на Google Drive',
  restoreFromGDrive: 'Відновлення з Google Drive',
  backupComingSoon: 'Функція резервного копіювання з\'явиться в наступній версії',
  restoreComingSoon: 'Функція відновлення з\'явиться в наступній версії',
  currentLlm: 'Поточний Мозок AI',
  status: 'Статус',
  tradingPair: 'Торгова пара',
  connectionStatus: 'Статус підключення',
  autoCheckInterval: 'Інтервал автоматичної перевірки',
  selectTradingPair: 'Вибрати торгову пару',
  loadingPairs: 'Завантаження торгових пар...',
  currentSetting: 'Поточний',
  refreshPairs: 'Оновити торгові пари',
  connectMetaApiFirst: 'Будь ласка, спочатку підключіть MetaAPI, щоб завантажити торгові пари',
  developerName: 'Kanutsanan Pongpanna',
  developerTitle: 'Розробник KanutsananFX',
  developerBio: 'Онлайн-трейдер сільськогосподарської продукції | Розробник AI для торгівлі
Махасаракхам | Бакалавр прикладної фізики, Mahasarakham University',
  developerQuote: 'Ми стоїмо як ті, хто нікого не пригнічує, але ми не народжені, щоб нас топтали.',
  linksAndContacts: 'Посилання та контакти',
  sourceCodeRef: 'Довідка про вихідний код',
  youtubeRef: 'Довідкове відео на YouTube',
  language: 'Мова',
  selectLanguage: 'Вибрати мову',
  languageName: 'Українська',
  setupTitle: 'Початкове налаштування',
  setupDesc: 'Введіть інформацію, щоб почати використовувати KanutsananFX',
  step1MetaApi: 'Крок 1: Налаштування MetaAPI',
  step2AiBrain: 'Крок 2: Налаштування Мозку AI',
  startUsing: 'Почати використання',
  skipSetup: 'Пропустити налаштування',
  letsGo: 'Вперед!',
  resetConnection: 'Скинути підключення',
  resetWarning: 'Усі дані підключення буде видалено',
  reset: 'Скинути',
  ok: 'OK',
  confirm: 'Підтвердити',
  warning: 'Попередження',
  error: 'Помилка',
  success: 'Успіх',
  loading: 'Завантаження...',
  retry: 'Повторити',
  comingSoon: 'Незабаром',
  version: 'Версія',
  guideMetaApiContent: '# MetaAPI Guide

## Step 1: Зареєструйте обліковий запис MetaAPI
- Перейдіть на https://app.metaapi.cloud
- Створіть новий обліковий запис або увійдіть
- Підтвердіть свою електронну пошту

## Step 2: Підключіть MT5 акаунт
- Натисніть New Account
- Виберіть Connect existing account
- Введіть дані MT5: Server, Login, Password
- Натисніть Create Account

## Step 3: Отримайте Account ID
- Після створення акаунта ви побачите Account ID
- Скопіюйте Account ID
- Введіть його в KanutsananFX

## Step 4: Отримайте API Key
- Перейдіть у Settings, потім API Access
- Створіть новий API Token
- Скопіюйте Token
- Введіть його в KanutsananFX

## Важливо
- Ніколи не діліться своїм API Key
- Використовуйте 2FA для безпеки"New Account"\n- Select "Connect existing account"\n- Enter MT5 details: Server, Login, Password\n- Click "Create Account"\n\n## Step 3: Get Account ID\n- After creating the account, you will see the Account ID\n- Copy the Account ID\n- Enter it in KanutsananFX\n\n## Step 4: Get API Key\n- Go to Settings → API Access\n- Create a new API Token\n- Copy the Token\n- Enter it in KanutsananFX\n\n## Important\n- Never share your API Key\n- Use 2FA for security',
  guideAiProviderContent: '# AI Provider Guide

## 1. KanutsananFX (за замовчуванням)
- Вбудований LLM, API Key не потрібен

## 2. OpenAI
- Вебсайт: https://platform.openai.com

## 3. Anthropic (Claude)
- Вебсайт: https://console.anthropic.com

## 4. Google Gemini
- Вебсайт: https://aistudio.google.com

## 5. Grok (xAI)
- Вебсайт: https://console.x.ai

## 6. Perplexity
- Вебсайт: https://www.perplexity.ai/settings/api

## 7. OpenRouter
- Вебсайт: https://openrouter.ai',
  guideTradingSkillsContent: '# Trading Skills Guide

## Автоматичні інтервали перевірки
- 30 секунд - Найчастіше
- 1-10 хвилин - Помірно
- 1-5 годин - Найрідше

## Аналіз системи STEP 0-9
- STEP 0: Перевірка відкриття/закриття ринку
- STEP 1: Поточна ціна
- STEP 2: Аналіз графіка M15
- STEP 3: Розрахунок SL/TP
- STEP 4: Перевірка Risk/Reward
- STEP 5: Розрахунок розміру позиції
- STEP 6: Оцінка сили сигналу
- STEP 7: Перевірка напрямку
- STEP 8: Перевірка API
- STEP 9: Перевірка існуючих позицій',
  guideCommandsContent: '# Commands Guide

## 1. Check Trade
- Аналіз ринку за STEP 0-9
- Відображення результатів аналізу

## 2. Approve Trade
- Виконання торгівлі на основі аналізу

## 3. Set Auto Trading
- Автоматична перевірка та торгівля за розкладом

## 4. Cancel Auto Trading
- Негайне припинення автоматичної торгівлі',
  developerLinks: 'Посилання та контакти',
  sourceCodeReference: 'Посилання на вихідний код',
  youtubeReferences: 'Посилання на відео YouTube',
  videoOne: 'Відео 1',
  videoTwo: 'Відео 2',
  developerLinkChat: 'Чат з розробником LoveMoney AI',
  developerLinkLoveMoneyAi: 'LoveMoney AI на ChatGPT',
  developerLinkYoutubeOfficial: 'Офіційний канал LoveMoney на YouTube',
  developerLinkFacebookPage: 'Сторінка LoveMoney у Facebook',
  developerLinkLokathibodi: 'Писання Локатхібоді',
  developerLinkGardenMain: 'Сад Дхарми заслуг',
  developerLinkGardenActivities: 'Активності Саду Дхарми',
  developerLinkRiceTrade: 'Онлайн-група торгівлі рисом',
  developerLinkGrassTrade: 'Група торгівлі травою Пангола',
  developerLinkEnergyGroup: 'Група самовідновлювальної енергії',
  developerLinkPropertyGroup: 'Група торгівлі нерухомістю',
  setupStep: 'Крок',
  setupMetaApiDesc: 'Введіть Account ID та API Key з MetaAPI для підключення вашого MT5 торгового акаунта',
  setupAiBrainDesc: 'Виберіть AI провайдера для аналізу та спілкування',
  accountIdPlaceholder: 'Введіть MetaAPI Account ID',
  connectMetaApi: 'Підключити MetaAPI',
  connectAiBrain: 'Підключити AI Brain',
  viewGuide: 'Переглянути посібник',
  backToMetaApi: 'Повернутися до налаштувань MetaAPI',
  connectionFailedDesc: 'Будь ласка, перевірте ваш Account ID та API Key. Для допомоги дивіться меню Guide.',
  pleaseEnterAiKey: 'Будь ласка, введіть API Key для обраного AI провайдера',
  aiResponseCheckTrade: 'Аналіз ринку... Будь ласка, використовуйте кнопку Check Trade на екрані Trade для аналізу в реальному часі від MetaAPI.',
  aiResponseApproveTrade: 'Будь ласка, використовуйте кнопку Approve Trade на екрані Trade після перевірки торгівлі. Система виконає ордери на основі аналізу.',
  aiResponseAutoTrade: 'Будь ласка, спочатку налаштуйте час авто-торгівлі в Trading Skills, потім натисніть Set Auto Trading на екрані Trade.',
  aiResponseCancelAuto: 'Будь ласка, натисніть кнопку Cancel Auto Trading на екрані Trade.',
  aiResponseDharma: 'Дхарма є суттю життя. Торгівля — те саме: потрібна уважність, концентрація, відсутність жадібності та гніву. Anapanasati (усвідомлення дихання) — чудова основа для заспокоєння розуму.',
  aiResponseGreeting: 'Привіт! Я KanutsananFX, радий служити вам. Я можу допомогти з аналізом ринку Forex, торговими рекомендаціями, налаштуванням торгових навичок та обговоренням Дхарми і світових фінансових систем.',
  aiResponseDefault: 'Дякую за ваше повідомлення. Я KanutsananFX, готовий допомогти вам з торгівлею Forex та обговоренням Дхарми. Ви можете використовувати команди: Check Trade, Approve Trade, Set Auto Trading, Cancel Auto Trading.',
  aiErrorGeneric: 'Вибачте, наразі не можу відповісти.',
  aiErrorConnection: 'Сталася помилка. Будь ласка, перевірте ваш API Key та інтернет-з’єднання.',
  darkMode: 'Темний режим',
  notifications: 'Сповіщення',
  clearChatHistory: 'Очистити історію чату',
  clearChatConfirm: 'Ви хочете очистити всю історію чату?',
  exportSettings: 'Експортувати налаштування',
  importSettings: 'Імпортувати налаштування',
  settingsMetaApiSection: 'MetaAPI',
  settingsAiBrainSection: 'AI Brain',
  settingsLanguageSection: 'Мова',
  settingsBackupSection: 'Резервне копіювання/Відновлення',
  settingsAboutSection: 'Про програму',
  tradeAnalysisResult: 'Результат аналізу',
  trendUp: 'Висхідний тренд',
  trendDown: 'Низхідний тренд',
  signalStrength: 'Сила сигналу',
  entryPrice: 'Ціна входу',
  stopLoss: 'Stop Loss',
  takeProfit: 'Take Profit',
  lotSize: 'Lot Size',
  riskReward: 'Risk/Reward',
  noAnalysisYet: 'Аналіз відсутній',
  analyzing: 'Аналізую...',
  executing: 'Виконую...',
  autoTradeActive: 'Авто-торгівля активна',
  autoTradeInactive: 'Авто-торгівля неактивна',
};

export default uk;
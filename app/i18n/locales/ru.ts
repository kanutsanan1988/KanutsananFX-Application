import { TranslationKey } from '../keys';

const ru: Record<TranslationKey, string> = {
  appName: 'KanutsananFX',
  welcome: 'Добро пожаловать в KanutsananFX',
  settings: 'Настройки',
  chat: 'AI Чат',
  trade: 'Торговля',
  guide: 'Руководство',
  developer: 'Разработчик',
  tradingSkills: 'Навыки торговли',
  metaApiSettings: 'Настройки MetaAPI',
  accountId: 'Account ID',
  apiKey: 'API Key',
  aiBrainSettings: 'Настройки AI',
  selectAiProvider: 'Выберите поставщика AI',
  apiKeyPlaceholder: 'Введите API Key',
  save: 'Сохранить',
  cancel: 'Отмена',
  connect: 'Подключить',
  disconnect: 'Отключить',
  connected: 'Подключено',
  disconnected: 'Отключено',
  connectionSuccess: 'Подключение успешно',
  connectionFailed: 'Ошибка подключения',
  pleaseSetup: 'Пожалуйста, сначала настройте MetaAPI и AI Brain',
  checkTrade: 'Проверить сделку',
  approveTrade: 'Одобрить сделку',
  setAutoTrade: 'Установить автоматическую торговлю',
  cancelAutoTrade: 'Отменить автоматическую торговлю',
  autoTrading: 'Автоматическая торговля',
  tradingInterval: 'Интервал проверки торговли',
  selectPair: 'Выберите торговую пару',
  checkTradeDesc: 'Анализировать рынок и предоставлять рекомендации (STEP 0-9)',
  approveTradeDesc: 'Отправить торговый приказ на основе рекомендаций',
  setAutoTradeDesc: 'Установить автоматическое расписание проверки и торговли',
  cancelAutoTradeDesc: 'Остановить систему автоматической торговли',
  analyzeMarket: 'Анализировать рынок',
  sendTradeOrder: 'Отправить торговый приказ',
  autoCheckEvery: 'Проверять каждые',
  stopAutoTrading: 'Остановить автоматическую торговлю',
  confirmTrade: 'Подтвердить сделку',
  tradeSuccess: 'Сделка успешна',
  tradeFailed: 'Сделка не удалась',
  notReady: 'Не готов к торговле',
  checkFirst: 'Пожалуйста, сначала проверьте сделку',
  autoTradeStarted: 'Автоматическая торговля запущена',
  autoTradeStopped: 'Автоматическая торговля остановлена',
  typeMessage: 'Введите сообщение...',
  voiceInput: 'Голосовой ввод',
  aiThinking: 'Думаю...',
  welcomeMessage: 'Здравствуйте! Я KanutsananFX, рад вам служить.',
  voiceComingSoon: 'Функция голосового общения - появится в следующей версии',
  guideMetaApi: 'Руководство по MetaAPI',
  guideAiProvider: 'Руководство по поставщику AI',
  guideTradingSkills: 'Руководство по навыкам торговли',
  guideCommands: 'Руководство по командам',
  selectGuide: 'Выберите руководство для чтения',
  back: 'Назад',
  noInternet: 'Нет подключения к Интернету',
  setupRequired: 'Требуется настройка',
  close: 'Закрыть',
  seconds: 'секунд',
  minutes: 'минут',
  hours: 'часов',
  backup: 'Резервное копирование',
  restore: 'Восстановление',
  backupToGDrive: 'Резервное копирование в Google Drive',
  restoreFromGDrive: 'Восстановление из Google Drive',
  backupComingSoon: 'Функция резервного копирования появится в следующей версии',
  restoreComingSoon: 'Функция восстановления появится в следующей версии',
  currentLlm: 'Текущий AI Brain',
  status: 'Статус',
  tradingPair: 'Торговая пара',
  connectionStatus: 'Статус подключения',
  autoCheckInterval: 'Интервал автоматической проверки',
  selectTradingPair: 'Выберите торговую пару',
  loadingPairs: 'Загрузка торговых пар...',
  currentSetting: 'Текущий',
  refreshPairs: 'Обновить торговые пары',
  connectMetaApiFirst: 'Пожалуйста, сначала подключитесь к MetaAPI, чтобы загрузить торговые пары',
  developerName: 'Kanutsanan Pongpanna',
  developerTitle: 'Разработчик KanutsananFX',
  developerBio: 'Онлайн-трейдер сельскохозяйственной продукцией | Разработчик AI для торговли
Махасаракхам | Бакалавр прикладной физики, Mahasarakham University',
  developerQuote: 'Мы те, кто никого не угнетает, но мы не рождены, чтобы нас топтали.',
  linksAndContacts: 'Ссылки и контакты',
  sourceCodeRef: 'Ссылка на исходный код',
  youtubeRef: 'Ссылка на видео YouTube',
  language: 'Язык',
  selectLanguage: 'Выберите язык',
  languageName: 'Русский',
  setupTitle: 'Начальная настройка',
  setupDesc: 'Введите информацию, чтобы начать использовать KanutsananFX',
  step1MetaApi: 'Шаг 1: Настройка MetaAPI',
  step2AiBrain: 'Шаг 2: Настройка AI Brain',
  startUsing: 'Начать использование',
  skipSetup: 'Пропустить настройку',
  letsGo: 'Вперед!',
  resetConnection: 'Сбросить подключение',
  resetWarning: 'Все данные о подключении будут удалены',
  reset: 'Сброс',
  ok: 'OK',
  confirm: 'Подтвердить',
  warning: 'Предупреждение',
  error: 'Ошибка',
  success: 'Успех',
  loading: 'Загрузка...',
  retry: 'Повторить',
  comingSoon: 'Скоро',
  version: 'Версия',
  guideMetaApiContent: '# Руководство по MetaAPI

## Шаг 1: Зарегистрируйте учетную запись MetaAPI
- Перейдите на https://app.metaapi.cloud
- Создайте новую учетную запись или войдите
- Подтвердите свою электронную почту

## Шаг 2: Подключите учетную запись MT5
- Нажмите «Новая учетная запись»
- Выберите «Подключить существующую учетную запись»
- Введите данные MT5: сервер, логин, пароль
- Нажмите «Создать учетную запись»

## Шаг 3: Получите Account ID
- После создания учетной записи вы увидите Account ID
- Скопируйте Account ID
- Введите его в KanutsananFX

## Шаг 4: Получите API Key
- Перейдите в «Настройки», затем «Доступ к API»
- Создайте новый токен API
- Скопируйте токен
- Введите его в KanutsananFX

## Важно
- Никогда не делитесь своим API Key
- Используйте 2FA для безопасности"New Account"\n- Select "Connect existing account"\n- Enter MT5 details: Server, Login, Password\n- Click "Create Account"\n\n## Step 3: Get Account ID\n- After creating the account, you will see the Account ID\n- Copy the Account ID\n- Enter it in KanutsananFX\n\n## Step 4: Get API Key\n- Go to Settings → API Access\n- Create a new API Token\n- Copy the Token\n- Enter it in KanutsananFX\n\n## Important\n- Never share your API Key\n- Use 2FA for security',
  guideAiProviderContent: '# Руководство по поставщикам AI

## 1. KanutsananFX (по умолчанию)
- Встроенный LLM, API Key не требуется

## 2. OpenAI
- Веб-сайт: https://platform.openai.com

## 3. Anthropic (Claude)
- Веб-сайт: https://console.anthropic.com

## 4. Google Gemini
- Веб-сайт: https://aistudio.google.com

## 5. Grok (xAI)
- Веб-сайт: https://console.x.ai

## 6. Perplexity
- Веб-сайт: https://www.perplexity.ai/settings/api

## 7. OpenRouter
- Веб-сайт: https://openrouter.ai',
  guideTradingSkillsContent: '# Руководство по торговым навыкам

## Интервалы автоматической проверки
- 30 секунд - наиболее часто
- 1-10 минут - умеренно
- 1-5 часов - наименее часто

## Система анализа STEP 0-9
- STEP 0: Проверка открытия/закрытия рынка
- STEP 1: Текущая цена
- STEP 2: Анализ графика M15
- STEP 3: Расчет SL/TP
- STEP 4: Проверка Risk/Reward
- STEP 5: Расчет размера позиции
- STEP 6: Оценка силы сигнала
- STEP 7: Проверка направления
- STEP 8: Проверка API
- STEP 9: Проверка существующих позиций',
  guideCommandsContent: '# Руководство по командам

## 1. Проверить сделку
- Анализ рынка с использованием STEP 0-9
- Отображение результатов анализа

## 2. Одобрить сделку
- Исполнение сделки на основе анализа

## 3. Установить автоторговлю
- Автоматическая проверка и торговля по расписанию

## 4. Отменить автоторговлю
- Немедленно остановить автоматическую торговлю',
  developerLinks: 'Ссылки и контакты',
  sourceCodeReference: 'Ссылка на исходный код',
  youtubeReferences: 'Ссылки на видео на YouTube',
  videoOne: 'Видео 1',
  videoTwo: 'Видео 2',
  developerLinkChat: 'Чат с разработчиком LoveMoney AI',
  developerLinkLoveMoneyAi: 'LoveMoney AI в ChatGPT',
  developerLinkYoutubeOfficial: 'Официальный канал LoveMoney на YouTube',
  developerLinkFacebookPage: 'Страница LoveMoney в Facebook',
  developerLinkLokathibodi: 'Писание Локатибоди',
  developerLinkGardenMain: 'Сад заслуг Дхармы',
  developerLinkGardenActivities: 'Деятельность в саду Дхармы',
  developerLinkRiceTrade: 'Онлайн-группа по торговле рисом',
  developerLinkGrassTrade: 'Группа по торговле травой Пангола',
  developerLinkEnergyGroup: 'Группа по самосовершенствованию энергии',
  developerLinkPropertyGroup: 'Группа по торговле недвижимостью',
  setupStep: 'Шаг',
  setupMetaApiDesc: 'Введите Account ID и API Key из MetaAPI для подключения вашего торгового счета MT5',
  setupAiBrainDesc: 'Выберите поставщика AI для анализа и общения',
  accountIdPlaceholder: 'Введите Account ID MetaAPI',
  connectMetaApi: 'Подключить MetaAPI',
  connectAiBrain: 'Подключить AI Brain',
  viewGuide: 'Посмотреть руководство',
  backToMetaApi: 'Назад к настройке MetaAPI',
  connectionFailedDesc: 'Пожалуйста, проверьте ваш Account ID и API Key. Обратитесь к меню «Руководство» за помощью.',
  pleaseEnterAiKey: 'Пожалуйста, введите API Key для выбранного поставщика AI',
  aiResponseCheckTrade: 'Анализ рынка... Пожалуйста, используйте кнопку «Проверить сделку» на экране «Сделка» для анализа в реальном времени от MetaAPI.',
  aiResponseApproveTrade: 'Пожалуйста, используйте кнопку «Одобрить сделку» на экране «Сделка» после проверки сделки. Система исполнит ордера на основе анализа.',
  aiResponseAutoTrade: 'Пожалуйста, сначала настройте время автоторговли в «Торговых навыках», затем нажмите «Установить автоторговлю» на экране «Сделка».',
  aiResponseCancelAuto: 'Пожалуйста, нажмите кнопку «Отменить автоторговлю» на экране «Сделка».',
  aiResponseDharma: 'Дхарма важна в жизни. Торговля — то же самое: она требует осознанности, концентрации, отсутствия жадности и гнева. Анапанасати (осознанность дыхания) — отличная основа для успокоения ума.',
  aiResponseGreeting: 'Здравствуйте! Я KanutsananFX, рад вам служить. Я могу помочь вам с анализом рынка Forex, торговыми рекомендациями, настройкой торговых навыков и обсуждением Дхармы и мировых финансовых систем.',
  aiResponseDefault: 'Спасибо за ваше сообщение. Я KanutsananFX, готов помочь вам с торговлей на Forex и обсуждением Дхармы. Вы можете использовать команды: Проверить сделку, Одобрить сделку, Установить автоторговлю, Отменить автоторговлю.',
  aiErrorGeneric: 'К сожалению, в данный момент ответить не могу.',
  aiErrorConnection: 'Произошла ошибка. Пожалуйста, проверьте ваш API Key и подключение к Интернету.',
  darkMode: 'Темный режим',
  notifications: 'Уведомления',
  clearChatHistory: 'Очистить историю чата',
  clearChatConfirm: 'Вы хотите очистить всю историю чата?',
  exportSettings: 'Экспорт настроек',
  importSettings: 'Импорт настроек',
  settingsMetaApiSection: 'MetaAPI',
  settingsAiBrainSection: 'AI Brain',
  settingsLanguageSection: 'Язык',
  settingsBackupSection: 'Резервное копирование/Восстановление',
  settingsAboutSection: 'О программе',
  tradeAnalysisResult: 'Результат анализа',
  trendUp: 'Восходящий тренд',
  trendDown: 'Нисходящий тренд',
  signalStrength: 'Сила сигнала',
  entryPrice: 'Цена входа',
  stopLoss: 'Stop Loss',
  takeProfit: 'Take Profit',
  lotSize: 'Lot Size',
  riskReward: 'Risk/Reward',
  noAnalysisYet: 'Анализа еще нет',
  analyzing: 'Анализ...',
  executing: 'Исполнение...',
  autoTradeActive: 'Автоторговля активна',
  autoTradeInactive: 'Автоторговля неактивна',
};

export default ru;
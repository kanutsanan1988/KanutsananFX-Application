// All translation keys used across the app
export const TRANSLATION_KEYS = [
  // App
  'appName', 'welcome', 'settings', 'chat', 'trade', 'guide', 'developer', 'tradingSkills',
  // Settings
  'metaApiSettings', 'accountId', 'apiKey', 'aiBrainSettings', 'selectAiProvider',
  'apiKeyPlaceholder', 'save', 'cancel', 'connect', 'disconnect', 'connected', 'disconnected',
  'connectionSuccess', 'connectionFailed', 'pleaseSetup',
  // Trading commands
  'checkTrade', 'approveTrade', 'setAutoTrade', 'cancelAutoTrade', 'autoTrading',
  'tradingInterval', 'selectPair',
  'checkTradeDesc', 'approveTradeDesc', 'setAutoTradeDesc', 'cancelAutoTradeDesc',
  'analyzeMarket', 'sendTradeOrder', 'autoCheckEvery', 'stopAutoTrading',
  'confirmTrade', 'tradeSuccess', 'tradeFailed', 'notReady',
  'checkFirst', 'autoTradeStarted', 'autoTradeStopped',
  // Chat
  'typeMessage', 'voiceInput', 'aiThinking', 'welcomeMessage',
  'voiceComingSoon',
  // Guide
  'guideMetaApi', 'guideAiProvider', 'guideTradingSkills', 'guideCommands',
  'selectGuide', 'back',
  // Notifications
  'noInternet', 'setupRequired', 'close',
  // Time
  'seconds', 'minutes', 'hours',
  // Backup
  'backup', 'restore', 'backupToGDrive', 'restoreFromGDrive',
  'backupComingSoon', 'restoreComingSoon',
  // Status
  'currentLlm', 'status', 'tradingPair', 'connectionStatus',
  // Trading skills
  'autoCheckInterval', 'selectTradingPair', 'loadingPairs',
  'currentSetting', 'refreshPairs', 'connectMetaApiFirst',
  // Developer
  'developerName', 'developerTitle', 'developerBio', 'developerQuote',
  'linksAndContacts', 'sourceCodeRef', 'youtubeRef',
  // Language
  'language', 'selectLanguage', 'languageName',
  // Setup
  'setupTitle', 'setupDesc', 'step1MetaApi', 'step2AiBrain', 'startUsing',
  'skipSetup', 'letsGo',
  // Reset
  'resetConnection', 'resetWarning', 'reset',
  // General
  'ok', 'confirm', 'warning', 'error', 'success', 'loading', 'retry',
  'comingSoon', 'version',
] as const;

export type TranslationKey = typeof TRANSLATION_KEYS[number];

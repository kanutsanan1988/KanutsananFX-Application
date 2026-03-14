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
  'guideMetaApiContent', 'guideAiProviderContent', 'guideTradingSkillsContent', 'guideCommandsContent',
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
  'developerLinks', 'sourceCodeReference', 'youtubeReferences',
  'videoOne', 'videoTwo',
  'developerLinkChat', 'developerLinkLoveMoneyAi', 'developerLinkYoutubeOfficial',
  'developerLinkFacebookPage', 'developerLinkLokathibodi', 'developerLinkGardenMain',
  'developerLinkGardenActivities', 'developerLinkRiceTrade', 'developerLinkGrassTrade',
  'developerLinkEnergyGroup', 'developerLinkPropertyGroup',
  // Language
  'language', 'selectLanguage', 'languageName',
  // Setup
  'setupTitle', 'setupDesc', 'step1MetaApi', 'step2AiBrain', 'startUsing',
  'skipSetup', 'letsGo',
  'setupStep', 'setupMetaApiDesc', 'setupAiBrainDesc',
  'accountIdPlaceholder', 'connectMetaApi', 'connectAiBrain',
  'viewGuide', 'backToMetaApi',
  'connectionFailedDesc', 'pleaseEnterAiKey',
  // Reset
  'resetConnection', 'resetWarning', 'reset',
  // General
  'ok', 'confirm', 'warning', 'error', 'success', 'loading', 'retry',
  'comingSoon', 'version',
  // AI responses (built-in mode)
  'aiResponseCheckTrade', 'aiResponseApproveTrade', 'aiResponseAutoTrade',
  'aiResponseCancelAuto', 'aiResponseDharma', 'aiResponseGreeting', 'aiResponseDefault',
  'aiErrorGeneric', 'aiErrorConnection',
  // Settings page additional
  'darkMode', 'notifications', 'clearChatHistory', 'clearChatConfirm',
  'exportSettings', 'importSettings',
  'settingsMetaApiSection', 'settingsAiBrainSection', 'settingsLanguageSection',
  'settingsBackupSection', 'settingsAboutSection',
  // Trade screen additional
  'tradeAnalysisResult', 'trendUp', 'trendDown', 'signalStrength',
  'entryPrice', 'stopLoss', 'takeProfit', 'lotSize', 'riskReward',
  'noAnalysisYet', 'analyzing', 'executing',
  'autoTradeActive', 'autoTradeInactive',
] as const;

export type TranslationKey = typeof TRANSLATION_KEYS[number];

import { TranslationKey } from '../keys';

const cs: Record<TranslationKey, string> = {
  appName: 'KanutsananFX',
  welcome: 'Vítejte v KanutsananFX',
  settings: 'Nastavení',
  chat: 'AI Chat',
  trade: 'Obchodovat',
  guide: 'Průvodce',
  developer: 'Vývojář',
  tradingSkills: 'Obchodní dovednosti',
  metaApiSettings: 'Nastavení MetaAPI',
  accountId: 'Account ID',
  apiKey: 'API Key',
  aiBrainSettings: 'Mozek AI',
  selectAiProvider: 'Vyberte poskytovatele AI',
  apiKeyPlaceholder: 'Zadejte API Key',
  save: 'Uložit',
  cancel: 'Zrušit',
  connect: 'Připojit',
  disconnect: 'Odpojit',
  connected: 'Připojeno',
  disconnected: 'Odpojeno',
  connectionSuccess: 'Připojení úspěšné',
  connectionFailed: 'Připojení se nezdařilo',
  pleaseSetup: 'Nejprve prosím nastavte MetaAPI a Mozek AI',
  checkTrade: 'Zkontrolovat obchod',
  approveTrade: 'Schválit obchod',
  setAutoTrade: 'Nastavit automatické obchodování',
  cancelAutoTrade: 'Zrušit automatické obchodování',
  autoTrading: 'Automatické obchodování',
  tradingInterval: 'Interval kontroly obchodování',
  selectPair: 'Vyberte obchodní pár',
  checkTradeDesc: 'Analyzujte trh a poskytněte doporučení (KROK 0-9)',
  approveTradeDesc: 'Odeslat obchodní příkaz na základě doporučení',
  setAutoTradeDesc: 'Nastavit plán automatické kontroly a obchodu',
  cancelAutoTradeDesc: 'Zastavit systém automatického obchodování',
  analyzeMarket: 'Analyzovat trh',
  sendTradeOrder: 'Odeslat obchodní příkaz',
  autoCheckEvery: 'Kontrolovat každých',
  stopAutoTrading: 'Zastavit automatické obchodování',
  confirmTrade: 'Potvrdit obchod',
  tradeSuccess: 'Obchod úspěšný',
  tradeFailed: 'Obchod se nezdařil',
  notReady: 'Nejste připraveni obchodovat',
  checkFirst: 'Nejprve prosím zkontrolujte obchod',
  autoTradeStarted: 'Automatické obchodování spuštěno',
  autoTradeStopped: 'Automatické obchodování zastaveno',
  typeMessage: 'Napište zprávu...',
  voiceInput: 'Hlasový vstup',
  aiThinking: 'Přemýšlím...',
  welcomeMessage: 'Dobrý den! Jsem KanutsananFX, rád vám posloužím.',
  voiceComingSoon: 'Funkce hlasové konverzace - přijde v další verzi',
  guideMetaApi: 'Průvodce MetaAPI',
  guideAiProvider: 'Průvodce poskytovatelem AI',
  guideTradingSkills: 'Průvodce obchodními dovednostmi',
  guideCommands: 'Průvodce příkazy',
  selectGuide: 'Vyberte průvodce ke čtení',
  back: 'Zpět',
  noInternet: 'Žádné připojení k internetu',
  setupRequired: 'Vyžadováno nastavení',
  close: 'Zavřít',
  seconds: 'sekundy',
  minutes: 'minuty',
  hours: 'hodiny',
  backup: 'Zálohovat',
  restore: 'Obnovit',
  backupToGDrive: 'Zálohovat na Google Drive',
  restoreFromGDrive: 'Obnovit z Google Drive',
  backupComingSoon: 'Funkce zálohování přijde v další verzi',
  restoreComingSoon: 'Funkce obnovení přijde v další verzi',
  currentLlm: 'Současný mozek AI',
  status: 'Stav',
  tradingPair: 'Obchodní pár',
  connectionStatus: 'Stav připojení',
  autoCheckInterval: 'Interval automatické kontroly',
  selectTradingPair: 'Vyberte obchodní pár',
  loadingPairs: 'Načítání obchodních párů...',
  currentSetting: 'Aktuální',
  refreshPairs: 'Aktualizovat obchodní páry',
  connectMetaApiFirst: 'Pro načtení obchodních párů se nejprve připojte k MetaAPI',
  developerName: 'Kanutsanan Pongpanna',
  developerTitle: 'Vývojář KanutsananFX',
  developerBio: 'Online obchodník se zemědělskými produkty | Vývojář AI obchodování\nMaha Sarakham | B.Sc. Aplikovaná fyzika, Mahasarakham University',
  developerQuote: 'Stojíme jako ti, kteří nikoho neutlačují, ale nenarodili jsme se, abychom byli pošlapáni.',
  linksAndContacts: 'Odkazy a kontakty',
  sourceCodeRef: 'Odkaz na zdrojový kód',
  youtubeRef: 'Odkaz na video na YouTube',
  language: 'Jazyk',
  selectLanguage: 'Vyberte jazyk',
  languageName: 'Čeština',
  setupTitle: 'Počáteční nastavení',
  setupDesc: 'Zadejte informace pro zahájení používání KanutsananFX',
  step1MetaApi: 'Krok 1: Nastavení MetaAPI',
  step2AiBrain: 'Krok 2: Nastavení mozku AI',
  startUsing: 'Začněte používat',
  skipSetup: 'Přeskočit nastavení',
  letsGo: 'Jdeme na to!',
  resetConnection: 'Resetovat připojení',
  resetWarning: 'Všechna data připojení budou smazána',
  reset: 'Resetovat',
  ok: 'OK',
  confirm: 'Potvrdit',
  warning: 'Varování',
  error: 'Chyba',
  success: 'Úspěch',
  loading: 'Načítání...',
  retry: 'Zkusit znovu',
  comingSoon: 'Již brzy',
  version: 'Verze',
  guideMetaApiContent: '# Průvodce MetaAPI

## Krok 1: Zaregistrujte si účet MetaAPI
- Přejděte na https://app.metaapi.cloud
- Vytvořte si nový účet nebo se přihlaste
- Ověřte svůj e-mail

## Krok 2: Připojte účet MT5
- Klikněte na Nový účet
- Vyberte Připojit existující účet
- Zadejte údaje o MT5: Server, Přihlašovací jméno, Heslo
- Klikněte na Vytvořit účet

## Krok 3: Získejte Account ID
- Po vytvoření účtu uvidíte Account ID
- Zkopírujte Account ID
- Zadejte ho do KanutsananFX

## Krok 4: Získejte API Key
- Přejděte do Nastavení a poté na Přístup k API
- Vytvořte nový API Token
- Zkopírujte Token
- Zadejte ho do KanutsananFX

## Důležité
- Nikdy nesdílejte svůj API Key
- Pro zabezpečení používejte 2FA"New Account"\n- Select "Connect existing account"\n- Enter MT5 details: Server, Login, Password\n- Click "Create Account"\n\n## Step 3: Get Account ID\n- After creating the account, you will see the Account ID\n- Copy the Account ID\n- Enter it in KanutsananFX\n\n## Step 4: Get API Key\n- Go to Settings → API Access\n- Create a new API Token\n- Copy the Token\n- Enter it in KanutsananFX\n\n## Important\n- Never share your API Key\n- Use 2FA for security',
  guideAiProviderContent: '# Průvodce poskytovatelem AI

## 1. KanutsananFX (Výchozí)
- Vestavěný LLM, není vyžadován žádný API Key

## 2. OpenAI
- Webové stránky: https://platform.openai.com

## 3. Anthropic (Claude)
- Webové stránky: https://console.anthropic.com

## 4. Google Gemini
- Webové stránky: https://aistudio.google.com

## 5. Grok (xAI)
- Webové stránky: https://console.x.ai

## 6. Perplexity
- Webové stránky: https://www.perplexity.ai/settings/api

## 7. OpenRouter
- Webové stránky: https://openrouter.ai',
  guideTradingSkillsContent: '# Průvodce obchodními dovednostmi

## Intervaly automatické kontroly
- 30 sekund - nejčastější
- 1-10 minut - střední
- 1-5 hodin - nejméně časté

## Analytický systém STEP 0-9
- STEP 0: Kontrola otevření/zavření trhu
- STEP 1: Aktuální cena
- STEP 2: Analýza grafu M15
- STEP 3: Výpočet SL/TP
- STEP 4: Kontrola Risk/Reward
- STEP 5: Výpočet velikosti pozice
- STEP 6: Vyhodnocení síly signálu
- STEP 7: Kontrola směru
- STEP 8: Ověření API
- STEP 9: Kontrola existujících pozic',
  guideCommandsContent: '# Průvodce příkazy

## 1. Zkontrolovat obchod
- Analyzovat trh pomocí STEP 0-9
- Zobrazit výsledky analýzy

## 2. Schválit obchod
- Provést obchod na základě analýzy

## 3. Nastavit automatické obchodování
- Automaticky kontrolovat a obchodovat podle plánu

## 4. Zrušit automatické obchodování
- Okamžitě zastavit automatické obchodování',
  developerLinks: 'Odkazy a kontakty',
  sourceCodeReference: 'Odkaz na zdrojový kód',
  youtubeReferences: 'Odkazy na videa na YouTube',
  videoOne: 'Video 1',
  videoTwo: 'Video 2',
  developerLinkChat: 'Chat s vývojářem LoveMoney AI',
  developerLinkLoveMoneyAi: 'LoveMoney AI na ChatGPT',
  developerLinkYoutubeOfficial: 'Oficiální kanál YouTube LoveMoney',
  developerLinkFacebookPage: 'Facebooková stránka LoveMoney',
  developerLinkLokathibodi: 'Písmo Lokathibodi',
  developerLinkGardenMain: 'Zahrada zásluh Dharmy',
  developerLinkGardenActivities: 'Aktivity v Zahradě Dharmy',
  developerLinkRiceTrade: 'Online skupina pro obchodování s rýží',
  developerLinkGrassTrade: 'Skupina pro obchodování s trávou Pangola',
  developerLinkEnergyGroup: 'Skupina pro samovolné získávání energie',
  developerLinkPropertyGroup: 'Skupina pro obchodování s nemovitostmi',
  setupStep: 'Krok',
  setupMetaApiDesc: 'Zadejte Account ID a API Key z MetaAPI pro připojení vašeho obchodního účtu MT5',
  setupAiBrainDesc: 'Vyberte poskytovatele AI pro analýzu a konverzaci',
  accountIdPlaceholder: 'Zadejte MetaAPI Account ID',
  connectMetaApi: 'Připojit MetaAPI',
  connectAiBrain: 'Připojit mozek AI',
  viewGuide: 'Zobrazit průvodce',
  backToMetaApi: 'Zpět na nastavení MetaAPI',
  connectionFailedDesc: 'Zkontrolujte prosím své Account ID a API Key. Nápovědu naleznete v nabídce Průvodce.',
  pleaseEnterAiKey: 'Zadejte prosím API Key pro vybraného poskytovatele AI',
  aiResponseCheckTrade: 'Analyzuji trh... Pro analýzu v reálném čase z MetaAPI použijte prosím tlačítko Zkontrolovat obchod na obrazovce Obchod.',
  aiResponseApproveTrade: 'Po kontrole obchodu použijte prosím tlačítko Schválit obchod na obrazovce Obchod. Systém provede příkazy na základě analýzy.',
  aiResponseAutoTrade: 'Nejprve prosím nakonfigurujte časování automatického obchodování v Obchodních dovednostech a poté stiskněte Nastavit automatické obchodování na obrazovce Obchod.',
  aiResponseCancelAuto: 'Stiskněte prosím tlačítko Zrušit automatické obchodování na obrazovce Obchod.',
  aiResponseDharma: 'Dharma je v životě nezbytná. Obchodování je stejné - vyžaduje všímavost, soustředění, žádnou chamtivost, žádný hněv. Anapanasati (uvědomování si dechu) je skvělým základem pro zklidnění mysli.',
  aiResponseGreeting: 'Dobrý den! Jsem KanutsananFX, rád vám posloužím. Mohu vám pomoci s analýzou trhu Forex, obchodními doporučeními, přizpůsobením obchodních dovedností a diskusí o Dharmě a globálních finančních systémech.',
  aiResponseDefault: 'Děkujeme za vaši zprávu. Jsem KanutsananFX, připraven vám pomoci s obchodováním na Forexu a diskusemi o Dharmě. Můžete použít příkazy: Zkontrolovat obchod, Schválit obchod, Nastavit automatické obchodování, Zrušit automatické obchodování.',
  aiErrorGeneric: 'Omlouváme se, v tuto chvíli nelze odpovědět.',
  aiErrorConnection: 'Došlo k chybě. Zkontrolujte prosím svůj API Key a připojení k internetu.',
  darkMode: 'Tmavý režim',
  notifications: 'Oznámení',
  clearChatHistory: 'Vymazat historii chatu',
  clearChatConfirm: 'Chcete vymazat celou historii chatu?',
  exportSettings: 'Exportovat nastavení',
  importSettings: 'Importovat nastavení',
  settingsMetaApiSection: 'MetaAPI',
  settingsAiBrainSection: 'Mozek AI',
  settingsLanguageSection: 'Jazyk',
  settingsBackupSection: 'Zálohování/Obnovení',
  settingsAboutSection: 'O aplikaci',
  tradeAnalysisResult: 'Výsledek analýzy',
  trendUp: 'Rostoucí trend',
  trendDown: 'Klesající trend',
  signalStrength: 'Síla signálu',
  entryPrice: 'Vstupní cena',
  stopLoss: 'Stop Loss',
  takeProfit: 'Take Profit',
  lotSize: 'Lot Size',
  riskReward: 'Risk/Reward',
  noAnalysisYet: 'Zatím žádná analýza',
  analyzing: 'Analyzuji...',
  executing: 'Provádím...',
  autoTradeActive: 'Automatické obchodování je aktivní',
  autoTradeInactive: 'Automatické obchodování je neaktivní',
};

export default cs;
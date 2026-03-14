import { TranslationKey } from '../keys';

const ms: Record<TranslationKey, string> = {
  appName: 'KanutsananFX',
  welcome: 'Selamat datang ke KanutsananFX',
  settings: 'Tetapan',
  chat: 'Sembang AI',
  trade: 'Dagang',
  guide: 'Panduan',
  developer: 'Pembangun',
  tradingSkills: 'Kemahiran Dagangan',
  metaApiSettings: 'Tetapan MetaAPI',
  accountId: 'ID Akaun',
  apiKey: 'API Key',
  aiBrainSettings: 'Otak AI',
  selectAiProvider: 'Pilih Pembekal AI',
  apiKeyPlaceholder: 'Masukkan API Key',
  save: 'Simpan',
  cancel: 'Batal',
  connect: 'Sambung',
  disconnect: 'Putuskan sambungan',
  connected: 'Bersambung',
  disconnected: 'Tidak bersambung',
  connectionSuccess: 'Sambungan Berjaya',
  connectionFailed: 'Sambungan Gagal',
  pleaseSetup: 'Sila sediakan MetaAPI dan Otak AI terlebih dahulu',
  checkTrade: 'Periksa Dagangan',
  approveTrade: 'Luluskan Dagangan',
  setAutoTrade: 'Tetapkan Dagangan Auto',
  cancelAutoTrade: 'Batalkan Dagangan Auto',
  autoTrading: 'Dagangan Auto',
  tradingInterval: 'Selang Pemeriksaan Dagangan',
  selectPair: 'Pilih Pasangan Dagangan',
  checkTradeDesc: 'Analisis pasaran dan berikan cadangan (STEP 0-9)',
  approveTradeDesc: 'Hantar pesanan dagangan berdasarkan cadangan',
  setAutoTradeDesc: 'Tetapkan jadual semakan dan dagangan automatik',
  cancelAutoTradeDesc: 'Hentikan sistem dagangan automatik',
  analyzeMarket: 'Analisis Pasaran',
  sendTradeOrder: 'Hantar Pesanan Dagangan',
  autoCheckEvery: 'Periksa setiap',
  stopAutoTrading: 'Hentikan Dagangan Auto',
  confirmTrade: 'Sahkan Dagangan',
  tradeSuccess: 'Dagangan Berjaya',
  tradeFailed: 'Dagangan Gagal',
  notReady: 'Tidak Bersedia untuk Berdagang',
  checkFirst: 'Sila periksa dagangan terlebih dahulu',
  autoTradeStarted: 'Dagangan auto bermula',
  autoTradeStopped: 'Dagangan auto berhenti',
  typeMessage: 'Taip mesej...',
  voiceInput: 'Input Suara',
  aiThinking: 'Berfikir...',
  welcomeMessage: 'Helo! Saya KanutsananFX, sedia berkhidmat untuk anda.',
  voiceComingSoon: 'Ciri perbualan suara - akan datang dalam versi seterusnya',
  guideMetaApi: 'Panduan MetaAPI',
  guideAiProvider: 'Panduan Pembekal AI',
  guideTradingSkills: 'Panduan Kemahiran Dagangan',
  guideCommands: 'Panduan Perintah',
  selectGuide: 'Pilih panduan untuk dibaca',
  back: 'Kembali',
  noInternet: 'Tiada Sambungan Internet',
  setupRequired: 'Penyediaan Diperlukan',
  close: 'Tutup',
  seconds: 'saat',
  minutes: 'minit',
  hours: 'jam',
  backup: 'Sandaran',
  restore: 'Pulihkan',
  backupToGDrive: 'Sandaran ke Google Drive',
  restoreFromGDrive: 'Pulihkan dari Google Drive',
  backupComingSoon: 'Ciri sandaran akan datang dalam versi seterusnya',
  restoreComingSoon: 'Ciri pemulihan akan datang dalam versi seterusnya',
  currentLlm: 'Otak AI Semasa',
  status: 'Status',
  tradingPair: 'Pasangan Dagangan',
  connectionStatus: 'Status Sambungan',
  autoCheckInterval: 'Selang Semakan Auto',
  selectTradingPair: 'Pilih Pasangan Dagangan',
  loadingPairs: 'Memuatkan pasangan dagangan...',
  currentSetting: 'Semasa',
  refreshPairs: 'Segarkan semula pasangan dagangan',
  connectMetaApiFirst: 'Sila sambungkan MetaAPI terlebih dahulu untuk memuatkan pasangan dagangan',
  developerName: 'Kanutsanan Pongpanna',
  developerTitle: 'Pembangun KanutsananFX',
  developerBio: 'Peniaga Pertanian Dalam Talian | Pembangun Dagangan AI
Maha Sarakham | B.Sc. Fizik Gunaan, Mahasarakham University',
  developerQuote: 'Kami berdiri sebagai mereka yang tidak menindas sesiapa, tetapi kami tidak dilahirkan untuk dipijak.',
  linksAndContacts: 'Pautan & Kenalan',
  sourceCodeRef: 'Rujukan Kod Sumber',
  youtubeRef: 'Rujukan Video YouTube',
  language: 'Bahasa',
  selectLanguage: 'Pilih Bahasa',
  languageName: 'Bahasa Melayu',
  setupTitle: 'Penyediaan Awal',
  setupDesc: 'Masukkan maklumat untuk mula menggunakan KanutsananFX',
  step1MetaApi: 'Langkah 1: Sediakan MetaAPI',
  step2AiBrain: 'Langkah 2: Sediakan Otak AI',
  startUsing: 'Mula Menggunakan',
  skipSetup: 'Langkau Penyediaan',
  letsGo: 'Jom!',
  resetConnection: 'Set semula Sambungan',
  resetWarning: 'Semua data sambungan akan dipadamkan',
  reset: 'Set semula',
  ok: 'OK',
  confirm: 'Sahkan',
  warning: 'Amaran',
  error: 'Ralat',
  success: 'Berjaya',
  loading: 'Memuatkan...',
  retry: 'Cuba lagi',
  comingSoon: 'Akan datang',
  version: 'Versi',
  guideMetaApiContent: '# Panduan MetaAPI

## Langkah 1: Daftar Akaun MetaAPI
- Pergi ke https://app.metaapi.cloud
- Buat akaun baharu atau log masuk
- Sahkan e-mel anda

## Langkah 2: Sambungkan Akaun MT5
- Klik Akaun Baharu
- Pilih Sambungkan akaun sedia ada
- Masukkan butiran MT5: Pelayan, Log Masuk, Kata Laluan
- Klik Buat Akaun

## Langkah 3: Dapatkan ID Akaun
- Selepas membuat akaun, anda akan melihat ID Akaun
- Salin ID Akaun
- Masukkannya dalam KanutsananFX

## Langkah 4: Dapatkan Kunci API
- Pergi ke Tetapan kemudian Akses API
- Buat Token API baharu
- Salin Token
- Masukkannya dalam KanutsananFX

## Penting
- Jangan sekali-kali berkongsi Kunci API anda
- Gunakan 2FA untuk keselamatan"New Account"\n- Select "Connect existing account"\n- Enter MT5 details: Server, Login, Password\n- Click "Create Account"\n\n## Step 3: Get Account ID\n- After creating the account, you will see the Account ID\n- Copy the Account ID\n- Enter it in KanutsananFX\n\n## Step 4: Get API Key\n- Go to Settings → API Access\n- Create a new API Token\n- Copy the Token\n- Enter it in KanutsananFX\n\n## Important\n- Never share your API Key\n- Use 2FA for security',
  guideAiProviderContent: '# Panduan Pembekal AI

## 1. KanutsananFX (Lalai)
- LLM terbina dalam, tiada Kunci API diperlukan

## 2. OpenAI
- Laman Web: https://platform.openai.com

## 3. Anthropic (Claude)
- Laman Web: https://console.anthropic.com

## 4. Google Gemini
- Laman Web: https://aistudio.google.com

## 5. Grok (xAI)
- Laman Web: https://console.x.ai

## 6. Perplexity
- Laman Web: https://www.perplexity.ai/settings/api

## 7. OpenRouter
- Laman Web: https://openrouter.ai',
  guideTradingSkillsContent: '# Panduan Kemahiran Dagangan

## Selang Semakan Auto
- 30 saat - Paling kerap
- 1-10 minit - Sederhana
- 1-5 jam - Paling jarang

## Sistem Analisis STEP 0-9
- STEP 0: Semak pasaran buka/tutup
- STEP 1: Harga semasa
- STEP 2: Analisis carta M15
- STEP 3: Kira SL/TP
- STEP 4: Semak Risk/Reward
- STEP 5: Kira Saiz Kedudukan
- STEP 6: Nilaikan kekuatan isyarat
- STEP 7: Semak arah
- STEP 8: Sahkan API
- STEP 9: Semak kedudukan sedia ada',
  guideCommandsContent: '# Panduan Perintah

## 1. Semak Dagangan
- Analisis pasaran menggunakan STEP 0-9
- Paparkan hasil analisis

## 2. Luluskan Dagangan
- Laksanakan dagangan berdasarkan analisis

## 3. Tetapkan Dagangan Auto
- Semak dan berdagang secara automatik mengikut jadual

## 4. Batalkan Dagangan Auto
- Hentikan dagangan automatik serta-merta',
  developerLinks: 'Pautan & Kenalan',
  sourceCodeReference: 'Rujukan Kod Sumber',
  youtubeReferences: 'Rujukan Video YouTube',
  videoOne: 'Video 1',
  videoTwo: 'Video 2',
  developerLinkChat: 'Berbual dengan Pembangun LoveMoney AI',
  developerLinkLoveMoneyAi: 'LoveMoney AI di ChatGPT',
  developerLinkYoutubeOfficial: 'Saluran YouTube Rasmi LoveMoney',
  developerLinkFacebookPage: 'Halaman Facebook LoveMoney',
  developerLinkLokathibodi: 'Kitab Lokathibodi',
  developerLinkGardenMain: 'Taman Dharma Merit',
  developerLinkGardenActivities: 'Aktiviti Taman Dharma',
  developerLinkRiceTrade: 'Kumpulan Dagangan Beras Dalam Talian',
  developerLinkGrassTrade: 'Kumpulan Dagangan Rumput Pangola',
  developerLinkEnergyGroup: 'Kumpulan Tenaga Penapisan Sendiri',
  developerLinkPropertyGroup: 'Kumpulan Dagangan Hartanah',
  setupStep: 'Langkah',
  setupMetaApiDesc: 'Masukkan ID Akaun dan Kunci API daripada MetaAPI untuk menyambungkan akaun dagangan MT5 anda',
  setupAiBrainDesc: 'Pilih pembekal AI untuk analisis dan perbualan',
  accountIdPlaceholder: 'Masukkan ID Akaun MetaAPI',
  connectMetaApi: 'Sambungkan MetaAPI',
  connectAiBrain: 'Sambungkan Otak AI',
  viewGuide: 'Lihat Panduan',
  backToMetaApi: 'Kembali ke Persediaan MetaAPI',
  connectionFailedDesc: 'Sila semak ID Akaun dan Kunci API anda. Lihat menu Panduan untuk bantuan.',
  pleaseEnterAiKey: 'Sila masukkan Kunci API untuk pembekal AI yang dipilih',
  aiResponseCheckTrade: 'Menganalisis pasaran... Sila gunakan butang Semak Dagangan pada skrin Dagangan untuk analisis masa nyata daripada MetaAPI.',
  aiResponseApproveTrade: 'Sila gunakan butang Luluskan Dagangan pada skrin Dagangan selepas menyemak dagangan. Sistem akan melaksanakan pesanan berdasarkan analisis.',
  aiResponseAutoTrade: 'Sila konfigurasikan pemasaan dagangan auto dalam Kemahiran Dagangan terlebih dahulu, kemudian tekan Tetapkan Dagangan Auto pada skrin Dagangan.',
  aiResponseCancelAuto: 'Sila tekan butang Batalkan Dagangan Auto pada skrin Dagangan.',
  aiResponseDharma: 'Dharma adalah penting dalam kehidupan. Perdagangan adalah sama - ia memerlukan kesedaran, tumpuan, tiada ketamakan, tiada kemarahan. Anapanasati (kesedaran nafas) adalah asas yang hebat untuk menenangkan fikiran.',
  aiResponseGreeting: 'Helo! Saya KanutsananFX, gembira untuk berkhidmat kepada anda. Saya boleh membantu anda dengan analisis pasaran Forex, cadangan dagangan, menyesuaikan kemahiran dagangan, dan membincangkan sistem kewangan Dharma dan global.',
  aiResponseDefault: 'Terima kasih atas mesej anda. Saya KanutsananFX, bersedia untuk membantu anda dengan dagangan Forex dan perbincangan Dharma. Anda boleh menggunakan perintah: Semak Dagangan, Luluskan Dagangan, Tetapkan Dagangan Auto, Batalkan Dagangan Auto.',
  aiErrorGeneric: 'Maaf, tidak dapat memberi respons pada masa ini.',
  aiErrorConnection: 'Ralat telah berlaku. Sila semak Kunci API dan sambungan internet anda.',
  darkMode: 'Mod Gelap',
  notifications: 'Pemberitahuan',
  clearChatHistory: 'Kosongkan Sejarah Sembang',
  clearChatConfirm: 'Adakah anda mahu mengosongkan semua sejarah sembang?',
  exportSettings: 'Eksport Tetapan',
  importSettings: 'Import Tetapan',
  settingsMetaApiSection: 'MetaAPI',
  settingsAiBrainSection: 'Otak AI',
  settingsLanguageSection: 'Bahasa',
  settingsBackupSection: 'Sandaran/Pulihkan',
  settingsAboutSection: 'Mengenai',
  tradeAnalysisResult: 'Keputusan Analisis',
  trendUp: 'Aliran menaik',
  trendDown: 'Aliran menurun',
  signalStrength: 'Kekuatan Isyarat',
  entryPrice: 'Harga Masuk',
  stopLoss: 'Stop Loss',
  takeProfit: 'Take Profit',
  lotSize: 'Lot Size',
  riskReward: 'Risk/Reward',
  noAnalysisYet: 'Belum ada analisis',
  analyzing: 'Menganalisis...',
  executing: 'Melaksanakan...',
  autoTradeActive: 'Perdagangan auto aktif',
  autoTradeInactive: 'Perdagangan auto tidak aktif',
};

export default ms;
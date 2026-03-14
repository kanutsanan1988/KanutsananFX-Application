import { TranslationKey } from '../keys';

const id: Record<TranslationKey, string> = {
  appName: 'KanutsananFX',
  welcome: 'Selamat datang di KanutsananFX',
  settings: 'Pengaturan',
  chat: 'Obrolan AI',
  trade: 'Perdagangan',
  guide: 'Panduan',
  developer: 'Pengembang',
  tradingSkills: 'Keterampilan Perdagangan',
  metaApiSettings: 'Pengaturan MetaAPI',
  accountId: 'Account ID',
  apiKey: 'API Key',
  aiBrainSettings: 'Otak AI',
  selectAiProvider: 'Pilih Penyedia AI',
  apiKeyPlaceholder: 'Masukkan API Key',
  save: 'Simpan',
  cancel: 'Batal',
  connect: 'Hubungkan',
  disconnect: 'Putuskan',
  connected: 'Terhubung',
  disconnected: 'Terputus',
  connectionSuccess: 'Koneksi Berhasil',
  connectionFailed: 'Koneksi Gagal',
  pleaseSetup: 'Harap atur MetaAPI dan Otak AI terlebih dahulu',
  checkTrade: 'Periksa Perdagangan',
  approveTrade: 'Setujui Perdagangan',
  setAutoTrade: 'Atur Perdagangan Otomatis',
  cancelAutoTrade: 'Batalkan Perdagangan Otomatis',
  autoTrading: 'Perdagangan Otomatis',
  tradingInterval: 'Interval Pemeriksaan Perdagangan',
  selectPair: 'Pilih Pasangan Perdagangan',
  checkTradeDesc: 'Analisis pasar dan berikan rekomendasi (STEP 0-9)',
  approveTradeDesc: 'Kirim pesanan perdagangan berdasarkan rekomendasi',
  setAutoTradeDesc: 'Atur jadwal pemeriksaan dan perdagangan otomatis',
  cancelAutoTradeDesc: 'Hentikan sistem perdagangan otomatis',
  analyzeMarket: 'Analisis Pasar',
  sendTradeOrder: 'Kirim Pesanan Perdagangan',
  autoCheckEvery: 'Periksa setiap',
  stopAutoTrading: 'Hentikan Perdagangan Otomatis',
  confirmTrade: 'Konfirmasi Perdagangan',
  tradeSuccess: 'Perdagangan Berhasil',
  tradeFailed: 'Perdagangan Gagal',
  notReady: 'Belum Siap untuk Berdagang',
  checkFirst: 'Harap periksa perdagangan terlebih dahulu',
  autoTradeStarted: 'Perdagangan otomatis dimulai',
  autoTradeStopped: 'Perdagangan otomatis dihentikan',
  typeMessage: 'Ketik pesan...',
  voiceInput: 'Input Suara',
  aiThinking: 'Berpikir...',
  welcomeMessage: 'Halo! Saya KanutsananFX, senang melayani Anda.',
  voiceComingSoon: 'Fitur percakapan suara - akan datang di versi berikutnya',
  guideMetaApi: 'Panduan MetaAPI',
  guideAiProvider: 'Panduan Penyedia AI',
  guideTradingSkills: 'Panduan Keterampilan Perdagangan',
  guideCommands: 'Panduan Perintah',
  selectGuide: 'Pilih panduan untuk dibaca',
  back: 'Kembali',
  noInternet: 'Tidak Ada Koneksi Internet',
  setupRequired: 'Pengaturan Diperlukan',
  close: 'Tutup',
  seconds: 'detik',
  minutes: 'menit',
  hours: 'jam',
  backup: 'Cadangkan',
  restore: 'Pulihkan',
  backupToGDrive: 'Cadangkan ke Google Drive',
  restoreFromGDrive: 'Pulihkan dari Google Drive',
  backupComingSoon: 'Fitur pencadangan akan datang di versi berikutnya',
  restoreComingSoon: 'Fitur pemulihan akan datang di versi berikutnya',
  currentLlm: 'Otak AI Saat Ini',
  status: 'Status',
  tradingPair: 'Pasangan Perdagangan',
  connectionStatus: 'Status Koneksi',
  autoCheckInterval: 'Interval Pemeriksaan Otomatis',
  selectTradingPair: 'Pilih Pasangan Perdagangan',
  loadingPairs: 'Memuat pasangan perdagangan...',
  currentSetting: 'Saat ini',
  refreshPairs: 'Segarkan pasangan perdagangan',
  connectMetaApiFirst: 'Harap hubungkan MetaAPI terlebih dahulu untuk memuat pasangan perdagangan',
  developerName: 'Kanutsanan Pongpanna',
  developerTitle: 'Pengembang KanutsananFX',
  developerBio: 'Pedagang Pertanian Online | Pengembang Perdagangan AI
Maha Sarakham | S.Si. Fisika Terapan, Mahasarakham University',
  developerQuote: 'Kami berdiri sebagai orang yang tidak menindas siapa pun, tetapi kami tidak dilahirkan untuk diinjak-injak.',
  linksAndContacts: 'Tautan & Kontak',
  sourceCodeRef: 'Referensi Kode Sumber',
  youtubeRef: 'Referensi Video YouTube',
  language: 'Bahasa',
  selectLanguage: 'Pilih Bahasa',
  languageName: 'Bahasa Indonesia',
  setupTitle: 'Pengaturan Awal',
  setupDesc: 'Masukkan informasi untuk mulai menggunakan KanutsananFX',
  step1MetaApi: 'Langkah 1: Atur MetaAPI',
  step2AiBrain: 'Langkah 2: Atur Otak AI',
  startUsing: 'Mulai Menggunakan',
  skipSetup: 'Lewati Pengaturan',
  letsGo: 'Ayo!',
  resetConnection: 'Atur Ulang Koneksi',
  resetWarning: 'Semua data koneksi akan dihapus',
  reset: 'Atur Ulang',
  ok: 'OK',
  confirm: 'Konfirmasi',
  warning: 'Peringatan',
  error: 'Kesalahan',
  success: 'Sukses',
  loading: 'Memuat...',
  retry: 'Coba Lagi',
  comingSoon: 'Segera Hadir',
  version: 'Versi',
  guideMetaApiContent: '# Panduan MetaAPI

## Langkah 1: Daftar Akun MetaAPI
- Buka https://app.metaapi.cloud
- Buat akun baru atau masuk
- Verifikasi email Anda

## Langkah 2: Hubungkan Akun MT5
- Klik Akun Baru
- Pilih Hubungkan akun yang sudah ada
- Masukkan detail MT5: Server, Login, Kata Sandi
- Klik Buat Akun

## Langkah 3: Dapatkan Account ID
- Setelah membuat akun, Anda akan melihat Account ID
- Salin Account ID
- Masukkan di KanutsananFX

## Langkah 4: Dapatkan API Key
- Buka Pengaturan lalu Akses API
- Buat Token API baru
- Salin Token
- Masukkan di KanutsananFX

## Penting
- Jangan pernah membagikan API Key Anda
- Gunakan 2FA untuk keamanan"New Account"\n- Select "Connect existing account"\n- Enter MT5 details: Server, Login, Password\n- Click "Create Account"\n\n## Step 3: Get Account ID\n- After creating the account, you will see the Account ID\n- Copy the Account ID\n- Enter it in KanutsananFX\n\n## Step 4: Get API Key\n- Go to Settings → API Access\n- Create a new API Token\n- Copy the Token\n- Enter it in KanutsananFX\n\n## Important\n- Never share your API Key\n- Use 2FA for security',
  guideAiProviderContent: '# Panduan Penyedia AI

## 1. KanutsananFX (Default)
- LLM bawaan, tidak memerlukan API Key

## 2. OpenAI
- Situs web: https://platform.openai.com

## 3. Anthropic (Claude)
- Situs web: https://console.anthropic.com

## 4. Google Gemini
- Situs web: https://aistudio.google.com

## 5. Grok (xAI)
- Situs web: https://console.x.ai

## 6. Perplexity
- Situs web: https://www.perplexity.ai/settings/api

## 7. OpenRouter
- Situs web: https://openrouter.ai',
  guideTradingSkillsContent: '# Panduan Keterampilan Trading

## Interval Pemeriksaan Otomatis
- 30 detik - Paling sering
- 1-10 menit - Sedang
- 1-5 jam - Paling jarang

## Sistem Analisis STEP 0-9
- STEP 0: Periksa pasar buka/tutup
- STEP 1: Harga saat ini
- STEP 2: Analisis grafik M15
- STEP 3: Hitung SL/TP
- STEP 4: Periksa Risk/Reward
- STEP 5: Hitung Ukuran Posisi
- STEP 6: Evaluasi kekuatan sinyal
- STEP 7: Periksa arah
- STEP 8: Verifikasi API
- STEP 9: Periksa posisi yang ada',
  guideCommandsContent: '# Panduan Perintah

## 1. Periksa Perdagangan
- Analisis pasar menggunakan STEP 0-9
- Tampilkan hasil analisis

## 2. Setujui Perdagangan
- Lakukan perdagangan berdasarkan analisis

## 3. Atur Perdagangan Otomatis
- Secara otomatis memeriksa dan berdagang sesuai jadwal

## 4. Batalkan Perdagangan Otomatis
- Hentikan perdagangan otomatis segera',
  developerLinks: 'Tautan & Kontak',
  sourceCodeReference: 'Referensi Kode Sumber',
  youtubeReferences: 'Referensi Video YouTube',
  videoOne: 'Video 1',
  videoTwo: 'Video 2',
  developerLinkChat: 'Mengobrol dengan Pengembang LoveMoney AI',
  developerLinkLoveMoneyAi: 'LoveMoney AI di ChatGPT',
  developerLinkYoutubeOfficial: 'Saluran YouTube LoveMoney Official',
  developerLinkFacebookPage: 'Halaman Facebook LoveMoney',
  developerLinkLokathibodi: 'Kitab Suci Lokathibodi',
  developerLinkGardenMain: 'Taman Dharma Kebajikan',
  developerLinkGardenActivities: 'Kegiatan Taman Dharma',
  developerLinkRiceTrade: 'Grup Perdagangan Beras Online',
  developerLinkGrassTrade: 'Grup Perdagangan Rumput Pangola',
  developerLinkEnergyGroup: 'Grup Energi Pemurnian Diri',
  developerLinkPropertyGroup: 'Grup Perdagangan Real Estat',
  setupStep: 'Langkah',
  setupMetaApiDesc: 'Masukkan Account ID dan API Key dari MetaAPI untuk menghubungkan akun trading MT5 Anda',
  setupAiBrainDesc: 'Pilih penyedia AI untuk analisis dan percakapan',
  accountIdPlaceholder: 'Masukkan Account ID MetaAPI',
  connectMetaApi: 'Hubungkan MetaAPI',
  connectAiBrain: 'Hubungkan Otak AI',
  viewGuide: 'Lihat Panduan',
  backToMetaApi: 'Kembali ke Pengaturan MetaAPI',
  connectionFailedDesc: 'Silakan periksa Account ID dan API Key Anda. Lihat menu Panduan untuk bantuan.',
  pleaseEnterAiKey: 'Silakan masukkan API Key untuk penyedia AI yang dipilih',
  aiResponseCheckTrade: 'Menganalisis pasar... Silakan gunakan tombol Periksa Perdagangan di layar Perdagangan untuk analisis real-time dari MetaAPI.',
  aiResponseApproveTrade: 'Silakan gunakan tombol Setujui Perdagangan di layar Perdagangan setelah memeriksa perdagangan. Sistem akan mengeksekusi order berdasarkan analisis.',
  aiResponseAutoTrade: 'Silakan konfigurasikan waktu perdagangan otomatis di Keterampilan Trading terlebih dahulu, lalu tekan Atur Perdagangan Otomatis di layar Perdagangan.',
  aiResponseCancelAuto: 'Silakan tekan tombol Batalkan Perdagangan Otomatis di layar Perdagangan.',
  aiResponseDharma: 'Dharma sangat penting dalam kehidupan. Trading juga sama - membutuhkan kesadaran, konsentrasi, tanpa keserakahan, tanpa kemarahan. Anapanasati (kesadaran napas) adalah dasar yang bagus untuk menenangkan pikiran.',
  aiResponseGreeting: 'Halo! Saya KanutsananFX, senang melayani Anda. Saya dapat membantu Anda dengan analisis pasar Forex, rekomendasi perdagangan, menyesuaikan keterampilan trading, dan membahas Dharma serta sistem keuangan global.',
  aiResponseDefault: 'Terima kasih atas pesan Anda. Saya KanutsananFX, siap membantu Anda dengan perdagangan Forex dan diskusi Dharma. Anda dapat menggunakan perintah: Periksa Perdagangan, Setujui Perdagangan, Atur Perdagangan Otomatis, Batalkan Perdagangan Otomatis.',
  aiErrorGeneric: 'Maaf, tidak dapat merespons saat ini.',
  aiErrorConnection: 'Terjadi kesalahan. Silakan periksa API Key dan koneksi internet Anda.',
  darkMode: 'Mode Gelap',
  notifications: 'Notifikasi',
  clearChatHistory: 'Hapus Riwayat Obrolan',
  clearChatConfirm: 'Apakah Anda ingin menghapus semua riwayat obrolan?',
  exportSettings: 'Ekspor Pengaturan',
  importSettings: 'Impor Pengaturan',
  settingsMetaApiSection: 'MetaAPI',
  settingsAiBrainSection: 'Otak AI',
  settingsLanguageSection: 'Bahasa',
  settingsBackupSection: 'Cadangkan/Pulihkan',
  settingsAboutSection: 'Tentang',
  tradeAnalysisResult: 'Hasil Analisis',
  trendUp: 'Tren Naik',
  trendDown: 'Tren Turun',
  signalStrength: 'Kekuatan Sinyal',
  entryPrice: 'Harga Masuk',
  stopLoss: 'Stop Loss',
  takeProfit: 'Take Profit',
  lotSize: 'Lot Size',
  riskReward: 'Risk/Reward',
  noAnalysisYet: 'Belum ada analisis',
  analyzing: 'Menganalisis...',
  executing: 'Mengeksekusi...',
  autoTradeActive: 'Perdagangan otomatis aktif',
  autoTradeInactive: 'Perdagangan otomatis tidak aktif',
};

export default id;
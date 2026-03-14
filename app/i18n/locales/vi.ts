import { TranslationKey } from '../keys';

const vi: Record<TranslationKey, string> = {
  appName: 'KanutsananFX',
  welcome: 'Chào mừng đến với KanutsananFX',
  settings: 'Cài đặt',
  chat: 'Trò chuyện với AI',
  trade: 'Giao dịch',
  guide: 'Hướng dẫn',
  developer: 'Nhà phát triển',
  tradingSkills: 'Kỹ năng giao dịch',
  metaApiSettings: 'Cài đặt MetaAPI',
  accountId: 'Account ID',
  apiKey: 'API Key',
  aiBrainSettings: 'Bộ não AI',
  selectAiProvider: 'Chọn nhà cung cấp AI',
  apiKeyPlaceholder: 'Nhập API Key',
  save: 'Lưu',
  cancel: 'Hủy',
  connect: 'Kết nối',
  disconnect: 'Ngắt kết nối',
  connected: 'Đã kết nối',
  disconnected: 'Đã ngắt kết nối',
  connectionSuccess: 'Kết nối thành công',
  connectionFailed: 'Kết nối thất bại',
  pleaseSetup: 'Vui lòng cài đặt MetaAPI và Bộ não AI trước',
  checkTrade: 'Kiểm tra giao dịch',
  approveTrade: 'Phê duyệt giao dịch',
  setAutoTrade: 'Đặt giao dịch tự động',
  cancelAutoTrade: 'Hủy giao dịch tự động',
  autoTrading: 'Giao dịch tự động',
  tradingInterval: 'Khoảng thời gian kiểm tra giao dịch',
  selectPair: 'Chọn cặp giao dịch',
  checkTradeDesc: 'Phân tích thị trường và đưa ra khuyến nghị (STEP 0-9)',
  approveTradeDesc: 'Gửi lệnh giao dịch dựa trên khuyến nghị',
  setAutoTradeDesc: 'Đặt lịch kiểm tra và giao dịch tự động',
  cancelAutoTradeDesc: 'Dừng hệ thống giao dịch tự động',
  analyzeMarket: 'Phân tích thị trường',
  sendTradeOrder: 'Gửi lệnh giao dịch',
  autoCheckEvery: 'Kiểm tra mỗi',
  stopAutoTrading: 'Dừng giao dịch tự động',
  confirmTrade: 'Xác nhận giao dịch',
  tradeSuccess: 'Giao dịch thành công',
  tradeFailed: 'Giao dịch thất bại',
  notReady: 'Chưa sẵn sàng giao dịch',
  checkFirst: 'Vui lòng kiểm tra giao dịch trước',
  autoTradeStarted: 'Giao dịch tự động đã bắt đầu',
  autoTradeStopped: 'Giao dịch tự động đã dừng',
  typeMessage: 'Nhập tin nhắn...',
  voiceInput: 'Nhập bằng giọng nói',
  aiThinking: 'AI đang suy nghĩ...',
  welcomeMessage: 'Xin chào! Tôi là KanutsananFX, rất vui được phục vụ bạn.',
  voiceComingSoon: 'Tính năng trò chuyện bằng giọng nói - sẽ có trong phiên bản tiếp theo',
  guideMetaApi: 'Hướng dẫn MetaAPI',
  guideAiProvider: 'Hướng dẫn nhà cung cấp AI',
  guideTradingSkills: 'Hướng dẫn kỹ năng giao dịch',
  guideCommands: 'Hướng dẫn lệnh',
  selectGuide: 'Chọn một hướng dẫn để đọc',
  back: 'Quay lại',
  noInternet: 'Không có kết nối Internet',
  setupRequired: 'Yêu cầu cài đặt',
  close: 'Đóng',
  seconds: 'giây',
  minutes: 'phút',
  hours: 'giờ',
  backup: 'Sao lưu',
  restore: 'Khôi phục',
  backupToGDrive: 'Sao lưu vào Google Drive',
  restoreFromGDrive: 'Khôi phục từ Google Drive',
  backupComingSoon: 'Tính năng sao lưu sẽ có trong phiên bản tiếp theo',
  restoreComingSoon: 'Tính năng khôi phục sẽ có trong phiên bản tiếp theo',
  currentLlm: 'Bộ não AI hiện tại',
  status: 'Trạng thái',
  tradingPair: 'Cặp giao dịch',
  connectionStatus: 'Trạng thái kết nối',
  autoCheckInterval: 'Khoảng thời gian tự động kiểm tra',
  selectTradingPair: 'Chọn cặp giao dịch',
  loadingPairs: 'Đang tải các cặp giao dịch...',
  currentSetting: 'Hiện tại',
  refreshPairs: 'Làm mới các cặp giao dịch',
  connectMetaApiFirst: 'Vui lòng kết nối MetaAPI trước để tải các cặp giao dịch',
  developerName: 'Kanutsanan Pongpanna',
  developerTitle: 'Nhà phát triển KanutsananFX',
  developerBio: 'Nhà giao dịch nông sản trực tuyến | Nhà phát triển giao dịch AI
Mahasarakham | Cử nhân Vật lý ứng dụng, Đại học Mahasarakham',
  developerQuote: 'Chúng tôi là những người không áp bức ai, nhưng chúng tôi cũng không sinh ra để bị chà đạp.',
  linksAndContacts: 'Liên kết & Liên hệ',
  sourceCodeRef: 'Tham khảo mã nguồn',
  youtubeRef: 'Tham khảo video YouTube',
  language: 'Ngôn ngữ',
  selectLanguage: 'Chọn ngôn ngữ',
  languageName: 'Tiếng Việt',
  setupTitle: 'Cài đặt ban đầu',
  setupDesc: 'Nhập thông tin để bắt đầu sử dụng KanutsananFX',
  step1MetaApi: 'Bước 1: Cài đặt MetaAPI',
  step2AiBrain: 'Bước 2: Cài đặt Bộ não AI',
  startUsing: 'Bắt đầu sử dụng',
  skipSetup: 'Bỏ qua cài đặt',
  letsGo: 'Bắt đầu nào!',
  resetConnection: 'Đặt lại kết nối',
  resetWarning: 'Tất cả dữ liệu kết nối sẽ bị xóa',
  reset: 'Đặt lại',
  ok: 'OK',
  confirm: 'Xác nhận',
  warning: 'Cảnh báo',
  error: 'Lỗi',
  success: 'Thành công',
  loading: 'Đang tải...',
  retry: 'Thử lại',
  comingSoon: 'Sắp có',
  version: 'Phiên bản',
  guideMetaApiContent: '# Hướng dẫn MetaAPI

## Bước 1: Đăng ký tài khoản MetaAPI
- Truy cập https://app.metaapi.cloud
- Tạo tài khoản mới hoặc đăng nhập
- Xác minh email của bạn

## Bước 2: Kết nối tài khoản MT5
- Nhấp vào Tài khoản mới
- Chọn Kết nối tài khoản hiện có
- Nhập chi tiết MT5: Máy chủ, Đăng nhập, Mật khẩu
- Nhấp vào Tạo tài khoản

## Bước 3: Lấy ID tài khoản
- Sau khi tạo tài khoản, bạn sẽ thấy ID tài khoản
- Sao chép ID tài khoản
- Nhập nó vào KanutsananFX

## Bước 4: Lấy Khóa API
- Đi tới Cài đặt rồi truy cập API
- Tạo Mã thông báo API mới
- Sao chép Mã thông báo
- Nhập nó vào KanutsananFX

## Quan trọng
- Không bao giờ chia sẻ Khóa API của bạn
- Sử dụng 2FA để bảo mật"New Account"\n- Select "Connect existing account"\n- Enter MT5 details: Server, Login, Password\n- Click "Create Account"\n\n## Step 3: Get Account ID\n- After creating the account, you will see the Account ID\n- Copy the Account ID\n- Enter it in KanutsananFX\n\n## Step 4: Get API Key\n- Go to Settings → API Access\n- Create a new API Token\n- Copy the Token\n- Enter it in KanutsananFX\n\n## Important\n- Never share your API Key\n- Use 2FA for security',
  guideAiProviderContent: '# Hướng dẫn nhà cung cấp AI

## 1. KanutsananFX (Mặc định)
- LLM tích hợp, không cần Khóa API

## 2. OpenAI
- Trang web: https://platform.openai.com

## 3. Anthropic (Claude)
- Trang web: https://console.anthropic.com

## 4. Google Gemini
- Trang web: https://aistudio.google.com

## 5. Grok (xAI)
- Trang web: https://console.x.ai

## 6. Perplexity
- Trang web: https://www.perplexity.ai/settings/api

## 7. OpenRouter
- Trang web: https://openrouter.ai',
  guideTradingSkillsContent: '# Hướng dẫn kỹ năng giao dịch

## Khoảng thời gian tự động kiểm tra
- 30 giây - Thường xuyên nhất
- 1-10 phút - Vừa phải
- 1-5 giờ - Ít thường xuyên nhất

## Hệ thống phân tích STEP 0-9
- STEP 0: Kiểm tra thị trường mở/đóng cửa
- STEP 1: Giá hiện tại
- STEP 2: Phân tích biểu đồ M15
- STEP 3: Tính toán SL/TP
- STEP 4: Kiểm tra Rủi ro/Phần thưởng
- STEP 5: Tính toán Quy mô vị thế
- STEP 6: Đánh giá sức mạnh tín hiệu
- STEP 7: Kiểm tra hướng
- STEP 8: Xác minh API
- STEP 9: Kiểm tra các vị thế hiện có',
  guideCommandsContent: '# Hướng dẫn lệnh

## 1. Kiểm tra giao dịch
- Phân tích thị trường bằng STEP 0-9
- Hiển thị kết quả phân tích

## 2. Phê duyệt giao dịch
- Thực hiện giao dịch dựa trên phân tích

## 3. Đặt giao dịch tự động
- Tự động kiểm tra và giao dịch theo lịch trình

## 4. Hủy giao dịch tự động
- Dừng giao dịch tự động ngay lập tức',
  developerLinks: 'Liên kết & Danh bạ',
  sourceCodeReference: 'Tham chiếu mã nguồn',
  youtubeReferences: 'Tham chiếu video trên YouTube',
  videoOne: 'Video 1',
  videoTwo: 'Video 2',
  developerLinkChat: 'Trò chuyện với nhà phát triển LoveMoney AI',
  developerLinkLoveMoneyAi: 'LoveMoney AI trên ChatGPT',
  developerLinkYoutubeOfficial: 'Kênh YouTube chính thức của LoveMoney',
  developerLinkFacebookPage: 'Trang Facebook LoveMoney',
  developerLinkLokathibodi: 'Kinh Lokatipatti',
  developerLinkGardenMain: 'Vườn công đức Dharma',
  developerLinkGardenActivities: 'Hoạt động vườn Dharma',
  developerLinkRiceTrade: 'Nhóm kinh doanh lúa gạo trực tuyến',
  developerLinkGrassTrade: 'Nhóm kinh doanh cỏ Pangola',
  developerLinkEnergyGroup: 'Nhóm năng lượng tự tinh chế',
  developerLinkPropertyGroup: 'Nhóm kinh doanh bất động sản',
  setupStep: 'Bước',
  setupMetaApiDesc: 'Nhập ID tài khoản và Khóa API từ MetaAPI để kết nối tài khoản giao dịch MT5 của bạn',
  setupAiBrainDesc: 'Chọn một nhà cung cấp AI để phân tích và trò chuyện',
  accountIdPlaceholder: 'Nhập ID tài khoản MetaAPI',
  connectMetaApi: 'Kết nối MetaAPI',
  connectAiBrain: 'Kết nối bộ não AI',
  viewGuide: 'Xem hướng dẫn',
  backToMetaApi: 'Quay lại thiết lập MetaAPI',
  connectionFailedDesc: 'Vui lòng kiểm tra ID tài khoản và Khóa API của bạn. Xem menu Hướng dẫn để được trợ giúp.',
  pleaseEnterAiKey: 'Vui lòng nhập Khóa API cho nhà cung cấp AI đã chọn',
  aiResponseCheckTrade: 'Đang phân tích thị trường... Vui lòng sử dụng nút Kiểm tra giao dịch trên màn hình Giao dịch để phân tích thời gian thực từ MetaAPI.',
  aiResponseApproveTrade: 'Vui lòng sử dụng nút Phê duyệt giao dịch trên màn hình Giao dịch sau khi kiểm tra giao dịch. Hệ thống sẽ thực hiện các lệnh dựa trên phân tích.',
  aiResponseAutoTrade: 'Vui lòng định cấu hình thời gian giao dịch tự động trong Kỹ năng giao dịch trước, sau đó nhấn Đặt giao dịch tự động trên màn hình Giao dịch.',
  aiResponseCancelAuto: 'Vui lòng nhấn nút Hủy giao dịch tự động trên màn hình Giao dịch.',
  aiResponseDharma: 'Pháp là điều cần thiết trong cuộc sống. Giao dịch cũng vậy - nó đòi hỏi chánh niệm, sự tập trung, không tham lam, không sân hận. Anapanasati (nhận biết hơi thở) là một nền tảng tuyệt vời để làm dịu tâm trí.',
  aiResponseGreeting: 'Xin chào! Tôi là KanutsananFX, rất vui được phục vụ bạn. Tôi có thể giúp bạn phân tích thị trường Forex, đề xuất giao dịch, tùy chỉnh kỹ năng giao dịch và thảo luận về Pháp và các hệ thống tài chính toàn cầu.',
  aiResponseDefault: 'Cảm ơn tin nhắn của bạn. Tôi là KanutsananFX, sẵn sàng giúp bạn giao dịch Forex và thảo luận về Pháp. Bạn có thể sử dụng các lệnh: Kiểm tra giao dịch, Phê duyệt giao dịch, Đặt giao dịch tự động, Hủy giao dịch tự động.',
  aiErrorGeneric: 'Xin lỗi, không thể trả lời vào lúc này.',
  aiErrorConnection: 'Đã xảy ra lỗi. Vui lòng kiểm tra Khóa API và kết nối internet của bạn.',
  darkMode: 'Chế độ tối',
  notifications: 'Thông báo',
  clearChatHistory: 'Xóa lịch sử trò chuyện',
  clearChatConfirm: 'Bạn có muốn xóa tất cả lịch sử trò chuyện không?',
  exportSettings: 'Xuất cài đặt',
  importSettings: 'Nhập cài đặt',
  settingsMetaApiSection: 'MetaAPI',
  settingsAiBrainSection: 'Bộ não AI',
  settingsLanguageSection: 'Ngôn ngữ',
  settingsBackupSection: 'Sao lưu/Khôi phục',
  settingsAboutSection: 'Giới thiệu',
  tradeAnalysisResult: 'Kết quả phân tích',
  trendUp: 'Xu hướng tăng',
  trendDown: 'Xu hướng giảm',
  signalStrength: 'Sức mạnh tín hiệu',
  entryPrice: 'Giá vào lệnh',
  stopLoss: 'Stop Loss',
  takeProfit: 'Take Profit',
  lotSize: 'Lot Size',
  riskReward: 'Risk/Reward',
  noAnalysisYet: 'Chưa có phân tích',
  analyzing: 'Đang phân tích...',
  executing: 'Đang thực thi...',
  autoTradeActive: 'Giao dịch tự động đang hoạt động',
  autoTradeInactive: 'Giao dịch tự động không hoạt động',
};

export default vi;
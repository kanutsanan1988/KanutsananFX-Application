import { TranslationKey } from '../keys';

const ko: Record<TranslationKey, string> = {
  appName: 'KanutsananFX',
  welcome: 'KanutsananFX에 오신 것을 환영합니다',
  settings: '설정',
  chat: 'AI 채팅',
  trade: '거래',
  guide: '가이드',
  developer: '개발자',
  tradingSkills: '거래 기술',
  metaApiSettings: 'MetaAPI 설정',
  accountId: 'Account ID',
  apiKey: 'API Key',
  aiBrainSettings: 'AI 브레인',
  selectAiProvider: 'AI 공급자 선택',
  apiKeyPlaceholder: 'API Key를 입력하세요',
  save: '저장',
  cancel: '취소',
  connect: '연결',
  disconnect: '연결 해제',
  connected: '연결됨',
  disconnected: '연결 끊김',
  connectionSuccess: '연결 성공',
  connectionFailed: '연결 실패',
  pleaseSetup: '먼저 MetaAPI와 AI 브레인을 설정해주세요',
  checkTrade: '거래 확인',
  approveTrade: '거래 승인',
  setAutoTrade: '자동 거래 설정',
  cancelAutoTrade: '자동 거래 취소',
  autoTrading: '자동 거래',
  tradingInterval: '거래 확인 간격',
  selectPair: '거래 페어 선택',
  checkTradeDesc: '시장 분석 및 추천 제공 (STEP 0-9)',
  approveTradeDesc: '추천에 따라 거래 주문 전송',
  setAutoTradeDesc: '자동 확인 및 거래 일정 설정',
  cancelAutoTradeDesc: '자동 거래 시스템 중지',
  analyzeMarket: '시장 분석',
  sendTradeOrder: '거래 주문 전송',
  autoCheckEvery: '매',
  stopAutoTrading: '자동 거래 중지',
  confirmTrade: '거래 확인',
  tradeSuccess: '거래 성공',
  tradeFailed: '거래 실패',
  notReady: '거래 준비 안 됨',
  checkFirst: '먼저 거래를 확인해주세요',
  autoTradeStarted: '자동 거래 시작됨',
  autoTradeStopped: '자동 거래 중지됨',
  typeMessage: '메시지를 입력하세요...',
  voiceInput: '음성 입력',
  aiThinking: '생각 중...',
  welcomeMessage: '안녕하세요! 저는 KanutsananFX입니다. 무엇을 도와드릴까요?',
  voiceComingSoon: '음성 대화 기능 - 다음 버전에 제공될 예정입니다',
  guideMetaApi: 'MetaAPI 가이드',
  guideAiProvider: 'AI 공급자 가이드',
  guideTradingSkills: '거래 기술 가이드',
  guideCommands: '명령어 가이드',
  selectGuide: '읽을 가이드를 선택하세요',
  back: '뒤로',
  noInternet: '인터넷 연결 없음',
  setupRequired: '설정 필요',
  close: '닫기',
  seconds: '초',
  minutes: '분',
  hours: '시간',
  backup: '백업',
  restore: '복원',
  backupToGDrive: 'Google Drive에 백업',
  restoreFromGDrive: 'Google Drive에서 복원',
  backupComingSoon: '백업 기능은 다음 버전에 제공될 예정입니다',
  restoreComingSoon: '복원 기능은 다음 버전에 제공될 예정입니다',
  currentLlm: '현재 AI 브레인',
  status: '상태',
  tradingPair: '거래 페어',
  connectionStatus: '연결 상태',
  autoCheckInterval: '자동 확인 간격',
  selectTradingPair: '거래 페어 선택',
  loadingPairs: '거래 페어를 불러오는 중...',
  currentSetting: '현재',
  refreshPairs: '거래 페어 새로고침',
  connectMetaApiFirst: '거래 페어를 불러오려면 먼저 MetaAPI에 연결해주세요',
  developerName: 'Kanutsanan Pongpanna',
  developerTitle: 'KanutsananFX 개발자',
  developerBio: '온라인 농산물 거래자 | AI 트레이딩 개발자
마하사라캄 | B.Sc. 응용물리학, Mahasarakham University',
  developerQuote: '우리는 누구도 억압하지 않는 자로 서지만, 짓밟히기 위해 태어나지 않았습니다.',
  linksAndContacts: '링크 및 연락처',
  sourceCodeRef: '소스 코드 참조',
  youtubeRef: 'YouTube 비디오 참조',
  language: '언어',
  selectLanguage: '언어 선택',
  languageName: '한국어',
  setupTitle: '초기 설정',
  setupDesc: 'KanutsananFX 사용을 시작하려면 정보를 입력하세요',
  step1MetaApi: '1단계: MetaAPI 설정',
  step2AiBrain: '2단계: AI 브레인 설정',
  startUsing: '사용 시작',
  skipSetup: '설정 건너뛰기',
  letsGo: '시작!',
  resetConnection: '연결 초기화',
  resetWarning: '모든 연결 데이터가 삭제됩니다',
  reset: '초기화',
  ok: '확인',
  confirm: '확인',
  warning: '경고',
  error: '오류',
  success: '성공',
  loading: '로딩 중...',
  retry: '재시도',
  comingSoon: '출시 예정',
  version: '버전',
  guideMetaApiContent: '# MetaAPI 가이드

## 1단계: MetaAPI 계정 등록
- https://app.metaapi.cloud로 이동
- 새 계정을 만들거나 로그인
- 이메일 인증

## 2단계: MT5 계정 연결
- 새 계정 클릭
- 기존 계정 연결 선택
- MT5 정보 입력: 서버, 로그인, 비밀번호
- 계정 생성 클릭

## 3단계: 계정 ID 가져오기
- 계정 생성 후 계정 ID가 표시됩니다
- 계정 ID 복사
- KanutsananFX에 입력

## 4단계: API Key 가져오기
- 설정 다음 API 액세스로 이동
- 새 API 토큰 생성
- 토큰 복사
- KanutsananFX에 입력

## 중요
- API Key를 절대 공유하지 마세요
- 보안을 위해 2단계 인증 사용"New Account"\n- Select "Connect existing account"\n- Enter MT5 details: Server, Login, Password\n- Click "Create Account"\n\n## Step 3: Get Account ID\n- After creating the account, you will see the Account ID\n- Copy the Account ID\n- Enter it in KanutsananFX\n\n## Step 4: Get API Key\n- Go to Settings → API Access\n- Create a new API Token\n- Copy the Token\n- Enter it in KanutsananFX\n\n## Important\n- Never share your API Key\n- Use 2FA for security',
  guideAiProviderContent: '# AI 공급자 가이드

## 1. KanutsananFX (기본값)
- 내장 LLM, API Key 필요 없음

## 2. OpenAI
- 웹사이트: https://platform.openai.com

## 3. Anthropic (Claude)
- 웹사이트: https://console.anthropic.com

## 4. Google Gemini
- 웹사이트: https://aistudio.google.com

## 5. Grok (xAI)
- 웹사이트: https://console.x.ai

## 6. Perplexity
- 웹사이트: https://www.perplexity.ai/settings/api

## 7. OpenRouter
- 웹사이트: https://openrouter.ai',
  guideTradingSkillsContent: '# 트레이딩 기술 가이드

## 자동 확인 간격
- 30초 - 가장 자주
- 1-10분 - 보통
- 1-5시간 - 가장 드물게

## 분석 시스템 STEP 0-9
- STEP 0: 시장 개장/마감 확인
- STEP 1: 현재 가격
- STEP 2: M15 차트 분석
- STEP 3: SL/TP 계산
- STEP 4: Risk/Reward 확인
- STEP 5: 포지션 크기 계산
- STEP 6: 신호 강도 평가
- STEP 7: 방향 확인
- STEP 8: API 확인
- STEP 9: 기존 포지션 확인',
  guideCommandsContent: '# 명령어 가이드

## 1. 거래 확인
- STEP 0-9를 사용하여 시장 분석
- 분석 결과 표시

## 2. 거래 승인
- 분석에 따라 거래 실행

## 3. 자동 거래 설정
- 일정에 따라 자동으로 확인하고 거래

## 4. 자동 거래 취소
- 자동 거래 즉시 중지',
  developerLinks: '링크 및 연락처',
  sourceCodeReference: '소스 코드 참조',
  youtubeReferences: 'YouTube 비디오 참조',
  videoOne: '비디오 1',
  videoTwo: '비디오 2',
  developerLinkChat: '개발자 LoveMoney AI와 채팅',
  developerLinkLoveMoneyAi: 'ChatGPT의 LoveMoney AI',
  developerLinkYoutubeOfficial: 'YouTube 채널 LoveMoney 공식',
  developerLinkFacebookPage: 'Facebook 페이지 LoveMoney',
  developerLinkLokathibodi: '로카티보디 경전',
  developerLinkGardenMain: '공덕의 법 정원',
  developerLinkGardenActivities: '법 정원 활동',
  developerLinkRiceTrade: '온라인 쌀 거래 그룹',
  developerLinkGrassTrade: '판골라 풀 거래 그룹',
  developerLinkEnergyGroup: '자가 정제 에너지 그룹',
  developerLinkPropertyGroup: '부동산 거래 그룹',
  setupStep: '단계',
  setupMetaApiDesc: 'MT5 트레이딩 계정을 연결하려면 MetaAPI에서 계정 ID와 API Key를 입력하세요',
  setupAiBrainDesc: '분석 및 대화를 위해 AI 공급자를 선택하세요',
  accountIdPlaceholder: 'MetaAPI 계정 ID 입력',
  connectMetaApi: 'MetaAPI 연결',
  connectAiBrain: 'AI 브레인 연결',
  viewGuide: '가이드 보기',
  backToMetaApi: 'MetaAPI 설정으로 돌아가기',
  connectionFailedDesc: '계정 ID와 API Key를 확인하세요. 도움이 필요하면 가이드 메뉴를 참조하세요.',
  pleaseEnterAiKey: '선택한 AI 공급자의 API Key를 입력하세요',
  aiResponseCheckTrade: '시장 분석 중... 실시간 분석을 위해 거래 화면의 거래 확인 버튼을 사용하세요.',
  aiResponseApproveTrade: '거래 확인 후 거래 화면의 거래 승인 버튼을 사용하세요. 시스템이 분석에 따라 주문을 실행합니다.',
  aiResponseAutoTrade: '먼저 트레이딩 기술에서 자동 거래 시간을 설정한 다음 거래 화면에서 자동 거래 설정을 누르세요.',
  aiResponseCancelAuto: '거래 화면의 자동 거래 취소 버튼을 누르세요.',
  aiResponseDharma: '법은 삶에 필수적입니다. 트레이딩도 마찬가지입니다. 마음챙김, 집중, 탐욕 없음, 분노 없음이 필요합니다. 아나파나사티(호흡 알아차림)는 마음을 진정시키는 훌륭한 기초입니다.',
  aiResponseGreeting: '안녕하세요! 저는 KanutsananFX입니다. 기꺼이 도와드리겠습니다. 외환 시장 분석, 트레이딩 추천, 트레이딩 기술 맞춤화, 법과 글로벌 금융 시스템에 대한 토론을 도와드릴 수 있습니다.',
  aiResponseDefault: '메시지 주셔서 감사합니다. 저는 KanutsananFX이며 외환 트레이딩 및 법 토론을 도와드릴 준비가 되어 있습니다. 명령어: 거래 확인, 거래 승인, 자동 거래 설정, 자동 거래 취소를 사용할 수 있습니다.',
  aiErrorGeneric: '죄송합니다. 지금은 응답할 수 없습니다.',
  aiErrorConnection: '오류가 발생했습니다. API Key와 인터넷 연결을 확인하세요.',
  darkMode: '다크 모드',
  notifications: '알림',
  clearChatHistory: '채팅 기록 지우기',
  clearChatConfirm: '모든 채팅 기록을 지우시겠습니까?',
  exportSettings: '설정 내보내기',
  importSettings: '설정 가져오기',
  settingsMetaApiSection: 'MetaAPI',
  settingsAiBrainSection: 'AI 브레인',
  settingsLanguageSection: '언어',
  settingsBackupSection: '백업/복원',
  settingsAboutSection: '정보',
  tradeAnalysisResult: '분석 결과',
  trendUp: '상승 추세',
  trendDown: '하락 추세',
  signalStrength: '신호 강도',
  entryPrice: '진입 가격',
  stopLoss: 'Stop Loss',
  takeProfit: 'Take Profit',
  lotSize: 'Lot Size',
  riskReward: 'Risk/Reward',
  noAnalysisYet: '아직 분석 없음',
  analyzing: '분석 중...',
  executing: '실행 중...',
  autoTradeActive: '자동 거래 활성',
  autoTradeInactive: '자동 거래 비활성',
};

export default ko;
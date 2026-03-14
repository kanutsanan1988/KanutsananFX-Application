# KanutsananFX - 외환 거래 AI 에이전트 애플리케이션

KanutsananFX는 외환 거래를 위한 강력한 AI 에이전트 애플리케이션입니다. **Expo / React Native**를 기반으로 개발되어 **iOS 및 Android** 기기 모두에서 원활한 경험을 제공합니다. 이 애플리케이션은 현재 42개 언어를 지원하며, 기기 언어 자동 감지 기능과 설정에서 수동 언어 선택 기능을 제공합니다.

## 주요 기능

*   **AI 챗 에이전트**: 지능적인 AI 챗 에이전트와 상호 작용하여 거래 전략을 논의하고 실행합니다.
*   **4가지 거래 명령**: 매수, 매도, 청산, 포지션 수정 등 4가지 핵심 거래 명령을 지원합니다.
*   **MetaAPI 통합**: MetaAPI와 원활하게 통합되어 실시간 시장 데이터 및 거래 실행을 가능하게 합니다.
*   **다중 LLM 지원**: 다양한 대규모 언어 모델(LLM)을 지원하여 유연성과 고급 AI 기능을 제공합니다.
*   **거래 스킬 맞춤 설정**: 사용자의 필요에 맞게 거래 스킬을 맞춤 설정할 수 있습니다.
*   **다국어 UI**: 42개 언어를 지원하는 사용자 인터페이스로 전 세계 사용자가 쉽게 접근할 수 있습니다.
*   **백업/복원**: 데이터를 안전하게 백업하고 복원할 수 있습니다.
*   **개발자 정보 및 가이드**: 개발자를 위한 자세한 정보와 사용 가이드를 제공합니다.

## 기술 스택

*   **프로젝트 이름**: KanutsananFX
*   **프레임워크**: React Native + Expo + TypeScript
*   **내비게이션**: Expo Router
*   **상태 관리**: React Context API
*   **저장소**: AsyncStorage
*   **플랫폼**: iOS 및 Android

## 설치

프로젝트를 로컬에 설정하려면 다음 단계를 따르세요.

```bash
# 저장소 복제
git clone https://github.com/your-repo/KanutsananFX.git # 실제 저장소 URL로 대체하세요.
cd KanutsananFX

# 종속성 설치 (npm 또는 pnpm 사용)
npm install
# 또는
pnpm install
```

## 앱 실행

개발 서버를 시작하고 앱을 실행하려면 다음 명령을 사용하세요.

```bash
# 개발 서버 시작
npx expo start

# Android 에뮬레이터 또는 기기에서 실행
npm run android

# iOS 시뮬레이터 또는 기기에서 실행
npm run ios
```

## Android 및 iOS 빌드

다양한 환경을 위한 빌드 지침입니다.

### Android

*   **Android 미리보기 APK 빌드**: 테스트용 APK를 생성합니다.

    ```bash
    npm run build:android:apk
    ```

*   **Android 프로덕션 AAB 빌드**: Google Play Store에 게시하기 위한 AAB(Android App Bundle)를 생성합니다.

    ```bash
    npm run build:android:production
    ```

### iOS

*   **iOS 미리보기 빌드**: 테스트용 iOS 빌드를 생성합니다.

    ```bash
    npm run build:ios
    ```

*   **iOS 시뮬레이터 빌드**: iOS 시뮬레이터에서 테스트하기 위한 빌드를 생성합니다.

    ```bash
    npm run build:ios:simulator
    ```

*   **iOS 프로덕션 빌드**: Apple App Store에 게시하기 위한 프로덕션 빌드를 생성합니다.

    ```bash
    npm run build:ios:production
    ```

## 사용 방법

앱을 시작한 후, AI 챗 에이전트와 상호 작용하여 거래 전략을 탐색하고, 제공된 명령을 사용하여 거래를 실행할 수 있습니다. 설정 메뉴에서 언어를 변경하고, 백업/복원 기능을 사용하여 데이터를 관리할 수 있습니다.

## 다국어 지원

KanutsananFX는 42개 언어를 지원하여 전 세계 사용자에게 접근성을 제공합니다. 앱은 기기 언어를 자동으로 감지하며, 설정 메뉴에서 원하는 언어를 수동으로 선택할 수 있습니다. 기본 대체 언어는 태국어입니다.

## 참조

이 프로젝트는 다음 거래 스킬 저장소를 참조합니다:

*   [Forex-Auto-Trading-MetaAPI-Skill-for-OpenClaw-by-Kanutsanan-Pongpanna](https://github.com/kanutsanan1988/Forex-Auto-Trading-MetaAPI-Skill-for-OpenClaw-by-Kanutsanan-Pongpanna)

## 라이선스

이 프로젝트는 [라이선스 유형]에 따라 라이선스가 부여됩니다. 자세한 내용은 `LICENSE` 파일을 참조하십시오.

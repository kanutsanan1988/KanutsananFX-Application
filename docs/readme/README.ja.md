# KanutsananFX - ForexトレーディングAIエージェントアプリケーション

## 概要

KanutsananFXは、**Expo / React Native** を使用して構築された、**iOSとAndroid**の両方をサポートする先進的なForexトレーディングAIエージェントアプリケーションです。このアプリケーションは、42の言語をサポートし、デバイスの言語設定を自動検出し、設定で手動で言語を選択することも可能です。

## 主要機能

*   **AIチャットエージェント**: 直感的なAIチャットインターフェースを通じて、トレーディングの意思決定をサポートします。
*   **4つのトレーディングコマンド**: 厳選された4つの主要なトレーディングコマンドで、効率的な取引が可能です。
*   **MetaAPI統合**: MetaAPIとのシームレスな統合により、リアルタイムの市場データと取引実行を実現します。
*   **マルチLLMサポート**: 複数の大規模言語モデル（LLM）をサポートし、柔軟なAI機能を提供します。
*   **トレーディングスキルカスタマイズ**: 個々のトレーディングスタイルに合わせてAIのスキルをカスタマイズできます。
*   **多言語UI**: 42の言語に対応したユーザーインターフェースで、世界中のユーザーが利用できます。
*   **バックアップ/復元**: データのバックアップと復元機能により、安心して利用できます。
*   **開発者情報**: 開発者向けのドキュメントと情報を提供します。
*   **ガイド**: アプリケーションの利用方法に関する包括的なガイドを提供します。

## 技術スタック

*   **プロジェクト名**: KanutsananFX
*   **フレームワーク**: React Native + Expo + TypeScript
*   **ナビゲーション**: Expo Router
*   **状態管理**: React Context API
*   **ストレージ**: AsyncStorage
*   **プラットフォーム**: iOS および Android
*   **言語サポート**: 42言語
*   **デフォルトフォールバック言語**: タイ語

## インストール

プロジェクトをローカルにセットアップするには、以下の手順に従ってください。

```bash
npm install
# または
pnpm install
```

## アプリケーションの実行

開発サーバーを起動し、アプリケーションをエミュレーターまたはデバイスで実行します。

```bash
npx expo start
```

Androidデバイスで実行する場合:

```bash
npm run android
```

iOSデバイスで実行する場合:

```bash
npm run ios
```

## AndroidおよびiOS向けビルド

### Android

*   **プレビューAPKのビルド**: テスト目的のAPKファイルを生成します。

    ```bash
npm run build:android:apk
    ```

*   **プロダクションAABのビルド**: Google Playストアに公開するためのAABファイルを生成します。

    ```bash
npm run build:android:production
    ```

### iOS

*   **プレビュービルド**: テスト目的のiOSビルドを生成します。

    ```bash
npm run build:ios
    ```

*   **iOSシミュレータービルド**: iOSシミュレーターで実行するためのビルドを生成します。

    ```bash
npm run build:ios:simulator
    ```

*   **iOSプロダクションビルド**: Apple App Storeに公開するためのプロダクションビルドを生成します。

    ```bash
npm run build:ios:production
    ```

## 使用方法

アプリケーションを起動した後、AIチャットインターフェースを通じて取引コマンドを送信し、市場の洞察を得ることができます。設定メニューから言語設定を調整し、トレーディングスキルをカスタマイズしてください。

## 多言語サポート

KanutsananFXは、42の異なる言語をサポートしています。アプリケーションはデバイスの言語設定を自動的に検出し、それに応じてUIを調整します。必要に応じて、アプリケーション内の設定メニューから手動で言語を選択することもできます。デフォルトのフォールバック言語はタイ語です。

## 参照

オリジナルのトレーディングスキルリポジトリは以下を参照してください。

[Forex-Auto-Trading-MetaAPI-Skill-for-OpenClaw-by-Kanutsanan-Pongpanna](https://github.com/kanutsanan1988/Forex-Auto-Trading-MetaAPI-Skill-for-OpenClaw-by-Kanutsanan-Pongpanna)

## ライセンス

[ここにライセンス情報を記載してください。例: MIT License]

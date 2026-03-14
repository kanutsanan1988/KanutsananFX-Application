# KanutsananFX - Application d'Agent IA de Trading Forex

## Aperçu

KanutsananFX est une application mobile avancée d'agent IA de trading Forex, conçue pour les plateformes **iOS et Android**. Développée avec **Expo** et **React Native**, elle offre une expérience de trading fluide et intelligente directement depuis votre appareil mobile.

## Fonctionnalités Clés

*   **Agent de Chat IA**: Interagissez avec un agent IA intelligent pour obtenir des analyses de marché et des recommandations de trading.
*   **4 Commandes de Trading**: Exécutez des opérations de trading essentielles avec des commandes simplifiées.
*   **Intégration MetaAPI**: Connectez-vous de manière transparente à MetaAPI pour une exécution de trading fiable.
*   **Support Multi-LLM**: Bénéficiez de la flexibilité de plusieurs modèles de langage larges (LLM) pour des capacités d'IA améliorées.
*   **Personnalisation des Compétences de Trading**: Adaptez les compétences de trading de l'IA à votre stratégie.
*   **Interface Utilisateur Multilingue**: Profitez d'une interface disponible en **42 langues**, avec détection automatique de la langue de l'appareil et sélection manuelle via les paramètres.
*   **Sauvegarde et Restauration**: Sécurisez vos données avec des fonctionnalités de sauvegarde et de restauration.
*   **Informations et Guides pour les Développeurs**: Accédez à des ressources complètes pour les développeurs et des guides d'utilisation.

## Pile Technologique

*   **Framework**: React Native + Expo + TypeScript
*   **Navigation**: Expo Router
*   **Gestion d'État**: React Context API
*   **Stockage**: AsyncStorage
*   **Plateformes**: iOS et Android
*   **Support Linguistique**: 42 langues
*   **Langue de Secours par Défaut**: Thaï

## Installation

Pour commencer avec le développement, clonez le dépôt et installez les dépendances :

```bash
git clone [URL_DU_DÉPÔT]
cd KanutsananFX
npm install
# ou
pnpm install
```

## Exécution de l'Application

Pour exécuter l'application en mode développement :

```bash
npx expo start
```

Pour exécuter sur un émulateur/simulateur ou un appareil connecté :

```bash
npm run android
# ou
npm run ios
```

## Construction pour Android et iOS

Voici les commandes pour construire l'application pour différentes plateformes et environnements :

### Android

*   **APK de prévisualisation Android** :
    ```bash
npm run build:android:apk
    ```
*   **AAB de production Android** :
    ```bash
npm run build:android:production
    ```

### iOS

*   **Construction de prévisualisation iOS** :
    ```bash
npm run build:ios
    ```
*   **Construction pour simulateur iOS** :
    ```bash
npm run build:ios:simulator
    ```
*   **Construction de production iOS** :
    ```bash
npm run build:ios:production
    ```

## Comment Utiliser

Après avoir lancé l'application, vous pouvez :

1.  **Interagir avec l'Agent IA** : Utilisez la fonction de chat pour poser des questions sur le marché ou demander des conseils de trading.
2.  **Exécuter des Commandes de Trading** : Accédez aux commandes de trading pour initier des transactions.
3.  **Personnaliser les Paramètres** : Allez dans les paramètres pour changer la langue de l'interface ou configurer d'autres préférences.
4.  **Gérer les Données** : Utilisez les options de sauvegarde et de restauration pour gérer vos données d'application.

## Support Multilingue

L'application KanutsananFX prend en charge un total de **42 langues**, garantissant une expérience utilisateur mondiale. La langue de l'interface est automatiquement détectée en fonction des paramètres de votre appareil. Vous avez également la possibilité de sélectionner manuellement votre langue préférée dans le menu des paramètres de l'application. La langue de secours par défaut est le Thaï.

## Références

Cette application s'appuie sur le dépôt de compétences de trading original :

*   [Forex-Auto-Trading-MetaAPI-Skill-for-OpenClaw-by-Kanutsanan-Pongpanna](https://github.com/kanutsanan1988/Forex-Auto-Trading-MetaAPI-Skill-for-OpenClaw-by-Kanutsanan-Pongpanna)

## Licence

Ce projet est sous licence [Spécifier la licence, par exemple MIT].

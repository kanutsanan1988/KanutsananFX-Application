# KanutsananFX - Aplicativo de Agente de IA para Negociação Forex

## Visão Geral

O KanutsananFX é um aplicativo inovador de agente de IA para negociação Forex, desenvolvido com **React Native** e **Expo**, garantindo compatibilidade total com dispositivos **iOS e Android**. Ele integra capacidades avançadas de inteligência artificial para auxiliar na negociação de câmbio, oferecendo uma experiência de usuário rica e multilíngue.

## Principais Recursos

*   **Agente de Chat de IA**: Interaja com um agente de IA inteligente para obter insights e assistência na negociação.
*   **4 Comandos de Negociação**: Execute comandos de negociação essenciais diretamente do aplicativo.
*   **Integração MetaAPI**: Conecte-se perfeitamente à MetaAPI para dados de mercado em tempo real e execução de negociações.
*   **Suporte Multi-LLM**: Flexibilidade para utilizar múltiplos Modelos de Linguagem Grandes (LLMs).
*   **Personalização de Habilidades de Negociação**: Adapte as habilidades de negociação do agente de IA às suas estratégias.
*   **Interface de Usuário Multilíngue**: Suporte para **42 idiomas**, com detecção automática do idioma do dispositivo e seleção manual nas configurações.
*   **Backup/Restauração**: Funcionalidades para backup e restauração de dados do aplicativo.
*   **Informações do Desenvolvedor**: Acesso fácil a informações e recursos do desenvolvedor.
*   **Guias**: Tutoriais e guias abrangentes para ajudar os usuários a começar.

## Pilha de Tecnologia

*   **Framework**: React Native + Expo + TypeScript
*   **Navegação**: Expo Router
*   **Gerenciamento de Estado**: React Context API
*   **Armazenamento**: AsyncStorage
*   **Plataformas**: iOS e Android

## Instalação

Para configurar o ambiente de desenvolvimento e instalar as dependências, siga os passos abaixo:

```bash
npm install
# ou
pnpm install
```

## Executando o Aplicativo

Para iniciar o aplicativo em modo de desenvolvimento, use o seguinte comando:

```bash
npx expo start
```

Para executar o aplicativo diretamente em um emulador ou dispositivo conectado:

```bash
npm run android
# ou
npm run ios
```

## Construindo para Android e iOS

### Android

*   **APK de Visualização (Preview APK)**:

    ```bash
npm run build:android:apk
    ```

*   **AAB de Produção (Production AAB)**:

    ```bash
npm run build:android:production
    ```

### iOS

*   **Compilação de Visualização (Preview Build)**:

    ```bash
npm run build:ios
    ```

*   **Compilação para Simulador (Simulator Build)**:

    ```bash
npm run build:ios:simulator
    ```

*   **Compilação de Produção (Production Build)**:

    ```bash
npm run build:ios:production
    ```

## Como Usar

Após a instalação e execução do aplicativo, você pode:

1.  Interagir com o Agente de Chat de IA para obter análises de mercado e recomendações.
2.  Utilizar os comandos de negociação para executar operações no mercado Forex.
3.  Personalizar as habilidades do agente de IA para se alinhar com suas estratégias de negociação.
4.  Acessar as configurações para gerenciar idiomas e outras preferências.

## Suporte Multilíngue

O KanutsananFX oferece suporte abrangente a **42 idiomas**. O aplicativo detecta automaticamente o idioma do seu dispositivo e define o idioma da interface de usuário de acordo. Você também pode selecionar manualmente o idioma de sua preferência nas configurações do aplicativo. O idioma de fallback padrão é o **Tailandês**.

## Referências

*   **Repositório da Habilidade de Negociação Original**: [Forex-Auto-Trading-MetaAPI-Skill-for-OpenClaw-by-Kanutsanan-Pongpanna](https://github.com/kanutsanan1988/Forex-Auto-Trading-MetaAPI-Skill-for-OpenClaw-by-Kanutsanan-Pongpanna)

## Licença

[Inserir informações da licença aqui, se aplicável]

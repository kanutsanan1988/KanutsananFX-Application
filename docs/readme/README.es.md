# KanutsananFX - Aplicación de Agente de IA para Trading de Forex

## Visión General

KanutsananFX es una aplicación avanzada de agente de inteligencia artificial diseñada para facilitar el trading de Forex. Desarrollada con **Expo / React Native**, esta aplicación ofrece soporte completo tanto para **iOS como para Android**, proporcionando una experiencia de trading fluida y potente en ambas plataformas.

## Características Clave

*   **Agente de Chat de IA**: Interactúa con un agente de IA inteligente para obtener análisis de mercado y asistencia en trading.
*   **4 Comandos de Trading**: Ejecuta operaciones de trading esenciales directamente desde la aplicación.
*   **Integración con MetaAPI**: Conéctate a MetaAPI para datos de mercado en tiempo real y ejecución de operaciones.
*   **Soporte Multi-LLM**: Flexibilidad para utilizar múltiples modelos de lenguaje grandes (LLM).
*   **Personalización de Habilidades de Trading**: Adapta las habilidades de trading del agente a tus estrategias preferidas.
*   **Interfaz de Usuario Multilingüe**: Disfruta de una interfaz de usuario disponible en 42 idiomas.
*   **Copia de Seguridad/Restauración**: Guarda y restaura fácilmente tus configuraciones y datos.
*   **Información del Desarrollador**: Accede a detalles y recursos del desarrollador.
*   **Guías**: Documentación completa para ayudarte a empezar y aprovechar al máximo la aplicación.

## Pila Tecnológica

*   **Nombre del Proyecto**: KanutsananFX
*   **Framework**: React Native + Expo + TypeScript
*   **Navegación**: Expo Router
*   **Gestión de Estado**: React Context API
*   **Almacenamiento**: AsyncStorage
*   **Plataformas**: iOS y Android
*   **Soporte de Idiomas**: 42 idiomas
*   **Idioma de Reserva Predeterminado**: Tailandés

## Instalación

Para configurar el entorno de desarrollo y las dependencias del proyecto, sigue estos pasos:

```bash
npm install
# o
pnpm install
```

## Ejecutando la Aplicación

Para iniciar la aplicación en modo de desarrollo, puedes usar los siguientes comandos:

```bash
npx expo start
```

Para ejecutar la aplicación directamente en un emulador o dispositivo Android/iOS:

```bash
npm run android
# o
npm run ios
```

## Construyendo para Android e iOS

Aquí están los comandos para construir la aplicación para diferentes entornos y plataformas:

### Android

*   **APK de vista previa de Android**: Genera un archivo APK para pruebas rápidas.

    ```bash
npm run build:android:apk
    ```

*   **AAB de producción de Android**: Crea un Android App Bundle para su publicación en tiendas.

    ```bash
npm run build:android:production
    ```

### iOS

*   **Construcción de vista previa de iOS**: Genera una construcción para pruebas en dispositivos iOS.

    ```bash
npm run build:ios
    ```

*   **Construcción para simulador de iOS**: Compila la aplicación para ejecutarla en el simulador de iOS.

    ```bash
npm run build:ios:simulator
    ```

*   **Construcción de producción de iOS**: Prepara la aplicación para su distribución en la App Store.

    ```bash
npm run build:ios:production
    ```

## Cómo Usar

La aplicación KanutsananFX te permite interactuar con un agente de IA para gestionar tus operaciones de Forex. Utiliza el chat para comunicarte con el agente, solicitar análisis de mercado y ejecutar comandos de trading. Puedes personalizar las habilidades del agente y gestionar tus preferencias de idioma en la sección de Configuración.

## Soporte Multilingüe

KanutsananFX está diseñado para ser accesible a una audiencia global, ofreciendo soporte para **42 idiomas**. La aplicación detecta automáticamente el idioma de tu dispositivo y, si lo deseas, puedes seleccionar manualmente tu idioma preferido en la sección de Configuración. El idioma de reserva predeterminado es el tailandés.

## Referencias

Esta aplicación se basa en la habilidad de trading original:

*   [Forex Auto Trading MetaAPI Skill for OpenClaw by Kanutsanan Pongpanna](https://github.com/kanutsanan1988/Forex-Auto-Trading-MetaAPI-Skill-for-OpenClaw-by-Kanutsanan-Pongpanna)

## Licencia

[Información de la licencia, por ejemplo, MIT License]

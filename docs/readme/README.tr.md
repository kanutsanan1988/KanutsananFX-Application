# KanutsananFX - Forex Ticaret Yapay Zeka Ajan Uygulaması

## Genel Bakış

KanutsananFX, hem **iOS** hem de **Android** platformlarında Expo / React Native aracılığıyla sorunsuz bir deneyim sunan gelişmiş bir Forex Ticaret Yapay Zeka Ajanı uygulamasıdır. Bu uygulama, kullanıcıların yapay zeka destekli ticaret stratejilerini kolayca yönetmelerini ve yürütmelerini sağlamak için tasarlanmıştır.

## Temel Özellikler

*   **Yapay Zeka Sohbet Ajanı**: Ticaret stratejileri ve piyasa analizi için akıllı bir sohbet arayüzü.
*   **4 Ticaret Komutu**: Hızlı ve etkili ticaret işlemleri için optimize edilmiş dört temel komut.
*   **MetaAPI Entegrasyonu**: Güvenilir ve gerçek zamanlı piyasa verileri için MetaAPI ile sorunsuz bağlantı.
*   **Çoklu LLM Desteği**: Çeşitli Büyük Dil Modelleri (LLM) ile uyumluluk, esneklik ve gelişmiş yetenekler sunar.
*   **Ticaret Becerisi Özelleştirme**: Ticaret stratejilerinizi kişisel tercihlerinize göre uyarlayın.
*   **Çok Dilli Kullanıcı Arayüzü**: Cihaz dilini otomatik algılama ve Ayarlar'dan manuel dil seçimi ile **42 dili** destekler.
*   **Yedekleme ve Geri Yükleme**: Verilerinizin güvenliğini sağlamak için kolay yedekleme ve geri yükleme seçenekleri.
*   **Geliştirici Bilgileri ve Kılavuzlar**: Geliştiriciler ve ileri düzey kullanıcılar için kapsamlı kaynaklar.

## Teknoloji Yığını

*   **Proje Adı**: KanutsananFX
*   **Çerçeve**: React Native + Expo + TypeScript
*   **Navigasyon**: Expo Router
*   **Durum Yönetimi**: React Context API
*   **Depolama**: AsyncStorage
*   **Platformlar**: iOS ve Android
*   **Dil Desteği**: 42 dil (Varsayılan yedek dil: Tayca)

## Kurulum

Projeyi yerel makinenize kurmak için aşağıdaki adımları izleyin:

```bash
npm install
# veya
pnpm install
```

## Uygulamayı Çalıştırma

Uygulamayı geliştirme modunda başlatmak için:

```bash
npx expo start
```

Uygulamayı Android emülatöründe veya cihazında çalıştırmak için:

```bash
npm run android
```

Uygulamayı iOS simülatöründe veya cihazında çalıştırmak için:

```bash
npm run ios
```

## Android ve iOS için Derleme

### Android

**Önizleme APK'sı Derleme:**

```bash
npm run build:android:apk
```

**Üretim AAB Derleme:**

```bash
npm run build:android:production
```

### iOS

**Önizleme Derlemesi:**

```bash
npm run build:ios
```

**Simülatör Derlemesi:**

```bash
npm run build:ios:simulator
```

**Üretim Derlemesi:**

```bash
npm run build:ios:production
```

## Nasıl Kullanılır

Uygulamayı başlattıktan sonra, AI sohbet arayüzü aracılığıyla ticaret komutlarını kullanabilir veya ayarlar menüsünden ticaret becerilerinizi özelleştirebilirsiniz. Dil ayarlarını değiştirmek için Ayarlar bölümünü ziyaret edin.

## Çok Dilli Destek

KanutsananFX, kullanıcı deneyimini küresel olarak geliştirmek için **42 dili** desteklemektedir. Uygulama, cihazınızın dilini otomatik olarak algılar ve buna göre arayüzü ayarlar. İsterseniz, Ayarlar menüsünden tercih ettiğiniz dili manuel olarak da seçebilirsiniz. Varsayılan yedek dil Tayca'dır.

## Referanslar

Bu projenin temelini oluşturan orijinal ticaret becerisi deposu:

*   [Forex-Auto-Trading-MetaAPI-Skill-for-OpenClaw-by-Kanutsanan-Pongpanna](https://github.com/kanutsanan1988/Forex-Auto-Trading-MetaAPI-Skill-for-OpenClaw-by-Kanutsanan-Pongpanna)

## Lisans

Bu projenin lisans bilgileri yakında burada belirtilecektir.

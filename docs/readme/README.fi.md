# KanutsananFX - Forex Trading AI Agent Application

## Yleiskatsaus

KanutsananFX on edistyksellinen Forex-kaupankäynnin tekoälyagenttisovellus, joka on kehitetty **Expo / React Native** -alustalla ja tukee saumattomasti sekä **iOS- että Android-laitteita**. Sovellus hyödyntää tekoälyä tarjotakseen käyttäjille tehokkaita kaupankäyntityökaluja ja -strategioita.

## Tärkeimmät ominaisuudet

*   **Tekoäly Chat -agentti**: Älykäs chat-pohjainen agentti kaupankäyntikyselyihin ja -analyyseihin.
*   **4 kaupankäyntikomentoa**: Tukee neljää keskeistä kaupankäyntikomentoa MetaAPI-integraation kautta.
*   **MetaAPI-integraatio**: Saumaton yhteys MetaAPI:iin reaaliaikaista kaupankäyntiä varten.
*   **Monen LLM:n tuki**: Yhteensopiva useiden suurten kielimallien (LLM) kanssa joustavuuden takaamiseksi.
*   **Kaupankäyntitaitojen mukauttaminen**: Mahdollisuus mukauttaa tekoälyagentin kaupankäyntitaitoja.
*   **Monikielinen käyttöliittymä**: Tukee 42 kieltä, automaattisella laitteen kielen tunnistuksella ja manuaalisella valinnalla asetuksista.
*   **Varmuuskopiointi ja palautus**: Helppo varmuuskopiointi ja tietojen palautus.
*   **Kehittäjän tiedot ja oppaat**: Kattavat tiedot kehittäjille ja käyttöoppaat.

## Teknologiapino

*   **Projektin nimi**: KanutsananFX
*   **Kehys**: React Native + Expo + TypeScript
*   **Navigointi**: Expo Router
*   **Tila**: React Context API
*   **Tallennustila**: AsyncStorage
*   **Alustat**: iOS ja Android
*   **Kielituki**: 42 kieltä
*   **Oletusvarakieli**: Thai

## Asennus

Seuraa näitä ohjeita asentaaksesi ja käynnistääksesi KanutsananFX-sovelluksen paikallisesti kehitysympäristössäsi.

### Esivaatimukset

*   Node.js ja npm/pnpm asennettuna
*   Expo CLI asennettuna (`npm install -g expo-cli`)

### Asennusvaiheet

```bash
git clone https://github.com/kanutsanan1988/KanutsananFX.git
cd KanutsananFX
npm install # tai pnpm install
```

## Sovelluksen käynnistäminen

Käynnistä kehityspalvelin:

```bash
npx expo start
```

Tämän jälkeen voit avata sovelluksen Expo Go -sovelluksella mobiililaitteellasi tai käyttää emulaattoria/simulaattoria.

## Rakentaminen Androidille ja iOS:lle

### Android

#### Esikatselu APK

```bash
npm run build:android:apk
```

Tämä komento luo APK-tiedoston, jonka voit asentaa Android-laitteisiin testausta varten.

#### Tuotanto AAB

```bash
npm run build:android:production
```

Tämä komento luo Android App Bundle (AAB) -tiedoston, joka on tarkoitettu julkaistavaksi Google Play Kaupassa.

### iOS

#### Esikatseluversio

```bash
npm run build:ios
```

Tämä komento luo kehitysrakenteen iOS-laitteille.

#### Simulaattoriversio

```bash
npm run build:ios:simulator
```

Tämä komento luo version, joka on tarkoitettu käytettäväksi iOS-simulaattorissa Xcode:ssa.

#### Tuotantoversio

```bash
npm run build:ios:production
```

Tämä komento luo tuotantoversion, joka on tarkoitettu julkaistavaksi Apple App Storessa.

## Käyttöohjeet

1.  **Käynnistä sovellus**: Avaa KanutsananFX-sovellus mobiililaitteellasi tai emulaattorilla.
2.  **Kielivalinta**: Sovellus tunnistaa laitteen kielen automaattisesti. Voit vaihtaa kieltä manuaalisesti asetuksista (tukee 42 kieltä).
3.  **Tekoäly Chat**: Käytä tekoäly chat -agenttia kysyäksesi kaupankäyntiin liittyviä kysymyksiä tai saadaksesi analyysejä.
4.  **Kaupankäyntikomennot**: Hyödynnä neljää kaupankäyntikomentoa MetaAPI-integraation kautta.
5.  **Mukauttaminen**: Mukauta kaupankäyntitaitoja tarpeidesi mukaan.

## Monikielinen tuki

KanutsananFX tukee 42 eri kieltä, mikä tekee siitä globaalisti saavutettavan. Sovellus tunnistaa automaattisesti laitteen oletuskielen ja käyttää sitä käyttöliittymässä. Käyttäjät voivat myös valita haluamansa kielen manuaalisesti sovelluksen asetuksista. Oletusvarakieli on thai.

## Viitteet

*   **Alkuperäinen kaupankäyntitaitojen repository**: [Forex-Auto-Trading-MetaAPI-Skill-for-OpenClaw-by-Kanutsanan-Pongpanna](https://github.com/kanutsanan1988/Forex-Auto-Trading-MetaAPI-Skill-for-OpenClaw-by-Kanutsanan-Pongpanna)

## Lisenssi

Tämä projekti on lisensoitu MIT-lisenssillä - katso [LICENSE.md](LICENSE.md) tiedosto lisätietoja varten.

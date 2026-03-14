# KanutsananFX - Forex kereskedési AI ügynök alkalmazás

## Áttekintés

A KanutsananFX egy hatékony Forex kereskedési AI ügynök alkalmazás, amely a **React Native** és **Expo** technológiával készült, és zökkenőmentesen támogatja mind az **iOS, mind az Android** platformokat. Ez az alkalmazás célja, hogy a kereskedőket intelligens automatizálással és átfogó eszközökkel ruházza fel a Forex piac számára. Mostantól **42 nyelv** támogatásával büszkélkedhet, automatikus eszköznyelv-érzékelést és rugalmasságot biztosít a felhasználók számára, hogy manuálisan kiválasszák a kívánt nyelvet az alkalmazás beállításai között. Az alapértelmezett tartalék nyelv a thai.

## Főbb jellemzők

- **AI Chat Agent**: Lépjen kapcsolatba egy intelligens AI-ügynökkel, hogy betekintést és segítséget kapjon.
- **4 kereskedési parancs**: Alapvető kereskedési műveletek végrehajtása dedikált parancsokkal.
- **MetaAPI-integráció**: Zökkenőmentesen csatlakozhat a MetaAPI-hoz a valós idejű piaci adatokhoz és a kereskedés végrehajtásához.
- **Multi-LLM támogatás**: Használjon különféle nagy nyelvű modelleket a továbbfejlesztett AI-képességek érdekében.
- **Kereskedési készségek testreszabása**: A kereskedési stratégiák személyre szabása és hozzáigazítása egyedi igényeihez.
- **Többnyelvű felhasználói felület**: Élvezze a 42 nyelven elérhető felhasználói felületet az igazán globális élmény érdekében.
- **Biztonsági mentés/visszaállítás funkció**: Biztonságos biztonsági mentés és visszaállítás az alkalmazás adatairól.
- **Fejlesztői információ**: Hozzáférés a fejlesztők és közreműködők részletes információihoz.
- **Átfogó útmutatók**: Lépésről lépésre szóló útmutatók, amelyek segítenek az első lépésekben és az alkalmazás elsajátításában.

## Tech Stack

- **Keretrendszer**: React Native + Expo + TypeScript
- **Navigáció**: Expo Router
- **State Management**: React Context API
- **Helyi tárhely**: AsyncStorage
- **Platformok**: iOS és Android

## Telepítés

A KanutsananFX használatának megkezdéséhez kövesse az alábbi telepítési lépéseket:

```bash
npm install
# vagy
pnpm install
```

## Az alkalmazás futtatása

A telepítés után az alkalmazást fejlesztői módban futtathatja:

```bash
npx expo start
```

Egy adott platformon való futtatáshoz:

```bash
npm run android
# vagy
npm run ios
```

## Építés Androidra és iOS-re

Íme a parancsok az alkalmazás létrehozásához különféle Android és iOS forgatókönyvekhez:

### Android

- **Preview APK**: A fejlesztői verzió teszteléséhez és megosztásához.

```bash
npm run build:android:apk
```

- **Production AAB**: A Google Play Áruházban való közzétételhez.

```bash
npm run build:android:production
```

### iOS

- **Preview Build**: Fizikai iOS-eszközökön történő teszteléshez.

```bash
npm run build:ios
```

- **Simulator Build**: iOS szimulátoron való teszteléshez.

```bash
npm run build:ios:simulator
```

- **Production Build**: Az Apple App Store-ban való közzétételhez.

```bash
npm run build:ios:production
```

## Hogyan kell használni

A KanutsananFX intuitív felületet biztosít Forex kereskedési tevékenységeinek kezeléséhez. Az alkalmazás elindításakor a következőket teheti:

1. **Kapcsolatfelvétel az AI Chat Agenttel**: Tegyen fel kérdéseket, kérjen piacelemzést, és fogadjon kereskedési javaslatokat.
2. **Kereskedési parancsok végrehajtása**: Használja a beépített parancsokat a kereskedések megnyitásához, zárásához vagy módosításához.
3. **A kereskedési készségek testreszabása**: Állítsa be a paramétereket és stratégiákat kereskedési teljesítményének optimalizálása érdekében.
4. **Beállítások kezelése**: A nyelvi beállítások módosítása, az adatok biztonsági mentése és egyéb alkalmazásbeállítások konfigurálása.

## Többnyelvű támogatás

A KanutsananFX a globális közönség számára készült, és **42 nyelven** támogat. Az alkalmazás automatikusan felismeri az eszköz nyelvét, és beállítja alapértelmezettként. Az alkalmazáson belüli beállításokon keresztül könnyedén válthat bármely más támogatott nyelvre. Az alapértelmezett tartalék nyelv a thai.

## Referenciák

- **Eredeti kereskedési készségek tárháza**: [Forex-Auto-Trading-MetaAPI-Skill-for-OpenClaw-by-Kanutsanan-Pongpanna](https://github.com/kanutsanan1988/Forex-Auto-Trading-MetaAPI-Skill-for-OpenClaw-by-Kanutsanan-Pongpanna)

## Licenc

Ez a projekt az MIT Licenc alatt jelent meg. További részletekért lásd a `LICENSE` fájlt.

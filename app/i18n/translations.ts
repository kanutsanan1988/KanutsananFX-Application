import { TranslationKey } from './keys';

// Import all 42 language files
import th from './locales/th';
import en from './locales/en';
import zh from './locales/zh';
import zhTW from './locales/zhTW';
import ja from './locales/ja';
import ko from './locales/ko';
import vi from './locales/vi';
import id from './locales/id';
import ms from './locales/ms';
import fil from './locales/fil';
import hi from './locales/hi';
import bn from './locales/bn';
import ta from './locales/ta';
import te from './locales/te';
import kn from './locales/kn';
import ml from './locales/ml';
import mr from './locales/mr';
import gu from './locales/gu';
import pa from './locales/pa';
import ur from './locales/ur';
import ar from './locales/ar';
import he from './locales/he';
import fa from './locales/fa';
import tr from './locales/tr';
import ru from './locales/ru';
import uk from './locales/uk';
import pl from './locales/pl';
import cs from './locales/cs';
import ro from './locales/ro';
import hu from './locales/hu';
import de from './locales/de';
import fr from './locales/fr';
import es from './locales/es';
import pt from './locales/pt';
import it from './locales/it';
import nl from './locales/nl';
import sv from './locales/sv';
import no from './locales/no';
import da from './locales/da';
import fi from './locales/fi';
import si from './locales/si';
import ne from './locales/ne';

export type { TranslationKey };

// All supported languages with metadata
export interface LanguageInfo {
  code: string;
  nativeName: string;
  englishName: string;
  region: string;
}

export const SUPPORTED_LANGUAGES: LanguageInfo[] = [
  // Thai (default)
  { code: 'th', nativeName: 'ไทย', englishName: 'Thai', region: 'Southeast Asia' },
  // East Asia
  { code: 'en', nativeName: 'English', englishName: 'English', region: 'Global' },
  { code: 'zh', nativeName: '简体中文', englishName: 'Chinese (Simplified)', region: 'East Asia' },
  { code: 'zh-TW', nativeName: '繁體中文', englishName: 'Chinese (Traditional)', region: 'East Asia' },
  { code: 'ja', nativeName: '日本語', englishName: 'Japanese', region: 'East Asia' },
  { code: 'ko', nativeName: '한국어', englishName: 'Korean', region: 'East Asia' },
  // Southeast Asia
  { code: 'vi', nativeName: 'Tiếng Việt', englishName: 'Vietnamese', region: 'Southeast Asia' },
  { code: 'id', nativeName: 'Bahasa Indonesia', englishName: 'Indonesian', region: 'Southeast Asia' },
  { code: 'ms', nativeName: 'Bahasa Melayu', englishName: 'Malay', region: 'Southeast Asia' },
  { code: 'fil', nativeName: 'Filipino', englishName: 'Filipino', region: 'Southeast Asia' },
  // South Asia
  { code: 'hi', nativeName: 'हिन्दी', englishName: 'Hindi', region: 'South Asia' },
  { code: 'bn', nativeName: 'বাংলা', englishName: 'Bengali', region: 'South Asia' },
  { code: 'ta', nativeName: 'தமிழ்', englishName: 'Tamil', region: 'South Asia' },
  { code: 'te', nativeName: 'తెలుగు', englishName: 'Telugu', region: 'South Asia' },
  { code: 'kn', nativeName: 'ಕನ್ನಡ', englishName: 'Kannada', region: 'South Asia' },
  { code: 'ml', nativeName: 'മലയാളം', englishName: 'Malayalam', region: 'South Asia' },
  { code: 'mr', nativeName: 'मराठी', englishName: 'Marathi', region: 'South Asia' },
  { code: 'gu', nativeName: 'ગુજરાતી', englishName: 'Gujarati', region: 'South Asia' },
  { code: 'pa', nativeName: 'ਪੰਜਾਬੀ', englishName: 'Punjabi', region: 'South Asia' },
  { code: 'ur', nativeName: 'اردو', englishName: 'Urdu', region: 'South Asia' },
  { code: 'si', nativeName: 'සිංහල', englishName: 'Sinhala', region: 'South Asia' },
  { code: 'ne', nativeName: 'नेपाली', englishName: 'Nepali', region: 'South Asia' },
  // Middle East
  { code: 'ar', nativeName: 'العربية', englishName: 'Arabic', region: 'Middle East' },
  { code: 'he', nativeName: 'עברית', englishName: 'Hebrew', region: 'Middle East' },
  { code: 'fa', nativeName: 'فارسی', englishName: 'Persian/Farsi', region: 'Middle East' },
  { code: 'tr', nativeName: 'Türkçe', englishName: 'Turkish', region: 'Middle East' },
  // Eastern Europe
  { code: 'ru', nativeName: 'Русский', englishName: 'Russian', region: 'Eastern Europe' },
  { code: 'uk', nativeName: 'Українська', englishName: 'Ukrainian', region: 'Eastern Europe' },
  { code: 'pl', nativeName: 'Polski', englishName: 'Polish', region: 'Eastern Europe' },
  { code: 'cs', nativeName: 'Čeština', englishName: 'Czech', region: 'Eastern Europe' },
  { code: 'ro', nativeName: 'Română', englishName: 'Romanian', region: 'Eastern Europe' },
  { code: 'hu', nativeName: 'Magyar', englishName: 'Hungarian', region: 'Eastern Europe' },
  // Western Europe
  { code: 'de', nativeName: 'Deutsch', englishName: 'German', region: 'Western Europe' },
  { code: 'fr', nativeName: 'Français', englishName: 'French', region: 'Western Europe' },
  { code: 'es', nativeName: 'Español', englishName: 'Spanish', region: 'Western Europe' },
  { code: 'pt', nativeName: 'Português', englishName: 'Portuguese', region: 'Western Europe' },
  { code: 'it', nativeName: 'Italiano', englishName: 'Italian', region: 'Western Europe' },
  { code: 'nl', nativeName: 'Nederlands', englishName: 'Dutch', region: 'Western Europe' },
  // Nordic
  { code: 'sv', nativeName: 'Svenska', englishName: 'Swedish', region: 'Nordic' },
  { code: 'no', nativeName: 'Norsk', englishName: 'Norwegian', region: 'Nordic' },
  { code: 'da', nativeName: 'Dansk', englishName: 'Danish', region: 'Nordic' },
  { code: 'fi', nativeName: 'Suomi', englishName: 'Finnish', region: 'Nordic' },
];

// Translation map
export const translations: Record<string, Record<TranslationKey, string>> = {
  th, en, zh,
  'zh-TW': zhTW,
  ja, ko, vi, id, ms, fil,
  hi, bn, ta, te, kn, ml, mr, gu, pa, ur,
  ar, he, fa, tr,
  ru, uk, pl, cs, ro, hu,
  de, fr, es, pt, it, nl,
  sv, no, da, fi,
  si, ne,
};

// Resolve device locale to supported language code
export const resolveLocale = (deviceLocale: string): string => {
  // Exact match first (e.g., "zh-TW")
  if (translations[deviceLocale]) return deviceLocale;

  // Try base language (e.g., "zh-TW" -> "zh")
  const base = deviceLocale.split('-')[0].toLowerCase();
  if (translations[base]) return base;

  // Special mappings
  const specialMap: Record<string, string> = {
    'zh-hant': 'zh-TW',
    'zh-hk': 'zh-TW',
    'zh-mo': 'zh-TW',
    'tl': 'fil',
    'nb': 'no',
    'nn': 'no',
    'pt-br': 'pt',
  };

  const lower = deviceLocale.toLowerCase();
  if (specialMap[lower]) return specialMap[lower];

  // Fallback to Thai
  return 'th';
};

// Get translation for a locale
export const getTranslation = (locale: string): Record<TranslationKey, string> => {
  const resolvedLocale = resolveLocale(locale);
  return translations[resolvedLocale] || translations['th'];
};

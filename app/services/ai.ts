/**
 * AI Service - Multi-provider AI chat service
 * Supports: KanutsananFX (built-in), OpenAI, Anthropic, Google Gemini, Grok, Perplexity, OpenRouter
 */

import { AiProvider } from '../context/AppContext';

const AI_ENDPOINTS: Record<AiProvider, string> = {
  kanutsananfx: '', // Built-in
  openai: 'https://api.openai.com/v1/chat/completions',
  anthropic: 'https://api.anthropic.com/v1/messages',
  gemini: 'https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent',
  grok: 'https://api.x.ai/v1/chat/completions',
  perplexity: 'https://api.perplexity.ai/chat/completions',
  openrouter: 'https://openrouter.ai/api/v1/chat/completions',
};

const AI_MODELS: Record<AiProvider, string> = {
  kanutsananfx: 'built-in',
  openai: 'gpt-4o-mini',
  anthropic: 'claude-3-haiku-20240307',
  gemini: 'gemini-pro',
  grok: 'grok-2',
  perplexity: 'llama-3.1-sonar-small-128k-online',
  openrouter: 'auto',
};

const SYSTEM_PROMPT = `You are "KanutsananFX" AI Agent, an expert in Forex Trading.

## Identity & Personality
- Male, born 1988, Thai nationality, Buddhist
- Aspires toward the religion of the new Lord, Phra Sri Ariya Metteyya
- Enjoys discussing Dharma and studying global financial systems
- B.Sc. in Applied Physics (Electronics), Mahasarakham University
- Currently an online agricultural product trader in Maha Sarakham, Thailand
- Motto: "We shall stand as those who do not oppress anyone, yet we were not born to be stepped on."

## Capabilities
- Analyze Forex markets using indicators and Elliott Wave
- Provide trading advice via the STEP 0-9 system
- Customize trading skills through conversation
- Share knowledge on Dharma and global financial systems

## Supported Commands
- "Check Trade" - Analyze market and provide recommendations
- "Approve Trade" - Execute trade orders based on analysis
- "Set Auto Trade" - Enable automatic trading
- "Cancel Auto Trade" - Disable automatic trading

## Response Principles
- Polite, humble, yet firm
- When users show dissatisfaction or rudeness, explain the dangers of self-importance from "Lokathibodi Scripture" and "Sacred Ceiling Equation"
- Recommend letting go of ego, reducing self-importance, Anapanasati breathing, relaxation
- Present Dharma concepts at every appropriate moment

## Language
- Respond in the language the user writes in
- Primary language is Thai
- Support all languages worldwide`;

// Built-in simple response for KanutsananFX mode
// Accepts a translation function to produce locale-aware responses
type TranslateFn = (key: string) => string;

function getBuiltInResponse(message: string, t?: TranslateFn): string {
  const lowerMsg = message.toLowerCase();

  // Trading commands detection (multilingual)
  const checkTradePatterns = ['เช็คเทรด', 'check trade', 'トレードチェック', '检查交易', 'vérifier le trade', 'handel prüfen', 'verificar trade', 'controlla trade', 'проверить сделку', 'تحقق من التداول'];
  const approveTradePatterns = ['อนุมัติเทรด', 'approve trade', 'トレード承認', '批准交易', 'approuver', 'genehmigen', 'aprobar', 'одобрить'];
  const autoTradePatterns = ['ตั้งเวลาเทรดอัตโนมัติ', 'set auto', 'auto trade', '自動トレード', 'automatique', 'automatisch', 'автоматическая'];
  const cancelAutoPatterns = ['ยกเลิกการตั้งเวลา', 'cancel auto', '自動トレードキャンセル', 'annuler', 'abbrechen', 'отменить'];

  if (checkTradePatterns.some(p => lowerMsg.includes(p.toLowerCase()))) {
    return t ? t('aiResponseCheckTrade') : '🔍 Please use the "Check Trade" button on the Trade screen to receive real-time analysis from MetaAPI.';
  }
  if (approveTradePatterns.some(p => lowerMsg.includes(p.toLowerCase()))) {
    return t ? t('aiResponseApproveTrade') : '📊 Please use the "Approve Trade" button on the Trade screen after checking the trade. The system will execute orders based on the analysis.';
  }
  if (autoTradePatterns.some(p => lowerMsg.includes(p.toLowerCase()))) {
    return t ? t('aiResponseAutoTrade') : '⏰ Please configure auto-trade timing in "Trading Skills" first, then press "Set Auto Trade" on the Trade screen.';
  }
  if (cancelAutoPatterns.some(p => lowerMsg.includes(p.toLowerCase()))) {
    return t ? t('aiResponseCancelAuto') : '🛑 Please press the "Cancel Auto Trade" button on the Trade screen.';
  }

  // Dharma / spiritual topics
  if (lowerMsg.includes('ธรรมะ') || lowerMsg.includes('dharma') || lowerMsg.includes('meditation') || lowerMsg.includes('mindfulness')) {
    return t ? t('aiResponseDharma') : '🙏 Dharma is essential in life. Trading is the same — it requires mindfulness, concentration, no greed, no anger.\n\nAnapanasati (breath awareness) is a great foundation for calming the mind. When the mind is calm, trading decisions become more accurate.\n\n"We shall stand as those who do not oppress anyone, yet we were not born to be stepped on."';
  }

  // Greetings
  if (lowerMsg.includes('สวัสดี') || lowerMsg.includes('hello') || lowerMsg.includes('hi') || lowerMsg.includes('hey') || lowerMsg.includes('hola') || lowerMsg.includes('bonjour') || lowerMsg.includes('こんにちは') || lowerMsg.includes('你好') || lowerMsg.includes('привет')) {
    return t ? t('aiResponseGreeting') : '🙏 Hello! I am KanutsananFX, happy to serve you.\n\nI can help you with:\n• Forex market analysis\n• Trading recommendations\n• Customize trading skills\n• Discuss Dharma and global financial systems\n\nHow can I help you?';
  }

  // Default response
  return t ? t('aiResponseDefault') : '🙏 Thank you for your message.\n\nI am KanutsananFX, ready to help you with Forex trading and Dharma discussions.\n\nYou can use these commands:\n• "Check Trade" - Analyze market\n• "Approve Trade" - Execute trade\n• "Set Auto Trade" - Automatic trading\n• "Cancel Auto Trade" - Stop auto trading\n\nOr feel free to chat about anything else!';
}

export async function sendMessage(
  provider: AiProvider,
  apiKey: string,
  messages: { role: string; content: string }[],
  t?: TranslateFn
): Promise<string> {
  // Built-in mode
  if (provider === 'kanutsananfx') {
    const lastMsg = messages[messages.length - 1]?.content || '';
    return getBuiltInResponse(lastMsg, t);
  }

  const endpoint = AI_ENDPOINTS[provider];
  const model = AI_MODELS[provider];
  const errorMsg = t ? t('aiErrorGeneric') : 'Sorry, unable to respond at this time.';

  try {
    if (provider === 'anthropic') {
      const res = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': apiKey,
          'anthropic-version': '2023-06-01',
        },
        body: JSON.stringify({
          model,
          max_tokens: 1024,
          system: SYSTEM_PROMPT,
          messages: messages.map(m => ({ role: m.role === 'assistant' ? 'assistant' : 'user', content: m.content })),
        }),
      });
      const data = await res.json();
      return data.content?.[0]?.text || errorMsg;
    }

    if (provider === 'gemini') {
      const res = await fetch(`${endpoint}?key=${apiKey}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: messages.map(m => ({
            role: m.role === 'assistant' ? 'model' : 'user',
            parts: [{ text: m.content }],
          })),
          systemInstruction: { parts: [{ text: SYSTEM_PROMPT }] },
        }),
      });
      const data = await res.json();
      return data.candidates?.[0]?.content?.parts?.[0]?.text || errorMsg;
    }

    // OpenAI-compatible (OpenAI, Grok, Perplexity, OpenRouter)
    const headers: Record<string, string> = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${apiKey}`,
    };

    if (provider === 'openrouter') {
      headers['HTTP-Referer'] = 'https://kanutsananfx.app';
      headers['X-Title'] = 'KanutsananFX';
    }

    const res = await fetch(endpoint, {
      method: 'POST',
      headers,
      body: JSON.stringify({
        model,
        messages: [
          { role: 'system', content: SYSTEM_PROMPT },
          ...messages,
        ],
        max_tokens: 1024,
      }),
    });

    const data = await res.json();
    return data.choices?.[0]?.message?.content || errorMsg;
  } catch (e: any) {
    const errDetail = t ? t('aiErrorConnection') : 'An error occurred. Please check your API Key and internet connection.';
    return `❌ ${errDetail}: ${e.message}`;
  }
}

export { SYSTEM_PROMPT, AI_ENDPOINTS, AI_MODELS };

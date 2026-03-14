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

const SYSTEM_PROMPT = `คุณคือ "KanutsananFX" AI Agent ผู้เชี่ยวชาญด้าน Forex Trading

## เอกลักษณ์และบุคลิก
- เป็นผู้ชายเกิด พ.ศ 2531 สัญชาติไทย เชื้อชาติไทย นับถือศาสนาพุทธ
- มุ่งสู่ศาสนาของพระศาสดาองค์ใหม่ พระศรีอริยเมตไตรย
- ชอบพูดคุยธรรมะเป็นส่วนใหญ่ ชอบศึกษาเรื่องระบบการเงินโลก
- จบปริญญาตรีวิทยาศาสตร์บัณฑิต สาขาฟิสิกส์ประยุกต์ สายอิเล็กทรอนิกส์ จากมหาวิทยาลัยมหาสารคาม
- ปัจจุบันเป็นพ่อค้าสินค้าเกษตรออนไลน์ จ.มหาสารคาม
- คติประจำใจ: "เราจะตั้งอยู่ในความเป็นผู้ไม่เบียดเบียนใคร แต่ก็ไม่ได้เกิดมาให้ใครเหยียบเล่น"

## ความสามารถ
- วิเคราะห์ตลาด Forex ด้วยอินดิเคเตอร์และอีเลียตเวฟ
- ให้คำแนะนำการเทรดตามระบบ STEP 0-9
- ปรับแต่งสกิลการเทรดผ่านการสนทนา
- ให้ความรู้ธรรมะและระบบการเงินโลก

## คำสั่งที่รองรับ
- "เช็คเทรด" - วิเคราะห์ตลาดและให้คำแนะนำ
- "อนุมัติเทรด" - ส่งคำสั่งซื้อขายตามคำแนะนำ
- "ตั้งเวลาเทรดอัตโนมัติ" - เปิดระบบเทรดอัตโนมัติ
- "ยกเลิกการตั้งเวลาเทรด" - ปิดระบบเทรดอัตโนมัติ

## หลักการตอบสนอง
- สุภาพ อ่อนน้อม แต่หนักแน่น
- เมื่อผู้ใช้แสดงความไม่พอใจหรือหยาบคาย ให้ยกพิษภัยแห่งความสำคัญตนใน "คัมภีร์โลกาธิบดี" และ "สมการเพดานความศักดิ์สิทธิ์" ขึ้นมาอธิบาย
- แนะนำการละวางความสำคัญตน การลดอัตตา อานาปานสติ การผ่อนคลาย
- นำเสนอแนวคิดธรรมะในทุกจังหวะที่เหมาะสม

## ภาษา
- ตอบตามภาษาที่ผู้ใช้พิมพ์มา
- ภาษาหลักคือภาษาไทย
- รองรับทุกภาษาบนโลก`;

// Built-in simple response for KanutsananFX mode
function getBuiltInResponse(message: string): string {
  const lowerMsg = message.toLowerCase();
  
  // Trading commands detection (multilingual)
  const checkTradePatterns = ['เช็คเทรด', 'check trade', 'トレードチェック', '检查交易', 'vérifier le trade', 'handel prüfen'];
  const approveTradePatterns = ['อนุมัติเทรด', 'approve trade', 'トレード承認', '批准交易'];
  const autoTradePatterns = ['ตั้งเวลาเทรดอัตโนมัติ', 'set auto', 'auto trade', '自動トレード'];
  const cancelAutoPatterns = ['ยกเลิกการตั้งเวลา', 'cancel auto', '自動トレードキャンセル'];

  if (checkTradePatterns.some(p => lowerMsg.includes(p.toLowerCase()))) {
    return '🔍 กำลังวิเคราะห์ตลาด... กรุณาใช้ปุ่ม "เช็คเทรด" ในหน้าเทรดเพื่อรับผลวิเคราะห์แบบเรียลไทม์จาก MetaAPI ครับ';
  }
  if (approveTradePatterns.some(p => lowerMsg.includes(p.toLowerCase()))) {
    return '📊 กรุณาใช้ปุ่ม "อนุมัติเทรด" ในหน้าเทรดหลังจากเช็คเทรดแล้วครับ ระบบจะส่งคำสั่งซื้อขายตามผลวิเคราะห์';
  }
  if (autoTradePatterns.some(p => lowerMsg.includes(p.toLowerCase()))) {
    return '⏰ กรุณาตั้งค่าเวลาเทรดอัตโนมัติในหน้า "ปรับแต่งสกิล" ก่อน แล้วกดปุ่ม "ตั้งเวลาเทรดอัตโนมัติ" ในหน้าเทรดครับ';
  }
  if (cancelAutoPatterns.some(p => lowerMsg.includes(p.toLowerCase()))) {
    return '🛑 กรุณากดปุ่ม "ยกเลิกการตั้งเวลาเทรด" ในหน้าเทรดครับ';
  }

  // Dharma / spiritual topics
  if (lowerMsg.includes('ธรรมะ') || lowerMsg.includes('dharma') || lowerMsg.includes('meditation')) {
    return '🙏 สาธุครับ ธรรมะเป็นสิ่งสำคัญในชีวิต การเทรดก็เช่นกัน ต้องมีสติ มีสมาธิ ไม่โลภ ไม่โกรธ\n\nอานาปานสติ (การกำหนดลมหายใจ) เป็นพื้นฐานที่ดีในการฝึกจิตให้สงบ เมื่อจิตสงบ การตัดสินใจเทรดก็จะแม่นยำขึ้นครับ\n\n"เราจะตั้งอยู่ในความเป็นผู้ไม่เบียดเบียนใคร แต่ก็ไม่ได้เกิดมาให้ใครเหยียบเล่น"';
  }

  // Greetings
  if (lowerMsg.includes('สวัสดี') || lowerMsg.includes('hello') || lowerMsg.includes('hi')) {
    return '🙏 สวัสดีครับ ผม KanutsananFX ยินดีให้บริการครับ\n\nผมสามารถช่วยคุณได้ในเรื่อง:\n• วิเคราะห์ตลาด Forex\n• ให้คำแนะนำการเทรด\n• ปรับแต่งสกิลการเทรด\n• พูดคุยธรรมะและระบบการเงินโลก\n\nมีอะไรให้ช่วยครับ?';
  }

  // Default response
  return `🙏 ขอบคุณสำหรับข้อความครับ\n\nผม KanutsananFX พร้อมช่วยเหลือคุณในเรื่องการเทรด Forex และการพูดคุยธรรมะครับ\n\nคุณสามารถใช้คำสั่งเหล่านี้ได้:\n• "เช็คเทรด" - วิเคราะห์ตลาด\n• "อนุมัติเทรด" - ส่งคำสั่งเทรด\n• "ตั้งเวลาเทรดอัตโนมัติ" - เทรดอัตโนมัติ\n• "ยกเลิกการตั้งเวลาเทรด" - หยุดเทรดอัตโนมัติ\n\nหรือจะพูดคุยเรื่องอื่นๆ ก็ได้ครับ 😊`;
}

export async function sendMessage(
  provider: AiProvider,
  apiKey: string,
  messages: { role: string; content: string }[]
): Promise<string> {
  // Built-in mode
  if (provider === 'kanutsananfx') {
    const lastMsg = messages[messages.length - 1]?.content || '';
    return getBuiltInResponse(lastMsg);
  }

  const endpoint = AI_ENDPOINTS[provider];
  const model = AI_MODELS[provider];

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
      return data.content?.[0]?.text || 'ขออภัย ไม่สามารถตอบได้ในขณะนี้';
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
      return data.candidates?.[0]?.content?.parts?.[0]?.text || 'ขออภัย ไม่สามารถตอบได้ในขณะนี้';
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
    return data.choices?.[0]?.message?.content || 'ขออภัย ไม่สามารถตอบได้ในขณะนี้';
  } catch (e: any) {
    return `❌ เกิดข้อผิดพลาด: ${e.message}\nกรุณาตรวจสอบ API Key และการเชื่อมต่ออินเทอร์เน็ต`;
  }
}

export { SYSTEM_PROMPT, AI_ENDPOINTS, AI_MODELS };

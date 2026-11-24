// Content for the ilvolAI product page.

import { links } from '../config';

export interface Field {
  label: string;
  value: string;
  pct: string;
  tier: 'hi' | 'med' | 'lo';
  review: boolean;
}

// Same thresholds as the app: 80+ solid, 50–79 check, under 50 ask again
// (confidenceClass in src/app/lib/format.ts); under 70 gets the amber review bar
// (needsReview in src/services/templates.js). Labels are the app's FIELDS labels.
const field = (label: string, value: string, c: number): Field => ({
  label,
  value,
  pct: `${c}%`,
  tier: c >= 80 ? 'hi' : c >= 50 ? 'med' : 'lo',
  review: c < 70,
});

// The main window lists filled fields in lane order (LANE_ORDER in the app's
// FieldCards.tsx): pickup, delivery, freight, then money. Empty ones fold away.
export const heroFields = [
  field('Pickup Location', 'Amarillo, TX', 98),
  field('Pickup Date/Time', 'Tue 6/24, 8:00 AM', 94),
  field('Delivery Location', 'Tulsa, OK', 96),
  field('Equipment Type', 'Reefer', 99),
  field('Weight', '43,000 lbs', 95),
  field('Rate', '$2.80/mi · $2,100', 89),
];

export const confFields = [
  field('Delivery Date/Time', 'Thu 6/26, 6:00 AM', 91),
  field('Delivery Window', 'FCFS 8am–5pm', 41),
  field('Commodity', 'Frozen chicken', 87),
  field('Additional Notes', 'Lumpers required, no touch', 64),
];

export const steps = [
  { n: '01', tag: 'Start capture', title: 'Pick up the broker call', body: 'Hit the orb before or during the call. Choose your mic, or system audio to hear the broker straight from your dialer.' },
  { n: '02', tag: 'Live extraction', title: 'Watch the load fill in', body: 'The transcript streams as they talk and the fields fill themselves: lanes, dates, windows, rate, weight, equipment, notes.' },
  { n: '03', tag: 'Copy for driver', title: 'Send it in one paste', body: 'Fix anything flagged, press Copy on the driver message, and paste a clean load message into Telegram, WhatsApp or SMS.' },
];

// Every field the app fills in and lets you edit: the 18 in FIELD_DEFS of the app
// (src/app/lib/constants.ts) and the extraction prompt, in the app's order.
export const fieldNames = [
  'driver location',
  'pickup location', 'pickup date/time', 'pickup type', 'pickup window',
  'stops',
  'delivery location', 'delivery date/time', 'delivery type', 'delivery window',
  'commodity', 'equipment type',
  'rate', 'miles', 'deadhead miles', 'weight',
  'trailer instructions', 'additional notes',
];
export const fieldCount = fieldNames.length;
/** The hero mock's fold: every field the call has not filled yet ("+ N more fields"). */
export const heroMoreCount = fieldCount - heroFields.length;

export const team = [
  { i: 'AK', bg: 'var(--accent-500)' },
  { i: 'DS', bg: 'var(--accent-300)' },
  { i: 'MT', bg: 'var(--accent-400)' },
  // The darkest swatch takes light text: accent-ink on accent-600 is only 3.2:1.
  { i: '+4', bg: 'var(--accent-600)', fg: 'var(--fg)' },
];

export const accents = [
  ['IlvolAI violet', '#995fff'],
  ['Ilvol green', '#10b981'],
  ['Teal', '#14b8a6'],
  ['Sky', '#0ea5e9'],
  ['Indigo', '#818cf8'],
  ['Rose', '#f43f5e'],
  ['Amber', '#f59e0b'],
  ['Graphite', '#94a3b8'],
] as const;

export interface Plan {
  name: string;
  tagline: string;
  price: string;
  per: string;
  features: string[];
  cta: string;
  popular?: boolean;
}

export const soloPlans: Plan[] = [
  { name: 'Free', tagline: 'Try IlvolAI', price: '0', per: 'UZS · forever', features: ['60 talk minutes / month', 'All 18 load fields', 'No card to start'], cta: 'Start free' },
  { name: 'Starter', tagline: 'Solo dispatcher basics', price: '49,000', per: 'UZS / month', features: ['250 talk minutes / month', 'No daily limit', 'Every feature included'], cta: 'Choose Starter' },
  { name: 'Pro', tagline: 'Full-time dispatcher', price: '99,000', per: 'UZS / month', features: ['500 talk minutes / month', 'No daily limit', 'Every feature included'], cta: 'Choose Pro', popular: true },
  { name: 'Pay as you go', tagline: 'Only pay for what you use', price: '250', per: 'UZS / minute', features: ['No monthly commitment', 'Packs from 30 minutes, or any amount', 'Minutes never expire'], cta: 'Top up' },
];

export const teamPlans: Plan[] = [
  { name: 'Team Pro', tagline: 'Dispatch teams of any size', price: '99,000', per: 'UZS / seat / month', features: ['500 talk minutes per seat, pooled', 'No daily limit', 'Unlimited team members', 'Admin console'], cta: 'Choose Team Pro', popular: true },
  { name: 'Team PAYG', tagline: 'Flexible team billing', price: '250', per: 'UZS / minute', features: ['No monthly commitment', 'One pooled balance', 'Unlimited team members'], cta: 'Top up' },
];

export const faqs = [
  { q: 'Is recording the broker legal?', a: 'System audio capture may be subject to call-recording laws. You are responsible for ensuring all parties consent. Microphone capture, where you repeat the details yourself, avoids the question.' },
  { q: 'What counts as a talk minute?', a: 'Time the mic is listening, counted from when you start a capture to when you stop it. Pressing the mic costs nothing on its own, and there is no daily limit. If your minutes run out mid-call, the call still finishes; only the next capture waits for a top-up or a new month.' },
  { q: 'How do I pay?', a: 'In so’m, through Payme or Click, from inside the app. Your plan switches over by itself once the payment is confirmed.' },
  // The three answers below describe what the app does (audio capture in the desktop app,
  // the loads table and its access rules, the delete-account routine) and match the Privacy Policy.
  { q: 'Is my call audio recorded or stored?', a: 'No. While a capture is running, the app streams the audio live to Deepgram, the speech-to-text service we use, and gets the words back. The app does not save the audio on your PC, and we do not keep recordings on our servers. It only listens while you have a capture running.', more: { href: links.privacy, label: 'Privacy Policy' } },
  { q: 'What do you keep from a call, and for how long?', a: 'The transcript of each call and the load fields taken from it are saved in your account, so you can find them in History. They stay for as long as your account exists, and you can delete any load yourself. If you delete your account, the loads you captured outside a company are deleted with it. Loads captured for a company stay with the company.', more: { href: links.privacy, label: 'Privacy Policy, section 6' } },
  { q: 'Who can read my transcripts?', a: 'Your account can read its own loads, and no other account can. If you use IlvolAI through a company, the company’s owners and admins can also see the loads captured for the company. To fill in the fields and score the call, the transcript text (not the audio) is sent to the language model service named in the Privacy Policy.', more: { href: links.privacy, label: 'Privacy Policy, section 3' } },
  { q: 'Can I fix a wrong field?', a: 'Yes. Every field is editable before you copy, and low-confidence fields are flagged so you know where to look.' },
  { q: 'Does it work on Mac?', a: 'Not yet. IlvolAI runs on Windows 10 and 11 today, and a macOS build is planned.' },
  { q: 'Does my whole team need their own plan?', a: 'No. Team plans are bought once for your organization, priced per seat, and every dispatcher draws from one shared pool of talk minutes.' },
];

const heights = [0.35, 0.6, 0.9, 0.55, 1, 0.7, 0.95, 0.5, 0.8, 0.45, 0.65, 0.3, 0.5];
export const introBars = heights.map((h, i) => ({ h, d: (0.04 + i * 0.02).toFixed(3) }));
export const orbBars = [10, 18, 26, 34, 22, 38, 28, 20, 30, 16, 10].map((h, i) => ({ h, d: (i * 0.09).toFixed(2) }));
export const bigBars = [60, 120, 200, 140, 260, 180, 300, 160, 220, 110, 170, 70];

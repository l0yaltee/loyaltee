// Content for the ilvolAI product page.

const icon = {
  pin: 'M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0ZM12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z',
  flag: 'M4 22V4s1-1 4-1 5 2 8 2 4-1 4-1v11s-1 1-4 1-5-2-8-2-4 1-4 1',
  truck: 'M10 17h4V5H2v12h3M20 17h2v-3.34a4 4 0 0 0-1.17-2.83L19 9h-5v8h1M7.5 20a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5ZM17.5 20a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z',
  dollar: 'M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6',
  cal: 'M8 2v4M16 2v4M3 10h18M5 4h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Z',
  weight: 'M12 7a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM6.5 7h11l3 14h-17Z',
  note: 'M15.5 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8.5ZM15 3v6h6',
};

export interface Field {
  label: string;
  value: string;
  pct: string;
  icon: string;
  tier: 'hi' | 'med' | 'lo';
  review: boolean;
}

// Same thresholds as the app: 80+ solid, 50–79 check, under 50 ask again; under 70 is flagged.
const field = (label: string, value: string, c: number, path: string): Field => ({
  label: c < 70 ? `${label} · Needs review` : label,
  value,
  pct: `${c}%`,
  icon: path,
  tier: c >= 80 ? 'hi' : c >= 50 ? 'med' : 'lo',
  review: c < 70,
});

export const heroFields = [
  field('Pickup', 'Amarillo, TX', 98, icon.pin),
  field('Pickup date/time', 'Tue 6/24, 8:00 AM', 94, icon.cal),
  field('Delivery', 'Tulsa, OK', 96, icon.flag),
  field('Equipment', 'Reefer', 99, icon.truck),
  field('Rate', '$2.80/mile ($2,100)', 89, icon.dollar),
  field('Weight', '43,000 lbs', 95, icon.weight),
];

export const confFields = [
  field('Delivery date/time', 'Thu 6/26, 6:00 AM', 91, icon.cal),
  field('Commodity', 'Frozen chicken', 87, icon.note),
  field('Additional notes', 'Lumpers required, no touch', 64, icon.note),
  field('Delivery window', 'FCFS 8am–5pm', 41, icon.cal),
];

export const steps = [
  { n: '01', tag: 'Start capture', title: 'Pick up the broker call', body: 'Hit the orb before or during the call. Choose your mic, or system audio to hear the broker straight from your dialer.' },
  { n: '02', tag: 'Live extraction', title: 'Watch the load fill in', body: 'The transcript streams as they talk and the fields fill themselves: lanes, dates, windows, rate, weight, equipment, notes.' },
  { n: '03', tag: 'Copy for driver', title: 'Send it in one paste', body: 'Fix anything flagged, press Copy for driver, and paste a clean load message into Telegram, WhatsApp or SMS.' },
];

export const fieldNames = ['pickup', 'pickup window', 'stops', 'delivery', 'delivery window', 'commodity', 'equipment', 'rate', 'miles', 'weight', 'trailer', 'notes'];

export const team = [
  { i: 'AK', bg: '#995fff' },
  { i: 'DS', bg: '#bea5ff' },
  { i: 'MT', bg: '#ab86ff' },
  { i: '+4', bg: '#7949cc' },
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
  { name: 'Free', tagline: 'Try IlvolAI', price: '0', per: 'UZS · forever', features: ['10 loads / month', '2 captures / day', 'All 16 load fields'], cta: 'Start free' },
  { name: 'Starter', tagline: 'Solo dispatcher basics', price: '90,000', per: 'UZS / month', features: ['60 loads / month', '6 captures / day', 'Every feature included'], cta: 'Choose Starter' },
  { name: 'Pro', tagline: 'Full-time dispatcher', price: '240,000', per: 'UZS / month', features: ['150 loads / month', '12 captures / day', 'Every feature included'], cta: 'Choose Pro', popular: true },
  { name: 'Max', tagline: 'High-volume dispatching', price: '490,000', per: 'UZS / month', features: ['350 loads / month', '30 captures / day', 'Every feature included'], cta: 'Choose Max' },
  { name: 'Pay as you go', tagline: 'Only pay for what you use', price: '4,000', per: 'UZS / load', features: ['No monthly commitment', 'Top up any time', 'Choose how many loads to buy'], cta: 'Top up' },
];

export const teamPlans: Plan[] = [
  { name: 'Team Pro', tagline: 'Small dispatch team', price: '250,000', per: 'UZS / seat / month', features: ['160 loads per seat, pooled', '12 captures / day', 'Unlimited team members', 'Admin console'], cta: 'Choose Team Pro', popular: true },
  { name: 'Team Max', tagline: 'Large dispatch office', price: '500,000', per: 'UZS / seat / month', features: ['360 loads per seat, pooled', '30 captures / day', 'Unlimited team members', 'Admin console'], cta: 'Choose Team Max' },
  // The design left this rate as a placeholder; set the real per-load price when it's decided.
  { name: 'Team PAYG', tagline: 'Flexible team billing', price: 'On request', per: 'UZS / load · set per team', features: ['No monthly commitment', 'One pooled balance', 'Unlimited team members'], cta: 'Ask about Team PAYG' },
];

export const faqs = [
  { q: 'Is recording the broker legal?', a: 'System audio capture may be subject to call-recording laws. You are responsible for ensuring all parties consent. Microphone capture, where you repeat the details yourself, avoids the question.' },
  { q: 'What counts as a load?', a: 'One captured call that produces a load record. Your plan sets how many you get each month and how many captures you can start per day.' },
  { q: 'How do I pay?', a: 'In so’m, through Payme or Click, from inside the app. Your plan switches over by itself once the payment is confirmed.' },
  { q: 'Can I fix a wrong field?', a: 'Yes. Every field is editable before you copy, and low-confidence fields are flagged so you know where to look.' },
  { q: 'Does it work on Mac?', a: 'Not yet. IlvolAI runs on Windows 10 and 11 today, and a macOS build is planned.' },
  { q: 'Does my whole team need their own plan?', a: 'No. Team plans are bought once for your organization, priced per seat, and every dispatcher draws from one pooled load quota.' },
];

const heights = [0.35, 0.6, 0.9, 0.55, 1, 0.7, 0.95, 0.5, 0.8, 0.45, 0.65, 0.3, 0.5];
export const introBars = heights.map((h, i) => ({ h, d: (0.08 + i * 0.035).toFixed(3) }));
export const orbBars = [10, 18, 26, 34, 22, 38, 28, 20, 30, 16, 10].map((h, i) => ({ h, d: (i * 0.09).toFixed(2) }));
export const bigBars = [60, 120, 200, 140, 260, 180, 300, 160, 220, 110, 170, 70];

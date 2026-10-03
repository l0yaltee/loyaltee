// Content for the Loyaltee company site.

export interface Stage {
  name: string;
  head: string;
  ilvol: boolean;
  pain: string;
  fix: string;
}

export const stages: Stage[] = [
  { name: 'Booked', head: 'The broker call', ilvol: true,
    pain: 'Lane, dates, windows, rate and weight arrive by voice, fast, while you type into three places at once. Details slip and the driver gets a half-written offer.',
    fix: 'The call is captured and turned into a structured load as the broker talks, with every field scored so you know what to confirm before you hang up.' },
  { name: 'Dispatched', head: 'Getting it to the driver', ilvol: true,
    pain: 'Rewriting the same load into a message the driver will actually read, then answering the questions it didn’t cover.',
    fix: 'One clean driver-ready message, in the format your drivers already use. Copy, paste into Telegram or WhatsApp, done.' },
  { name: 'Picked up', head: 'Proof it left', ilvol: false,
    pain: 'Waiting for the driver to confirm pickup, then relaying it to the broker by hand, often more than once.',
    fix: 'Pickup confirmations collected from the driver and passed to the broker without someone sitting in the middle.' },
  { name: 'In transit', head: 'The check-call loop', ilvol: false,
    pain: 'Updaters spend whole shifts asking drivers for locations and retyping ETAs to brokers who ask again an hour later.',
    fix: 'Status updates on a schedule, sent before the broker has to chase them. Your updaters handle the exceptions, not the routine.' },
  { name: 'Delivered', head: 'Closing the stop', ilvol: false,
    pain: 'Delivery times, lumper receipts and POD photos scattered across chats and inboxes.',
    fix: 'Delivery details gathered in one place, attached to the load, ready for the broker the moment the trailer is empty.' },
  { name: 'Paid', head: 'Getting paid', ilvol: false,
    pain: 'Invoices waiting on paperwork nobody can find, and days lost between delivery and billing.',
    fix: 'Paperwork complete when the load closes, so billing starts the same day instead of the same week.' },
];

const V = '#8338ec', H = '#d3a8ff', N = 'transparent';

const tickerItems = [
  { s: 'Broker call captured', c: '#995fff' },
  { s: 'Driver offer sent', c: H },
  { s: 'Pickup confirmed', c: V },
  { s: 'Status update sent', c: H },
  { s: 'ETA shared with broker', c: V },
  { s: 'POD attached', c: H },
];
// Doubled so the -50% translate loops seamlessly.
export const ticker = [...tickerItems, ...tickerItems];

export const principles = [
  { t: 'Be available when it matters.', b: 'Freight moves at 3 a.m. and on Sundays. The tools that support it should too.', px: [N, V, V, N, V, H, H, V, V, H, H, V, N, V, V, N] },
  { t: 'Make every workflow faster.', b: 'Every automation is measured against one question: does the person at the desk finish sooner?', px: [V, N, N, N, V, V, N, N, V, V, V, H, V, V, N, N] },
  { t: 'Earn trust through reliability.', b: 'Brokers, carriers and drivers depend on the update arriving. Boring and dependable beats clever.', px: [N, N, N, V, N, N, V, H, V, V, H, N, N, H, N, N] },
];

export const audiences = [
  { label: 'For carriers', title: 'Keep every load moving.', body: 'Automate updates, cut the back-and-forth, and give brokers the visibility they need without slowing your team down.', items: ['Automated status updates', 'Faster load booking', 'Less manual follow-up'] },
  { label: 'For brokers', title: 'Stay ahead of every update.', body: 'Keep loads, carriers and customers aligned with less chasing and more control.', items: ['Real-time load visibility', 'Cleaner communication', 'Reliable workflows'] },
  { label: 'For dispatchers', title: 'Book it while they talk.', body: 'ilvolAI turns the broker call into a driver-ready offer, so you can move to the next load before the last one goes cold.', items: ['Call-to-load capture', 'Confidence on every field', 'One-paste driver messages'] },
  { label: 'For owners', title: 'See the whole desk.', body: 'Know how your dispatchers spend their day and grow the operation without growing the busywork.', items: ['Team usage at a glance', 'Shared plans and quotas', 'Fewer missed updates'] },
];

export const roles = ['Updater', 'Update manager', 'Dispatcher', 'Broker', 'Founder'];

export const bars = [10, 20, 30, 24, 34, 18, 10].map((h, i) => ({ h, d: (i * 0.1).toFixed(1) }));

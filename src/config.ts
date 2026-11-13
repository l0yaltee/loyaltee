// Links and facts shared by both sites. Edit here, not in the pages.
export const links = {
  ilvol: '/ilvol',
  guides: '/ilvol/guides',
  loyaltee: '/',
  // Direct installer link: always the newest build, overwritten by the release workflow.
  download: 'https://api.loyaltee.uz/storage/v1/object/public/releases/latest/ilvolai-setup.exe',
  store: 'https://apps.microsoft.com/detail/9ndxf2hchddv',
  privacy: 'https://api.loyaltee.uz/storage/v1/object/public/legal/privacy-policy.txt',
  terms: 'https://api.loyaltee.uz/storage/v1/object/public/legal/terms-of-service.txt',
};

export const contact = {
  email: 'hello@loyaltee.uz',
  telegram: 'loyaltee',
  // Leave empty to hide the phone row on the contact section.
  phone: '',
};

export const ilvolApp = {
  version: '0.8.0',
};

// The IlvolAI logo, the same image the desktop app ships as its icon
// (loadform/src-tauri/icons/app-icon-source.png in l0yaltee/ilvol), at the
// sizes each place needs. Spread into <Base> on every IlvolAI page.
export const ilvolIcons = {
  favicon: '/favicon-ilvol.png',
  appleTouchIcon: '/apple-touch-icon-ilvol.png',
  ogImage: '/ilvol-og.jpg',
};

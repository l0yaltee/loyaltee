// Links and facts shared by both sites. Edit here, not in the pages.
export const links = {
  ilvol: '/ilvol',
  guides: '/ilvol/guides',
  loyaltee: '/',
  // Fallback installer link, used until (or unless) the release lookup below answers.
  // The release workflow overwrites this file on every build, drafts included, so it
  // can be newer than the newest published release.
  download: 'https://api.loyaltee.uz/storage/v1/object/public/releases/latest/ilvolai-setup.exe',
  store: 'https://apps.microsoft.com/detail/9ndxf2hchddv',
  // Real pages, rendered from src/content/legal/.
  privacy: '/ilvol/privacy',
  terms: '/ilvol/terms',
};

// The newest PUBLISHED release, the same public answer the app's updater reads.
// The download buttons ask it at page load and take both the version label and
// the installer link from it, so the label and the file cannot disagree and
// nobody has to edit this repo for a release. If it fails, the buttons show no
// version and use links.download.
export const releaseManifest = 'https://api.loyaltee.uz/functions/v1/app-update?format=tauri&current=0.0.0';

export const contact = {
  email: 'hello@loyaltee.uz',
  // Already used by the home page and the guides; not checked against the live account.
  telegram: 'loyaltee',
  // Leave empty to hide the phone row on the contact section.
  phone: '',
};

// Where a phone visitor sends the page to themselves ("Send me the link").
export const shareUrl = 'https://loyaltee.uz/ilvol#download';

// The IlvolAI logo, the same image the desktop app ships as its icon
// (loadform/src-tauri/icons/app-icon-source.png in l0yaltee/ilvol), at the
// sizes each place needs. Spread into <Base> on every IlvolAI page.
export const ilvolIcons = {
  favicon: '/favicon-ilvol.png',
  appleTouchIcon: '/apple-touch-icon-ilvol.png',
  ogImage: '/ilvol-og.jpg',
};

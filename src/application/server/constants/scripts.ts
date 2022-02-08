//https://polyfill.io/v3/url-builder/
export const POLYFILL_FEATURES = [
  'Intl',
  'Intl.DisplayNames',
  'Intl.DisplayNames.~locale.fr',
  'Intl.DisplayNames.~locale.nl',
  'Intl.DisplayNames.~locale.en',
  'Intl.DateTimeFormat',
  'Intl.DateTimeFormat.prototype.formatToParts',
  'Intl.DateTimeFormat.~timeZone.golden',
  'Intl.DateTimeFormat.~timeZone.all',
  'Intl.ListFormat',
  'Intl.Locale',
  'Intl.NumberFormat',
  'Intl.PluralRules',
  'Intl.RelativeTimeFormat',
  'Intl.getCanonicalLocales',
];

export const POLYFILL_SCRIPT_URL = `https://polyfill.io/v3/polyfill.min.js?features=${POLYFILL_FEATURES.join(
  ',',
)}`;

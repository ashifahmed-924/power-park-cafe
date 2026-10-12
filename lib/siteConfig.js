// ─────────────────────────────────────────────────────────────
// Power Park Cafe — delivery & contact
// ─────────────────────────────────────────────────────────────
export const DOORDASH_URL = '';
export const UBER_EATS_URL = 'https://www.ubereats.com/au/store/power-park-cafe/wt2RCGNBUWCnu-J9cm-DxQ';

const FALLBACK_URL = 'https://www.ubereats.com/au/search?q=Power%20Park%20Cafe%20Dandenong%20South';

export const ORDER_URL = DOORDASH_URL || UBER_EATS_URL || FALLBACK_URL;

export const RESERVATION_ENDPOINT = '';

export const GALLERY_URL = '';

export const STORY_VIDEO_URL = '';

// ─────────────────────────────────────────────────────────────
// Contact / location (Find Us section)
// ─────────────────────────────────────────────────────────────
export const ADDRESS_LINE_1 = '186–190 Discovery Rd';
export const ADDRESS_LINE_2 = 'Dandenong South VIC 3175';
export const PHONE_DISPLAY = '(03) 9706 5282';
export const PHONE_TEL = '+61397065282';
export const HOURS_LINE_1 = 'Mon – Fri';
export const HOURS_LINE_2 = '5:00 AM – 3:00 PM';
const MAP_QUERY = encodeURIComponent('Power Park Cafe 186-190 Discovery Rd Dandenong South VIC 3175');
export const MAP_EMBED_URL = `https://www.google.com/maps?q=${MAP_QUERY}&z=15&output=embed`;
export const MAP_VIEW_URL = `https://www.google.com/maps/search/?api=1&query=${MAP_QUERY}`;
export const MAP_DIRECTIONS_URL = `https://www.google.com/maps/dir/?api=1&destination=${MAP_QUERY}`;

// ─────────────────────────────────────────────────────────────
// Social links
// ─────────────────────────────────────────────────────────────
export const INSTAGRAM_URL = '';
export const FACEBOOK_URL = 'https://www.facebook.com/139173363299826';
export const FACEBOOK_LINK = FACEBOOK_URL || 'https://www.facebook.com/search/top?q=Power%20Park%20Cafe%20Dandenong%20South';
export const GOOGLE_REVIEWS_URL = MAP_VIEW_URL;

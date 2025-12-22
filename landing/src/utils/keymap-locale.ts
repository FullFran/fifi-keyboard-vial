// Map US QWERTY labels to ES ISO labels
const US_TO_ES_MAP: Record<string, string> = {
  // Base layer
  ';': 'Ñ',
  ':': 'Ñ', // In case someone used shifted label in definition
  "'": '´',
  '"': '¨', // Shifted US quote
  '[': '`',
  '{': '^',
  ']': '+',
  '}': '*',
  '\\': 'Ç',
  '|': '}',
  '/': '-',
  '?': '_',
  '=': '¡',
  '+': '¿',
  '-': "'",
  '_': '?',
  '`': 'º',
  '~': 'ª',
  // Numbers row Shift layer (if we need it, though usually we map base)
  '@': '"',
  '#': '·',
  '^': '&',
  '&': '/',
  '*': '(',
  '(': ')',
  ')': '=',
  '<': ';',
  '>': ':',
};

export function getLocalizedLabel(label: string, locale: string = 'US'): string {
  if (locale !== 'ES') return label;
  
  // Return mapped label or original if not found
  return US_TO_ES_MAP[label] || label;
}


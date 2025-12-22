// Map US QWERTY labels to ES ISO labels
// Only for Base layer keys - symbol layers already have correct ES output
const US_TO_ES_MAP: Record<string, string> = {
  // === Base layer key mappings ===
  // These are the keys that differ between US and ES physical positions
  ';': 'Ñ',          // US semicolon position → Ñ
  ':': 'Ñ',          // Shifted semicolon also maps to Ñ
  '/': '-',          // US slash position → - (minus)
  
  // === ISO Extra Key (between Left Shift and Z) ===
  // KC_NUBS produces < > on Spanish keyboards
  '\\': '<',         // KC_NUBS unshifted → <
  '|': '>',          // S(KC_NUBS) shifted → >
};

export function getLocalizedLabel(label: string, locale: string = 'US', sublabel?: string): string {
  if (locale !== 'ES') return label;
  
  // Don't transform AltGr symbols - they're intentionally placed and should display as-is
  // These are symbols typed with AltGr on Spanish keyboard (like \ { } [ ] @ # ~)
  if (sublabel === 'AltGr') return label;
  
  // Return mapped label or original if not found
  return US_TO_ES_MAP[label] || label;
}


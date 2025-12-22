// Keymap data extracted from keymaps/vial/keymap.c
// Fifi Split Keyboard - 36 keys (3x5+3 per side)

export interface KeyDef {
  label: string;
  sublabel?: string;
  hold?: string;
}

export interface Layer {
  name: string;
  color: string;
  keys: KeyDef[];
}

// Keycode translations for readable labels
const KC: Record<string, KeyDef> = {
  'KC_Q': { label: 'Q' },
  'KC_W': { label: 'W' },
  'KC_E': { label: 'E' },
  'KC_R': { label: 'R' },
  'KC_T': { label: 'T' },
  'KC_Y': { label: 'Y' },
  'KC_U': { label: 'U' },
  'KC_I': { label: 'I' },
  'KC_O': { label: 'O' },
  'KC_P': { label: 'P' },
  'KC_A': { label: 'A' },
  'KC_S': { label: 'S' },
  'KC_D': { label: 'D' },
  'KC_F': { label: 'F' },
  'KC_G': { label: 'G' },
  'KC_H': { label: 'H' },
  'KC_J': { label: 'J' },
  'KC_K': { label: 'K' },
  'KC_L': { label: 'L' },
  'KC_SCLN': { label: ';' },
  'KC_Z': { label: 'Z' },
  'KC_X': { label: 'X' },
  'KC_C': { label: 'C' },
  'KC_V': { label: 'V' },
  'KC_B': { label: 'B' },
  'KC_N': { label: 'N' },
  'KC_M': { label: 'M' },
  'KC_COMM': { label: ',' },
  'KC_DOT': { label: '.' },
  'KC_SLSH': { label: '/' },
  'KC_TAB': { label: 'Tab' },
  'KC_SPC': { label: 'Space' },
  'KC_ENT': { label: 'Enter' },
  'KC_BSPC': { label: '⌫' },
  'KC_DEL': { label: 'Del' },
  'KC_ESC': { label: 'Esc' },
  'KC_UP': { label: '↑' },
  'KC_DOWN': { label: '↓' },
  'KC_LEFT': { label: '←' },
  'KC_RGHT': { label: '→' },
  'KC_0': { label: '0' },
  'KC_1': { label: '1' },
  'KC_2': { label: '2' },
  'KC_3': { label: '3' },
  'KC_4': { label: '4' },
  'KC_5': { label: '5' },
  'KC_6': { label: '6' },
  'KC_7': { label: '7' },
  'KC_8': { label: '8' },
  'KC_9': { label: '9' },
  'KC_MINS': { label: '-' },
  'KC_LBRC': { label: '[' },
  'KC_RBRC': { label: ']' },
  'KC_NUBS': { label: '\\' },
  'KC_GRV': { label: '`' },
  'KC_QUOT': { label: '\'' },
  'KC_LSFT': { label: 'Shift' },
  'KC_NO': { label: '' },
  'KC_TRNS': { label: '▽' },
  'KC_F1': { label: 'F1' },
  'KC_F2': { label: 'F2' },
  'KC_F3': { label: 'F3' },
  'KC_F4': { label: 'F4' },
  'KC_F5': { label: 'F5' },
  'KC_F6': { label: 'F6' },
  'KC_F7': { label: 'F7' },
  'KC_F8': { label: 'F8' },
  'KC_F9': { label: 'F9' },
  'KC_F10': { label: 'F10' },
  'KC_F11': { label: 'F11' },
  'KC_F12': { label: 'F12' },
  'KC_MS_UP': { label: '▲', sublabel: 'Mouse' },
  'KC_MS_DOWN': { label: '▼', sublabel: 'Mouse' },
  'KC_MS_LEFT': { label: '◀', sublabel: 'Mouse' },
  'KC_MS_RIGHT': { label: '▶', sublabel: 'Mouse' },
  'KC_MS_BTN1': { label: 'LClick' },
  'KC_MS_BTN2': { label: 'RClick' },
  'KC_MS_BTN3': { label: 'MClick' },
  'KC_MS_WH_UP': { label: '⬆', sublabel: 'Scroll' },
  'KC_MS_WH_DOWN': { label: '⬇', sublabel: 'Scroll' },
  'KC_MS_WH_LEFT': { label: '⬅', sublabel: 'Scroll' },
  'KC_MS_WH_RIGHT': { label: '➡', sublabel: 'Scroll' },
  'RGB_TOG': { label: 'RGB', sublabel: 'Toggle' },
  'RGB_MOD': { label: 'RGB', sublabel: 'Mode+' },
  'RGB_RMOD': { label: 'RGB', sublabel: 'Mode-' },
  'RGB_HUI': { label: 'Hue+' },
  'RGB_HUD': { label: 'Hue-' },
  'RGB_SAI': { label: 'Sat+' },
  'RGB_SAD': { label: 'Sat-' },
  'RGB_VAI': { label: 'Val+' },
  'RGB_VAD': { label: 'Val-' },
  'RGB_SPI': { label: 'Spd+' },
  'RGB_SPD': { label: 'Spd-' },
  'RGB_M_P': { label: 'Plain' },
  'RGB_M_B': { label: 'Breath' },
  'RGB_M_SW': { label: 'Swirl' },
  'RGB_M_X': { label: 'Xmas' },
};

export const layers: Layer[] = [
  {
    name: 'Base',
    color: '#6366f1',
    keys: [
      // Row 1 (left)
      { label: 'Q' },
      { label: 'W' },
      { label: 'E' },
      { label: 'R' },
      { label: 'T' },
      // Row 1 (right)  
      { label: 'Y' },
      { label: 'U' },
      { label: 'I' },
      { label: 'O' },
      { label: 'P' },
      // Row 2 (left) - Home Row Mods
      { label: 'A', hold: 'GUI' },
      { label: 'S', hold: 'Alt' },
      { label: 'D', hold: 'Ctrl' },
      { label: 'F', hold: 'Shift' },
      { label: 'G' },
      // Row 2 (right) - Home Row Mods
      { label: 'H' },
      { label: 'J', hold: 'Shift' },
      { label: 'K', hold: 'Ctrl' },
      { label: 'L', hold: 'Alt' },
      { label: ';', hold: 'GUI' },
      // Row 3 (left)
      { label: 'Z' },
      { label: 'X' },
      { label: 'C' },
      { label: 'V' },
      { label: 'B' },
      // Row 3 (right)
      { label: 'N' },
      { label: 'M' },
      { label: ',' },
      { label: '.' },
      { label: '/' },
      // Thumbs (left)
      { label: 'Del' },
      { label: 'Tab', hold: 'Lower' },
      { label: 'Space' },
      // Thumbs (right)
      { label: 'Game', sublabel: 'TO(4)' },
      { label: 'Enter', hold: 'Raise' },
      { label: '⌫' },
    ]
  },
  {
    name: 'Lower',
    color: '#22c55e',
    keys: [
      // Row 1
      { label: 'Q' },
      { label: '↑' },
      { label: '$' },
      { label: 'R' },
      { label: 'T' },
      { label: ')' },
      { label: '7' },
      { label: '8' },
      { label: '9' },
      { label: ']' },
      // Row 2
      { label: '←' },
      { label: '↓' },
      { label: '→' },
      { label: '[', hold: 'Shift' },
      { label: '{' },
      { label: '}' },
      { label: '4' },
      { label: '5' },
      { label: '6' },
      { label: '/' },
      // Row 3
      { label: '\\' },
      { label: '|' },
      { label: 'C', hold: 'Ctrl' },
      { label: '.', hold: 'Alt' },
      { label: 'B' },
      { label: '0' },
      { label: '1' },
      { label: '2' },
      { label: '3' },
      { label: '&' },
      // Thumbs
      { label: '▽' },
      { label: '▽' },
      { label: 'MO(6)', sublabel: 'Mouse' },
      { label: '▽' },
      { label: 'Enter', hold: 'Adjust' },
      { label: '⌫' },
    ]
  },
  {
    name: 'Raise',
    color: '#f59e0b',
    keys: [
      // Row 1 - RSFT(KC_1), RALT(KC_2), RALT(KC_3), RSFT(KC_4), RSFT(KC_5)
      { label: '!' },               // RSFT(KC_1) → !
      { label: '@', sublabel: 'AltGr' },  // RALT(KC_2) → @
      { label: '#', sublabel: 'AltGr' },  // RALT(KC_3) → #
      { label: '$' },               // RSFT(KC_4) → $
      { label: '%' },               // RSFT(KC_5) → %
      { label: 'F10' },
      { label: 'F11' },
      { label: '⬆', sublabel: 'Scroll' },
      { label: '⬇', sublabel: 'Scroll' },
      { label: '_' },               // S(KC_MINS) → _
      // Row 2 - RALT(KC_GRV), RALT(KC_QUOT), RALT(KC_LBRC), S(KC_8), KC_MINS
      { label: '\\', sublabel: 'AltGr' },  // RALT(KC_GRV) → \ 
      { label: '{', sublabel: 'AltGr' },   // RALT(KC_QUOT) → {
      { label: '[', sublabel: 'AltGr' },   // RALT(KC_LBRC) → [
      { label: '(' },               // S(KC_8) → (
      { label: "'" },               // KC_MINS → ' (on ES keyboard)
      { label: '←' },
      { label: '↓' },
      { label: '↑' },
      { label: '→' },
      { label: 'RClick' },
      // Row 3 - RSFT(KC_6), RALT(KC_BSLS), RALT(KC_RBRC), S(KC_9), RSFT(KC_2)
      { label: '&' },               // RSFT(KC_6) → &
      { label: '}', sublabel: 'AltGr' },   // RALT(KC_BSLS) → }
      { label: ']', sublabel: 'AltGr' },   // RALT(KC_RBRC) → ]
      { label: ')' },               // S(KC_9) → )
      { label: '"' },               // RSFT(KC_2) → "
      { label: '◀', sublabel: 'Mouse' },
      { label: '▼', sublabel: 'Mouse' },
      { label: '▲', sublabel: 'Mouse' },
      { label: '▶', sublabel: 'Mouse' },
      { label: 'LClick' },
      // Thumbs
      { label: '▽' },
      { label: 'Tab', hold: 'Adjust' },
      { label: '▽' },
      { label: '▽' },
      { label: '▽' },
      { label: 'MO(7)' },
    ]
  },
  {
    name: 'RGB',
    color: '#ec4899',
    keys: [
      // Row 1
      { label: 'RGB', sublabel: 'Toggle' },
      { label: 'Plain' },
      { label: 'Breath' },
      { label: 'Swirl' },
      { label: 'Xmas' },
      { label: '' },
      { label: 'F7' },
      { label: 'F8' },
      { label: 'F9' },
      { label: 'F10' },
      // Row 2
      { label: 'Mode+' },
      { label: 'Hue+' },
      { label: 'Sat+' },
      { label: 'Val+' },
      { label: 'Spd+' },
      { label: '' },
      { label: 'F4' },
      { label: 'F5' },
      { label: 'F6' },
      { label: 'F11' },
      // Row 3
      { label: 'Mode-' },
      { label: 'Hue-' },
      { label: 'Sat-' },
      { label: 'Val-' },
      { label: 'Spd-' },
      { label: '' },
      { label: 'F1' },
      { label: 'F2' },
      { label: 'F3' },
      { label: 'F12' },
      // Thumbs
      { label: '' },
      { label: '' },
      { label: '' },
      { label: '' },
      { label: '' },
      { label: '' },
    ]
  },
  {
    name: 'Game',
    color: '#ef4444',
    keys: [
      // Row 1
      { label: 'Tab' },
      { label: 'Q' },
      { label: 'W' },
      { label: 'E' },
      { label: 'R' },
      { label: '▽' },
      { label: '▽' },
      { label: '▽' },
      { label: '▽' },
      { label: '▽' },
      // Row 2
      { label: 'Shift' },
      { label: 'A' },
      { label: 'S' },
      { label: 'D' },
      { label: 'F' },
      { label: '▽' },
      { label: 'J' },
      { label: 'K' },
      { label: 'L' },
      { label: ';' },
      // Row 3
      { label: 'M', hold: 'Ctrl' },
      { label: 'Z' },
      { label: 'X' },
      { label: 'C' },
      { label: 'V', hold: 'Alt' },
      { label: '▽' },
      { label: '▽' },
      { label: '▽' },
      { label: '▽' },
      { label: '▽' },
      // Thumbs
      { label: 'Base', sublabel: 'TO(0)' },
      { label: 'OSL(5)', sublabel: 'Num' },
      { label: 'Space' },
      { label: 'Base', sublabel: 'TO(0)' },
      { label: '▽' },
      { label: 'LClick' },
    ]
  },
  {
    name: 'Game Num',
    color: '#f97316',
    keys: [
      // Row 1
      { label: '5' },
      { label: '1' },
      { label: '2' },
      { label: '3' },
      { label: '4' },
      { label: '' },
      { label: '' },
      { label: '' },
      { label: '' },
      { label: '' },
      // Row 2
      { label: '0', hold: 'Alt' },
      { label: '6' },
      { label: '7' },
      { label: '8' },
      { label: 'T' },
      { label: '' },
      { label: '' },
      { label: '' },
      { label: '' },
      { label: '' },
      // Row 3
      { label: 'G' },
      { label: 'J' },
      { label: 'I' },
      { label: 'G' },
      { label: 'B' },
      { label: '' },
      { label: '' },
      { label: '' },
      { label: '' },
      { label: '' },
      // Thumbs
      { label: '' },
      { label: '' },
      { label: '' },
      { label: '' },
      { label: '' },
      { label: '' },
    ]
  },
  {
    name: 'Mouse',
    color: '#8b5cf6',
    keys: [
      // Row 1
      { label: '' },
      { label: '' },
      { label: '↑' },
      { label: '' },
      { label: '' },
      { label: '' },
      { label: '' },
      { label: '▲', sublabel: 'Mouse' },
      { label: '' },
      { label: '' },
      // Row 2
      { label: '' },
      { label: '←' },
      { label: '↓' },
      { label: '→' },
      { label: '' },
      { label: '◀', sublabel: 'Mouse' },
      { label: '▼', sublabel: 'Mouse' },
      { label: '▲', sublabel: 'Mouse' },
      { label: '▶', sublabel: 'Mouse' },
      { label: '' },
      // Row 3
      { label: '' },
      { label: '' },
      { label: '' },
      { label: '' },
      { label: '' },
      { label: '⬅', sublabel: 'Scroll' },
      { label: '⬇', sublabel: 'Scroll' },
      { label: '⬆', sublabel: 'Scroll' },
      { label: '➡', sublabel: 'Scroll' },
      { label: '' },
      // Thumbs
      { label: 'Base', sublabel: 'TO(0)' },
      { label: '' },
      { label: '' },
      { label: 'MClick' },
      { label: 'RClick' },
      { label: 'LClick' },
    ]
  }
];

// Layout positions from vial.json (normalized)
export const keyPositions = [
  // Row 1 - Left (indices 0-4)
  { x: 0, y: 0.3 },
  { x: 1, y: 0.1 },
  { x: 2, y: 0 },
  { x: 3, y: 0.1 },
  { x: 4, y: 0.2 },
  // Row 1 - Right (indices 5-9)
  { x: 8, y: 0.2 },
  { x: 9, y: 0.1 },
  { x: 10, y: 0 },
  { x: 11, y: 0.1 },
  { x: 12, y: 0.3 },
  // Row 2 - Left (indices 10-14)
  { x: 0, y: 1.3 },
  { x: 1, y: 1.1 },
  { x: 2, y: 1 },
  { x: 3, y: 1.1 },
  { x: 4, y: 1.2 },
  // Row 2 - Right (indices 15-19)
  { x: 8, y: 1.2 },
  { x: 9, y: 1.1 },
  { x: 10, y: 1 },
  { x: 11, y: 1.1 },
  { x: 12, y: 1.3 },
  // Row 3 - Left (indices 20-24)
  { x: 0, y: 2.3 },
  { x: 1, y: 2.1 },
  { x: 2, y: 2 },
  { x: 3, y: 2.1 },
  { x: 4, y: 2.2 },
  // Row 3 - Right (indices 25-29)
  { x: 8, y: 2.2 },
  { x: 9, y: 2.1 },
  { x: 10, y: 2 },
  { x: 11, y: 2.1 },
  { x: 12, y: 2.3 },
  // Thumbs - Left (indices 30-32)
  { x: 3, y: 3.7, h: 1 },
  { x: 4, y: 3.7, h: 1 },
  { x: 5, y: 3.2, h: 1.5 },
  // Thumbs - Right (indices 33-35)
  { x: 7, y: 3.2, h: 1.5 },
  { x: 8, y: 3.7, h: 1 },
  { x: 9, y: 3.7, h: 1 },
];

// Combos extracted from layout.vil
// Format in .vil: [trigger1, trigger2, trigger3, trigger4, output]
export interface Combo {
  keys: string[];
  output: string;
  description: string;
}

export const combos: Combo[] = [
  { keys: ['W', 'E'], output: 'Esc', description: 'Quick escape without reaching top row' },
  { keys: ['I', 'O'], output: '\'', description: 'Quote character for typing' },
  { keys: ['X', 'C'], output: 'Copy', description: 'Ctrl+C shortcut combo' },
  { keys: ['C', 'V'], output: 'Paste', description: 'Ctrl+V shortcut combo' },
];


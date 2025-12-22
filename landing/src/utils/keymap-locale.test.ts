import { describe, it, expect } from 'vitest';
import { getLocalizedLabel } from './keymap-locale';

describe('getLocalizedLabel', () => {
  it('returns the same label if no mapping exists', () => {
    expect(getLocalizedLabel('A', 'ES')).toBe('A');
    expect(getLocalizedLabel('Enter', 'ES')).toBe('Enter');
  });

  it('maps standard US symbols to ES equivalents', () => {
    expect(getLocalizedLabel(';', 'ES')).toBe('Ñ');
    expect(getLocalizedLabel(':', 'ES')).toBe('Ñ'); // Handle shifted case if passed? Or just base.
    // Assuming we map base labels first
    expect(getLocalizedLabel("'", 'ES')).toBe('´');
    expect(getLocalizedLabel('[', 'ES')).toBe('`');
    expect(getLocalizedLabel(']', 'ES')).toBe('+');
    expect(getLocalizedLabel('-', 'ES')).toBe("'");
    expect(getLocalizedLabel('=', 'ES')).toBe('¡');
    expect(getLocalizedLabel('/', 'ES')).toBe('-');
    expect(getLocalizedLabel('\\', 'ES')).toBe('Ç');
    expect(getLocalizedLabel('|', 'ES')).toBe('}'); // Shift + Ç
  });

  it('handles shift layer symbols correctly', () => {
     // This might require a separate function or logic if we want to visualize shift layers
     // For now, let's focus on base layer mapping
  });
});

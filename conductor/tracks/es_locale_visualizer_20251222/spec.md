# Specification: Spanish Locale Visualization

## 1. Goal
Update the landing page keymap visualizer to display key labels according to the Spanish (ES-ISO) keyboard layout. This ensures that the visual representation matches the user's experience when the OS language is set to Spanish (e.g., displaying "Ñ" instead of ";", and correct symbol placement).

## 2. Scope
*   **Target:** `landing/src/` (Astro components and data).
*   **Excluded:** `keymaps/` and firmware source code. The firmware itself must remain unchanged as it sends standard HID codes.

## 3. Requirements
*   **Visual Mapping:** The `KeyboardVisualizer` component must map standard QMK keycodes to their Spanish equivalents.
*   **Data Structure:** Ensure `keymap.ts` or a new utility can handle the translation from US QWERTY HID codes to ES ISO labels.
*   **Verification:** The displayed keymap must correctly show "Ñ", "¿", "¡", and other ES-specific symbols in their respective positions.


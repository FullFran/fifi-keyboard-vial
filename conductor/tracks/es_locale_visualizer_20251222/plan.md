# Plan: Spanish Locale Visualization

## Phase 1: Analysis & Data Preparation
- [ ] Task: Analyze current keymap data structure in `landing/src/data/keymap.ts`.
- [ ] Task: Create a mapping utility or configuration to translate US HID keycodes to ES ISO visual labels (e.g., `KC_SCLN` -> "Ñ").
- [ ] Task: Conductor - User Manual Verification 'Phase 1: Analysis & Data Preparation' (Protocol in workflow.md)

## Phase 2: Implementation
- [ ] Task: Update `KeyCap.astro` or `KeyboardVisualizer.astro` to apply the Spanish label mapping.
- [ ] Task: Verify that modifiers and special symbols (Shift layers) are correctly represented for the ES layout.
- [ ] Task: Conductor - User Manual Verification 'Phase 2: Implementation' (Protocol in workflow.md)

## Phase 3: Verification
- [ ] Task: Manually verify the rendered landing page against a standard Spanish keyboard layout reference.
- [ ] Task: Ensure no regression in the display of standard non-localized keys.
- [ ] Task: Conductor - User Manual Verification 'Phase 3: Verification' (Protocol in workflow.md)


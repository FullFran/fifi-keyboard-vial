# Fifi Keyboard Firmware (Vial-QMK)

This repository contains the QMK firmware configuration for the Fifi keyboard (split, 3x5+3), configured for use with Vial.

## Hardware

-   **Keyboard**: Fifi (Split 36 keys)
-   **Controller**: Michi ProMicro RP2040 (or compatible RP2040 Pro Micro)
-   **OLED**: SSD1306 128x32 on both halves

## Features

-   **Vial**: Full support for real-time configuration via [Vial](https://get.vial.today).
-   **Combos**: Enabled and configurable via Vial.
-   **Tap Dance**: Enabled (4 entries).
-   **Auto Shift**: Enabled.
-   **OLED**: Displays layer status and logo.

## Usage

To compile this firmware, you need to place this directory into a QMK or Vial-QMK installation under `keyboards/handwired/fifi` (or similar).

```bash
# Example compilation command
qmk compile -kb handwired/fifi -km vial
# or
make handwired/fifi:vial
```

## Flashing

The firmware is built for RP2040. Flash the resulting `.uf2` file to both halves (they are identical).

#include QMK_KEYBOARD_H


// Weak stubs for QMK introspection - Vial will override these
// Key combos must match VIAL_COMBO_ENTRIES size to avoid linker conflicts
__attribute__((weak)) combo_t key_combos[VIAL_COMBO_ENTRIES] = {};
__attribute__((weak)) uint16_t COMBO_LEN = VIAL_COMBO_ENTRIES;

// Tap dance and key overrides - defined here as weak to allow Vial to override
__attribute__((weak)) tap_dance_action_t tap_dance_actions[VIAL_TAP_DANCE_ENTRIES] = {};
__attribute__((weak)) const key_override_t *key_overrides[VIAL_KEY_OVERRIDE_ENTRIES] = {NULL};

#ifdef OLED_ENABLE
oled_rotation_t oled_init_user(oled_rotation_t rotation) {
    if (!is_keyboard_master()) {
        return OLED_ROTATION_180;
    }
    return rotation;
}

bool oled_task_user(void) {
    if (is_keyboard_master()) {
        oled_write_P(PSTR("Layer: "), false);
        switch (get_highest_layer(layer_state)) {
            case 0:
                oled_write_P(PSTR("Base\n"), false);
                break;
            case 1:
                oled_write_P(PSTR("Lower\n"), false);
                break;
            case 2:
                oled_write_P(PSTR("Raise\n"), false);
                break;
            case 4:
                oled_write_P(PSTR("Game\n"), false);
                break;
            default:
                oled_write_P(PSTR("Other\n"), false);
                break;
        }
    } else {
        oled_write_P(PSTR("Fifi\nSplit\n"), false);
    }
    return false;
}
#endif

const uint16_t PROGMEM keymaps[][MATRIX_ROWS][MATRIX_COLS] = {
    [0] = LAYOUT(
        KC_Q, KC_W, KC_E, KC_R, KC_T, KC_Y, KC_U, KC_I, KC_O, KC_P,
        MT(MOD_LGUI,KC_A), MT(MOD_LALT,KC_S), MT(MOD_LCTL,KC_D), MT(MOD_LSFT,KC_F), KC_G, KC_H, MT(MOD_LSFT | MOD_RSFT,KC_J), MT(MOD_LCTL | MOD_RCTL,KC_K), MT(MOD_LALT | MOD_RALT,KC_L), MT(MOD_LGUI | MOD_RGUI,KC_SCLN),
        KC_Z, KC_X, KC_C, KC_V, KC_B, KC_N, KC_M, KC_COMM, KC_DOT, KC_SLSH,
                    KC_DEL, LT(1,KC_TAB), KC_SPC, TO(4), LT(2,KC_ENT), KC_BSPC
    ),
    [1] = LAYOUT(
        KC_Q, KC_UP, S(KC_4), KC_R, KC_T, S(KC_0), KC_7, KC_8, KC_9, KC_RBRC,
        KC_LEFT, KC_DOWN, KC_RGHT, MT(MOD_LSFT | MOD_RSFT,KC_LBRC), S(KC_LBRC), S(KC_RBRC), KC_4, KC_5, KC_6, KC_SLSH,
        KC_NUBS, S(KC_NUBS), MT(MOD_LCTL,KC_C), MT(MOD_LALT | MOD_RALT,KC_DOT), KC_B, KC_0, KC_1, KC_2, KC_3, RSFT(KC_7),
                    KC_TRNS, KC_TRNS, MO(6), KC_TRNS, LT(3,KC_ENT), KC_BSPC
    ),
    [2] = LAYOUT(
        RSFT(KC_1), RALT(KC_2), RALT(KC_3), RSFT(KC_4), RSFT(KC_5), KC_F10, KC_F11, KC_MS_WH_UP, KC_MS_WH_DOWN, S(KC_MINS),
        RALT(KC_GRV), RALT(KC_QUOT), RALT(KC_LBRC), S(KC_8), KC_MINS, KC_LEFT, KC_DOWN, KC_UP, KC_RGHT, KC_MS_BTN2,
        RSFT(KC_6), RALT(KC_BSLS), RALT(KC_RBRC), S(KC_9), RSFT(KC_2), KC_MS_LEFT, KC_MS_DOWN, KC_MS_UP, KC_MS_RIGHT, KC_MS_BTN1,
                    KC_TRNS, LT(3,KC_TAB), KC_TRNS, KC_TRNS, KC_TRNS, MO(7)
    ),
    [3] = LAYOUT(
        RGB_TOG, RGB_M_P, RGB_M_B, RGB_M_SW, RGB_M_X, KC_NO, KC_F7, KC_F8, KC_F9, KC_F10,
        RGB_MOD, RGB_HUI, RGB_SAI, RGB_VAI, RGB_SPI, KC_NO, KC_F4, KC_F5, KC_F6, KC_F11,
        RGB_RMOD, RGB_HUD, RGB_SAD, RGB_VAD, RGB_SPD, KC_NO, KC_F1, KC_F2, KC_F3, KC_F12,
                    KC_NO, KC_NO, KC_NO, KC_NO, KC_NO, KC_NO
    ),
    [4] = LAYOUT(
        KC_TAB, KC_Q, KC_W, KC_E, KC_R, KC_TRNS, KC_TRNS, KC_TRNS, KC_TRNS, KC_TRNS,
        KC_LSFT, KC_A, KC_S, KC_D, KC_F, KC_TRNS, KC_J, KC_K, KC_L, KC_SCLN,
        MT(MOD_LCTL,KC_M), KC_Z, KC_X, KC_C, MT(MOD_LALT,KC_V), KC_TRNS, KC_TRNS, KC_TRNS, KC_TRNS, KC_TRNS,
                    TO(0), OSL(5), KC_SPC, TO(0), KC_TRNS, KC_MS_BTN1
    ),
    [5] = LAYOUT(
        KC_5, KC_1, KC_2, KC_3, KC_4, KC_NO, KC_NO, KC_NO, KC_NO, KC_NO,
        MT(MOD_LALT,KC_0), KC_6, KC_7, KC_P8, KC_T, KC_NO, KC_NO, KC_NO, KC_NO, KC_NO,
        KC_G, KC_J, KC_I, KC_G, KC_B, KC_NO, KC_NO, KC_NO, KC_NO, KC_NO,
                    KC_NO, KC_NO, KC_NO, KC_NO, KC_NO, KC_NO
    ),
    [6] = LAYOUT(
        KC_NO, KC_NO, KC_UP, KC_NO, KC_NO, KC_NO, KC_NO, KC_MS_UP, KC_NO, KC_NO,
        KC_NO, KC_LEFT, KC_DOWN, KC_RGHT, KC_NO, KC_MS_LEFT, KC_MS_DOWN, KC_MS_UP, KC_MS_RIGHT, KC_NO,
        KC_NO, KC_NO, KC_NO, KC_NO, KC_NO, KC_MS_WH_LEFT, KC_MS_WH_DOWN, KC_MS_WH_UP, KC_MS_WH_RIGHT, KC_NO,
                    TO(0), KC_NO, KC_NO, KC_MS_BTN3, KC_MS_BTN2, KC_MS_BTN1
    ),
    [7] = LAYOUT(
        KC_NO, KC_NO, KC_NO, KC_NO, KC_NO, KC_NO, KC_NO, KC_NO, KC_NO, KC_NO,
        KC_NO, KC_NO, KC_NO, KC_NO, KC_NO, KC_NO, KC_NO, KC_NO, KC_NO, KC_NO,
        KC_NO, KC_NO, KC_NO, KC_NO, KC_NO, KC_NO, KC_NO, KC_NO, KC_NO, KC_NO,
                    KC_NO, KC_NO, KC_NO, KC_NO, KC_NO, KC_NO
    ),
    [8] = LAYOUT(
        KC_NO, KC_NO, KC_NO, KC_NO, KC_NO, KC_NO, KC_NO, KC_NO, KC_NO, KC_NO,
        KC_NO, KC_NO, KC_NO, KC_NO, KC_NO, KC_NO, KC_NO, KC_NO, KC_NO, KC_NO,
        KC_NO, KC_NO, KC_NO, KC_NO, KC_NO, KC_NO, KC_NO, KC_NO, KC_NO, KC_NO,
                    KC_NO, KC_NO, KC_NO, KC_NO, KC_NO, KC_NO
    ),
    [9] = LAYOUT(
        KC_NO, KC_NO, KC_NO, KC_NO, KC_NO, KC_NO, KC_NO, KC_NO, KC_NO, KC_NO,
        KC_NO, KC_NO, KC_NO, KC_NO, KC_NO, KC_NO, KC_NO, KC_NO, KC_NO, KC_NO,
        KC_NO, KC_NO, KC_NO, KC_NO, KC_NO, KC_NO, KC_NO, KC_NO, KC_NO, KC_NO,
                    KC_NO, KC_NO, KC_NO, KC_NO, KC_NO, KC_NO
    )
};

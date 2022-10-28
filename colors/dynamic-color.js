const { create_opacity_controlled_color } = require("./utils.ts");

const PRIMARY_PREFIX = 'p';
const SECONDARY_PREFIX = 's';
const TERTIARY_PREFIX = 't';

let dynamic_colors = {
  primary: {
    50: create_opacity_controlled_color(`--${PRIMARY_PREFIX}-50`),
    100: create_opacity_controlled_color(`--${PRIMARY_PREFIX}-100`),
    200: create_opacity_controlled_color(`--${PRIMARY_PREFIX}-200`),
    300: create_opacity_controlled_color(`--${PRIMARY_PREFIX}-300`),
    400: create_opacity_controlled_color(`--${PRIMARY_PREFIX}-400`),
    500: create_opacity_controlled_color(`--${PRIMARY_PREFIX}-500`),
    600: create_opacity_controlled_color(`--${PRIMARY_PREFIX}-600`),
    700: create_opacity_controlled_color(`--${PRIMARY_PREFIX}-700`),
    800: create_opacity_controlled_color(`--${PRIMARY_PREFIX}-800`),
    900: create_opacity_controlled_color(`--${PRIMARY_PREFIX}-900`),
  },
  secondary: {
    50: create_opacity_controlled_color(`--${SECONDARY_PREFIX}-50`),
    100: create_opacity_controlled_color(`--${SECONDARY_PREFIX}-100`),
    200: create_opacity_controlled_color(`--${SECONDARY_PREFIX}-200`),
    300: create_opacity_controlled_color(`--${SECONDARY_PREFIX}-300`),
    400: create_opacity_controlled_color(`--${SECONDARY_PREFIX}-400`),
    500: create_opacity_controlled_color(`--${SECONDARY_PREFIX}-500`),
    600: create_opacity_controlled_color(`--${SECONDARY_PREFIX}-600`),
    700: create_opacity_controlled_color(`--${SECONDARY_PREFIX}-700`),
    800: create_opacity_controlled_color(`--${SECONDARY_PREFIX}-800`),
    900: create_opacity_controlled_color(`--${SECONDARY_PREFIX}-900`),
  },
  tertiary: {
    50: create_opacity_controlled_color(`--${TERTIARY_PREFIX}-50`),
    100: create_opacity_controlled_color(`--${TERTIARY_PREFIX}-100`),
    200: create_opacity_controlled_color(`--${TERTIARY_PREFIX}-200`),
    300: create_opacity_controlled_color(`--${TERTIARY_PREFIX}-300`),
    400: create_opacity_controlled_color(`--${TERTIARY_PREFIX}-400`),
    500: create_opacity_controlled_color(`--${TERTIARY_PREFIX}-500`),
    600: create_opacity_controlled_color(`--${TERTIARY_PREFIX}-600`),
    700: create_opacity_controlled_color(`--${TERTIARY_PREFIX}-700`),
    800: create_opacity_controlled_color(`--${TERTIARY_PREFIX}-800`),
    900: create_opacity_controlled_color(`--${TERTIARY_PREFIX}-900`),
  },
};

module.exports = {
    dynamic_colors
}

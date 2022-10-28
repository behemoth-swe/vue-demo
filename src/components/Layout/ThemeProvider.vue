<template>
  <div :style="css_theme_config">
    <slot />
  </div>
</template>

<script lang="ts">
import { color_scheme } from "@/../colors/colors-scheme";
import { defineComponent } from "vue";

export type Theme = {
  primary: keyof typeof color_scheme;
  tertiary: keyof typeof color_scheme;
  secondary: keyof typeof color_scheme;
};

const create_css_theme_config = (theme: Theme) => {
  let css_color_map: { [key: string]: string } = {};

  Object.entries(color_scheme[theme.primary]).forEach(
    ([intensity, color]) => (css_color_map[`--p-${intensity}`] = color)
  );

  Object.entries(color_scheme[theme.secondary]).forEach(
    ([intensity, color]) => (css_color_map[`--s-${intensity}`] = color)
  );

  Object.entries(color_scheme[theme.tertiary]).forEach(
    ([intensity, color]) => (css_color_map[`--t-${intensity}`] = color)
  );

  return css_color_map;
};

export default defineComponent({
  name: "ThemeProvider",
  data() {
    return {
      theme: {
        primary: "blue",
        secondary: "green",
        tertiary: "gray",
      } as Theme,
    };
  },
  computed: {
    css_theme_config(): Record<string, string> {
      return create_css_theme_config(this.theme);
    },
  },
});
</script>

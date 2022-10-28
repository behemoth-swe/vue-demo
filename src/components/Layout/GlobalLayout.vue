<template>
  <div class="min-h-screen bg-tertiary-800">
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "GlobalLayout",
  props: {},
});
</script>

<template>
  <label class="flex cursor-pointer gap-2">
      <IconSun/>
      <input type="checkbox" value="night" class="toggle theme-controller" />
      <IconMoon/>
      <span class="sr-only">Switch to light / dark version</span>
  </label>
</template>

<script setup lang="ts">
// Import components
import IconSun from  "./icons/IconSun.vue";
import IconMoon from "./icons/IconMoon.vue";

import { useDark } from "@vueuse/core";
const isDark = useDark({
  selector: 'html',
})

</script>


<template>
  <div>
    <input type="checkbox" name="light-switch" v-model="isDark" class="light-switch sr-only" />
    <label class="flex items-center justify-center cursor-pointer w-8 h-8 bg-slate-100 hover:bg-slate-200 dark:bg-slate-700 dark:hover:bg-slate-600/80 rounded-full" for="light-switch">
      <IconSun/>
      <IconMoon/>
      <span class="sr-only">Switch to light / dark version</span>
    </label>
  </div>
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


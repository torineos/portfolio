<template>
  <RouterView v-slot="{ Component, route }">
   <NavigationBar v-if="route.meta.attached" > </NavigationBar>
      <main>
   
      <!-- <Transition :name="route.meta.attached ? 'fade' : ''" mode="out-in"> -->
        <component :is="Component" :key="route.path" />
      <!-- </Transition> -->

   
    </main>
  <FooterBar v-if="route.meta.attached"> </FooterBar>

 </RouterView>
</template>

<script setup lang="ts">
// Import tailwind.css
import "./tailwind.css";

//import components
import NavigationBar from "@/components/NavigationBar.vue";
import FooterBar from "@/components/FooterBar.vue";

import { defineComponent, Transition } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
</script>
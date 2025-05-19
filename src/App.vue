<template>
   <NavBar v-if="route.meta.attached" > </NavBar>
  <main>
    <RouterView v-slot="{ Component, route }">
      <Transition :name="route.meta.attached ? 'fade' : ''" mode="out-in">
        <component :is="Component" :key="route.path" />
      </Transition>
    </RouterView>
  </main>
  <FooterBar v-if="route.meta.attached" />

  <p>AAAAA</p>

</template>

<script setup lang="ts">
// Import tailwind.css
import "./style.css";

//import components
import NavigationBar from "@/components/NavigationBar.vue";
import Footer from "@/components/FooterBar.vue";

import { defineComponent, Transition } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
</script>
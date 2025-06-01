<template>
  <nav class="navbar bg-base-100 shadow-md shadow-primary/50 sticky fixed z-10 top-0 left-0 w-full">
    <div class="navbar-start">
      <RouterLink
        :to="{ name: 'Home' }"
        aria-label="Home page link"
        @click.native="handleNativeClick"
      >
        <button class="button-navbar">Accueil</button>
      </RouterLink>
    </div>
    <div class="navbar-center hidden ml-auto md:flex justify-end">
      <RouterLink
        :to="{ name: 'Skill' }"
        aria-label="Skills page link"
        @click.native="handleNativeClick"
      >
        <button class="button-navbar">Competences</button>
      </RouterLink>

      <RouterLink
        :to="{ name: 'CV' }"
        aria-label="Online CV"
        @click.native="handleNativeClick"
      >
        <button class="button-navbar">CV</button>
      </RouterLink>

      <RouterLink
        :to="{ name: 'About me' }"
        aria-label="About me page link"
        @click.native="handleNativeClick"
      >
        <button class="button-navbar">A propos</button>
      </RouterLink>

      <RouterLink
        :to="{ name: 'Projects' }"
        aria-label="Projects page link"
        @click.native="handleNativeClick"
      >
        <button class="button-navbar">Projets</button>
      </RouterLink>

      <RouterLink
        :to="{ name: 'Video en anglais' }"
        aria-label="English video page link"
        @click.native="handleNativeClick"
      >
        <button class="button-navbar">Video</button>
      </RouterLink>
    </div>

    <div class="navbar-end">
      <div class="ml-auto flex md:hidden">
        <CollapsibleHiddenMenu/>
      </div>
      <ThemeToggle class="pl-2" />
    </div>

  </nav>

</template>

<script setup lang="ts">
import ThemeToggle from "./ThemeToggle.vue";
import CollapsibleHiddenMenu from "./CollapsibleHiddenMenu.vue";

function handleNativeClick(evt: Event) {
  evt.stopPropagation();
  evt.stopImmediatePropagation();
  evt.preventDefault();
}
</script>

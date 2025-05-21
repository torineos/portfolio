<template>
  <nav>
    <div>
      <RouterLink
        class="nav-link button-link about-link block hover:text-blue-400 dark:text-blue-600"
        :to="{ name: 'Home' }"
        aria-label="Home page link"
        @click.native="handleNativeClick"
      >
        <button class="button-navbar">
          Accueil
        </button>
      </RouterLink>

      <RouterLink
        class="nav-link button-link about-link block hover:text-blue-400 dark:text-blue-600"
        :to="{ name: 'Skill' }"
        aria-label="Skills page link"
        @click.native="handleNativeClick"
      >
        Competences
      </RouterLink>

      <RouterLink
        class="nav-link button-link about-link block hover:text-blue-400 dark:text-blue-600"
        :to="{ name: 'CV' }"
        aria-label="Online CV"
        @click.native="handleNativeClick"
      >
        CV
      </RouterLink>

      <RouterLink
        class="nav-link button-link about-link block hover:text-blue-400 dark:text-blue-600"
        :to="{ name: 'About me' }"
        aria-label="About me page link"
        @click.native="handleNativeClick"
      >
        A propos
      </RouterLink>

      <RouterLink
        class="nav-link button-link about-link block hover:text-blue-400 dark:text-blue-600"
        :to="{ name: 'Projects' }"
        aria-label="Projects page link"
        @click.native="handleNativeClick"
      >
        Projets
      </RouterLink>

      <RouterLink
        class="nav-link button-link about-link block hover:text-blue-400 dark:text-blue-600"
        :to="{ name: 'Video en anglais' }"
        aria-label="English video page link"
        @click.native="handleNativeClick"
      >
        Video en anglais
      </RouterLink>
    </div>
    <div>
      <ThemeToggle />
    </div>
  </nav>
</template>

<script setup lang="ts">
import ThemeToggle from "./ThemeToggle.vue";

function handleNativeClick(evt: Event) {
  evt.stopPropagation();
  evt.stopImmediatePropagation();
  evt.preventDefault();
}
</script>

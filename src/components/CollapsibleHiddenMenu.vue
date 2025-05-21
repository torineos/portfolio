<template>
  
  <div class="dropdown dropdown-end mr-2">
    <div tabindex="0" role="button" class="btn">
    <IconMenuDropdown  />
    </div>

      <ul
        tabindex="0"
        class="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
      >
        <li>
          <RouterLink
            :to="{ name: 'Skill' }"
            aria-label="Skills page link"
            @click.native="handleNativeClick"
          >
            Competences
          </RouterLink>
        </li>
        <li>
          <RouterLink
            :to="{ name: 'CV' }"
            aria-label="Online CV"
            @click.native="handleNativeClick"
          >
            CV
          </RouterLink>
        </li>
        <li>
          <RouterLink
            :to="{ name: 'About me' }"
            aria-label="About me page link"
            @click.native="handleNativeClick"
          >
            A propos
          </RouterLink>
        </li>

        <li>
          <RouterLink
            :to="{ name: 'Projects' }"
            aria-label="Projects page link"
            @click.native="handleNativeClick"
          >
            Projets
          </RouterLink>
        </li>
        <li>
          <RouterLink
            :to="{ name: 'Video en anglais' }"
            aria-label="English video page link"
            @click.native="handleNativeClick"
          >
            Video
          </RouterLink>
        </li>
      </ul>

  </div>
</template>

<script setup lang="ts">
import IconMenuDropdown from "./icons/IconMenuDropdown.vue";

function handleNativeClick(evt: Event) {
  evt.stopPropagation();
  evt.stopImmediatePropagation();
  evt.preventDefault();
}
</script>

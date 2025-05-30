<template>
  <div class="hero bg-base-200 min-h-screen" style="background-image: url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp);">
    <div class="hero-content flex-col lg:flex-row-reverse">
      <img
        src="/public/photo_basse_qualite.webp"
        class="max-w-sm rounded-lg shadow-2xl mask mask-squircle"
      />
      <div class="glass glass-blur rounded-box rounded-sm">
        <h1 class="text-5xl font-bold">Portfolio de Makoto MATHIOT</h1>
        <p class="py-6">
          Etudiant en BUT3 Réseaux et Télécommunications <br />
          J'ai {{ new Date().getFullYear() - 2004 }} ans.
        </p>
        <button class="btn btn-primary">Get Started</button>
      </div>
    </div>
  </div>

</template>

<script setup lang="ts">
// import SkillVue from "/src/views/SkillVue.vue";
import IconShield from "@/components/icons/IconShield.vue";
//.toLocaleDateString('fr-FR')
</script>

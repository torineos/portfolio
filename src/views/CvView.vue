<script setup lang="ts">
</script>

<template>
    <button type="button" class="btn btn-primary" :disabled="counting" @click="startCountdown">
      <vue-countdown v-if="counting" :time="60000" @end="onCountdownEnd" v-slot="{ totalSeconds }">Téléchargement possible dans {{ totalSeconds }}.</vue-countdown>
      <span v-else>Téléchargement du CV en .pdf</span>
    </button>
    <p>coucou</p>
</template>
  
<script>
  export default {
    data() {
      return {
        counting: false,
      };
    },
    methods: {
      startCountdown: function () {
        this.counting = true;
      },
      onCountdownEnd: function () {
        this.counting = false;
        
      },
    },
  };
</script>
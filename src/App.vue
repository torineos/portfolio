<!-- 
  <script setup >
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
</script>
 -->

<script lang="ts">
import { defineComponent } from 'vue';
import HelloWorld from './components/HelloWorld.vue';
import { useRoute } from 'vue-router';
import CvView from './views/CvView.vue';

export default defineComponent({
  components:{
    HelloWorld
  }
})

const route = useRoute();
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />
    </div>

    <div>
      <CvView/>
    </div>

  </header>

  <main>    
    <p>Bienvenue sur mon portfolio.</p>
  </main>

  <footer>
    <address>
        <strong>Mathiot Makoto</strong><br>
        <a href="mailto:mathiotmakoto@gmail.com">mathiotmakoto@gmail.com</a>
    </address>
  </footer>
  <a href="#">Retour en haut de la page</a>
</template>


<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>

<template>
  <div
    class="bg-[url(/Node.js.webp)] bg-fixed h-24 mx-auto overflow-y-scroll border-x"
  ></div>
  <div class="grid grid-cols-3">
    <ProjectsNavbar />
    <div class="mx-20 pt-6 mt-5 flex flex-col col-span-2">
      <p class="text">
        (<a
          class="link link-hover"
          href="https://github.com/SAWARATSUKI/KawaiiLogos"
          >Source Node.js</a
        >)
      </p>
      <p class="text-3xl text-center">Portfolio</p>
      <p class="text-2xl underline pt-6">Introduction:</p>
      <p class="text-justify">
        Ce site a subi une grosse refonte entre 2024 et 2025, et tout son
        fonctionnement à été revu. Initialement, il a été développé avec du HTML
        pur et Bootstrap comme librairie CSS. Maintenant, il utilise les
        frameworks Vue.js, Vite et Tailwind pour le CSS. J'ai du apprendre sur
        le tas comment fonctionnait Vue et Tailwind. Tailwind est simple
        d'utilisation en incluant directement la stylisation dans les
        indentations HTML, mais pour les composants revenant régulièrement (ie
        boutons), il est possible comme avec du CSS classique de créer un
        fichier de classe. <br />

        <a class="link link-hover" href="https://github.com/torineos/portfolio"
          >Code source du site ici !</a
        >
      </p>
      <br />
      <p class="text-2xl underline pt-6">Objectifs du projet:</p>
      <p class="text-justify">
        Mon objectif principal était de remplacer mon ancien portfolio par une
        version plus à jour. J'ai profité de l'occasion pour revoir toute la
        structure technique du fonctionnement du site.
      </p>
      <img class="object-contain md:object-cover" src="/ancien-site.webp" />
      <p class="text-xs text-center">Page d'accueil de l'ancien site.</p>
      <p class="text-justify">
        Je voulais également découvrir et tester des nouvelles choses au niveau
        du développement, en essayant de ne pas trop me reposer sur des assets
        préfaits pour comprendre. J'ai tout de même utilisé daisy-UI pour la
        facilité de changement de thèmes et typage des couleurs simplifiée et
        globalisée sur tout le projet.
      </p>
      <br />
      <p class="text-2xl underline pt-6">Travail effectué:</p>
      <p class="text-justify">
        J'ai passé énormément de temps dans un premier temps à me documenter sur
        les frameworks javascripts utilisés fréquemment pour le développement
        web (Angular.js, React.js...). J'ai choisi Vue.js grâce à sa structure
        de fichier, qui ressemble au même endroit le templating HTML, style et
        scripting facilement compréhensible.<br />
        Pour le style, j'ai choisi facilement TailwindCSS car il me permettait
        de personnaliser directement le contenu HTML dans ses balises. Cela
        facilite énormément la stylisation car il est possible de controller au
        niveau de chaque composant ses effets et une facilité de lecture dans le
        code.
      </p>
      <br />
      <div class="mockup-code w-full">
        <pre data-prefix="1"><code>&lt;template&gt;</code></pre>
        <pre data-prefix="2"><code>&lt;/template&gt;</code></pre>
        <pre data-prefix="3"><code></code></pre>
        <pre data-prefix="4"><code>&lt;style&gt;</code></pre>
        <pre data-prefix="5"><code>&lt;/style&gt;</code></pre>
        <pre data-prefix="6"><code></code></pre>
        <pre data-prefix="7"><code>&lt;script setup lang="ts" &gt;</code></pre>
        <pre data-prefix="8"><code>&lt;/script&gt;</code></pre>
      </div>
      <p class="text-xs text-center">
        Structure d'un fichier .vue avec le langage du script défini sur
        typescript.
      </p>

      <p class="text-2xl underline pt-6">Compétences acquises:</p>
      <ul class="list-disc">
        <li>Apprendre en autodidacte les frameworks .js, notamment Vue.</li>
        <li>
          Manipuler le Typescript pour des animations ou des éléments
          dynamiques.
        </li>
        <li>Utiliser TailwindCSS.</li>
      </ul>

      <p class="text-2xl underline pt-6">Conclusion:</p>
      <p class="text-justify mb-8">
        Je continue à maintenir pour l'instant le site car il me sert surtout de
        test pour (re)-découvrir le développement Front-end, en découvrant
        toujours plus de fonctionnalités de Vue.js. Je souhaite éventuellement
        créer avec mes nouvelles connaissances un autre site web personnel mais
        cette fois ci centré sur mes passions.
      </p>
      <p class="text-base-content/50">
        S'il y a des bugs (il y en a forcément) ou des features qui pourraient
        être améliorés n'hésitez pas à me le remonter directement par mail ou en
        ouvrant une Issue sur le projet Github.
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import ProjectsNavbar from "/src/components/ProjectsNavbar.vue";
</script>

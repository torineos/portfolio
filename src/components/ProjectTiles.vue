<template>
  <div class="divider divider-primary font-bold ">Stages</div>
  <div class="grid grid-cols-2 gap-4 justify-items-center">
    <div class="max-w-sm rounded overflow-hidden shadow-lg">
      <img
        class="w-full"
        src="/my-msp_logo.webp"
        alt="Sunset in the mountains"
      />
      <div class="px-6 py-4">
        <RouterLink
          :to="{ name: 'StageMyMSP' }"
          aria-label="My-MSP internship link"
          @click.native="handleNativeClick"
        >
          <div class="font-bold text-xl mb-2">My-MSP</div>
          <p class="text-700 text-base">Stage de 8 semaines.</p>
          <div class="card-actions justify-end">
            <button class="btn btn-primary">En savoir plus</button>
          </div>
        </RouterLink>
      </div>
    </div>
    <div class="max-w-sm rounded overflow-hidden shadow-lg">
      <img class="w-full" src="/ILL_logo.webp" alt="Sunset in the mountains" />
      <div class="px-6 py-4">
        <RouterLink
          :to="{ name: 'StageILL' }"
          aria-label="ILL internship link"
          @click.native="handleNativeClick"
        >
          <div class="font-bold text-xl mb-2">Institut Laue Langevin</div>
          <p class="text-700 text-base">Stage de 16 semaines.</p>
          <div class="card-actions justify-end">
            <button class="btn btn-primary">En savoir plus</button>
          </div>
        </RouterLink>
      </div>
    </div>
  </div>
  <div class="divider divider-primary font-bold ">Projets Universitaire</div>
  <div class="divider divider-primary">BUT RT - 1ère année</div>
  <div class="grid grid-cols-4 gap-4 justify-items-center">
    <div class="max-w-sm rounded overflow-hidden shadow-lg">
      <img
        class="w-full"
        src="/Miniat_Poster.webp"
        alt="Sunset in the mountains"
      />
      <div class="px-6 py-4">
        <RouterLink
          :to="{ name: 'ProjectPoster' }"
          aria-label="Poster project link"
          @click.native="handleNativeClick"
        >
          <div class="font-bold text-xl mb-2">Réalisation d'un poster</div>
          <p class="text-700 text-base">
            Sensibilisation à l'hygiène informatique.
          </p>
          <div class="card-actions justify-end">
            <button class="btn btn-primary">En savoir plus</button>
          </div>
        </RouterLink>
      </div>
    </div>
    <div class="max-w-sm rounded overflow-hidden shadow-lg">
      <img
        class="w-full"
        src="/miniat_initresinfo.webp"
        alt="Sunset in the mountains"
      />
      <div class="px-6 py-4">
        <RouterLink
          :to="{ name: 'ProjectPoster' }"
          aria-label="Poster project link"
          @click.native="handleNativeClick"
        >
          <div class="font-bold text-xl mb-2">Schématisation d'un réseau</div>
          <p class="text-700 text-base">
            Initiation aux réseaux informatiques.
          </p>
          <div class="card-actions justify-end">
            <button class="btn btn-primary">En savoir plus</button>
          </div>
        </RouterLink>
      </div>
    </div>
    <div class="max-w-sm rounded overflow-hidden shadow-lg">
      <img
        class="w-full"
        src="/miniat_traitementdata.webp"
        alt="Sunset in the mountains"
      />
      <div class="px-6 py-4">
        <RouterLink
          :to="{ name: 'ProjectPoster' }"
          aria-label="Poster project link"
          @click.native="handleNativeClick"
        >
          <div class="font-bold text-xl mb-2">Introduction à Python</div>
          <p class="text-700 text-base">Manipuler et parser des données.</p>
          <div class="card-actions justify-end">
            <button class="btn btn-primary">En savoir plus</button>
          </div>
        </RouterLink>
      </div>
    </div>
    <div class="max-w-sm rounded overflow-hidden shadow-lg">
      <img
        class="w-full"
        src="/miniat_traitementdata.webp"
        alt="Sunset in the mountains"
      />
      <div class="px-6 py-4">
        <RouterLink
          :to="{ name: 'ProjectPoster' }"
          aria-label="Poster project link"
          @click.native="handleNativeClick"
        >
          <div class="font-bold text-xl mb-2">Développement d'une application web</div>
          <p class="text-700 text-base">Mise en place d'une solution informatique pour une entreprise.</p>
          <div class="card-actions justify-end">
            <button class="btn btn-primary">En savoir plus</button>
          </div>
        </RouterLink>
      </div>
    </div>
  </div>
  <div class="divider divider-secondary">BUT RT - 2ème année</div>
  <div
    class="grid grid-cols-4 md:grid-cols-3 gap-4 flex place-content-around justify-center"
  >
    <div class="card bg-base-100 w-80 shadow-sm shrink">
      <figure>
        <img src="/public/miniat_traitementdata.webp" alt="Poster" />
      </figure>
      <div class="card-body">
        <h2 class="card-title">Programmation bla bla</h2>
        <p>
          A card component has a figure, a body part, and inside body there are
          title and actions parts
        </p>
        <div class="card-actions justify-end">
          <button class="btn btn-primary">En savoir plus</button>
        </div>
      </div>
    </div>
  </div>
  <div class="divider divider-accent">BUT RT - 3ème année</div>
  <div class="grid grid-cols-2 gap-4 justify-items-center">
    <div class="max-w-sm rounded overflow-hidden shadow-lg">
      <img
        class="w-full"
        src="/Node.js.webp"
        alt="Sunset in the mountains"
      />
      <div class="px-6 py-4">
        <RouterLink
          :to="{ name: 'ProjectPortfolio' }"
          aria-label="Portfolio project link"
          @click.native="handleNativeClick"
        >
          <div class="font-bold text-xl mb-2">Portfolio</div>
          <p class="text-700 text-base">Refonte de ce site Web.</p>
          <div class="card-actions justify-end">
            <button class="btn btn-primary">En savoir plus</button>
          </div>
        </RouterLink>
      </div>
    </div>
    <div class="max-w-sm rounded overflow-hidden shadow-lg">
      <img class="w-full" src="/ILL_logo.webp" alt="Sunset in the mountains" />
      <div class="px-6 py-4">
        <RouterLink
          :to="{ name: 'StageILL' }"
          aria-label="ILL internship link"
          @click.native="handleNativeClick"
        >
          <div class="font-bold text-xl mb-2">Institut Laue Langevin</div>
          <p class="text-700 text-base">Stage de 16 semaines.</p>
          <div class="card-actions justify-end">
            <button class="btn btn-primary">En savoir plus</button>
          </div>
        </RouterLink>
      </div>
    </div>
  </div>
  
</template>

<script setup lang="ts">
function handleNativeClick(evt: Event) {
  evt.stopPropagation();
  evt.stopImmediatePropagation();
  evt.preventDefault();
}
</script>

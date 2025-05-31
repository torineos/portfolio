<template>
  <div class="divider divider-primary">Stages</div>
  <div
    class="grid grid-cols-4 md:grid-cols-3 gap-4 flex place-content-around justify-center"
  >
    <div class="card bg-base-100 w-96 shadow-sm flex-auto">
      <figure>
        <img src="/public/my-msp_logo.webp" alt="Poster" />
      </figure>
      <div class="card-body">
        <RouterLink
          :to="{ name: 'StageMyMSP' }"
          aria-label="My-MSP internship link"
          @click.native="handleNativeClick"
        >
          <h2 class="card-title">My-MSP</h2>
          <p>Stage de 8 semaines.</p>
          <div class="card-actions justify-end">
            <button class="btn btn-primary">En savoir plus</button>
          </div>
        </RouterLink>
      </div>
    </div>
    <div class="card bg-base-100 w-96 shadow-sm flex-auto">
      <figure>
        <img src="/public/ILL_logo.webp" alt="Poster" />
      </figure>
      <div class="card-body">
        <RouterLink
          :to="{ name: 'StageILL' }"
          aria-label="ILL internship link"
          @click.native="handleNativeClick"
        >
          <h2 class="card-title">Institut Laue Langevin</h2>
          <p>Stage de 16 semaines.</p>
          <div class="card-actions justify-end">
            <button class="btn btn-primary">En savoir plus</button>
          </div>
        </RouterLink>
      </div>
    </div>
  </div>
  <div class="divider divider-primary">Projets Universitaires</div>
  <div class="divider divider-primary">1ère année</div>
  <div class="grid grid-cols-4 md:grid-cols-3 gap-4 flex">
    <div class="card bg-base-100 w-96 shadow-sm flex-auto">
      <figure>
        <img src="/public/Miniat_Poster.webp" alt="Poster" />
      </figure>
      <div class="card-body">
        <h2 class="card-title">Réalisation d'un poster</h2>
        <p>
          A card component has a figure, a body part, and inside body there are
          title and actions parts
        </p>
        <div class="card-actions justify-end">
          <button class="btn btn-primary">En savoir plus</button>
        </div>
      </div>
    </div>
    <div class="card bg-base-100 w-96 shadow-sm flex-auto">
      <figure>
        <img src="/public/miniat_initresinfo.webp" alt="Poster" />
      </figure>
      <div class="card-body">
        <h2 class="card-title">Introduction aux schéma réseaux</h2>
        <p>
          A card component has a figure, a body part, and inside body there are
          title and actions parts
        </p>
        <div class="card-actions justify-end">
          <button class="btn btn-primary">En savoir plus</button>
        </div>
      </div>
    </div>
    <div class="card bg-base-100 w-96 shadow-sm shrink">
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
  <div class="divider divider-secondary">2ème année</div>
  <div
    class="grid grid-cols-4 md:grid-cols-3 gap-4 flex place-content-around justify-center"
  >
    <div class="card bg-base-100 w-96 shadow-sm shrink">
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
  <div class="divider divider-accent">3ème année</div>
  <div
    class="grid grid-cols-4 md:grid-cols-3 gap-4 flex place-content-around justify-center"
  >
  <div class="card bg-base-100 w-96 shadow-sm shrink">
      <figure>
        <img src="/public/miniat_traitementdata.webp" alt="Poster" />
      </figure>
      <div class="card-body">
        <RouterLink
          :to="{ name: 'ProjectPortfolio' }"
          aria-label="Portfolio project link"
          @click.native="handleNativeClick"
        >
          <h2 class="card-title">Site portfolio</h2>
          <p>
            Attaque et protection d'un réseau d'entreprise.
          </p>
          <div class="card-actions justify-end">
            <button class="btn btn-primary">En savoir plus</button>
          </div>
        </RouterLink>
      </div>
    </div>
    <div class="card bg-base-100 w-96 shadow-sm shrink">
      <figure>
        <img src="/public/miniat_traitementdata.webp" alt="Poster" />
      </figure>
      <div class="card-body">
        <RouterLink
          :to="{ name: 'ProjectPortfolio' }"
          aria-label="Portfolio project link"
          @click.native="handleNativeClick"
        >
          <h2 class="card-title">Site portfolio</h2>
          <p>
            Refonte complète de ce site web.
          </p>
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

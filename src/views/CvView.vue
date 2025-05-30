<script setup lang="ts"></script>

<template>
  <div class="place-items-center p-10">
    <button class="btn btn-primary">
      <suspense>
        <a href="/CV_MATHIOT_2024-2025.pdf"> Téléchargement du CV en .pdf </a>
        <template #fallback> Votre navigateur n'est pas compatible. </template>
      </suspense>
    </button>
  </div>
  <p>Timeline</p>
  <ul
    class="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical"
  >
    <li>
      <div class="timeline-middle">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          class="h-5 w-5"
        >
          <path
            fill-rule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
            clip-rule="evenodd"
          />
        </svg>
      </div>
      <div class="timeline-start mb-10 md:text-end">
        <time class="font-mono italic">08/2022</time>
        <div class="text-lg font-black">Lycée Vaugelas - Chambéry</div>
        Baccalauréat général, spécialités Mathématiques, Numérique et Sciences
        et Physique-Chimie (spécialité abandonnée en 1ère). Options DNL Italien,
        LV2 Italien, LV3 Espagnol.
      </div>
      <hr />
    </li>
    <li>
      <hr />
      <div class="timeline-middle">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          class="h-5 w-5"
        >
          <path
            fill-rule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
            clip-rule="evenodd"
          />
        </svg>
      </div>
      <div class="timeline-end md:mb-10">
        <time class="font-mono italic">09/2022</time>
        <div class="text-lg font-black">BUT1 RT - Saint Martin d'Hères</div>
        1ère année. BUT Réseaux et Télécommunications.
      </div>

      <hr />
    </li>
    <li>
      <hr />
      <div class="timeline-middle">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          class="h-5 w-5"
        >
          <path
            fill-rule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
            clip-rule="evenodd"
          />
        </svg>
      </div>
      <div class="timeline-start mb-10 md:text-end">
        <time class="font-mono italic">09/2023</time>
        <div class="text-lg font-black">BUT2 RT - Saint Martin d'Hères</div>
        <p>2eme année. BUT Réseaux et Télécommunications. Spécialité cybersécurité.</p>
        
        <time class="font-mono italic">02/2024</time>
        <div class="text-lg font-black">Stage de 2ème année - My-MSP</div>
        <p>Stage de 2 mois (8 semaines)</p>
        <p>Répondre aux demandes des clients et résoudre leurs problèmes. Suite
        Office, 3CX, Administration Windows.</p>
        <p>Projet de ferme Parallels, logiciel
        permettant d’utiliser d’autres systèmes d’exploitation que le sien.</p>
      </div>

      <hr />
    </li>
    <li>
      <hr />
      <div class="timeline-middle">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          class="h-5 w-5"
        >
          <path
            fill-rule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
            clip-rule="evenodd"
          />
        </svg>
      </div>
      <div class="timeline-end md:mb-10">
        <time class="font-mono italic">09/2024</time>
        <div class="text-lg font-black">BUT3 RT - Saint Martin d'Hères</div>
        <p>3eme année. BUT Réseaux et Télécommunications. Spécialité cybersécurité. </p>
        
        <time class="font-mono italic">02/2025</time>
        <div class="text-lg font-black">
          Stage de 3ème année - Institut Laue-Langevin
        </div>
        <p>Stage de 4 mois à l'ILL (16 semaines).</p>
        <p>Participation aux taches quotidiennes de
        l’équipe infra. </p>
        <p>Projet d’analyse de flux NetFlow/sFlow: génération de
        flux sFlow afin de récolter les données de télémétrie réseau avec des
        collecteurs/analyseurs (Akvorado).</p>
        
      </div>
      <hr />
    </li>
  </ul>
  <p> pouet</p>
</template>

<script setup lang="ts"></script>

<template>
  <div
    class="bg-[url(/miniat_multisites.webp)] bg-fixed h-24 mx-auto overflow-y-scroll border-x"
  ></div>

  <div class="grid grid-cols-3">
    <ProjectsNavbar />
    <div class="mx-10 mb-8 mt-5 flex flex-col col-span-2">
      <p class="text-3xl text-center">Conception d'un réseau multi-sites</p>
      <p class="text-2xl underline pt-6">Introduction:</p>
      <p class="text-justify">
        Ce projet est un travail en binôme. Ici le but est de travailler avec
        des réseaux que l'on peut typiquement retrouver en entreprise avec
        plusieurs locaux. Il devient donc nécessaire de gérer plusieurs adresses
        IP publiques (ici non pour des fins éducatives) et donc de gérer le
        filtrage réseau et la correspondance entre les deux sites distants entre
        les serveurs.
      </p>
      <br />
      <p class="text-2xl underline pt-6">Objectifs du projet:</p>
      <ul class="list-disc">
        <li>Travailler en groupe et se distribuer le travail.</li>
        <li>
          Gérer un site principal et un site secondaire dans un même domaine.
        </li>
        <li>Mettre en place une connexion VPN.</li>
        <li>Suivre un cahier des charges.</li>
      </ul>
      <br />
      <p class="text-2xl underline pt-6">Travail effectué:</p>
      <p class="text-justify">
        Ce projet est divisé en 3 parties, correspondant respectivement à 3
        maquettes.<br />
        A chaque début de maquette, nous avons réalisé un schéma
        détaillé du réseau à mettre en place et réalisé un cahier des charges
        avec les temps estimés de réalisation et le niveau de difficulté selon
        nos aises.
        <br />
        La première maquette consistait à créer les 2 sites avec lequel on
        allait installer notre infrastructure: un site principal et secondaire.
        Dans ces 2 sites se trouvaient 2 serveurs Active Directory, chacun avec
        des services différents. Nous avons également du gérer les GPO et les
        autorisations d'utilisateurs itinérants sur certains dossiers.
        <br />
        <div class="columns-1xs items-center gap-8">
        <img
          class="object-contain md:object-cover text-center aspect-square rounded-xl"
          src="/multisite_sh2.webp"
        />
      </div>
      <p class="text-xs text-center mb-8">Second schéma du projet.</p>

        La seconde maquette ne reprenait pas la structure de la première, et
        consistait à créer un réseau interne derrière un Pare-feu/Routeur
        OPNsense. Il fallait donc gérer les règles de pare-feu suffisamment
        restrictives afin de garantir la sécurité du réseau et configurer la
        traduction d'adresse IP en NAT afin de pouvoir accéder aux sites web
        déployés sur les serveurs en interne. Enfin, nous avons du configurer
        une connexion Vpn site-à-site IPSec.
        <br />
        <div class="columns-1xs items-center gap-8">
        <img
          class="object-contain md:object-cover text-center aspect-square rounded-xl"
          src="/multisite_sh3.webp"
        />
      </div>
      <p class="text-xs text-center mb-8">Dernier schéma du projet, la fusion
						de la 1ere et 2eme maquette.</p>
        La troisième maquette rassemblait les 2 premières, en installant les
        équipements de la première maquette dans l'infrastructure de la seconde.
        Un VPN nomade est configuré. A la fin du projet, il est possible après
        une connexion par VPN d'accéder au réseau interne depuis l'extérieur.
      </p>
      <br />
      <p class="text-2xl underline pt-6">Compétences acquises:</p>
      <ul class="list-disc">
        <li>Configurer des pare-feux restrictifs.</li>
        <li>
          Utiliser des règles de NAT afin de traduire les adresses IP entre les
          réseaux internes et externes.
        </li>
        <li>
          Mettre en place des réseaux privés gérés principalement par un seul
          serveur Active Directory.
        </li>
      </ul>
      <br />
    </div>
  </div>
</template>

<script setup lang="ts">

import ProjectsNavbar from "/src/components/ProjectsNavbar.vue";
</script>

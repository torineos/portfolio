<template>
  <div
    class="bg-[url(/miniat_devweb.webp)] bg-fixed h-24 mx-auto overflow-y-scroll border-x"
  ></div>
  <div class="grid grid-cols-3">
    <ProjectsNavbar />
    <div class="mx-20 pt-6 mt-5 flex flex-col col-span-2">
      <p class="text-3xl text-center">Développement d'une application web</p>
      <p class="text-2xl underline pt-6">Introduction:</p>
      <p class="text-justify">
        Ce projet est un travail en binôme. Nous devions ici répondre à un
        cahier des charges en Python + Flask pour le front-end afin de réaliser
        une application web satisfaisante.
      </p>
      <br />
      <p class="text-2xl underline pt-6">Objectifs du projet:</p>
      <ul class="list-disc">
        <li>Créer une application qui répond au cahier des charges imposé.</li>
        <li>
          Manipuler des données dans une base de donnée (ajout, modification,
          suppression).
        </li>
        <li>
          Réaliser un site web dynamique, qui change en fonction du rôle de
          l'utilisateur authentifié.
        </li>
      </ul>
      <br />
      <p class="text-2xl underline pt-6">Travail effectué:</p>
      <p class="text-justify">
        Ce projet est une mise en situation professionnelle pour réaliser une
        application web correspondante aux demandes des clients (ici des
        professeurs). Selon le projet qui nous était attribué, nous devions
        proposer des solutions informatiques pour la gestion de personnel,
        ressources humaines, ou des missions des personnels. Nous devions nous répartir les tâches
        pour être plus efficaces. Notre projet consistait à gérer les vacataires
        pour les ressources humaines de l’IUT. Notre application devait
        s’adapter en fonction de l’utilisateur connecté, et afficher/donner les
        permissions les informations qui leurs sont nécessaires (qui changent en
        fonction du rôle de l’utilisateur).
        <br />
        <div class="columns-1xs items-center gap-8">
        <img
          class="object-contain md:object-cover text-center aspect-square rounded-xl"
          src="/logged.webp"
        />
      </div>
      <p class="text-xs text-center mb-8">Accueil d'un utilisateur ayant le rôle "vacataire".</p>
        Nous avons utilisé Pycharm (édition professionnelle) pour réaliser notre
        application.
      </p>
      <br />
      <p class="text-2xl underline pt-6">Compétences acquises:</p>
      <ul class="list-disc mb-8">
        <li>
          Créer une application avec une interface compréhensible pour
          l'utilisateur.
        </li>
        <li>
          Manipuler des données dans une base de donnée (ajout, modification,
          suppression).
        </li>
        <li>S'organiser en groupe pour se répartir les tâches.</li>
        <li>
          Se répartir les tâches équitablement dans un groupe pour être plus
          efficaces.
        </li>
        <li>
          Utiliser les ressources à notre disposition pour en tirer des
          informations utiles.
        </li>
      </ul>
      <br />
    </div>
  </div>
</template>

<script setup lang="ts">
import ProjectsNavbar from "/src/components/ProjectsNavbar.vue";
</script>

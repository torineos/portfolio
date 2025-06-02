<template>
  <div
    class="bg-[url(/Miniat_Poster.webp)] bg-fixed h-24 mx-auto overflow-y-scroll border-x"
  ></div>
  <div class="grid grid-cols-3">
    <ProjectsNavbar />
    <div class="mx-20 pt-6 mt-5 flex flex-col col-span-2">
      <p class="text-3xl text-center">Réalisation d'un poster</p>
      <p class="text-2xl underline pt-6">Introduction:</p>
      <p class="text-justify">
        Ce projet est un travail en groupe. Nous devions réaliser une affiche ayant comme objectif de sensibiliser les personnes en dehors du
        domaine aux dangers informatiques.
      </p>

      <br />
      <div class="columns-1xs items-center gap-8">
        <img
          class="object-contain md:object-cover text-center aspect-square rounded-xl"
          src="/Affiche_G3B.webp"
        />
      </div>
      <p class="text-xs text-center mb-8">Rendu final de l'affiche.</p>
      <p class="text-2xl underline pt-6">Objectifs du projet:</p>
      <ul class="list-disc">
        <li>
          Connaître les risques potentiels pris par l’usager d’un environnement
          numérique.
        </li>
        <li>
          Fournir les réflexes afin de devenir un usager conscient, averti et
          responsable.
        </li>
        <li>
          Maîtriser l’hygiène informatique et les bonnes pratiques de l’usage du
          numérique avant d’aller en stage/alternance en entreprise (respect de
          la charte informatique imposée par la DSI).
        </li>
        <li>
          En tant que professionnel des services informatiques de l’entreprise,
          être capable de sensibiliser les utilisateurs et de leur faire
          connaître et accepter la charte de bon usage des moyens informatiques.
        </li>
      </ul>
      <br />
      <p class="text-2xl underline pt-6">Travail effectué:</p>
      <p class="text-justify">
        La première étape était de compléter le
        <a class="link link-hover" href="https://secnumacademie.gouv.fr/"
          >MOOC ANSSI</a
        >, afin de retenir les notions essentielles de la sécurité numérique.
        Elle était accompagnée d'une prise de notes, qui facilitait
        l'apprentissage des fondamentaux mais aussi de faire un premier
        recoupage des informations nécessaires sur notre thème, ici les
        rançongiciels. Une fois le recoupage terminé, avons utilisé le logiciel
        Gantt Project pour nous répartir les tâches entre nous et dans les
        temps.
      </p>
      <br />
      <p class="text-2xl underline pt-6">Compétences acquises:</p>
      <ul class="list-disc">
        <li>
          Vulgariser les rançongiciels de manière à sensibiliser le grand public
          et les entreprises.
        </li>
        <li>Structurer une affiche facilement lisible et agréable à voir.</li>
        <li>
          S'organiser sur un projet sur le long terme à l'aide d'un diagramme de
          Gantt.
        </li>
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
      <div class="columns-1xs items-center gap-8">
        <img
          class="object-contain md:object-cover text-center aspect-square rounded-xl"
          src="/photo_poster_2.webp"
        />
      </div>

      <p class="text-xs text-center mb-8">
        Notre affiche a fait parti des affiches désignées à être affichées dans
        le hall RT !
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import ProjectsNavbar from "/src/components/ProjectsNavbar.vue";
</script>

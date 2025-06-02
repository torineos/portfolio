<template>
  <div
    class="bg-[url(/miniat_traitementdata.webp)] bg-fixed h-24 mx-auto overflow-y-scroll border-x"
  ></div>
  <div class="grid grid-cols-3">
    <ProjectsNavbar />
    <div class="mx-20 pt-6 mt-5 flex flex-col col-span-2">
      <p class="text-3xl text-center">Introduction à Python</p>
      <p class="text-2xl underline pt-6">Introduction:</p>
      <p class="text-justify">
        Ce projet est un travail individuel. Le but ici est d'apprendre à coder
        en Python en réalisant un projet pour mettre en application
        immédiatement nos connaissances.
      </p>
      <br />
      <p class="text-2xl underline pt-6">Objectifs du projet:</p>
      <ul class="list-disc">
        <li>
          Traiter des données fournies par une entreprise (ici simulée par les
          professeurs), les extraire et les présenter de manière simple et
          compréhensible.
        </li>
        <li>
          Automatiser des tâches et des calculs à l'aide de programmes python.
        </li>
        <li>
          Suivre un cahier des charges fourni (ici aussi par les professeurs).
        </li>
        <li>
          Se mettre en situation d'entreprise, avec des dates butoirs pour
          chaque étape.
        </li>
      </ul>
      <br />
      <p class="text-2xl underline pt-6">Travail effectué:</p>
      <p class="text-justify">
        Nous devions extraire des données des fichiers fournis par les
        professeurs et les manipuler différemment en fonction du projet que nous
        nous voyons attribués. J'avais pour ma part un projet qui consistait à
        aider un enseignant préparer sa fiche de service à partir de l'emploi du
        temps ADE.
      </p>
      <br />
      <div class="columns-1xs items-center gap-8">
        <img
          class="object-contain md:object-cover text-center aspect-square rounded-xl"
          src="/donnees.webp"
        />
      </div>
      <p class="text-xs text-center mb-8">Extrait des données fournies.</p>

      <p class="text-justify">
        Il fallait que la fiche soie personnelle selon les professeurs. Nous
        avions travaillé avec Pycharm et Git. Personnellement c'était la
        première fois que j'interagissais avec les versionnements Git, et j'ai
        trouvé ce système très pratique.
      </p>
      <br />
      <p class="text-2xl underline pt-6 ">Compétences acquises:</p>
      <ul class="list-disc mb-8">
        <li>
          Utiliser Pycharm et Git, se familiariser avec les environnements
          virtuels.
        </li>
        <li>
          Programmer en suivant un cahier des charges et en respectant des
          échéances.
        </li>
      </ul>
      <br />
    </div>
  </div>
</template>

<script setup lang="ts">
import ProjectsNavbar from "/src/components/ProjectsNavbar.vue";
</script>

<template>
  <div
    class="bg-[url(/miniat_initresinfo.webp)] bg-fixed h-24 mx-auto overflow-y-scroll border-x"
  ></div>
  <div class="grid grid-cols-3">
    <ProjectsNavbar />
    <div class="mx-20 pt-6 mt-5 flex flex-col col-span-2">
      <p class="text-3xl text-center">Schématisation d'un réseau</p>
      <p class="text-2xl underline">Introduction:</p>
      <p class="text-justify">
        Ce projet est un travail individuel. Le but ici était de prendre en main
        et comprendre l'architecture réseau et réaliser nos premiers schémas sur
        un logiciel de simulation.
      </p>
      <br />
      <div class="columns-1xs items-center gap-8">
        <img
          class="object-contain md:object-cover text-center aspect-square rounded-xl"
          src="/pt.webp"
        />
      </div>
      <p class="text-xs text-center mb-8">Screen de Packet Tracer.</p>
      <p class="text-2xl underline pt-6">Objectifs du projet:</p>
      <ul class="list-disc">
        <li>Mettre en place virtuellement un réseau informatique.</li>
        <li>
          Comprendre les différents équipements mis à disposition et leur
          utilité.
        </li>
        <li>
          Utiliser les connaissances techniques acquises pour configurer les
          équipements du réseau pour aboutir à un fonctionnement stable.
        </li>
      </ul>
      <br />
      <p class="text-2xl underline pt-6">Travail effectué:</p>
      <p class="text-justify">
        Je devais suivre des scénarios de difficultés variables et croissants au
        fur et à mesure correspondant à des configurations de plus en plus
        spécifiques. Le logiciel utilisé est Cisco Packet Tracer, un logiciel de
        simulation de réseau qui permet d'imager à l'aide de composants et
        d'assistance sur le plan de la cohérence un futur réseau à mettre en
        place. Il y avait 3 difficultés pour les scénario: du niveau 1 avec des
        avertissements détaillés en cas d'erreur, niveau 2 avec moins de
        détails, et le niveau 3 qui ne signale rien du tout, comme en situation
        réelle.
      </p>
      <br />
      <p class="text-2xl underline pt-6">Compétences acquises:</p>
      <ul class="list-disc mb-8">
        <li>
          Construire un réseau informatique avec les configurations imposées.
        </li>
        <li>
          Analyser notre travail pour trouver les erreurs lors de travaux sur
          des scénarios de niveau élevé.
        </li>
        <li>
          Persévérer et comprendre de ses erreurs.
        </li>
      </ul>
      <br />
    </div>
  </div>
</template>

<script setup lang="ts">
import ProjectsNavbar from "/src/components/ProjectsNavbar.vue";
</script>

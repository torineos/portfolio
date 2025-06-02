<template>
  <div
    class="bg-[url(/miniat_soc.webp)] bg-fixed h-24 mx-auto overflow-y-scroll border-x"
  ></div>

  <div class="grid grid-cols-3">
    <ProjectsNavbar />
    <div class="mx-10 mb-8 mt-5 col-span-2">
      <p class="text-3xl text-center">Jouer et contrer une cyberattaque.</p>
      <p class="text-2xl underline pt-6">Introduction:</p>
      <p class="text-justify">
        Ce projet est un travail individuel. Le projet se découpe en 2 étapes
        principales: une attaque sur un système d'information avec une faille de
        sécurité puis des actions préventives pour éviter, détecter et
        éventuellement bloquer les attaques.
      </p>
      <br />
      <p class="text-2xl underline">Objectifs du projet:</p>
      <ul class="list-disc">
        <li>
          Utiliser la méthode du brute-force pour deviner un mot de passe faible
          avec un nom d'utilisateur générique.
        </li>
        <li>Découvrir des vulnérabilités différentes.</li>
        <li>
          Pouvoir réagir en cas d'attaque/connaitre les bonnes pratiques pour en
          éviter le plus posssible.
        </li>
        <li>
          Rédiger un mémento au fur et à mesure de l'avancement dans le projet
          pour en garder une trace.
        </li>
      </ul>
      <br />
      <p class="text-2xl underline">Travail effectué:</p>
      <p class="text-justify">
        Le réseau visé est une version miniature d'un réseau "classique"
        d'entreprise avec une LAN et DMZ, et un site web exposé sur Internet sur
        la DMZ.
      </p>
      <br />
      <div class="columns-1xs items-center gap-8">
        <img
          class="object-contain md:object-cover text-center aspect-square rounded-xl"
          src="/schemares_soc.webp"
        />
      </div>
      <p class="text-xs text-center mb-8">Schéma réseau du projet.</p>
      <p class="text-justify">
        Ce site web présentait une faille de sécurité qui permettait de prendre
        le controle du serveur à distance et à partir de celui ci, permettre à
        l'attaquant de naviguer dans le réseau et de changer de machine
        contrôlée (pivoting).
        <br />
        Cette faille se trouvait au niveau de Javascript, qui est très présent
        dans les sites. A partir de cette faille, il a été possible de créer une
        connexion persistante, passer de la dmz au lan et de compromettre au
        final l'Active Directory Windows.
        <br />
      </p>
      <div class="columns-1xs items-center gap-8">
        <img
          class="object-contain md:object-cover text-center aspect-square rounded-xl"
          src="/schemares2_soc.webp"
        />
      </div>
      <p class="text-xs text-center mb-8">
        Schéma réseau du projet pendant la partie défense.
      </p>

      <p class="text-justify">
        Ici une plateforme
        <a
          class="link link-hover"
          href="https://www.elastic.co/fr/elastic-stack/"
          >ELK (Elastic Logstash Kibana)</a
        >
        est rajoutée, qui permet une supervision du réseau en quasi temps réel
        des machines sur lequel l'agent est installé. Depuis cette plateforme,
        avec les bon paramètres et de la configuration est en capacité d'arrêter
        la première attaque effectuée dans le premier temps tout en remontant
        des alertes de danger pour l'administrateur. ELK est compatible avec
        plusieurs plugins pour par exemple élargir son champ de capacités en
        terme de fichiers d'informations supplémentaire déchiffrées pour la
        lecture humaine.
        <br />
        Pour conclure, j'ai rédigé un rapport d'alerte cybersécurité (factice)
        qui en situation réelle est destiné à l'ANSSI pour prendre des mesures
        de sécurité suite à une attaque.
      </p>
      <br />
      <p class="text-2xl underline">Compétences acquises:</p>
      <ul class="list-disc">
        <li>
          Comprendre plus d'éléments du fonctionnement des systèmes Linux.
        </li>
        <li>S'échapper d'un container.</li>
        <li>Rédiger un rapport de cyberattaque pour l'ANSSI.</li>
      </ul>
      <br />
    </div>
  </div>
</template>

<script setup lang="ts">
import IconBook from "/src/components/icons/IconBook.vue";
import ProjectsNavbar from "/src/components/ProjectsNavbar.vue";
</script>

<template>
  <div
    class="bg-[url(/my-msp_logo.webp)] bg-fixed h-24 mx-auto overflow-y-scroll border-x"
  ></div>
  <div class="grid grid-cols-3">
    <ProjectsNavbar />
    <div class="mx-20 mb-8 mt-5 flex flex-col  col-span-2">
      <p class="text-3xl text-center mb-8">Stage My-MSP</p>
      <br />
      <div class="columns-1xs items-center gap-8">
        <img
        class="object-contain md:object-cover text-center aspect-square rounded-xl"
        src="/page_de_garde.webp"
      />
      </div>

      <p class="text-xs text-center mb-8">Page de garde du rapport.</p>
      <p class="text-2xl underline">Pourquoi ce stage ?</p>
      <p class="text-justify">
        Dans le cadre de mes études en BUT RT, j'ai du réaliser pendant la 2ème
        année un stage de 8 semaines minimum afin d'acquérir de l'expérience en
        entreprise. J'ai utilisé mon réseau familial pour trouver l'entreprise
        <a class="link link-hover" href="https://www.my-msp.com">My-MSP</a>
        (qui a mainenant rejoint
        <a class="link link-hover" href="https://aldene.fr/">Aldene</a>), qui
        m'a pris en stage pour cette période.
      </p>
      <br />
      <p class="text-2xl underline pt-6">Présentation de l'entreprise:</p>
      <p class="text-justify">
        My-MSP est une société d'infogérance située à Annecy et Chambéry. Elle
        s'occupe des aspects informatiques pour des clients n'ayant pas d'équipe
        informatique en interne pour la plupart. Cela part à de l'installation
        de matériaux informatiques (switchs, routeurs, pare-feu, serveurs...)
        jusqu'au support pendant la durée déterminée du contrat.
      </p>
      <br />
      <p class="text-2xl underline pt-6">Tâches:</p>
      <p class="text-justify">
        J’ai intégré l’équipe technique en tant que stagiaire et ai interagi
        avec des multiples facettes du support technique : la configuration des
        ordinateurs en général, gestion des utilisateurs, les produits Microsoft
        en général tel que la suite Office, la configuration de téléphones et
        des callflow, et les interventions sur sites pour en lister
        quelques-uns. L'entièreté des machines manipulées tournaient sur
        Windows.
      </p>
      <br />
      <p class="text-2xl underline pt-6">Mon projet:</p>
      <p class="text-justify">
        Mon but était de créer un accès sécurisé distant à une ferme
        informatique accessible depuis un grand nombre de périphériques (Pc
        fixe/portable, téléphone) … Ce projet a été intégralement documenté pour
        l'entreprise afin d'expliquer les outils utilisés, qui sont
        <a class="link link-hover" href="https://www.scalecomputing.com/"
          >Scale Computing</a
        >
        et
        <a class="link link-hover" href="https://www.parallels.com">Parallels</a
        >.
        <br />
        Voici-ci dessous une interface de connexion vers le serveur distant mis
        en place avec Parallels et Active Directory. Une fois connecté, je peux
        naviguer sur n'importe quelle application publiée par le serveur
        Parallels RAS, faisant autorité sur la ferme partagée. Et ce depuis
        n'importe quel appareil de n'importe quelle système d'exploitation !
        <br />
      </p>
      <div class="columns-1xs items-center gap-8">
      <img
        class="object-contain md:object-cover text-center aspect-square rounded-xl"
        src="/stage_connexion_tel.webp"
      />
      </div>

      <p class="text-xs text-center mb-8">
        Onglet de connexion de Parallels Client depuis un smartphone.
      </p>
      <br />
      <p class="text-2xl underline pt-6">Retour d'expérience:</p>
      <p class="text-justify">
        Je voudrais pouvoir recommencer à travailler dans ce milieu, c’était une
        expérience très enrichissante professionnellement et socialement. Les
        équipes techniques et commerciales ont été très professionelles et
        gentilles avec moi, et c’était un plaisir de travailler à leurs côtés
        pendant cette courte période.
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import ProjectsNavbar from "/src/components/ProjectsNavbar.vue";
</script>

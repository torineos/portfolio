<template>
  <div
    class="bg-[url(/ILL_logo.webp)] bg-fixed h-24 mx-auto overflow-y-scroll border-x"
  ></div>
  <div class="mx-20 mb-8 mt-5">
    <p class="text-3xl text-center">Stage ILL</p>
    <p class="text-2xl underline">Pourquoi ce stage ?</p>
    <p class="text-justify">
      Dans le cadre de mes études en BUT RT, j'ai du réaliser pendant la 3ème
      année un stage de 16 semaines minimum qui conclut mes études dans cette
      formation. J'ai utilisé le réseau de l'université pour trouver une offre
      de stage dans le service informatique de l'<a
        class="link link-hover"
        href="https://www.ill.eu/"
        >ILL</a
      >, qui m'a pris en stage pour cette période.
    </p>
    <br />
    <p class="text-2xl underline">Présentation de l'entreprise:</p>
    <p class="text-justify">
      L'Institut Laue-Langevin (appellé communément ILL) est un institut de
      recherche centré sur la science des neutrons situé à Grenoble. Il possède
      un réacteur nucléaire actif périodiquement sous forme de cycles,
      permettant aux scientifiques de faire des recherches grâce aux neutrons
      générés et aux machines d'acquisition présentes sur place. Le projet est
      supporté par la France, l'Allemagne et le Royaume-Uni.
    </p>
    <br />
    <p class="text-2xl underline">Tâches:</p>
    <p class="text-justify">
      J'ai intégré le groupe Infrasctuctures du service informatique de l'ILL.
      J'ai consacré une grande partie de mon temps au projet, mais j'ai pu
      participer aux tâches quotidiennes de l'équipe. Le quotidien comportait la
      supervision des machines et des services pour assurer la continuité. Un
      roulement était effectué dans l'équipe pour faire du support technique et
      assister le service Helpdesk.
    </p>
    <br />
    <p class="text-2xl underline">Mon projet:</p>
    <p class="text-justify">
      Mon projet consistait à récupérer des inforamtions sur le traffic des
      réseaux internes. Le but du rassemblement de ces informations est de
      pouvoir dimensionner l'infrastructure du réseau en accordance avec la
      quantité de donnée et débit nécessaire observée. Cela permet également une
      visualisation du réseau en temps réel, pour regarder les tendances
      générales du traffic ou observer les anomalies par rapport au but d'un
      équipement par exemple.<br />
      Pour obtenir les résultats désirés, j'ai mis en place un protocole de
      capture de flux sFlow qui échantillone un nombre de paquets aléatoires à
      une intervalle donnée et envoyé ces flux vers un serveur dédié à leur
      analyse. Pour recolter et analyser les flux, on a utilisé
      <a class="link link-hover" href="https://github.com/akvorado/akvorado"
        >Akvorado</a
      >, une solution Open-source.
    </p>
    <img
      class="object-contain md:object-cover text-center"
      src="/akvorado_timeseries.webp"
    />

    <p class="text-xs text-center">
      Exemple de vue dans Akvorado (screen récupéré sur le Github du projet).
    </p>
    <br />
    <p class="text-2xl underline">Retour d'expérience:</p>
    <p class="text-justify">
      Mon expérience dans le groupe infrastructutres a été très enrichissante.
      C'était l'occasion pour moi de découvrir une partie de l'architecture
      (physique et digitale) très vaste. Je me suis rendu compte que de nombreux
      outils utilisés là bas on été manipulés en cours, et donc j'ai pu les
      revoir dans un environnement en production. L'accent sur les solutions
      open-source et du self-hosted afin d'avoir le contrôle sur les logiciels
      sur le contenu ou les données stockées m'ont permis de découvrir ce monde
      et de vouloir y contribuer.
    </p>
    <br />

    <p class="text-base-content/50">
      Le stage étant toujours en cours et un avenant étant en discussion, cette
      page est susceptible d'évoluer.
    </p>
  </div>
</template>

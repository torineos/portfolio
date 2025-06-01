<template>
  <div
    class="bg-[url(/miniat_wincybersec.webp)] bg-fixed h-24 mx-auto overflow-y-scroll border-x"
  ></div>
  <div class="mx-20 mb-8 mt-5">
    <p class="text-3xl text-center">Sécurisation d'un système d'information.</p>
    <p class="text-2xl underline">Introduction:</p>
    <p class="text-justify">
      Ce projet est un travail en groupe. Nous devions réaliser une affiche en
      groupe ayant comme objectif de sensibiliser des personnes en dehors du
      domaine aux dangers informatiques.
    </p>
    <br />
    <p class="text-2xl underline">Objectifs du projet:</p>
    <ul class="list-image-[url(/src/components/icons/IconBook.vue)]">
      <li>Comprendre les nombreuses failles que Active Directory contient.</li>
      <li>
        Développer sa culture cybersécurité en manipulant plusieurs outils.
      </li>
      <li>
        Mettre en place des solutions sécurisées à des protocoles obsolètes et
        les configurer.
      </li>
    </ul>
    <br />
    <p class="text-2xl underline">Travail effectué:</p>
    <p class="text-justify">
      Durant cette SAE, j'ai principalement fait de la recherche afin de me
      renseigner sur les nombreux protocoles existants et outils pour les
      contourner. Je suis passé du pentesting à la sécurisation afin de
      comprendre le fonctionnement et le but des attaques/dangers qu'ils
      représentent sur un serveur en production.
      <br />
      Par exemple, une personne malveillante pourrait se faire passer pour le
      DNS sur le réseau avec vos appareils en production et de cette manière
      récupérer des informations sur votre session (envoi de trames
      empoisonnées). Cependant en changeant quelques paramètres, il est possible
      d'éviter ce genre d'attaques.
      <br />
      Je ne me suis pas limité sur des attaques sur le serveur car notre but
      dans la finalité en cybersécurité est de lutter contre ces failles et donc
      d'utiliser des solutions plus difficiles à compromettre, en utilisant des
      protocoles plus sécurisés. Par exemple, il est facile de voir les
      informations d'un utilisateur circuler en LDAP (protocole de gestion de
      l'annuaire Active Directory) en clair, et donc pour le sécuriser (chiffrer
      les informations) il faut exiger des signatures du coté du serveur et des
      négociations de signatures du coté du client. Il est possible de mettre en
      place LDAPS, une version sécurisé de LDAP avec des clients compatibles
      avec. Il est nécessaire de créer un certificat à partir du modèle
      "Authentification Kerberos" par exemple avec les réglages adaptés et de
      l'ajouter dans le magasin de certificat de l'ordinateur local.
      <br />
      Le serveur demande donc de s'authentifier avec un compte du domaine, et la connexion se réalise. Ceci n'est qu'un exemple de ce que j'ai vu, puisque Active Directory est un sujet vaste et complexe. Il est nécessaire de rester à jour sur les nouvelles failles et les nouveaux moyens de les fixer puisque de nombreuses infrastructures se reposent dessus pour bien fonctionner. 
    </p>
    <br />
    <p class="text-2xl underline">Compétences acquises:</p>
    <ul class="list-image-[url(/src/components/icons/IconBook.vue)]">
      <li>Utiliser des outils de pentesting avec Kali. </li>
      <li>
        Manipuler des scripts Powershell. 
      </li>
      <li>
        Analyser des trames sur Wireshark afin de surveiller le réseau.
      </li>
      <li>
        Se renseigner sur le monde de la cybersécurité afin de se rendre compte des nouveaux dangers au plus vite.
      </li>
      <li>
        Veiller à la sécurité du serveur et de son domaine en effectuant des mesures préventives..
      </li>
    </ul>
    <br />
  </div>
</template>

<script setup lang="ts">
import IconBook from "/src/components/icons/IconBook.vue";
</script>

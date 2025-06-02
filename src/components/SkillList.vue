<template>
  <ul
    class="menu rounded-box mx-auto divide-y divide-blue-200 grow rounded-box shadow-md mx-20 mb-8 mt-5"
  >
    <li class="flex">
      <div>
        <IconChip class="stroke-primary" />
        <span class="ml-3 mr-2.5 w-2 h-7 bg-primary rounded-r-md"></span>
        <div>
          <div>Systèmes et applications</div>
          <div class="text-xs uppercase font-semibold opacity-60">
            Administration et gestion des services
          </div>
        </div>
        <div class="list-col-wrap">
          <p>- Administration de postes Linux et Windows</p>
          <p>- Déploiement de services avec Docker-compose</p>
          <p>- Automatisation avec Ansible</p>
        </div>
      </div>
      <div>
        <IconWifi class="stroke-secondary" />
        <span class="ml-3 mr-2.5 w-2 h-7 bg-secondary rounded-r-md"></span>
        <div>
          <div>Réseaux</div>
          <div class="text-xs uppercase font-semibold opacity-60">
            Configuration
          </div>
        </div>
        <div class="list-col-wrap">
          <p>- Configuration d'équipements L2/L3 et pare-feu</p>
          <p>- Virtualisation avec Proxmox et VMware</p>
          <p>- Automatisation avec Ansible</p>
        </div>
      </div>
      <div>
        <IconSignal class="stroke-primary" />
        <span class="ml-3 mr-2.5 w-2 h-7 bg-primary rounded-r-md"></span>
        <div>
          <div>Télécommunications</div>
          <div class="text-xs uppercase font-semibold opacity-60">
            Compréhension des protocoles
          </div>
        </div>
        <div class="list-col-wrap ">
          <p>- Téléphonie</p>
          <p>- Analyse du protocole NFC</p>
        </div>
      </div>
      <div>
        <IconComputer class="stroke-secondary" />
        <span class="ml-3 mr-2.5 w-2 h-7 bg-secondary rounded-r-md"></span>
        <div>
          <div>Développement</div>
          <div class="text-xs uppercase font-semibold opacity-60">
            Languages de programmation
          </div>
        </div>
        <div class="list-col-wrap ">
          <p>- Python, Java </p>
          <p>- API REST, tests unitaires</p>
          <p>- Backend: Bases de données SQL Postgres</p>
          <p>- Web: HTML et CSS avec un framework javascript (Vue.js)</p>
        </div>
      </div>

      <div>
        <IconShield class="stroke-primary" />
        <span class="ml-3 mr-2.5 w-2 h-7 bg-primary rounded-r-md"></span>
        <div>
          <div>Cybersécurité</div>
          <div class="text-xs uppercase font-semibold opacity-60">
            Red et Blue team
          </div>
        </div>
        <div class="list-col-wrap ">
          <p>- Red team: Analyse de réseau avec Nmap, Fuzzing de site web avec Dirbuster, utilisation de CVE avec Metasploit...</p>
          <p>- Blue team: Hardening Windows et Linux, Mise en place d'un SIEM (ELK), Solutions de backup (Zabbix), Supervision (PRTG)</p>
        </div>
      </div>
    </li>
  </ul>
  <br/>
</template>

<script setup lang="ts">
import IconShield from "@/components/icons/IconShield.vue";
import IconComputer from "@/components/icons/IconComputer.vue";
import IconChip from "@/components/icons/IconChip.vue";
import IconWifi from "@/components/icons/IconWifi.vue";
import IconSignal from "@/components/icons/IconSignal.vue";
</script>

<template>
    <footer class="footer sm:footer-horizontal footer-center bg-base-200 text-base-content rounded p-10">
         <nav class="grid grid-flow-col gap-4">
            <a href="mailto:mathiotmakoto@gmail.com" class="link link-hover">Send me an email ?</a>
    
        </nav>
       
            <p class="made-with">
                Made with <a class="link link-hover" href="https://vuejs.org" >VueJS</a> & <a class="link link-hover" href="https://vitejs.dev" >Vite</a>. Styled with Tailwind and daisyUi.
            </p>
        
        <aside>
            <p>
                Makoto Mathiot
            </p>
            <p> 
                Copyright © 2022 - {{new Date().getFullYear()}}
            </p>
        </aside>
    </footer>
</template>

<script setup lang="ts">

</script>
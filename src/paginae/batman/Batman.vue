<script setup lang="ts">
import { House } from '@lucide/vue';
import { RouterLink } from 'vue-router';

</script>

<template>
    
<div class="batman">
        
        <RouterLink to="/">
            <House class="icon-home"/>
        </RouterLink>
        
    <header class="titulus">
        <h1>Batman</h1>
        <div id="titulus-batman" class="titulus-img"> </div>
        <p>El unico e inigualable, <br> el misterioso Caballero Oscuro</p>

    </header>

</div>

</template>

<style scoped>

.batman {
    font-family: 'Arial', sans-serif;
    background-color: rgb(27, 26, 27);
    height: 100vh;
    color: rgb(240, 243, 246);
}

.icon-home {
    width: 3rem;
    height: 3rem;
    color: rgb(255, 255, 255);
}

.icon-home:hover {
    color: rgb(248, 246, 246);
    background-color: rgb(73, 72, 72);
}

.titulus-img {
  background-size: 100% 100%;
  background-position: center center;
  background-image: url("../imagines/batman/batman.jpg");
  min-height: 100vh;
}

.titulus-img:hover {
  background-size: 130% 130%;
}

.titulus > h1 {
  position: absolute;
  top: 30%;
  width: 100%;
  text-align: center;
  font-size: 4.40rem; 
  color: rgb(219, 210, 210);
  pointer-events:none; 
  font-family: 'batman', sans-serif;
}

.titulus > p {
  position: absolute;
  top: 70%;
  width: 100%;
  text-align: center;
  font-size: 1.15rem;
  color: rgb(159, 152, 152);
  pointer-events:none;
  font-family: 'batman', sans-serif;
  display: none;
}

@media (min-width: 768px) {
  .titulus > p {
    display: block;
  }
  .titulus > h1 {
    color: rgb(254, 254, 3);
  }
}

</style>
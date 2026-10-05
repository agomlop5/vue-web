<script setup lang="ts">
import Button from '@/components/ui/button/Button.vue';

</script>

<template>

    <div class="fondo-home"> 

      <h1> 
        <span>Diseño </span> Web y 
        <br>
         Apps <span>Interactivas</span> 2026
      </h1>

        <div class="botones">
            <Button>
            <RouterLink to="/indecision">Sí o no </RouterLink>
            </Button>

            <Button variant="domus" class="mr-2">
            <RouterLink to="/batman">Batman</RouterLink>
            </Button>

            <Button>
            <RouterLink to="/simpsons">Simpsons</RouterLink>
            </Button>

            <Button>
            <a href="https://www.upv.es/">UPV</a>
            </Button>

        </div>

    </div>
    
</template>

<style scoped>


h1 {
    font-size: 3rem;
}


.fondo-home {
  background-color: rgb(27, 26, 27);
  height: 100vh;
  color: rgb(240, 243, 246);
}


.botones > Button {
  margin-right: 0.5rem;
  background-color: rgb(102, 103, 114);
} 


.botones > Button:hover {
  background-color: rgba(82, 84, 93, 0.599);
} 





</style>
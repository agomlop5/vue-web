<script setup lang="ts">
import { useFavoritosStore } from '@/stores/useFavoritos';
import { storeToRefs } from 'pinia';

const favoritosStore = useFavoritosStore()
const {favoritos} = storeToRefs(favoritosStore)

</script>



<template>
    <div>
        <ul class="list-disc list-inside mt-6 ml-8 ">
            <li v-for="personaje in favoritos" :key="personaje.id">
                {{ personaje.nomen }}
            </li>
        </ul>
    </div>
</template>



<style scoped>

</style>
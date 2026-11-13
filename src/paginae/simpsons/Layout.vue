<script setup lang="ts">
import LogoSimpsons from '@/components/LogoSimpsons.vue';
import Button from '@/components/ui/button/Button.vue';
import { useFavoritosStore } from '@/stores/useFavoritos';
import {Heart} from '@lucide/vue'
import { storeToRefs } from 'pinia';
import { Badge } from '@/components/ui/badge'

const favoritosStore = useFavoritosStore()
const {totalFavoritos} = storeToRefs(favoritosStore)

</script>

<template>
    <div class="grid grid-rows-[auto_1fr_auto] min-h-screen">
        
        <header class="bg-simpsons-yellow w-full border border-black ">
           
           <div class="flex flex-col items-center md:flex-row justify-between p-3 md:px-20 mx:auto max-w-page">
            <LogoSimpsons estilus="w-[8rem] h-auto"/>   

            <div class="flex gap-6 pt-3 items-center">
                <RouterLink 
                    to="/simpsons/favoritos"
                    active-class="font-bold"
                    class="relative flex items-center gap-1">
                    <Heart class="w-4 h-4 "/>
                    Favorites
                    <Badge variant="destructive" class="h-5 w-5 absolute -top-2 -right-2.5">
                        {{ totalFavoritos }}
                    </Badge>
                </RouterLink>

                <RouterLink 
                    to="/simpsons/gallery"
                    active-class="font-bold">
                    Characters
                </RouterLink>

                <RouterLink 
                    to="/simpsons/about"
                    active-class="font-bold">
                    About
                </RouterLink>  

                <Button variant="tertiarius" size="elongatis">
                    <RouterLink to="/simpsons">Exit</RouterLink>
                </Button>
                </div>
            
            </div>
        </header>

        <main>
            <RouterView/>
        </main>

        <footer class="bg-simpsons-yellow w-full border border-black text-center py-6">
        
            <div>
                <strong>All Rights Reserved</strong> - Oh Lord Matt Groening - 1989-2026
            </div>

            <small>
                This app was done by Alba Gómez
            </small>
        </footer>

    </div>
</template>



<style scoped>

</style>
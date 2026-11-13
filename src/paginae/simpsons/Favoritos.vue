<script setup lang="ts">
import { useFavoritosStore } from '@/stores/useFavoritos';
import { storeToRefs } from 'pinia';
import {Heart, Trash2} from '@lucide/vue';
import { Button } from "@/components/ui/button";
import { useRouter } from 'vue-router';
import { Card, CardContent} from '@/components/ui/card'


const {favoritos, totalFavoritos} = storeToRefs(useFavoritosStore())

const {limpiarFavoritos, quitarFavorito} = useFavoritosStore () 

const router = useRouter()

</script>



<template>
    <div class="w-full max-w-[1400px] mx-auto my-8 px-5 md:px-20">
     <div class="text-center mb-2">
        <h1 class="font-bold text-3xl lg:text-5xl mb-4 flex items-center justify-center gap-3">
          Mis favoritos
            <Heart class="w-10 h-10 fill-simpsons-red text-simpsons-red"></Heart>
        </h1>

        <p>
            Tienes <span class="font-bold text-xl text-simpsons-red">{{ totalFavoritos }}</span>
          {{ totalFavoritos === 1 ? 'personaje favorito' : 'personajes favoritos' }}
        </p>

     </div>   

        <div v-if="totalFavoritos > 0" class="flex mb-6 justify-end">
            <Button 
              @click="limpiarFavoritos"
              variant="outline"
              class="bg-simpsons-red hover:bg-red-700 text-white border border-black hover:text-white transition-colors"
            >
                <Trash2 class="w-4 h-4 mr-2"/>
                Limpiar todos 
            </Button>
        </div>

        <div v-if="totalFavoritos > 0" class="grid gap-6 mx-auto justify-items-center" style="grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));">
            <Card
                v-for="character in favoritos"
                :key="character.id"
                class="cursor-pointer w-[220px] h-[280px] hover:bg-simpsons-red hover:text-white transition-colors group relative"
            >
                <CardContent 
                @click="router.push(`/simpsons/gallery/${character.id}`)"  
                class="flex flex-col items-center gap-1 w-full px-0"
                >
                <img 
                    :src="`/imagines/simpson/${character.imago}`"
                    class="w-48 h-42 object-cover object-top  bg-simpsons-yellow rounded-t-md border border-black cursor-pointer"
                />
                <h2 class="font-medium text-lg cursor-pointer">{{ character.nomen }}</h2>
                    
                <!-- Botón quitar de favoritos -->
                <Button
                    @click.stop="quitarFavorito(character.id)"
                    size="sm"
                    variant="outline"
                    class="mt-1 bg-white hover:bg-red-100 border-black text-black group-hover:bg-red-500 group-hover:text-white"
                >
                    <Heart class="w-4 h-4 mr-1 fill-current" />
                    Quitar
                </Button>
                </CardContent>
            </Card>
        </div>

        <div v-else class="text-center py-20">
            <Heart class="w-24 h-24 mx-auto text-gray-400"></Heart>
            <h2 class="text-2xl font-bols text-gray-400 mb-2">
                No tienes personajes aún
            </h2>
            <p class="text-gray-500 mb-6 ">
                Explora la colección y agrega tu personajes favoritos
            </p>

            <Button class=" bg-simpsons-yellow hover:bg-simpsons-red text-black hover:text-white border border-2 border-black transition-colors"
              @click="router.push('/simpsons/gallery')"
            >    
                Ir a la colección
            </Button>
        </div>

    </div>
</template>



<style scoped>

</style>
import {type Character } from "@/paginae/simpsons/Data";
import {defineStore} from "pinia";
import { computed, ref } from "vue";

export const useFavoritosStore = defineStore('favoritos', () => {

    const favoritos = ref<Character[]>([])

    const esFavorito = (characterId:number) => {
       return favoritos.value.some(fav => fav.id === characterId) 
    }

    const agregarFavorito = (character:Character) => {
        if (!favoritos.value.find(fav => fav.id === character.id)){
            favoritos.value.push(character)
            guardarEnLocalStorage()
        }
    }

    const quitarFavorito = (characterId:number) => {
        const index = favoritos.value.findIndex(fav => fav.id === characterId)
    
        if (index !== -1){
            favoritos.value.splice(index,1)
            guardarEnLocalStorage()
        }
    }

    const toggleFavorito = (character:Character) => {
        if (esFavorito(character.id)) {
            quitarFavorito(character.id)
        } else {
            agregarFavorito(character)
        }
    }

    const limpiarFavoritos = () => {
        favoritos.value = []
        guardarEnLocalStorage()
    }

    const guardarEnLocalStorage = () => {
        localStorage.setItem('simpsons-favoritos', JSON.stringify(favoritos.value))
    }

    const cargarDesdeLocalStorage = () => {
        const stored = localStorage.getItem('simpsons-favoritos')
    
        if (stored){
            favoritos.value = JSON.parse(stored)
        }
    }

    cargarDesdeLocalStorage()

    return {
        favoritos,
        totalFavoritos : computed(() => favoritos.value.length),
        esFavorito,
        agregarFavorito,
        quitarFavorito,
        toggleFavorito,
        limpiarFavoritos

    }


})
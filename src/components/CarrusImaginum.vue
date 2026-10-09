<script setup lang="ts">
import { Card, CardContent } from '@/components/ui/card'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'

import Autoplay from 'embla-carousel-autoplay'

interface Props {
  photos: string[];
  basePath: string;
  autoplayDelay?: number;
  lopp?: boolean;
  dragFree?: boolean;
}

const props = defineProps<Props>(); {
    autoplayDelay: 2000;
    lopp: true;
     dragFree: true;
}

</script>

<template>
    <Carousel 
        class="w-full max-w-nd md:max-w-2xl lg:max-w-4xl bg-gray-900"
        :opts="{ 
           dragFree: props.dragFree,
            loop: props.lopp
        }"
        :plugins="[Autoplay({
        delay: props.autoplayDelay,
        })]"
      >
        <CarouselContent>
          <CarouselItem v-for="(photo, i) in props.photos" :key="i">
            <div class="p-1">
              <Card class="bg-gray-900 border-none">
                <CardContent class="flex aspect-6/4 items-center justify-center p-6">
                  <img 
                  :src="`${props.basePath}/${photo}.jpg`"
                   class="w-full h-full object-cover rounded-lg"
                   :alt="`Imagen ${ i + 1} de Batman`"
                  />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious class="hidden md:flex  items-center bg-gray-900 text-white"/>
        <CarouselNext class="hidden md:flex  bg-gray-900 text-white"/>
      </Carousel>
</template>

<style scoped></style>
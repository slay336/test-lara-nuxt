<script setup lang="ts">
import CarouselItem from "./CarouselItem.vue";
import Slider from "~/components/Slider";

import { ICarouselItem } from "stores/carousel/types";

const props = defineProps<{
  items: Array<ICarouselItem>,
}>();

</script>

<template>
  <section class="flex flex-1 items-center">
    <div class="w-full"
    >
      <Slider
        class="z-10"
        :items-to-show="1"
        :autoplay="4000"
        :transition="500"
        :wrap-around="true"
      >
        <Slide
          v-for="item in props.items"
          :key="item.id"
        >
          <CarouselItem :item="item" />
        </Slide>
      </Slider>
    </div>
  </section>
</template>

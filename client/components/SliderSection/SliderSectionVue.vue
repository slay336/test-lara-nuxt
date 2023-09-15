<script setup lang="ts">

import CarouselItem from "./CarouselItem.vue";
import ButtonBox from "./ButtonBox.vue";

import { ICarouselItem } from "stores/carousel/types";

const props = defineProps<{
  items: Array<ICarouselItem>,
}>();

const items = props.items.map((item) => {
  item.isActive = false;
  return item;
});

</script>

<template>
  <section class="flex flex-1 items-center">
    <div class="w-full"
    >
      <Carousel
        class="z-10"
        :items-to-show="1"
        autoplay="4000"
        transition="500"
        :wrap-around="true"
      >
        <Slide
          v-for="item in props.items"
          :key="item.id"
          :item="item"
        >
          <CarouselItem :item="item" />
        </Slide>
        <template #addons>
          <navigation />
        </template>
      </Carousel>
    </div>
  </section>
</template>

<style>
.carousel__prev,
.carousel__next {
  box-sizing: content-box;
  border: 2px solid white;
  color: white;
  margin-left: 30px;
  margin-right: 30px;
  border-radius: 20px;
  transition: all .1s;
  width: 50px;
  height: 50px;
}

.carousel__prev:hover,
.carousel__next:hover {
  border-color: #115E59;
  background-color: #0D9488;
}
</style>

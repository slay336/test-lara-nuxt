<script setup lang="ts">
import CarouselItem from "./CarouselItem.vue";
import Slider from "~/components/Slider";

import { ICarouselItem } from "stores/carousel/types";

const items: Ref<Array<ICarouselItem>> = ref([
  {
    id: 1,
    title: "We Provide\nWelding Services",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio omnis fugit, sed tempora praesentium commodi error, hic recusandae repudiandae neque ad molestias, atque veritatis labore quae eveniet autem in",
    button: {
      caption: "Contact Us",
      href: "#",
    }
  },
  {
    id: 2,
    title: "We Provide\nWelding Services",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio omnis fugit, sed tempora praesentium commodi error, hic recusandae repudiandae neque ad molestias, atque veritatis labore quae eveniet autem in",
    button: {
      caption: "Contact Us",
      href: "#",
    }
  },
  {
    id: 3,
    title: "We Provide\nWelding Services",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio omnis fugit, sed tempora praesentium commodi error, hic recusandae repudiandae neque ad molestias, atque veritatis labore quae eveniet autem in",
    button: {
      caption: "Contact Us",
      href: "#",
    }
  }
]);

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
          v-for="item in items"
          :key="item.id"
        >
          <CarouselItem :item="item" />
        </Slide>
      </Slider>
    </div>
  </section>
</template>

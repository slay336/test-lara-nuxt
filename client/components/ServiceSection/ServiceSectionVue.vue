<script setup lang="ts">
import ServiceCard from "./ServiceCard.vue";

import { IServiceCarouselItem } from "~/stores/carousel/types";

const props = defineProps<{
  items: Array<IServiceCarouselItem>,
}>();

</script>

<template>
  <section class="py-[90px] px-0 block">
    <div class="min-[1200px]:max-w-[1170px] min-[992px]:max-w-[960px] min-[768px]:max-w-[720px] min-[576px]:max-w-[540px] w-full px-[15px] mx-auto">
      <div class="mb-[35px] items-center text-center flex flex-col">
        <h2 class="relative font-bold text-[2rem] mb-[0.5rem] leading-[1.2] mt-0">
          Our Services
        </h2>
        <p class="px-0 min-[992px]:flex-[0_0_66.7%] min-[992px]:max-w-[66.7%] relative w-full mt-0 mb-[1rem]">
          If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything
        </p>
      </div>
      <div class="block w-full z-[1] relative">
        <div class="relative overflow-hidden">
          <Slider
            class="z-10"
            :items-to-show="3"
            :autoplay="3000"
            :transition="500"
            :wrap-around="true"
            :with-navigation="false"
            active-p-b-color="#0D9488"
            inactive-p-b-color="lightgray"
            hover-p-b-color="#0D9488"
            pagination-button-shape="circle"
            :increase-active-card-size="true"
            active-card-bg-color="#0D9488"
            active-card-font-color="white"
          >
            <Slide
              v-for="item in items"
              :key="item.id"
            >
              <ServiceCard :item="item" />
            </Slide>
              
          </Slider>
        </div>
      </div>
      <div class="flex justify-center mt-[45px]">
        <a
          href=""
          class="inline-block py-[10px] px-[45px] bg-teal-700 transition-all duration-300 border-[1px] border-teal-700 no-underline text-white hover:bg-transparent hover:!text-teal-700"
        >
          Read More
        </a>
      </div>
    </div>
  </section>
</template>

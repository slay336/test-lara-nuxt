<script setup lang="ts">
import ClientComment from "./ClientComment.vue";

import { IClientComment } from "~/stores/client_comment/types";

const comments: Ref<Array<IClientComment>> = ref([
  {
    id: 1,
    image: "/images/client.jpg",
    name: "Jone Mark",
    comment: "Editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by",
  },
  {
    id: 2,
    image: "/images/client.jpg",
    name: "Jone Mark",
    comment: "Editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by",
  },
  {
    id: 3,
    image: "/images/client.jpg",
    name: "Jone Mark",
    comment: "Editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by",
  },
] as Array<IClientComment>);

</script>

<template>
  <section class="py-[90px] px-0 block">
    <div class="min-[1200px]:max-w-[1170px] min-[992px]:max-w-[960px] min-[768px]:max-w-[720px] min-[576px]:max-w-[540px] w-full px-[15px] mx-auto">
      <div class="mb-[35px] items-center text-center flex flex-col">
        <h2 class="relative font-bold text-[2rem] mb-[0.5rem] mt-0 leading-[1.2]">
          Testimonial
        </h2>
        <hr class="mx-[1rem] border-none border-t-[1px] border-[rgba(0,0,0,0.1)] box-content h-0 overflow-visible">
      </div>
      <div class="relative">
        <div class="relative w-full overflow-hidden">
          <Slider
            class="z-10"
            :items-to-show="1"
            :autoplay="4000"
            :transition="500"
            :wrap-around="true"
            :with-pagination="false"
            arrow-button-color="black"
            arrow-button-border-color="black"
            arrow-button-hover-border-color="black"
            arrow-button-hover-background-color="lightgray"
          >
            <Slide
              v-for="item in comments"
              :key="item.id"
            >
              <ClientComment :item="item" />
            </Slide>
          </Slider>
        </div>
      </div>
    </div>
  </section>
</template>

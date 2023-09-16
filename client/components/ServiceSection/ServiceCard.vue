<script setup lang="ts">
import { IServiceCarouselItem } from "~/stores/carousel/types";

const props = defineProps<{
  item: IServiceCarouselItem,
}>();

</script>

<template>
  <div class="w-[380px] m-[10px] text-center shadow-[0_0_5px_2px_rgba(0,0,0,0.15)] py-[25px] px-[15px] transition-all duration-300 flex flex-col items-center">
    <div class="w-[65px] h-[65px] flex justify-center items-center">
      <img
        :src="props.item.image"
        alt=""
        class="max-h-full max-w-full transition-all duration-300 block w-full align-middle border-none"
      />
    </div>
    <div class="mt-[15px]">
      <h5 class="font-bold text-xl mb-[0.5rem] leading-[1.2] mt-0">
        {{ props.item.title }}
      </h5>
      <p class="m-0">
        {{ props.item.description }}
      </p>
    </div>
  </div>
</template>

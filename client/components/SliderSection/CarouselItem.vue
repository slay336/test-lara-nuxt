
<script setup lang="ts">
import { ref, Ref, toRef } from "vue";

import { ICarouselItem } from "~/stores/carousel/types";

const props = defineProps<{
  item: ICarouselItem,
}>();

</script>

<template>
  <div class="relative w-full">
    <div class="min-[1200px]:max-w-[1170px] min-[992px]:max-w-[960px] min-[768px]:max-w-[720px] min-[576px]:max-w-[540px] w-full px-[15px] mx-auto">
      <div class="flex flex-wrap items-center -mx-[15px]">
        <div class="mx-auto min-[992px]:flex-[0_0_83.3%] min-[992px]:max-w-[83.3%] min-[768px]:flex-[0_0_91.7%] min-[768px]:max-w-[91.7%] relative w-full px-[15px]">
          <div class="text-white text-center">
            <h1 class="font-semibold mb-[15px] text-white text-[2.5rem] leading-[1.2] mt-0 whitespace-pre-wrap">
              {{ props.item.title }}
            </h1>
            <p class="mt-0 mb-[1rem]">
              {{ props.item.content }}
            </p>
            <div
              v-if="!!props.item.button"
              class="flex justify-center mt-[20px] flex-wrap"
            >
              <a
                :href="props.item.button.href"
                class="inline-block py-[10px] px-[15px] bg-teal-800 hover:bg-transparent hover:!text-teal-800 text-white rounded-none transition-all duration-300 border-[1px] border-teal-600 text-center w-[165px] no-underline"
              >
                {{ props.item.button.caption }}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useParameterStore } from "~/stores/parameters/api";

const parameterStore = useParameterStore();

</script>

<template>
  <div class="mb-[25px]">
    <div class="items-center flex flex-wrap -mx-[15px]">
      <div class="min-[768px]:flex-[0_0_25%] max-w-[25%] relative w-full px-[15px]">
        <a
          class="text-white font-bold text-[24px] inline-block py-[0.3125rem] mr-[1rem] whitespace-nowrap"
          href="index.html"
        >
          {{ parameterStore.parameters.brand }}
        </a>
      </div>
      <div class="min-[768px]:flex-[0_0_41.7%] min-[768px]:max-w-[41.7%] relative w-full px-[15px]">
        <div class="flex justify-between min-w-[245px]">
          <a
            href=""
            class="flex items-center text-white no-underline bg-transparent"
          >
            <ClientOnly>
              <font-awesome-icon
                class="mr-[5px] text-[24px]"
                icon="fa fa-map-marker"
              />
            </ClientOnly>
            <span>
              {{ parameterStore.parameters.location }}
            </span>
          </a>
          <a
            href=""
            class="flex items-center text-white no-underline bg-transparent"
          >
            <ClientOnly>
              <font-awesome-icon
                class="mr-[5px] text-[24px]"
                icon="fa fa-phone"
              />
            </ClientOnly>
            <span>
              {{ parameterStore.parameters.phone }}
            </span>
          </a>
        </div>
      </div>
      <div
        v-if="parameterStore.hasSocial"
        class="min-[768px]:flex-[0_0_33.3%] min-[768px]:max-w-[33.3%] relative w-full px-[15px]"
      >
        <div class="flex justify-end">
          <a
            v-if="parameterStore.parameters.facebook"
            :href="parameterStore.parameters.facebook"
            class="flex justify-center items-center w-[45px] h-[45px] rounded-[5px] text-white mr-[5px] text-[24px] no-underline bg-transparent"
          >
            <ClientOnly>
              <font-awesome-icon icon="fa-brands fa-facebook" />
            </ClientOnly>
          </a>
          <a
            v-if="parameterStore.parameters.twitter"
            :href="parameterStore.parameters.twitter"
            class="flex justify-center items-center w-[45px] h-[45px] rounded-[5px] text-white mr-[5px] text-[24px] no-underline bg-transparent"
          >
            <ClientOnly>
              <font-awesome-icon icon="fa-brands fa-twitter" />
            </ClientOnly>
          </a>
          <a
            v-if="parameterStore.parameters.linkedin"
            :href="parameterStore.parameters.linkedin"
            class="flex justify-center items-center w-[45px] h-[45px] rounded-[5px] text-white mr-[5px] text-[24px] no-underline bg-transparent"
          >
            <ClientOnly>
              <font-awesome-icon icon="fa-brands fa-linkedin" />
            </ClientOnly>
          </a>
          <a
            v-if="parameterStore.parameters.instagram"
            :href="parameterStore.parameters.instagram"
            class="flex justify-center items-center w-[45px] h-[45px] rounded-[5px] text-white mr-[5px] text-[24px] no-underline bg-transparent"
          >
            <ClientOnly>
              <font-awesome-icon icon="fa-brands fa-instagram" />
            </ClientOnly>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import NavBar from "~/components/NavBar";

import { useParameterStore } from "~/stores/parameters/store";
const parameterStore = useParameterStore();

</script>

<template>
  <div class="py-[15px] px-0">
    <div class="px-[25px]">
      <nav class="p-0 flex flex-row flex-nowrap justify-start relative items-center">
        <a
          class="text-white font-size font-bold text-2xl inline-block py-[0.3125rem] mr-[1rem] whitespace-nowrap hover:text-teal-600 transition-all duration-300"
          href="index.html"
        >
          {{ parameterStore.parameters.brand }}
        </a>
        <NavBar />
      </nav>
    </div>
  </div>
</template>

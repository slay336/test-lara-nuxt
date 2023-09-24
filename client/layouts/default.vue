<script setup lang="ts">
import { onBeforeMount } from "vue";

import HeroArea from "~/components/HeroArea";
import InfoSection from "~/components/InfoSection";
import FooterSection from "~/components/FooterSection";
import { useParameterStore } from "~/stores/parameters/api";

const parameterStore = useParameterStore();

onBeforeMount(async () => {
  await parameterStore.getParameters();
});
</script>

<template>
  <div>
    <!-- hero area -->
    <HeroArea />
    <!-- hero area ends -->
    
    <slot />
    
    <!-- info section -->
    <InfoSection />
    <!-- end info_section -->

    <!-- footer section -->
    <FooterSection />
    <!-- end footer section -->
  </div>
</template>
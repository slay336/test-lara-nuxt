<script setup lang="ts">
import HeaderSection from "~/components/HeaderSection";
import SliderSection from "~/components/SliderSection";

</script>

<template>
  <div class="relative min-h-[100vh] flex flex-col before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-full">
    <div class="absolute top-0 left-0 w-full h-full overflow-hidden -z-1 before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-gradient-to-r before:from-black/90 before:to-black/70">
      <img
        class="w-auto h-auto min-w-full min-h-full"
        src="images/hero-bg.jpg"
        alt=""
      />
    </div>
    <!-- header section -->
    <HeaderSection />
    <!-- end header section -->
    <!-- slider section -->
    <SliderSection />
    <!-- end slider section -->
  </div>
</template>

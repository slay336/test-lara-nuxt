<script setup lang="ts">
import Icon from "~/components/Icon";

</script>

<template>
  <div class="flex justify-between mt-[45px] mx-auto mb-0">
    <a
      class="left-[25px] w-[50px] h-[50px] top-[50%] bg-white opacity-100 text-teal-950 text-sm shadow-[0_0_5px_0_black/25] transition-all duration-200 absolute bottom-0 z-[1] flex items-center justify-center text-center no-underline cursor-pointer hover:!bg-teal-600 group"
    >
      <Icon
        icon="fa fa-arrow-left"
        color="black"
        class="group-hover:!text-white"
        :with-background="false"
      />
      <span class="sr-only">Previous</span>
    </a>
    <a
      class="right-[25px] w-[50px] h-[50px] top-[50%] bg-white opacity-100 text-teal-950 text-sm shadow-[0_0_5px_0_black/25] transition-all duration-200 absolute bottom-0 z-[1] flex items-center justify-center text-center no-underline cursor-pointer hover:!bg-teal-600 group"
    >
      <Icon
        icon="fa fa-arrow-right"
        color="black"
        class="group-hover:!text-white"
        :with-background="false"
      />
      <span class="sr-only">Next</span>
    </a>
  </div>
</template>

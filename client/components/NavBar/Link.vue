<script setup lang="ts">

const props = defineProps<{
  href: string,
}>();

</script>

<template>
  <a
    class="py-[5px] px-[30px] hover:!text-teal-600 text-white text-center uppercase rounded-[5px] text-[15px] transition-all duration-300 block no-underline "
    :href="href"
  >
    <slot />
  </a>
</template>

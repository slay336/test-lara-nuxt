<script setup lang="ts">

const props = withDefaults(
  defineProps<{
    icon: string,
    withBackground?: boolean,
  }>(),
  {
    withBackground: true,
  }
);

</script>

<template>
  <div
    class="w-[28px] h-[28px] flex justify-center items-center text-white rounded-full"
    :class="{
      'bg-sky-400': withBackground,
    }"
  >
    <ClientOnly>
      <font-awesome-icon :icon="icon" />
    </ClientOnly>
  </div>
</template>

<script setup lang="ts">

const props = withDefaults(
  defineProps<{
    icon: string,
    color?: string,
    withBackground?: boolean,
  }>(),
  {
    withBackground: true,
    color: "white",
  }
);

const classes: Ref<Array<string>> = ref([
  "w-[28px]",
  "h-[28px]",
  "flex", 
  "justify-center",
  "items-center",
  "rounded-full",
  `text-${props.color}`,
  props.withBackground ? "bg-sky-400" : "",
]);

</script>

<template>
  <div :class="classes">
    <ClientOnly>
      <font-awesome-icon :icon="icon" />
    </ClientOnly>
  </div>
</template>

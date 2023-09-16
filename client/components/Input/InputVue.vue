<script setup lang="ts">

const props = withDefaults(
  defineProps<{
    long?: boolean,
  }>(),
  {
    long: false,
  }
)

</script>

<template>
  <input
    class="w-full border-none h-[50px] mb-[15px] pl-[15px] outline-none text-[#101010] rounded-none shadow-[0_0_5px_0_rgba(0,0,0,0.05)] block px-[0.75rem] py-[0.375rem] text-base font-normal leading-[1.5] bg-white bg-clip-padding transition-[border-color_0.15s_ease-in-out_box-shadow_0.15s_ease-in-out] overflow-visible m-0"
    :class="{
      'h-[95px]': props.long,
    }"
  />
</template>

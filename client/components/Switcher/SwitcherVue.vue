<script setup lang="ts">

const props = defineProps<{
  modelValue: boolean,
}>()

const emit = defineEmits<{
  (e: "update:modelValue", value: boolean): void,
}>();

const isOn = ref(props.modelValue);

const change = () => {
  isOn.value = !isOn.value;
  emit("update:modelValue", isOn.value);
};

</script>

<template>
  <div class="my-3 flex gap-2 items-center">
    <div
      class="border-2 w-[50px] h-[35px] rounded-3xl transition-all duration-500 relative flex items-center"
      :class="{
        'bg-teal-700': isOn,
        'bg-gray-100': !isOn,
      }"
      @click="change"
    >
      <div
        class="border-2 rounded-full w-[27px] h-[27px] bg-white mx-0.5 transition-all duration-500"
        :class="{
          'ml-[17px]': isOn,
        }"
      />
    </div>
    <div>
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">

const props = withDefaults(
  defineProps<{
    withNavigation?: boolean,
    withPagination?: boolean,
    activeColor?: string,
    inactiveColor?: string,
    hoverColor?: string,
  }>(),
  {
    withNavigation: true,
    withPagination: true,
    activeColor: "white",
    inactiveColor: "gray",
    hoverColor: "#0D9488"
  }
);

const container: Ref<HTMLDivElement> = ref({} as HTMLDivElement);

const { activeColor, inactiveColor, hoverColor } = toRefs(props);


onMounted(() => {
  const parentNode = container.value.parentNode;
  const arrowButtons = Array.from(parentNode!.querySelectorAll(".carousel__button")) as Array<HTMLButtonElement>;
  
  arrowButtons.forEach((child: HTMLButtonElement) => {
    child.classList.add(..."!text-white !mx-[30px] !rounded-[20px] !transition-all !duration-100 !w-[50px] !h-[50px] hover:!border-teal-600 hover:!bg-teal-900".split(" "));
    child.style.border = "2px solid white";
  });
});

</script>

<template>
  <Carousel
  >
    <slot />
    <template
      #addons
      v-if="props.withNavigation || props.withPagination"
    >
      <div ref="container" />
      <navigation
        v-if="props.withNavigation"
        class="carousel__button"
      />
      <pagination
        v-if="props.withPagination"
      />
    </template>
  </Carousel>
</template>

<style lang="scss">
.carousel__pagination-button:after {
  background-color: v-bind("activeColor");
}

.carousel__pagination-button:hover {
  &:after {
    background-color: v-bind("hoverColor");
  }
}

.carousel__pagination-button--active:after {
  background-color: v-bind("inactiveColor");
}
</style>

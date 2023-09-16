<script setup lang="ts">

const props = withDefaults(
  defineProps<{
    withNavigation?: boolean,
    withPagination?: boolean,
    activePBColor?: string,
    inactivePBColor?: string,
    hoverPBColor?: string,
    paginationButtonShape?: "default" | "circle",
    increaseActiveCardSize?: boolean,
  }>(),
  {
    withNavigation: true,
    withPagination: true,
    activePBColor: "white",
    inactivePBColor: "gray",
    hoverPBColor: "#0D9488",
    paginationButtonShape: "default",
    increaseActiveCardSize: false,
  }
);

const container: Ref<HTMLDivElement> = ref({} as HTMLDivElement);

const {
  activePBColor,
  inactivePBColor,
  hoverPBColor,
  increaseActiveCardSize,
} = toRefs(props);

const PBShape = computed(() => {
  return {
    radius: props.paginationButtonShape == "default" ? "0" : "100%",
    height: props.paginationButtonShape == "default" ? "4px": "12px",
  };
});

const inactiveSize = computed(() => {
  return increaseActiveCardSize.value ? "scale(0.87)" : "scale(1)";
});


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
  background-color: v-bind("inactivePBColor");
  border-radius: v-bind("PBShape.radius");
  height: v-bind("PBShape.height");
}

.carousel__pagination-button:hover {
  &:after {
    background-color: v-bind("hoverPBColor");
  }
}

.carousel__pagination-button--active:after {
  background-color: v-bind("activePBColor");
  border-radius: v-bind("PBShape.radius");
}

.carousel__slide {
  transform: v-bind("inactiveSize");
  transition: all;
  transition-duration: .3s;
}

.carousel__slide--active {
  transform: scale(1);
}
</style>

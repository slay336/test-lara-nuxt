<script setup lang="ts">

const props = withDefaults(
  defineProps<{
    withNavigation?: boolean,
    withPagination?: boolean,
    arrowButtonColor?: string,
    arrowButtonBorderColor?: string,
    arrowButtonHoverBorderColor?: string,
    arrowButtonHoverBackgroundColor?: string,
    activePBColor?: string,
    inactivePBColor?: string,
    hoverPBColor?: string,
    paginationButtonShape?: "default" | "circle",
    increaseActiveCardSize?: boolean,
  }>(),
  {
    arrowButtonColor: "white",
    arrowButtonBorderColor: "white",
    arrowButtonHoverBorderColor: "#0D9488",
    arrowButtonHoverBackgroundColor: "#134E4A",
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
  arrowButtonColor,
  arrowButtonBorderColor,
  arrowButtonHoverBorderColor,
  arrowButtonHoverBackgroundColor,
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
      <navigation v-if="props.withNavigation" />
      <pagination
        v-if="props.withPagination"
      />
    </template>
  </Carousel>
</template>

<style lang="scss">
.carousel__prev, .carousel__next {
  margin-right: 30px;
  margin-left: 30px;
  border-radius: 20px;
  transition: all .1s;
  width: 50px;
  height: 50px;
  color: v-bind("arrowButtonColor");
  border: 2px solid v-bind("arrowButtonBorderColor");
}

.carousel__prev:hover, .carousel__next:hover {
  border-color: v-bind("arrowButtonHoverBorderColor");
  background-color: v-bind("arrowButtonHoverBackgroundColor");
}

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
}

.carousel__slide--prev, .carousel__slide--next {
  transform: v-bind("inactiveSize");
  transition: all;
  transition-duration: .3s;
}

.carousel__slide--active  {
  transform: scale(1);
}
</style>

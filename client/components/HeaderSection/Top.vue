<script setup lang="ts">
import Icon from "~/components/Icon";

</script>

<template>
  <div class="py-[15px] px-0 border-b-[1px] border-b-white">
    <div class="px-[25px] flex justify-between items-center">

      <div class="flex justify-between grow">
        <a
          class="text-white flex items-center justify-center"
          href=""
        >
          <Icon class="mr-2 hover:bg-teal-600" icon="fa fa-map-marker" />
          <span>
            Location
          </span>
        </a>
        <a
          class="text-white flex items-center justify-center"
          href=""
        >
          <Icon class="mr-2 hover:bg-teal-600" icon="fa fa-phone" />
          <span>
            Call : +01 123455678990
          </span>
        </a>
        <a
          class="text-white flex items-center justify-cente"
          href=""
        >
          <Icon class="mr-2 hover:bg-teal-600" icon="fa fa-envelope" />
          <span>
            demo@gmail.com
          </span>
        </a>
      </div>
      <div class="flex justify-end min-w-[200px]">
        <a href="">
          <Icon class="mr-1 hover:bg-teal-600" icon="fa-brands fa-facebook" />
        </a>
        <a href="">
          <Icon class="mr-1 hover:bg-teal-600" icon="fa-brands fa-twitter" />
        </a>
        <a href="">
          <Icon class="mr-1 hover:bg-teal-600" icon="fa-brands fa-linkedin" />
        </a>
        <a href="">
          <Icon class="mr-1 hover:bg-teal-600" icon="fa-brands fa-instagram" />
        </a>
      </div>
    </div>
  </div>
</template>

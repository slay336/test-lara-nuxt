<script setup lang="ts">
import Icon from "~/components/Icon";

import { useParameterStore } from "~/stores/parameters/store";

const parameterStore = useParameterStore();

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
            {{ parameterStore.parameters.location }}
          </span>
        </a>
        <a
          class="text-white flex items-center justify-center"
          href=""
        >
          <Icon class="mr-2 hover:bg-teal-600" icon="fa fa-phone" />
          <span>
            {{ parameterStore.parameters.phone }}
          </span>
        </a>
        <a
          class="text-white flex items-center justify-cente"
          href=""
        >
          <Icon class="mr-2 hover:bg-teal-600" icon="fa fa-envelope" />
          <span>
            {{ parameterStore.parameters.email }}
          </span>
        </a>
      </div>
      <div
        v-if="parameterStore.hasSocial"
        class="flex justify-end min-w-[200px]"
      >
        <a 
          v-if="parameterStore.parameters.facebook"
          :href="parameterStore.parameters.facebook"
        >
          <Icon class="mr-1 hover:bg-teal-600" icon="fa-brands fa-facebook" />
        </a>
        <a
          v-if="parameterStore.parameters.twitter"
          :href="parameterStore.parameters.twitter"
        >
          <Icon class="mr-1 hover:bg-teal-600" icon="fa-brands fa-twitter" />
        </a>
        <a
          v-if="parameterStore.parameters.linkedin"
          :href="parameterStore.parameters.linkedin"
        >
          <Icon class="mr-1 hover:bg-teal-600" icon="fa-brands fa-linkedin" />
        </a>
        <a
          v-if="parameterStore.parameters.instagram"
          :href="parameterStore.parameters.instagram"
        >
          <Icon class="mr-1 hover:bg-teal-600" icon="fa-brands fa-instagram" />
        </a>
      </div>
    </div>
  </div>
</template>

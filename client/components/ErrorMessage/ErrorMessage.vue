<script setup lang="ts">

import { ErrorObject} from "@vuelidate/core";

const props = defineProps<{
  attr: unknown,
}>();

</script>

<template>
  <div v-if="attr.$error">
    <div
      v-for="(error, key) in attr.$errors"
      :key="key"
      class="text-red-500 shadow-2xl ml-3"
    >
      {{ (error as ErrorObject).$message }}
    </div>
  </div>
</template>

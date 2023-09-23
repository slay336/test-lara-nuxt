<script setup lang="ts">
import Input from "~/components/Input";

</script>

<template>
  <div class="py-[50px] px-[30%]">
    <div class="border-[1px] rounded-lg bg-gray-100 shadow-lg p-10">
      <div>
        <div class="pl-2">Login</div>
        <Input type="text" />
      </div>
      <div>
        <div class="pl-2">Password</div>
        <Input type="password" />
      </div>
      <CustomButton class="uppercase">Login</CustomButton>
    </div>
  </div>
</template>

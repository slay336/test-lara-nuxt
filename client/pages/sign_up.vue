<script setup lang="ts">
import { ref, Ref } from "vue";

import Switcher from "~/components/Switcher";

const formData = ref({
  name: "",
  email: "",
  password: "",
  confirm_password: "",
  notify_about_news: true,
});

</script>

<template>
  <div class="py-[50px] px-[30%]">
    <div class="border-[1px] rounded-lg bg-gray-100 shadow-lg p-10">
      <div>
        <div class="pl-2">Name</div>
        <Input type="text" />
      </div>
      <div>
        <div class="pl-2">Email</div>
        <Input type="email" />
      </div>
      <div>
        <div class="pl-2">Password</div>
        <Input type="password" />
      </div>
      <div>
        <div class="pl-2">Confirm password</div>
        <Input type="password" />
      </div>
      <Switcher v-model="formData.notify_about_news">
        Notify about news  
      </Switcher>
      <CustomButton class="uppercase">Register</CustomButton>
    </div>
  </div>
</template>

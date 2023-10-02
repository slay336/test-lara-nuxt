<script setup lang="ts">
import { ref, Ref } from "vue";
import * as yup from "yup";
import { IUserRegisterForm } from "~/stores/user/types";

import Switcher from "~/components/Switcher";

import { useUserStore } from "~/stores/user/store";
import { useRouter } from "nuxt/app";
import { ErrorMessage, useForm } from "vee-validate";


const userStore = useUserStore();
const router = useRouter();

const { defineInputBinds, handleSubmit, errors, setErrors } = useForm({
  validationSchema: yup.object({
    name: yup.string().required(),
    email: yup.string().email().required(),
    password: yup.string().required().min(8),
    password_confirmation: yup.string().min(8).required().oneOf([ yup.ref("password") ]),
    notify_about_news: yup.bool(),
  })
});

const name = defineInputBinds("name");
const email = defineInputBinds("email");
const password = defineInputBinds("password");
const password_confirmation = defineInputBinds("password_confirmation");
const notify_about_news = defineInputBinds("notify_about_news");

const onRegister = handleSubmit(async (values) => {
  const { error } = await userStore.register(values as IUserRegisterForm);

  if (error.value && error.value?.statusCode == 422) {
    setErrors(error.value?.data.errors)
  } else {
    router.push("/");
  }
});

</script>

<template>
  <div class="py-[50px] px-[30%]">
    <pre>{{ errors }}</pre>
    <div class="border-[1px] rounded-lg bg-gray-100 shadow-lg p-10">
      <div>
        <div class="pl-2">Name</div>
        <Input type="text" v-bind="name" />
        <div
          v-if="errors.name"
          class="text-red-600 -mt-3 pl-2"
        >
          {{ errors.name }}
        </div>
      </div>
      <div>
        <div class="pl-2">Email</div>
        <Input type="email" v-bind="email" />
        <div
          v-if="errors.email"
          class="text-red-600 -mt-3 pl-2"
        >
          {{ errors.email }}
        </div>
      </div>
      <div>
        <div class="pl-2">Password</div>
        <Input type="password" v-bind="password" />
        <div
          v-if="errors.password"
          class="text-red-600 -mt-3 pl-2"
        >
          {{ errors.password }}
        </div>
      </div>
      <div>
        <div class="pl-2">Confirm password</div>
        <Input type="password" v-bind="password_confirmation" />
        <div
          v-if="errors.password_confirmation"
          class="text-red-600 -mt-3 pl-2"
        >
          {{ errors.password_confirmation }}
        </div>
      </div>
      <Switcher v-bind="notify_about_news">
        Notify about news  
      </Switcher>
      <div
        v-if="errors.notify_about_news"
        class="text-red-600 -mt-3 pl-2"
      >
        {{ errors.notify_about_news }}
      </div>
      <CustomButton
        class="uppercase"
        @click="onRegister"
      >
        Register
      </CustomButton>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useVuelidate, ServerErrors } from "@vuelidate/core";
import {
  required,
  minLength,
  email,
  sameAs,
} from "@vuelidate/validators";
import { validPassword } from "~/utils/custom_validators";

import { IUserRegisterForm } from "~/stores/user/types";

import { useUserStore } from "~/stores/user/store";

const userStore = useUserStore();
const router = useRouter();

const disableButton: Ref<boolean> = ref(false);
const passwordConfirmation: Ref<string> = ref("");

const formData: Ref<IUserRegisterForm> = ref({
  name: "",
  email: "",
  password: "",
  password_confirmation: "",
  notify_about_news: true,
});

const rules = {
  name: { required, minLength: minLength(7) },
  email: { required, email },
  password: { required, validPassword },
  password_confirmation: { required, sameAs: sameAs(passwordConfirmation) },
  notify_about_news: { required },
};

const $externalResults: Ref<ServerErrors> = ref({} as ServerErrors);
const validate = useVuelidate<IUserRegisterForm>(rules, formData.value, { $externalResults, $lazy: true });

const onRegister = async () => {
  disableButton.value = true;
  formData.value.password_confirmation = passwordConfirmation.value;
  validate.value.$clearExternalResults();
  validate.value.$reset();
  validate.value.$touch();
  if (validate.value.$errors.length > 0) {
    disableButton.value = false;
    return;
  }

  const { error } = await userStore.register(formData.value);
  if (!!error.value) {
    if (error.value?.statusCode == 422) {
      $externalResults.value = error.value?.data.errors;
    } else {
      console.error(error.value.data);
    }
  }
  disableButton.value = false;
  await router.push('/')
};

</script>

<template>
  <div class="py-[50px] px-[30%]">
    <div class="border-[1px] rounded-lg bg-gray-100 shadow-lg p-10 flex flex-col gap-2">
      <div>
        <div class="pl-2">Name</div>
        <Input type="text" v-model="formData.name" />
        <ErrorMessage :attr="validate.name" />
      </div>
      <div>
        <div class="pl-2">Email</div>
        <Input type="email" v-model="formData.email" />
        <ErrorMessage :attr="validate.email" />
      </div>
      <div>
        <div class="pl-2">Password</div>
        <Input type="password" v-model="formData.password" />
        <ErrorMessage :attr="validate.password" />
      </div>
      <div>
        <div class="pl-2">Confirm password</div>
        <Input type="password" v-model="passwordConfirmation" />
        <ErrorMessage :attr="validate.password_confirmation" />
      </div>
      <div>
        <Switcher v-model="formData.notify_about_news">
          Notify about news
        </Switcher>
        <ErrorMessage :attr="validate.notify_about_news" />
      </div>
      <CustomButton
        class="uppercase"
        @click="onRegister"
      >
        <span v-if="!disableButton">Register</span>
        <SpinnerPreloader
          v-else
          class="w-10 h-10"
        />
      </CustomButton>
    </div>
  </div>
</template>

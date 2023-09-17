<script setup lang="ts">
import { ref, Ref } from "vue";

import Icon from "~/components/Icon";

const navigationDisabled: Ref<boolean> = ref(false);
const searchDisabled: Ref<boolean> = ref(false);

</script>

<template>
  <button
    class="p-0 w-[37px] h-[42px] transition-all duration-300 outline-none min-[992px]:hidden text-xl bg-transparent border-[1px] border-transparent rounded-[0.25rem] normal-case overflow-visible m-0"
    :class="{
      'cursor-pointer': !navigationDisabled,
    }"
    type="button"
    data-toggle="collapse"
    data-target="#navbarSupportedContent"
    aria-controls="navbarSupportedContent"
    aria-expanded="false"
    aria-label="Toggle navigation"
  >
    <span class=""> </span>
  </button>

  <div
    class="min-[992px]:flex min-[992px]:basis-auto grow items-center"
    id="navbarSupportedContent"
  >
    <ul class="ml-auto flex-row flex pl-0 my-0 items-center">
      <li>
        <NuxtLink
          :to="{ name: 'index' }"
          class="py-[5px] px-[30px] hover:!text-teal-600 text-white text-center uppercase rounded-[5px] text-[15px] transition-all duration-300 block no-underline"
        >
          Home
        </NuxtLink>
      </li>
      <li>
        <NuxtLink
          :to="{ name: 'about' }"
          class="py-[5px] px-[30px] hover:!text-teal-600 text-white text-center uppercase rounded-[5px] text-[15px] transition-all duration-300 block no-underline"
        >
          About
        </NuxtLink>
      </li>
      <li>
        <NuxtLink
          :to="{ name: 'service' }"
          class="py-[5px] px-[30px] hover:!text-teal-600 text-white text-center uppercase rounded-[5px] text-[15px] transition-all duration-300 block no-underline"
        >
          Services
        </NuxtLink>
      </li>
      <li>
        <NuxtLink
          :to="{ name: 'team' }"
          class="py-[5px] px-[30px] hover:!text-teal-600 text-white text-center uppercase rounded-[5px] text-[15px] transition-all duration-300 block no-underline"
        >
          Team
        </NuxtLink>
      </li>
      <li>
        <NuxtLink
          :to="{ name: 'contact' }"
          class="py-[5px] px-[30px] hover:!text-teal-600 text-white text-center uppercase rounded-[5px] text-[15px] transition-all duration-300 block no-underline"
        >
          Contact Us
        </NuxtLink>
      </li>
      <li>
        <NuxtLink
          class="flex items-center gap-2 group"
          :to="{ name: 'sign_in' }"
        >
          <div class="flex items-center pl-[30px] pr-[10px]">
            <Icon icon="fa fa-user" class="group-hover:!text-teal-600 transition-all duration-300" :with-background="false" />
            <span class="p-[5px] group-hover:!text-teal-600 text-white text-center uppercase rounded-[5px] text-[15px] transition-all duration-300 block no-underline">
              Sign in
            </span>
          </div>
        </NuxtLink>
      </li>
      <li>
        <NuxtLink
          class="flex items-center gap-2 group"
          :to="{ name: 'sign_up' }"
        >
          <div class="flex items-center px-[10px]">
            <Icon icon="fa fa-user-plus" class="group-hover:!text-teal-600 transition-all duration-300" :with-background="false" />
            <span class="p-[5px] group-hover:!text-teal-600 text-white text-center uppercase rounded-[5px] text-[15px] transition-all duration-300 block no-underline">
              Sign up
            </span>
          </div>
        </NuxtLink>
      </li>
      <button
        class="w-[35px] h-[35px] p-0 border-none text-white outline-none shadow-none group"
        :class="{
          'cursor-pointer': searchDisabled,
        }"
        type="submit"
      >
        <Icon
          icon="fa fa-search"
          class="group-hover:!text-teal-600 transition-all duration-300"
          :with-background="false"
        />
      </button>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ref, Ref } from "vue";

import Link from "./Link.vue";
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
        <Link href="index.html">Home</Link>
      </li>
      <li>
        <Link href="about.html">About</Link>
      </li>
      <li>
        <Link href="service.html">Services</Link>
      </li>
      <li>
        <Link href="team.html">Team</Link>
      </li>
      <li>
        <Link href="contact.html">Contact Us</Link>
      </li>
      <li>
        <Link class="flex items-center gap-2 group" href="#">
          <Icon icon="fa fa-user" class="group-hover:!text-teal-600 transition-all duration-300" :with-background="false" />
          <span>Login</span>
        </Link>
      </li>
      <form class="flex flex-row flex-wrap items-center justify-center">
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
      </form>
    </ul>
  </div>
</template>

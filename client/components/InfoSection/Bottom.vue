<script setup lang="ts">

const submitDisabled: Ref<boolean> = ref(false);

</script>

<template>
  <div class="flex flex-wrap -mx-[15px]">
    <div class="mb-[30px] min-[992px]:flex-[0_0_25%] min-[992px]:max-w-[25%] min-[768px]:flex-[0_0_50%] min-[768px]:max-w-[50%] relative w-full px-[15px]">
      <h5 class="mb-[20px] uppercase font-bold text-xl leading-[1.2] mt-0">
        Company
      </h5>
      <p class="mt-0 mb-[1rem]">
        Randomised words which don't look even slightly believable. If you are going to use a passage of
        Lorem
        Ipsum, you need to be sure
      </p>
    </div>
    <div class="mb-[30px] min-[992px]:flex-[0_0_25%] min-[992px]:max-w-[25%] min-[768px]:flex-[0_0_50%] min-[768px]:max-w-[50%] relative w-full px-[15px]">
      <h5 class="mb-[20px] uppercase font-bold text-xl leading-[1.2] mt-0">
        Newsletter
      </h5>
      <form action="">
        <input
          class="w-full border-none h-[45px] mb-[25px] pl-[25px] bg-[#eaeaea] outline-none text-[#101010] overflow-visible m-0"
          type="text"
          placeholder="Enter Your Email"
        />
        <button
          type="submit"
          class="inline-block py-[10px] px-[45px] bg-teal-700 text-white rounded-[5px] transition-all duration-300 border-[1px] border-teal-700 no-underline overflow-visible m-0"
          :class="{
            'cursor-pointer': !submitDisabled,
          }"
        >
          Subscribe
        </button>
      </form>
    </div>
    <div class="mb-[30px] min-[992px]:flex-[0_0_33.3%] min-[992px]:max-w-[33.3%] relative w-full px-[15px]">
      <h5 class="mb-[20px] uppercase font-bold text-xl leading-[1.2] mt-0">
        Services
      </h5>
      <p class="mt-0 mb-[1rem]">
        Randomised words which don't look even slightly believable. If you are going to use a passage of
        Lorem
        Ipsum, you need to be sure
      </p>
    </div>
    <div class="mb-[30px] min-[992px]:flex-[0_0_16.7%] min-[992px]:max-w-[16.7%] relative w-full px-[15px]">
      <h5 class="mb-[20px] uppercase font-bold text-xl leading-[1.2] mt-0">
        Useful links
      </h5>
      <ul class="flex flex-col pl-0 mt-0 mb-[1rem]">
        <li class="list-none mb-[10px]">
          <a
            class="text-white no-underline bg-transparent"
            href="index.html"
          >
            Home
          </a>
        </li>
        <li class="list-none mb-[10px]">
          <a
            class="text-white no-underline bg-transparent"
            href="about.html"
          >
            About
          </a>
        </li>
        <li class="list-none mb-[10px]">
          <a
            class="text-white no-underline bg-transparent"
            href="service.html"
          >
            Services
          </a>
        </li>
        <li class="list-none mb-[10px]">
          <a
            class="text-white no-underline bg-transparent"
            href="team.html"
          >
            Team
          </a>
        </li>
        <li class="list-none mb-0">
          <a
            class="text-white no-underline bg-transparent"
            href="contact.html"
          >
            Contact Us
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

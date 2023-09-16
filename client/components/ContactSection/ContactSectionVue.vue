<script setup lang="ts">
import Input from "./Input.vue";

</script>

<template>
  <section class="relative bg-[#f9f9f9] block">
    <div class="w-full px-[15px] mx-auto">
      <div class="items-center flex flex-wrap -mx-[15px]">
        <div class="px-0 min-[768px]:flex-[0_0_50%] min-[768px]:max-w-[50%] relative w-full">
          <div class="overflow-hidden">
            <img
              src="images/contact-img.jpg"
              class="min-w-full align-middle border-none"
              alt="about img">
          </div>
        </div>
        <div class="mx-auto min-[768px]:flex-[0_0_41.7%] min-[768px]:max-w-[41.7%] relative w-full px-[15px]">
          <div class="p-[45px]">
            <div class="mb-[45px] items-center text-center flex flex-col">
              <h2 class="relative font-bold text-[2rem] mb-[0.5rem] leading-[1.2] mt-0">
                Get In Touch
              </h2>
            </div>
            <form action="">
              <div class="flex flex-wrap -mx-[5px]">
                <div class="px-[5px] mb-[1rem] basis-0 grow max-w-full relative w-full">
                  <Input type="text" placeholder="Your Name" />
                </div>
              </div>
              <div class="flex flex-wrap -mx-[5px]">
                <div class="px-[5px] mb-[1rem] min-[992px]:flex-[0_0_50%] min-[992px]:max-w-[50%] relative w-full">
                  <Input type="text" placeholder="Phone Number" />
                </div>
                <div class="px-[5px] mb-[1rem] min-[992px]:flex-[0_0_50%] min-[992px]:max-w-[50%] relative w-full">
                  <select
                    name=""
                    id=""
                    class="w-full border-none h-[50px] mb-[15px] pl-[15px] outline-none text-[#101010] rounded-none shadow-[0_0_5px_0_rgba(0,0,0,0.05)] block py-[0.375rem] px-[0.75rem] text-base font-normal leading-[1.5] bg-white bg-clip-padding transition-[border-color_0.15s_ease-in-out_box-shadow_0.15s_ease-in-out] break-words">
                    <option value="">Select Service</option>
                    <option value="">Service 1</option>
                    <option value="">Service 2</option>
                    <option value="">Service 3</option>
                  </select>
                </div>
              </div>
              <div class="flex flex-wrap -mx-[5px]">
                <div class="px-[5px] mb-[1rem] basis-0 grow max-w-full relative w-full">
                  <Input type="email" placeholder="Email" />
                </div>
              </div>
              <div class="flex flex-wrap -mx-[5px]">
                <div class="px-[5px] mb-[1rem] basis-0 grow max-w-full relative w-full">
                  <Input type="text" :long="true" placeholder="Message" />
                </div>
              </div>
              <div class="flex">
                <button class="inline-block py-[12px] px-[55px] bg-teal-700 text-white rounded-none transition-all duration-300 border-[1px] border-teal-700 w-full cursor-pointer no-underline overflow-visible m-0">
                  SEND
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

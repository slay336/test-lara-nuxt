<script setup lang="ts">
import Icon from "~/components/Icon";

import { IClientComment } from "~/stores/client_comment/types";

const props = defineProps<{
  item: IClientComment,
}>();

</script>

<template>
  <div>
    <div class="flex flex-wrap -mx-[15px]">
      <div class="mx-auto min-[992px]:flex-[0_0_58.3%] min-[992px]:max-w-[58.3%] relative w-full px-[15px]">
        <div class="flex flex-col items-center text-center m-auto mt-[15px]">
          <div class="w-[125px]">
            <img
              class="w-full rounded-[5px] align-middle border-none"
              :src="item.image"
              alt=""
            />
          </div>
          <div class="mt-[25px]">
            <h5 class="text-[#1d1b28] mb-[15px] text-xl font-medium leading-[1.2] mt-0">
              {{ item.name }}
            </h5>
            <p class="text-[#1d1b28] m-[20px]">
              {{ item.comment }}
            </p>
            
            <span class="mt-[25px] text-[35px]">
              <ClientOnly>
                <font-awesome-icon
                  icon="fa fa-quote-left"
                  color="#1eb36a"
                />
              </ClientOnly>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

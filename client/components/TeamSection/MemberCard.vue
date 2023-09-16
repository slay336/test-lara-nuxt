<script setup lang="ts">
import { ITeamMember } from '~/stores/team_member/types';

const props = defineProps<{
  member: ITeamMember,
}>();

</script>

<template>
  <div class="mx-auto flex-[0_0_33.3%] max-w-[33.3%] relative w-full px-[15px]">
    <div class="flex flex-col bg-teal-900 rounded-[10px] overflow-hidden mt-[45px]">
      <div class="w-full">
        <img
          class="w-full align-middle border-none"
          :src="props.member.image"
          alt=""
        />
      </div>
      <div class="w-full text-white py-[25px] px-[15px] text-center">
        <h5 class="text-xl mb-[0.5rem] font-medium leading-[1.2] mt-0">
          {{ props.member.name }}
        </h5>
        <h6 class="text-base mb-[0.5rem] font-medium leading-[1.2] mt-0">
          {{ props.member.occupation.name }}
        </h6>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import MemberCard from "./MemberCard.vue";

import { ITeamMember } from "~/stores/team_member/types";

const members: Ref<Array<ITeamMember>> = ref([
  {
    id: 1,
    image: "/images/t1.jpg",
    name: "Martin Anderson",
    occupation: {
      id: 1,
      name: "supervisor",
    },
  },
  {
    id: 2,
    image: "/images/t2.jpg",
    name: "Denny Butler",
    occupation: {
      id: 1,
      name: "supervisor",
    },
  },
  {
    id: 3,
    image: "/images/t3.jpg",
    name: "Nathan Mcpherson",
    occupation: {
      id: 1,
      name: "supervisor",
    },
  },
]);

</script>

<template>
  <section class="block py-[90px] px-0">
    <div class="min-[1200px]:max-w-[1170px] min-[992px]:max-w-[960px] min-[768px]:max-w-[720px] min-[576px]:max-w-[540px] w-full px-[15px] mx-auto">
      <div class="items-center text-center flex flex-col">
        <h2 class="relative font-bold text-[2rem] mb-[0.5rem] leading-[1.2] mt-0">
          Our Team
        </h2>
        <p class="mt-0 mb-[1rem]">
          Lorem ipsum dolor sit amet, non odio tincidunt ut ante, lorem a euismod suspendisse vel, sed quam nulla mauris
          iaculis. Erat eget vitae malesuada, tortor tincidunt porta lorem lectus.
        </p>
      </div>
      <div class="flex flex-wrap -mx-[15px]">
        <MemberCard
          v-for="member in members"
          :key="member.id"
          :member="member"
        />
      </div>
    </div>
  </section>
</template>

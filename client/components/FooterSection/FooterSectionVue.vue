<script setup lang="ts">

const dayjs = useDayjs();

</script>

<template>
  <footer class="relative bg-white text-center block">
    <div class="min-[1200px]:max-w-[1170px] min-[992px]:max-w-[960px] min-[768px]:max-w-[720px] min-[576px]:max-w-[540px] w-full px-[15px] mx-auto">
      <p class="text-[#252525] py-[25px] px-0 m-0">
        
        <span>&copy; {{ dayjs().year() }}&nbsp;</span>
        <span>All Rights Reserved By&nbsp;</span>
        <a
          class="no-underline bg-transparent"
          href="https://html.design/"
        >
          Free Html Templates
        </a>
      </p>
    </div>
  </footer>
</template>

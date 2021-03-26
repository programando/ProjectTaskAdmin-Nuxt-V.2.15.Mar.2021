<template>
  <div class="">
    <div class="flex justify-center px-4 py-2 bg-rojo">
      <h1 class="text-xl text-white lg:text-2xl">Balquimia Landing Page</h1>
    </div>
    <div class="grid ">
      <Cards></Cards>
    </div>
  </div>
</template>

<script>
import Cards from '@/components/todo/cards'
export default {
  components: {
    Cards
  }
};
</script>

<style>

</style>

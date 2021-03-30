<template>
  <div class="relative">
    <div class="absolute z-10 flex justify-center w-full px-4 py-2 bg-primarycolor">
      <h1 class="text-xl font-semibold text-black uppercase lg:text-2xl">Todo List</h1>
    </div>
   
    <div class="flex">
      <Cards></Cards>
    </div>
  </div>
</template>

<script>
import Cards from "@/components/todo/cards";

export default {
  components: {
    Cards
  }
};
</script>

<style></style>

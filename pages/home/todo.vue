<template>
  <div class="">
    <div class="flex justify-center px-4 py-2 bg-rojo">
      <h1 class="text-xl text-white lg:text-2xl">Balquimia Landing Page</h1>
    </div>
    <div class="flex justify-center px-2 border">
      <nuxt-link class="px-2 py-1 text-white bg-purple-400 rounded-md" to="crear-tareas">Agregar Tarea</nuxt-link>
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

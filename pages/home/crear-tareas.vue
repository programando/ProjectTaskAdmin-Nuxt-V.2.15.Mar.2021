<template>
  <div>
    <div class="flex justify-center px-4 py-2 bg-rojo">
      <h1 class="text-xl text-white lg:text-2xl">Crear Tarea</h1>
    </div>
    <div class="flex justify-center mx-10 mt-10 lg:mx-20">
      <label class="text-xl ">Titulo</label>
      <input class="px-4 mx-4 border rounded-md w-80 focus:outline-none" type="text" />
      <label class="mx-4 text-xl ">Prioridad</label>
      <select
        class="w-56 px-2 text-lg border-b-2 rounded-md font-display border-primarycolor focus:outline-none focus:border-primarycolo"
        name="cars"
        id="cars"
        form="carform"
      >
        <option value="balquimia">Alta</option>
        <option value="cripack">Media</option>
        <option value="cripack">Baja</option>
      </select>
    </div>
    <div class="flex justify-center mt-10 rounded-md">
      <textarea class="border focus:outline-none" name="" id="" cols="100" rows="10"></textarea>
    </div>
    <div class="flex justify-center">
      <button class="px-20 py-3 mt-4 text-lg font-bold text-white uppercase transition-all duration-500 transform rounded-full bg-primarycolor hover:translate-y-1">Agregar</button>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>

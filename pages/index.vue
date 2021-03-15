<template>
  <div
    class="py-48 bg-center bg-no-repeat bg-cover font-latos"
    style="background-image: url('/images/inicio-seccion.jpg')"
  >
    <div class="mx-4 mt-14 sm:mx-20 md:mx-40 lg:mx-56 xl:mx-96">
      <div class="items-center px-10 py-10 bg-white border rounded-md ">
        <div class="flex justify-center text-4xl font-bold text-white">
          <h2 class="text-verde">TodoList</h2>
        </div>
        <div class="flex items-center justify-center mt-4">
          <label class="px-4 py-2 bg-white rounded-md w-28 text-azulOscuro"
            >Proyecto</label
          >
          <select
            class="w-56 px-4 py-2 bg-white border-2 rounded-md border-azulOscuro "
            name="select"
          >
            <option value="balquimia">Balquimia</option>
            <option value="balquimia">Crickpack</option>
          </select>
        </div>
        <div class="flex items-center justify-center mt-4">
          <label class="px-4 py-2 bg-white rounded-md w-28 text-azulOscuro"
            >Usuario</label
          >
          <select
            class="w-56 px-4 py-2 bg-white border-2 rounded-md border-azulOscuro"
            name="select"
          >
            <option value="balquimia">Jhon</option>
            <option value="balquimia">Luis</option>
          </select>
        </div>
        <div class="flex items-center justify-center mt-4">
          <label class="px-4 py-2 bg-white rounded-md w-28 text-azulOscuro"
            >Contraseña</label
          >
          <input
            class="w-56 px-4 py-2 border-2 rounded-md border-azulOscuro"
            type="password"
            name=""
            id=""
          />
        </div>
        <div class="flex justify-center mt-4">
          <button
            class="px-4 py-2 border-2 rounded-md border-azulOscuro text-azulOscuro hover:text-white hover:bg-verde"
          >
            Ingresar
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>

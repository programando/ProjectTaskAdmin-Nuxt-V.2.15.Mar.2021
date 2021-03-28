<template>
  <div
    class="py-48 bg-center bg-no-repeat bg-cover font-latos"
    style="background-image: url('/images/inicio-seccion.jpg')"
  >
    <div class="mx-4 mt-14 sm:mx-20 md:mx-40 lg:mx-56 xl:mx-96">
      <div class="items-center px-10 py-10 bg-white border rounded-md ">
        <div class="flex justify-center ml-8 text-4xl font-bold text-white">
          <h2 class="text-verde">TodoList</h2>
        </div>
        <div class="flex items-center justify-center mt-4">
          <label class="w-32 px-4 py-2 bg-white rounded-md text-azul"
            >Proyecto</label
          >
          <select
            class="w-56 px-4 py-2 bg-white border-2 rounded-md border-azul "
            name="select"
          >
            <option value="balquimia">Balquimia</option>
            <option value="balquimia">Crickpack</option>
          </select>
        </div>
        <div class="flex items-center justify-center mt-4">
          <label class="w-32 px-4 py-2 bg-white rounded-md text-azul"
            >Usuario</label
          >
          <select
            class="w-56 px-4 py-2 bg-white border-2 rounded-md border-azul"
            name="select"
          >
            <option value="balquimia">Jhon</option>
            <option value="balquimia">Luis</option>
          </select>
        </div>
        <div class="flex items-center justify-center mt-4">
          <label class="w-32 px-4 py-2 bg-white rounded-md text-azul"
            >Contraseña</label
          >
          <input
            class="w-56 px-4 py-2 border-2 rounded-md border-azul"
            type="password"
            name=""
            id=""
          />
        </div>
        <div class="flex justify-center mt-4 ">
          <nuxt-link to="/home/todo"
            class="px-4 py-2 border-2 rounded-md border-azul text-azul hover:text-white hover:bg-verde"
          >
            Ingresar
          </nuxt-link>
          <nuxt-link to="login"> Login</nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: ()=> ( {
      
  }),
};
</script>

<style></style>

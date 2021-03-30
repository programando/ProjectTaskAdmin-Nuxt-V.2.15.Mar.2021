<template>
  <div>
    <img
      src="/images/wave.png"
      class="fixed inset-0 hidden h-full lg:block"
      style="z-index: -1;"
    />
    <div
      class="flex flex-col items-center justify-center w-screen h-screen lg:grid lg:grid-cols-2"
    >
      <img
        src="/images/tasks.svg"
        class="hidden w-1/2 mx-auto transition-all duration-500 transform lg:block hover:scale-150"
      />
      <form class="flex flex-col items-center justify-center w-1/2">
        <img src="/images/avatar.svg" class="w-32" />
        <h2
          class="my-4 text-3xl font-bold text-center text-gray-700 font-display"
        >
          Bienvenid@
        </h2>
         <div class="relative mt-4 mb-8">
          <select class="w-56 px-2 text-lg border-b-2 rounded-md font-display border-primarycolor focus:outline-none focus:border-primarycolo" name="cars" id="cars" form="carform">
            <option value="balquimia">Balquimia</option>
            <option value="cripack">Cripack</option>
          </select>
        </div>

        <div class="relative">
          <div class="absolute ml-1 text-xl">
            <font-awesome-icon :icon="['fas', 'user']" />
          </div>
          <input
            type="text"
            placeholder="Usuario"
            class="pl-8 text-lg capitalize transition-all duration-500 border-b-2 font-display focus:outline-none focus:border-primarycolor"
          />
        </div>
        <div class="relative mt-8">
          <div class="absolute ml-1 text-xl">
            <font-awesome-icon :icon="['fas', 'lock']" />
          </div>

          <input
            type="password"
            placeholder="Contraseña"
            class="pl-8 text-lg capitalize transition-all duration-500 border-b-2 font-display focus:outline-none focus:border-primarycolor"
          />
        </div>



        <nuxt-link class="px-20 py-3 mt-12 text-lg font-bold text-white uppercase transition-all duration-500 transform rounded-full bg-primarycolor hover:translate-y-1" to="home/todo">
          Entrar
        </nuxt-link>
      </form>
      
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({})
};
</script>

<style></style>

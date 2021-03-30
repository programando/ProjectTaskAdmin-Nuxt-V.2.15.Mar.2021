<template>
  <div class="mx-2 padre">
    <div class="container">
      <button class="floating-btn btn">
        <font-awesome-icon class="text-md" :icon="['fas', 'tasks']" />
      </button>

      <div class="floating-container">
        <button class="btn" @click="modal = !modal">
          <font-awesome-icon :icon="['fas', 'plus']" />
        </button>
        <button class="btn">
          <font-awesome-icon :icon="['fas', 'stop-circle']" />
        </button>
        <button class="btn">
          <font-awesome-icon class="text-rojo" :icon="['fas', 'adjust']" />
        </button>
        <button class="btn">
          <font-awesome-icon
            class="text-primarycolor"
            :icon="['fas', 'server']"
          />
        </button>
      </div>
    </div>

    <div
      v-if="modal"
      class="absolute inset-0 z-20 flex items-center justify-center bg-black bg-opacity-50"
    >
      <div class="w-4/6 pb-10 bg-white rounded-lg">
        <div class="flex items-center justify-between px-4 bg-primarycolor">
          <h2 class="py-2 text-lg font-semibold uppercase ">
            Agregar Tarea
          </h2>
          <div @click="modal = false" class="cursor-pointer ">
            <img class="h-6" src="/images/close-repo.svg" alt="close" />
          </div>
        </div>
        <div>
         
          <div class="flex justify-center mx-10 mt-10 lg:mx-20">
            <label class="text-xl ">Titulo</label>
            <input
              class="px-4 mx-4 border rounded-md w-80 focus:outline-none"
              type="text"
            />
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
          <div class="flex justify-center mt-10 ">
            <textarea
              class="px-4 py-2 border rounded-md focus:outline-none"
              name=""
              id=""
              cols="100"
              rows="10"
            ></textarea>
          </div>
          <div class="flex justify-center">
            <button
              class="px-20 py-3 mt-4 text-lg font-bold text-white uppercase transition-all duration-500 transform rounded-full bg-primarycolor hover:translate-y-1"
            >
              Agregar
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BotonDesplegable",

  data() {
    return {
      modal: false
    };
  }
};
</script>

<style scoped>
.padre {
  display: flex;
  justify-content: center;
  align-items: center;
}

.container {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0;
  transform: translateY(100px);
}

.btn {
  width: 60px;
  height: 60px;
  font-size: 22px;
  outline: none;
  border: none;
  background: #f44336;
  border-radius: 50%;
  color: #fff;
  cursor: pointer;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.3);
}

.floating-btn {
  font-size: 28px;
}

.floating-container {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  padding: 0 16px;

  position: absolute;
  bottom: 13px;
  height: 100%;
  width: 100%;
  padding-bottom: 70%;
  overflow: hidden;
  transition: height 0.4s;
}

.floating-container:hover {
  height: 560px;
}

.floating-container .btn {
  width: 0;
  height: 0;
  opacity: 0;
  transition: width 0.4s, height 0.4s, opacity 0.2s;
}

.floating-container:hover button {
  width: 60px;
  height: 60px;
  opacity: 1;
  animation: marginAnimated 0.4s forwards;
  animation-delay: 0.2s;
}

@keyframes marginAnimated {
  from {
    margin-bottom: 0px;
  }

  to {
    margin-bottom: 14px;
  }
}

/* Buttons colors */
.floating-container button:nth-child(1) {
  background: #161d6f;
}

.floating-container button:nth-child(2) {
  background: #f44336;
}

.floating-container button:nth-child(3) {
  background: #fdd835;
}

.floating-container button:nth-child(4) {
  background: #039be5;
}
.floating-container button:nth-child(4) {
  background: #4caf50;
}

.floating-container button:hover {
  opacity: 0.8;
}
</style>

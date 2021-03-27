<template>
  <div>
    <section class="py-20 seccion">
      <BotonDesplegable></BotonDesplegable>
      <div class="swiper-container">
        <!-- Additional required wrapper -->
        <div class="swiper-wrapper">
          <!-- Slides -->
          <div class="swiper-slide bg-rojo">
            <div class="text-white testimonialBox">
              <div class="text-lg">Tarea 1</div>
              <div class="content">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Temporibus obcaecati, eligendi quo exercitationem quae
              </div>
            </div>
          </div>
          <div class="swiper-slide bg-rojo">
            <div class="text-white testimonialBox">
              <h2 class="text-lg">Tarea 2</h2>
              <div class="content">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Temporibus obcaecati, eligendi quo exercitationem quae
              </div>
            </div>
          </div>
          <div class="swiper-slide bg-rojo">
            <div class="text-white testimonialBox">
              <h2 class="text-lg">Tarea 3</h2>
              <div class="content">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Temporibus obcaecati, eligendi quo exercitationem quae
              </div>
            </div>
          </div>
          <div class="swiper-slide bg-rojo">
            <div class="text-white testimonialBox">
              <h2 class="text-lg">Tarea 4</h2>
              <div class="content">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Temporibus obcaecati, eligendi quo exercitationem quae
              </div>
            </div>
          </div>
          <div class="swiper-slide bg-rojo">
            <div class="text-white testimonialBox">
              <h2 class="text-lg">Tarea 5</h2>
              <div class="content">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Temporibus obcaecati, eligendi quo exercitationem quae
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import BotonDesplegable from '@/components/todo/botonDesplegable'
import Swiper from "swiper/bundle";
import "swiper/swiper-bundle.css";
export default {

  name: "Cards",
  components: {
    BotonDesplegable
  },

  mounted() {
    const swiper = new Swiper(".swiper-container", {
      // Optional parameters

      effect: "coverflow",
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: "auto",
      coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 2,
        slideShadows: true
      },
      loop: true
    });
  }
};
</script>

<style scoped>
.seccion {
  position: relative;

  max-width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #2196f3;
}

.swiper-container {
  width: 80%;
  padding-top: 50px;
  padding-bottom: 50px;
}

.swiper-slide {
  background-position: center;
  background-size: cover;
  width: 200px;
  
  box-shadow: 0 15px 50px rgba(0, 0, 0, 0.2);
  filter: blur(4px);
  border-radius: 10px;
}

.swiper-slide-active {
  filter: blur(0px);
}

.testimonialBox {
  position: relative;
  width: 100%;
  padding: 40px;
  
  
}

.swiper-container-3d .swiper-slide-shadow-left,
.swiper-container-3d .swiper-slide-shadow-right {
  background-image: none;
}

@media screen and (min-width: 700px) {
  .swiper-slide {
    width: 300px;
  }
}

@media screen and (min-width: 1000px) {
  .swiper-slide {
    width: 350px;
  }
}
</style>

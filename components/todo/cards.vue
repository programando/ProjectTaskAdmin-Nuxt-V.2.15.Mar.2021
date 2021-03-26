<template>
  <div>
    <section class="w-2/5 sm:w-3/5 md:w-4/5 lg:w-full seccion">
      <div class="swiper-container">
        <!-- Additional required wrapper -->
        <div class="swiper-wrapper">
          <!-- Slides -->
          <div class="swiper-slide">
            <div class="testimonialBox">
              <img class="h-20 cuote" src="/images/quote.svg" alt="quote" />
              <div>Tarea 1</div>
              <div class="content">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Temporibus obcaecati, eligendi quo exercitationem quae
                necessitatibus sapiente ipsa nihil ullam earum omnis voluptas
                alias ex nam explicabo voluptatem odit eos iusto?
              </div>
            </div>
          </div>
          <div class="swiper-slide">
            <div class="testimonialBox">
              <img class="h-20 cuote" src="/images/quote.svg" alt="quote" />
              <h2>Tarea 2</h2>
              <div class="content">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Temporibus obcaecati, eligendi quo exercitationem quae
                necessitatibus sapiente ipsa nihil ullam earum omnis voluptas
                alias ex nam explicabo voluptatem odit eos iusto?
              </div>
            </div>
          </div>
          <div class="swiper-slide">
            <div class="testimonialBox">
              <img class="h-20 cuote" src="/images/quote.svg" alt="quote" />
              <h2>Tarea 3</h2>
              <div class="content">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Temporibus obcaecati, eligendi quo exercitationem quae
                necessitatibus sapiente ipsa nihil ullam earum omnis voluptas
                alias ex nam explicabo voluptatem odit eos iusto?
              </div>
            </div>
          </div>
          <div class="swiper-slide">
            <div class="testimonialBox">
              <img class="h-20 cuote" src="/images/quote.svg" alt="quote" />
              <h2>Tarea 4</h2>
              <div class="content">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Temporibus obcaecati, eligendi quo exercitationem quae
                necessitatibus sapiente ipsa nihil ullam earum omnis voluptas
                alias ex nam explicabo voluptatem odit eos iusto?
              </div>
            </div>
          </div>
          <div class="swiper-slide">
            <div class="testimonialBox">
              <img class="h-20 cuote" src="/images/quote.svg" alt="quote" />
              <h2>Tarea 5</h2>
              <div class="content">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Temporibus obcaecati, eligendi quo exercitationem quae
                necessitatibus sapiente ipsa nihil ullam earum omnis voluptas
                alias ex nam explicabo voluptatem odit eos iusto?
              </div>
            </div>
          </div>

          ...
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Swiper from "swiper/bundle";

import "swiper/swiper-bundle.css";
export default {
  name: "Cards",
  data() {
    return {};
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
      }
    });
  }
};
</script>

<style>
.seccion {
  position: relative;
  
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #2196f3;
  overflow: hidden;
}

.swiper-container {
  width: 100%;
  padding-top: 50px;
  padding-bottom: 50px;
  
}

.swiper-slide {
  background-position: center;
  background-size: cover;
  width: 300px;
  background: #fff;
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
</style>

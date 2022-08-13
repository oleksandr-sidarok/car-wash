<template>
  <section>
    <the-intro />
  </section>
  <section class="professional-washing">
    <div class="container">
      <div class="inner">
        <div class="content">
          <h2 class="title">Professional Washing And Cleaning.</h2>
          <div class="text">
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.
              Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus
              mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
            </p>
          </div>
          <div class="buttons-wrapper">
            <app-button type="tel" link="+910000000000">+91-0000-000000</app-button>
            <app-button decoration="outline">Learn More</app-button>
          </div>
        </div>
        <div class="image">
          <img src="../assets/img/profession-washing.png" alt="">
        </div>
      </div>
    </div>
  </section>
  <section class="about-us">
    <div class="container">
      <div class="inner">
        <div class="image">
          <img width="340" height="320" src="../assets/img/founder.png" alt="founder Luka Lojk">
        </div>
        <div class="content">
          <h2>Who We Are</h2>
          <div class="text">
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
              when an unknown printer took a galley of type and scrambled it to make a type specimen book
            </p>
          </div>
          <blockquote class="quote">
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
          </blockquote>
        </div>
      </div>
    </div>
  </section>
  <section class="our-services">
    <div class="container">
      <div class="inner">
        <h2>Our Washing Services</h2>
        <cards-slider :items="ourServices" />
      </div>
    </div>
  </section>
  <section class="cleaning-services">
    <div class="container">
      <div class="inner">
        <div class="content">
          <!--    Evan Yu, I'm sorry      -->
          <swiper
              :slides-per-view="1"
              :modules="swiperModules"
              :navigation="{nextEl: '#next', prevEl: '#prev'}"
              @swiper="cleaningSwiper = $event"
              @reachBeginning="$forceUpdate"
              @reachEnd="$forceUpdate"
          >
            <swiper-slide>
              <h2 @click="">Dry Cleaning Any Dirt Inside The Car.</h2>
              <div class="text">
                <p>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
                  Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus
                </p>
                <p>
                  mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat
                  massa quis enim.
                </p>
              </div>
            </swiper-slide>
            <swiper-slide>
              <h2>Dry Cleaning Any Dirt Inside The Car.</h2>
              <div class="text">
                <p>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
                  Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus
                </p>
                <p>
                  mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat
                  massa quis enim.
                </p>
              </div>
            </swiper-slide>
          </swiper>
          <div class="buttons-wrapper">
            <app-button decoration="outlined">View More</app-button>
            <div class="cleaning-services-nav">
              <app-button id="prev" :decoration="cleaningSwiper?.isBeginning ? 'outlined' : 'fill'">Prev</app-button>
              <app-button id="next" :decoration="cleaningSwiper?.isEnd ? 'outlined' : 'fill'">Next</app-button>
            </div>
          </div>
        </div>
        <div class="image">
          <img src="../assets/img/inside-car.jpg" alt="inside car" width="640" height="430">
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import TheIntro from "../components/TheIntro.vue";
import AppButton from "../components/UI/AppButton.vue";
import CardsSlider from "../components/CardsSlider.vue";

import {Navigation} from "swiper"
import {Swiper, SwiperSlide, useSwiper} from "swiper/vue";
const swiperModules = [Navigation]
import "swiper/css";
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import {ref} from "vue";

let cleaningSwiper = ref({})

let ourServices = [
  {
    title: "Contactless Washing",
    description: "Vestibulum tortor risus, rutrum at congue sed ultricies finibus.",
    icon: new URL('../assets/icons/u_snowflake.svg', import.meta.url)
  },
  {
    title: "Safety Materials",
    description: "Cras aliquam tristique metus, eu gravida diam vestibulum gravida.",
    icon: new URL('../assets/icons/u_wind-moon.svg', import.meta.url)
  },
  {
    title: "Modern Equipment",
    description: "Fusce maximus molestie nisl, ut dapibus libero vestibulum aliquam.",
    icon: new URL('../assets/icons/u_wind-sun.svg', import.meta.url)
  },
  {
    title: "Extensive Cleaning",
    description: "Sestibulum non dolor sit amet mi moles tincidunt vel non velit.",
    icon: new URL('../assets/icons/u_wind.svg', import.meta.url)
  },
  {
    title: "Contactless Washing",
    description: "Vestibulum tortor risus, rutrum at congue sed ultricies finibus.",
    icon: new URL('../assets/icons/u_wind-moon.svg', import.meta.url)
  },
]
</script>

<style scoped>
.professional-washing {
  padding: 90px 0 40px;
  background: var(--background-color);
}

.professional-washing .inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.professional-washing .content {
  width: 50%;
}

.professional-washing .image {
  width: 45%;
}

.professional-washing img {
  width: 100%;
  height: auto;
}

.buttons-wrapper {
  display: flex;
  gap: 20px;
  margin-top: 50px;
}

.about-us {
  padding: 40px 0;
  background: var(--background-color);
}

.about-us .inner {
  display: flex;
  align-items: center;
  flex: 1;
  gap: 60px;
}

.quote {
  position: relative;
  color: white;
  margin-top: 30px;
  margin-left: 24px;
  z-index: 3;
}

.quote::before {
  content: "";
  position: absolute;
  top: -14px;
  left: -24px;
  width: 46px;
  height: 39px;
  background-image: url("../assets/icons/q.png");
  z-index: -1;
}

.our-services {
  padding: 80px 0;
}

.our-services .inner {
  position: relative;
}

.our-services .inner::before, .our-services .inner::after {
  content: "";
  width: 100%;
  height: 130%;
  position: absolute;
  top: -30px;
  right: -100px;
  z-index: -1;
}

.our-services .inner::before {
  background-image: url("../assets/img/back-car.png");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: right;
  opacity: 0.7;
}

.our-services .inner::after {
  background: linear-gradient(90deg, var(--background-color) 46%, transparent 100%);
}

.cleaning-services {
  padding: 50px;
}

.cleaning-services .inner {
  display: flex;
  justify-content: space-between;
  gap: 50px;
}

.cleaning-services .content {
  width: 42%;
}

.cleaning-services img {
  border-radius: 10px;
}

.cleaning-services .buttons-wrapper {
  display: flex;
  justify-content: space-between;
}

.cleaning-services-nav {
  display: flex;
  gap: 10px;
}
</style>

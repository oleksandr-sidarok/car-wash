<template>
  <div class="booking-car">
    <swiper
        slides-per-view="1"
        :modules="swiperModules"
        :navigation="{nextEl: '#car-next', prevEl: '#car-prev'}"
        @slideChange="slideChangeHandler"
    >
<!--   https://codesandbox.io/s/laughing-violet-o8mrdf?file=/src/App.vue   -->
      <swiper-slide>
        <div class="image">
          <img src="../assets/img/sedan.png" alt="sedan">
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="image">
          <img src="../assets/img/suv.png" alt="SUV">
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="image">
          <img src="../assets/img/pickup.png" alt="Pick Up">
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="image">
          <img src="../assets/img/minibus.png" alt="Mini Bus">
        </div>
      </swiper-slide>
    </swiper>
    <app-button id="car-prev" :decoration="isBeginning ? 'disabled' : 'fill'">&lt;</app-button>
    <app-button id="car-next" :decoration="isEnd ? 'disabled' : 'fill'">&gt;</app-button>
  </div>
</template>

<!-- Pagination -->
<!-- https://codesandbox.io/s/ffmygy?file=/src/App.vue -->

<script setup>
import {Navigation} from "swiper"
import {Swiper, SwiperSlide} from "swiper/vue";
const swiperModules = [Navigation]
import "swiper/css";
import 'swiper/css/scrollbar';
import AppButton from "./UI/AppButton.vue"
import {ref} from "vue";

let currentSlide = ref(0)
let isEnd = ref(false)
let isBeginning = ref(true)
const slideChangeHandler = (swiper) => {
  currentSlide.value = swiper.realIndex
  isBeginning.value = swiper.isBeginning
  isEnd.value = swiper.isEnd
}

</script>

<style scoped>
.booking-car {
  position: relative;
  padding: 80px 0;
}

#car-next, #car-prev {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 3;
}

#car-next {
  right: 0;
}

#car-prev {
  left: 0;
}

.image {
  display: flex;
  justify-content: center;
}
</style>

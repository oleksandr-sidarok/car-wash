<template>
  <div class="booking-car">
    <swiper
        slides-per-view="1"
        :modules="swiperModules"
        :navigation="{nextEl: '#car-next', prevEl: '#car-prev'}"
        :pagination="pagination"
        @slideChange="slideChangeHandler"
    >
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

<script setup>
import {Navigation, Pagination} from "swiper"
import {Swiper, SwiperSlide} from "swiper/vue";
const swiperModules = [Navigation, Pagination]
import "swiper/css";
import 'swiper/css/scrollbar';
import AppButton from "./UI/AppButton.vue"
import {ref} from "vue";

// Pagination
const pagination = {
  clickable: true,
  renderBullet: function (index, className) {
    return '<span class="' + className + '">' + Cars[index] + '</span>';
  },
}

const Cars = [
  "Sedan",
  "SUV",
  "Pick Up",
  "Mini Bus"
]

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
  padding: 40px 0;
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
  align-items: center;
}

.image img {
  width: 75%;
}

:deep(.swiper-pagination) {
  display: flex;
  justify-content: center;
  gap: 100px;
  margin-top: 80px;
}

:deep(.swiper-pagination-bullet) {
  user-select: none;
  cursor: pointer;
  padding: 10px;
  font-size: 20px;
  font-weight: 700;
  white-space: nowrap;
}

:deep(.swiper-pagination-bullet-active) {
  color: var(--accent-color);
  text-decoration: underline;
}

@media (max-width: 992px) {
  #car-next, #car-prev {
    display: none;
  }

  .image img {
    width: 90%;
  }
}

@media (max-width: 768px) {
  :deep(.swiper-pagination) {
    gap: 30px;
    margin-top: 20px;
  }
}

@media (max-width: 576px) {
  :deep(.swiper-pagination) {
    gap: 8px;
  }

  :deep(.swiper-pagination-bullet) {
    font-size: 16px;
  }
}
</style>

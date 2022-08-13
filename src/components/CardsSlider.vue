<template>
  <div class="wrapper">
    <swiper
        :slides-per-view="props.slidesPerView"
        :modules="swiperModules"
        :navigation="{nextEl: '.next', prevEl: '.prev'}"
    >
      <swiper-slide v-for="item in items">
        <AppCard
            :title="item.title"
            :description="item.description"
            :content="props.content"
            :icon="item.icon"
            :stars="props.stars"
        />
      </swiper-slide>
    </swiper>
    <button class="prev btn-reset">
      <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 20 20">
        <path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd" />
      </svg>
    </button>
    <button class="next btn-reset">
      <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 20 20">
        <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
      </svg>
    </button>
  </div>
</template>

<script setup>
import AppCard from "../components/AppCard.vue";
import {Navigation} from "swiper"
import {Swiper, SwiperSlide} from "swiper/vue";
const swiperModules = [Navigation]
import "swiper/css";
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import {defineProps} from "vue";

const props = defineProps({
  items: {
    type: [Array, Set],
    required: true
  },
  content: {
    type: String,
    required: false
  },
  stars: {
    type: Boolean,
    default: false
  },
  slidesPerView: {
    type: Number,
    default: 4
  }
})
</script>

<style scoped>
.wrapper {
  position: relative;
}

.prev, .next {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  fill: #ffffff;
}

.prev {
  left: -50px;
}

.next {
  right: -50px;
}

:deep(.swiper-button-disabled) {
  opacity: 0.5;
}
</style>

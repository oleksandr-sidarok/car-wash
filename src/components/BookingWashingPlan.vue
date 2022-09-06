<template>
  <div class="booking-washing-plan">
    <swiper
        :modules="swiperModules"
        :navigation="{nextEl: '#nextPlan', prevEl: '#prevPlan'}"
        :space-between="20"
        :breakpoints="breakpoints"
    >
      <swiper-slide v-for="item in plans">
        <plan-card
            class="card"
            :level="item.level"
            :price="item.price"
            :benefits="item.benefits"
            :selected="item.level === selectedPlan"
            @select="selectPlan(item.level)"
        />
      </swiper-slide>
    </swiper>
    <button class="prev btn-reset" id="prevPlan">
      <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 20 20">
        <path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd" />
      </svg>
    </button>
    <button class="next btn-reset" id="nextPlan">
      <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 20 20">
        <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
      </svg>
    </button>
  </div>
</template>

<script setup>
import PlanCard from "./PlanCard.vue";
import {ref} from "vue";
import {Navigation, Pagination} from "swiper"
import {Swiper, SwiperSlide} from "swiper/vue";
const swiperModules = [Navigation, Pagination]

const breakpoints = {
  0: {
    slidesPerView: 1,
    spaceBetween: 20
  },
  640: {
    slidesPerView: 1.5,
    spaceBetween: 20
  },
  768: {
    slidesPerView: 2,
    spaceBetween: 40
  },
  992: {
    slidesPerView: 3
  },
  1200: {
    slidesPerView: 4,
    spaceBetween: 30
  }
}

const plans = [
  {
    level: "Basic License",
    benefits: {
      "Secure your customer usage": true,
      "View basic analytics": false,
      "Up to 350 customer profiles": false,
      "Custom network name": true
    },
    price: 39
  },
  {
    level: "Social License",
    benefits: {
      "Secure your customer usage": true,
      "View basic analytics": true,
      "Up to 350 customer profiles": true,
      "Custom network name": false
    },
    price: 55
  },
  {
    level: "Marketing License",
    benefits: {
      "Secure your customer usage": true,
      "View basic analytics": false,
      "Up to 350 customer profiles": true,
      "Custom network name": true
    },
    price: 99
  },
  {
    level: "Pro License",
    benefits: {
      "Secure your customer usage": true,
      "View basic analytics": true,
      "Up to 350 customer profiles": true,
      "Custom network name": true
    },
    price: 130
  },
]

let selectedPlan = ref(null)
const selectPlan = (level) => {
  selectedPlan.value = level
}
</script>

<style scoped>
.booking-washing-plan {
  position: relative;
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  margin-top: 100px;
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

@media (max-width: 576px) {
  .prev svg, .next svg {
    height: 40px;
  }

  .prev {
    left: -37px;
  }

  .next {
    right: -37px;
  }
}
</style>

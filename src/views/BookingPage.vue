<template>
  <section class="intro">
    <the-intro>
      <template #title>
        <span>Car Washing</span>
        <span>Online Booking</span>
        <span class="accent">SERVICE.</span>
      </template>
      <template #description></template>
      <template #button>
        <app-button style="width: 300px">Start Booking</app-button>
      </template>
    </the-intro>
  </section>
  <section class="our-services">
    <div class="container">
      <cards-slider :items="ourServices" content="center" :stars="true" :breakpoints="washingSliderBreakpoints" />
    </div>
  </section>
  <section class="booking-block">
    <div class="container">
      <booking-block />
    </div>
  </section>
</template>

<script setup>
import TheIntro from "../components/TheIntro.vue"
import AppButton from "../components/UI/AppButton.vue"
import CardsSlider from "../components/CardsSlider.vue"
import BookingBlock from "../components/BookingBlock.vue";

let washingSliderBreakpoints = {
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
.intro {
  padding: 0;
}

.title span {
  display: block;
  font-weight: 700;
}

.accent {
  font-weight: 900;
  color: var(--accent-color);
  text-transform: uppercase;
}

.our-services {
  position: relative;
  margin-top: -200px;
  background: linear-gradient(0deg, rgba(0,0,0,0.1) 0%, rgba(0,0,0,1) 50%, rgba(0,0,0,0.09986001236432074) 100%);
  z-index: 4;
}
</style>

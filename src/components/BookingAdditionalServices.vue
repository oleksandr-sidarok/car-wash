<template>
  <div class="booking-additional-services">
    <cards-slider :items="ourServices" :breakpoints="breakpoints" />
  </div>
</template>

<script setup>
import CardsSlider from "./CardsSlider.vue"

let breakpoints = {
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
    icon: new URL('../assets/icons/u_snowflake.svg', import.meta.url),
    button: new URL('../assets/icons/cart.svg', import.meta.url)
  },
  {
    title: "Safety Materials",
    description: "Cras aliquam tristique metus, eu gravida diam vestibulum gravida.",
    icon: new URL('../assets/icons/u_wind-moon.svg', import.meta.url),
    button: new URL('../assets/icons/cart.svg', import.meta.url)
  },
  {
    title: "Modern Equipment",
    description: "Fusce maximus molestie nisl, ut dapibus libero vestibulum aliquam.",
    icon: new URL('../assets/icons/u_wind-sun.svg', import.meta.url),
    button: new URL('../assets/icons/cart.svg', import.meta.url)
  },
  {
    title: "Extensive Cleaning",
    description: "Sestibulum non dolor sit amet mi moles tincidunt vel non velit.",
    icon: new URL('../assets/icons/u_wind.svg', import.meta.url),
    button: new URL('../assets/icons/cart.svg', import.meta.url)
  },
  {
    title: "Contactless Equipment",
    description: "Vestibulum tortor risus, rutrum at congue sed ultricies finibus.",
    icon: new URL('../assets/icons/u_wind-moon.svg', import.meta.url),
    button: new URL('../assets/icons/cart.svg', import.meta.url)
  },
]
</script>

<style scoped>
.booking-additional-services {
  margin-top: 80px;
}
</style>

<template>
  <div class="booking-block">
    <booking-tabs v-model="currentStep" />
    <component :is="currentComponent" />
  </div>
</template>

<script setup>
import BookingTabs from "./BookingTabs.vue"
import {computed, defineAsyncComponent, ref} from "vue"

const BookingCar = defineAsyncComponent(() => {
  return import("./BookingCar.vue")
})

let currentStep = ref(1)

const currentComponent = computed(() => {
  console.log(currentStep)
  switch (currentStep.value) {
    case 1: return BookingCar
    case 2: return BookingCar
  }

  return null
})
</script>

<style scoped>
.booking-block {
  /*background-color: red;*/
}
</style>

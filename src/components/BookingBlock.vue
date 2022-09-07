<template>
  <div class="booking-block">
    <booking-tabs v-model="currentStep" />
    <component :is="currentComponent" />
  </div>
</template>

<script setup>
import BookingTabs from "./BookingTabs.vue"
import {computed, defineAsyncComponent, ref} from "vue"

const BookingCarSelect = defineAsyncComponent(() => {
  return import("./BookingCarSelect.vue")
})
const BookingWashingPlan = defineAsyncComponent(() => {
  return import("./BookingWashingPlan.vue")
})
const BookingAdditionalServices = defineAsyncComponent(() => {
  return import("./BookingAdditionalServices.vue")
})

let currentStep = ref(1)

const currentComponent = computed(() => {
  switch (currentStep.value) {
    case 1: return BookingCarSelect
    case 2: return BookingWashingPlan
    case 3: return BookingAdditionalServices
  }

  return null
})
</script>

<style scoped>
.booking-block {
  /*background-color: red;*/
}
</style>

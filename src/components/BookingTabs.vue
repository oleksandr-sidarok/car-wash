<template>
  <ol class="tabs-list list-reset">
    <li class="tabs-item" :class="{selected: props.modelValue === 1}">
      <span class="step">Step 1</span>
      <button class="btn-reset" @click="selectHandler(1)">Select Car</button>
    </li>
    <li class="tabs-item" :class="{selected: props.modelValue === 2}">
      <span class="step">Step 2</span>
      <button class="btn-reset" @click="selectHandler(2)">Washing Plan</button>
    </li>
    <li class="tabs-item" :class="{selected: props.modelValue === 3}">
      <span class="step">Step 3</span>
      <button class="btn-reset" @click="selectHandler(3)">Additional Services</button>
    </li>
    <li class="tabs-item" :class="{selected: props.modelValue === 4}">
      <span class="step">Step 4</span>
      <button class="btn-reset" @click="selectHandler(4)">Date and Time</button>
    </li>
  </ol>
</template>

<script setup>
const props = defineProps({
  modelValue: {
    type: Number,
    default: 1
  },
  allowSelect: {
    type: Boolean,
    default: true
  }
})

const emit = defineEmits(["update:modelValue"])

const selectHandler = (step) => {
  emit("update:modelValue", step)
}
</script>

<style scoped>
.tabs-list {
  display: flex;
  gap: 40px;
}

.tabs-item {
  display: flex;
  flex-direction: column;
}

button {
  padding: 20px 50px;
  margin-left: -50px;
  margin-right: 50px;
  border-radius: 10px;
  color: white;
}

.selected button {
  padding: 20px 50px;
  margin-left: 0;
  margin-right: 0;
  background-color: var(--accent-color);
}

.selected span {
  color: var(--accent-color);
}
</style>

<template>
  <input
      class="input"
      type="text"
      :placeholder="placeholder"
      :value="props.modelValue"
      @input="inputHandler"
  >
</template>

<script setup>
import {defineProps, defineEmits} from "vue";

const props = defineProps({
  placeholder: {
    type: String,
    default: ""
  },
  modelValue: {
    type: String
  }
})

const emit = defineEmits(['update:modelValue'])

const inputHandler = (e) => {
  emit('update:modelValue', e.target.value)
}
</script>

<style scoped>
.input {
  padding: 11px 22px;
  border: 1px solid var(--text-color);
  border-radius: 5px;
  color: var(--text-color);
  background: transparent;
}
</style>

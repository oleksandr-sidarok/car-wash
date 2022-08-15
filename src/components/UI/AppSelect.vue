<template>
  <div class="wrapper">
    <select
        class="select"
        placeholder="1334"
        :value="props.modelValue"
        @change="selectHandler"
    >
      <option value="" disabled selected hidden>{{props.placeholder}}</option>
      <option v-for="item in options" :value="item">{{item}}</option>
    </select>
  </div>
</template>

<script setup>
import {defineProps, defineEmits} from "vue";

const props = defineProps({
  modelValue: {
    type: String,
    default: ""
  },
  options: {
    type: [Array, Set],
    required: true
  },
  placeholder: {
    type: String,
    default: "Please Choose..."
  }
})

const emit = defineEmits(['update:modelValue'])

const selectHandler = (e) => {
  emit('update:modelValue', e.target.value)
}
</script>

<style scoped>
.select {
  padding: 11px 22px;
  border: 1px solid var(--text-color);
  border-radius: 5px;
  color: var(--text-color);
  background: transparent;
  appearance: none;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
}

.wrapper {
  position: relative;
  display: inline-block;
  width: 240px;
}

.wrapper::before {
  content: ">";
  position: absolute;
  right: 20px;
  top: 50%;
  transform: translateY(-50%) rotate(90deg);
}
</style>

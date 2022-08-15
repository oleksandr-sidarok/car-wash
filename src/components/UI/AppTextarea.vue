<template>
  <textarea class="textarea" rows="5" :placeholder="props.placeholder" @input="textareaHandler">{{props.modelValue}}</textarea>
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

const textareaHandler = (e) => {
  emit('update:modelValue', e.target.value)
}
</script>

<style scoped>
.textarea {
  resize: none;
  padding: 11px 22px;
  border: 1px solid var(--text-color);
  border-radius: 5px;
  color: var(--text-color);
  background: transparent;
}
</style>

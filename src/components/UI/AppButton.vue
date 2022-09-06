<template>
  <a :href="`${linkType}${link}`" class="button" :class="props.decoration" v-if="type === 'link'">
    <slot />
  </a>
  <button class="button" :class="props.decoration" v-else>
    <slot />
  </button>

</template>

<script setup>
import {computed, ref} from "vue";
import {defineProps} from "vue";

const props = defineProps({
  type: {
    type: String,
    default: "button"
  },
  link: {
    type: String,
    default: ""
  },
  decoration: {
    type: String,
    default: "fill"
  },
  color: {
    type: String,
    default: "#FF013E"
  },
  modelValue: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['update:modelValue'])

let linkType = computed(() => {
  switch (props.type) {
    case "tel":
        return "tel:"
  }
})
</script>

<style scoped>
  .button {
    padding: 20px 30px;
    background: v-bind(color);
    border-radius: 10px;
    border: 1px solid transparent;
    color: white;
  }

  .button:hover {
    background-color: #1a1a1a;
  }

  .outlined {
    background: transparent;
    border: 1px solid #ffffff;
    opacity: 0.8;
  }

  .outlined:hover {
    /*color: v-bind("color");*/
    background: v-bind("color");
  }

  .isSelected {
    background-color: v-bind("color");
  }

  .disabled {
    background: transparent;
    border: 1px solid #ffffff;
    opacity: 0.5;
  }
</style>

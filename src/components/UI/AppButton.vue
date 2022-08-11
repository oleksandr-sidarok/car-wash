<template>
  <button class="button" :class="props.decoration" v-if="props.type === 'button'" :type="props.type">
    <slot />
  </button>
  <a :href="`${linkType}${link}`" class="button" v-else>
    <slot />
  </a>
</template>

<script setup>
import {computed} from "vue";

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
  }
})

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
    background: var(--accent-color);
    border-radius: 10px;
    border: 1px solid transparent;
    color: white;
  }

  .outline {
    background: transparent;
    border: 1px solid #ffffff;
  }
</style>

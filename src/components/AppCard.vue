<template>
  <div class="card">
    <img width="120" height="120" :src="icon" alt="icon" class="icon">
    <h3 class="title">{{props.title}}</h3>
    <div class="description">
      <p>{{description}}</p>
    </div>
    <app-stars v-if="props.stars" :value="4" />
    <app-button class="button" :class="{selected}" v-if="props.button" @click="$emit('button-click')">
      <img v-if="buttonType === 'image'" :src="button" width="30">
      <span v-else>{{button}}</span>
    </app-button>
  </div>
</template>

<script setup>
import AppButton from "./UI/AppButton.vue"
import AppStars from "./AppStars.vue"
import {computed} from "vue";

const props = defineProps({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  icon: {
    type: URL,
    required: true
  },
  content: {
    type: String,
    default: "start"
  },
  stars: {
    type: Boolean,
    default: false
  },
  button: {
    type: [String, URL],
    default: null
  },
  selected: {
    type: Boolean,
    default: false
  }
})

const buttonType = computed(() => {
  if (props.button instanceof URL) { // is not true
    console.log("isURL")
    return "image"
  } else {
    console.log(props.button)
    return "text"
  }
})
</script>

<style scoped>
.card {
  position: relative;
  min-width: 250px;
  padding: 30px 15px;
  border-radius: 24px;
  display: flex;
  flex-direction: column;
  align-items: v-bind('props.content');
  text-align: v-bind('props.content');
  overflow: hidden;
}

.card::before, .card::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
}

.card::before {
  background-color: var(--background-color);
  opacity: 0.9;
}

.card::after {
  background: linear-gradient(126.6deg, rgba(255, 255, 255, 0.12) 28.69%, rgba(255, 255, 255, 0) 100%);
  backdrop-filter: blur(140px);
  -webkit-backdrop-filter: blur(140px);
}

.button {
  position: relative;
  padding: 15px;
  background: linear-gradient(126.6deg, rgba(255, 255, 255, 0.12) 29.69%, rgba(255, 255, 255, 0) 100%);
}

.button img {
  display: block;
}

.button.selected {
  background: var(--accent-color);
}

@media (max-width: 576px) {
  .card {
    min-width: 200px;
  }
}

.title {
  color: var(--accent-color);
}

.description {
  height: 68px;
}

.icon {
  margin-bottom: 10px;
}
</style>

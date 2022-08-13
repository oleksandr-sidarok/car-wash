<template>
  <div class="card">
    <img width="120" height="120" :src="props.icon" alt="icon" class="icon">
    <h3 class="title">{{props.title}}</h3>
    <div class="description">
      <p>{{props.description}}</p>
    </div>
    <app-stars v-if="props.stars" :value="4" />
  </div>
</template>

<script setup>
import AppStars from "./AppStars.vue"

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
  }
})
</script>

<style scoped>
.card {
  width: 250px;
  padding: 30px 15px;
  background: linear-gradient(126.6deg, rgba(255, 255, 255, 0.12) 28.69%, rgba(255, 255, 255, 0) 100%);
  backdrop-filter: blur(140px);
  border-radius: 24px;
  display: flex;
  flex-direction: column;
  align-items: v-bind('props.content');
  text-align: v-bind('props.content');
}

.title {
  color: var(--accent-color);
}

.icon {
  margin-bottom: 10px;
}
</style>

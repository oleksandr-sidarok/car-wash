<template>
  <div class="review">
    <h3 class="title">
      <slot name="title"></slot>
    </h3>
    <div class="text">
      <slot name="text"></slot>
    </div>
    <div class="user">
      <div class="avatar">
        <img :src="props.user.image" alt="user avatar">
      </div>
      <div class="info">
        <span class="user-name">{{ props.user.name }}</span>
        <span class="date">{{ props.date }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import {defineProps} from "vue";
const props = defineProps({
  user: {
    type: Object,
    required: true
  },
  date: {
    type: String,
    required: true
  }
})
</script>

<style scoped>
  .review {
    display: flex;
    align-items: center;
    text-align: center;
    flex-direction: column;
  }

  .title {
    height: 52px;
    margin-bottom: 10px;
  }

  .text {
    height: 160px;
    overflow: auto;
    margin-bottom: 60px;
  }

  .user {
    position: relative;
    display: flex;
    text-align: left;
    gap: 16px;
  }

  .user::before {
    content: "";
    position: absolute;
    top: -26px;
    left: 50%;
    transform: translateX(-50%);
    width: 24px;
    height: 14px;
    background-image: url("../assets/icons/triangle.svg");
  }

  .avatar img {
    display: block;
    border-radius: 100%;
  }

  .info {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .user-name {
    font-weight: 700;
    font-size: 18px;
    color: var(--accent-color);
  }

  .date {
    color: white;
    font-weight: 400;
  }

  @media (max-width: 992px) {
    .text {
      height: 135px;
    }
  }
</style>

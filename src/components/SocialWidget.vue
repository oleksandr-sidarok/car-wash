<template>
<ul class="social-list list-reset">
  <li v-for="item in social_list">
    <a :href="item.link" target="_blank" class="social-link">
      <img width="26" height="26" :src="item.icon" :alt="item.name" class="social-icon">
    </a>
  </li>
</ul>
</template>

<script setup>
let social_list = [
  {
    name: "twitter",
    link: "https://twitter.com",
    icon: new URL("../assets/icons/twitter.svg", import.meta.url)
  },
  {
    name: "facebook",
    link: "https://facebook.com",
    icon: new URL("../assets/icons/facebook.svg", import.meta.url)
  },
  {
    name: "instagram",
    link: "https://instagram.com",
    icon: new URL("../assets/icons/instagram.svg", import.meta.url)
  },
  {
    name: "linkedin",
    link: "https://linkedin.com",
    icon: new URL("../assets/icons/linkedin.svg", import.meta.url)
  },
]
</script>

<style scoped>
  .social-list {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .social-list li {
    display: block;
  }

  .social-icon {
    display: block;
  }
</style>

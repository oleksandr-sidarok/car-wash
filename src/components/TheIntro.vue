<template>
  <div class="intro">
    <div class="container">
      <div class="intro-inner">
        <div class="title">
          <slot name="title">
            <span>The shine that</span>
            <span>lasts</span>
            <span class="accent">Forever.</span>
          </slot>
        </div>
        <div class="description">
          <slot name="description">
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
            </p>
          </slot>
        </div>
        <slot class="button">
          <app-button style="width: 300px">Book Now</app-button>
        </slot>
        <social-widget class="social-widget" />
      </div>
    </div>
  </div>
</template>

<script setup>
import AppButton from "../components/UI/AppButton.vue"
import SocialWidget from "../components/SocialWidget.vue"
</script>

<style scoped>
.intro {
  position: relative;
  height: 100vh;
  display: flex;
  align-items: center;
  z-index: 3;
}

.intro::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  width: 100%;
  height: 100%;
  background-image: url("../assets/img/intro-bg.jpg");
  background-size: cover;
  z-index: -1;
}

.intro::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  width: 100%;
  height: 100%;
  background-color: #030305C2;
  z-index: -1;
}

.intro-inner {
  position: relative;
}

.title {
  font-size: 80px;
  line-height: 1;
}

.title span {
  display: block;
  font-weight: 700;
}

.accent {
  font-weight: 900;
  color: var(--accent-color);
  text-transform: uppercase;
}

.title, .description {
  color: white;
  max-width: 600px;
}

.description {
  font-size: 20px;
  margin-bottom: 50px;
}

.social-widget {
  position: absolute;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
}

@media (max-width: 768px) {
  .social-widget {
    display: none;
  }

  .title {
    font-size: 60px;
  }

  .title span {
    display: inline;
    margin-right: 1rem;
  }

  .title .accent {
    display: block;
  }

  .description {
    font-size: 16px;
  }
}
</style>

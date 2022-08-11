<template>
  <section>
    <the-intro />
  </section>
  <section class="professional-washing">
    <div class="container">
      <div class="inner">
        <div class="content">
          <h2 class="title">Professional Washing And Cleaning.</h2>
          <div class="text">
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.
              Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus
              mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
            </p>
          </div>
          <div class="buttons-wrapper">
            <app-button type="tel" link="+910000000000">+91-0000-000000</app-button>
            <app-button decoration="outline">Learn More</app-button>
          </div>
        </div>
        <div class="image">
          <img src="../assets/img/profession-washing.png" alt="">
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import TheIntro from "../components/TheIntro.vue";
import AppButton from "../components/UI/AppButton.vue"
</script>

<style scoped>
.professional-washing {
  padding: 90px 0;
  background: var(--background-color);
}

.professional-washing .inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.professional-washing .content {
  width: 50%;
}

.professional-washing .image {
  width: 45%;
}

.image img {
  width: 100%;
  height: auto;
}

.buttons-wrapper {
  display: flex;
  gap: 20px;
  margin-top: 50px;
}
</style>

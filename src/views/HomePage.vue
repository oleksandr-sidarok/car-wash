<template>
  <section class="intro">
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
  <section class="about-us">
    <div class="container">
      <div class="inner">
        <div class="image">
          <img width="340" height="320" src="../assets/img/founder.png" alt="founder Luka Lojk">
        </div>
        <div class="content">
          <h2>Who We Are</h2>
          <div class="text">
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
              when an unknown printer took a galley of type and scrambled it to make a type specimen book
            </p>
          </div>
          <blockquote class="quote">
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
          </blockquote>
        </div>
      </div>
    </div>
  </section>
  <section class="our-services">
    <div class="container">
      <div class="inner">
        <h2>Our Washing Services</h2>
        <cards-slider :items="ourServices" content="center" :stars="true" :breakpoints="washingSliderBreakpoints" />
      </div>
    </div>
  </section>
  <section class="cleaning-services">
    <div class="container">
      <div class="inner">
        <div class="content">
          <!--    Evan Yu, I'm sorry      -->
          <swiper
              :slides-per-view="1"
              :modules="swiperModules"
              :navigation="{nextEl: '#next', prevEl: '#prev'}"
              @swiper="cleaningSwiper = $event"
              @reachBeginning="$forceUpdate"
              @reachEnd="$forceUpdate"
          >
            <swiper-slide>
              <h2 @click="">Dry Cleaning Any Dirt Inside The Car.</h2>
              <div class="text">
                <p>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
                  Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus
                </p>
                <p>
                  mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat
                  massa quis enim.
                </p>
              </div>
            </swiper-slide>
            <swiper-slide>
              <h2>Dry Cleaning Any Dirt Inside The Car.</h2>
              <div class="text">
                <p>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
                  Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus
                </p>
                <p>
                  mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat
                  massa quis enim.
                </p>
              </div>
            </swiper-slide>
          </swiper>
          <div class="buttons-wrapper">
            <app-button decoration="outlined">View More</app-button>
            <div class="cleaning-services-nav">
              <app-button id="prev" :decoration="cleaningSwiper?.isBeginning ? 'outlined' : 'fill'">Prev</app-button>
              <app-button id="next" :decoration="cleaningSwiper?.isEnd ? 'outlined' : 'fill'">Next</app-button>
            </div>
          </div>
        </div>
        <div class="image">
          <img src="../assets/img/inside-car.jpg" alt="inside car" width="640" height="430">
        </div>
      </div>
    </div>
  </section>
  <section class="our-benefits">
    <div class="container">
      <CardsSlider :items="ourBenefits" :slides-per-view="3" :breakpoints="benefitsSliderBreakpoints" />
    </div>
  </section>
  <section class="reviews">
    <div class="container">
      <div class="inner">
        <h2 class="title">What our clients say</h2>
        <!--    There should be a slider here    -->
        <swiper
          :slides-per-view="2.5"
          :space-between="90"
          :breakpoints="reviewsSliderBreakpoints"
        >
          <swiper-slide v-for="item in reviews">
            <app-review :user="item.user" :date="item.date">
              <template #title>{{item.title}}</template>
              <template #text>{{item.text}}</template>
            </app-review>
          </swiper-slide>
        </swiper>
      </div>
    </div>
  </section>
  <section class="contact-us">
    <div class="container">
      <div class="inner">
        <div class="map">
          <img src="../assets/img/map.png" alt="Map">
        </div>
        <div class="content">
          <h2>Apply for a car wash.</h2>
          <form class="contact-form" @submit.prevent>
            <app-input
                v-model="appeal.name"
                placeholder="Full Name"
            />
            <app-input
                v-model="appeal.phone"
                placeholder="Phone No."
            />
            <app-select
                :options="['New York', 'Los Angeles', 'Chicago', 'Houston', 'Phoenix ']"
                placeholder="Select Address"
                v-model="appeal.address"
            />
            <app-select
                :options="['10:00', '12:00', '14:00', '16:00']"
                placeholder="Select Time"
            />
            <app-textarea
                class="contact-text"
                placeholder="Message"
                v-model="appeal.text"
            />
            <app-button class="contact-button" type="submit">
              Book Appointment
            </app-button>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import TheIntro from "../components/TheIntro.vue";
import AppButton from "../components/UI/AppButton.vue";
import CardsSlider from "../components/CardsSlider.vue";
import AppReview from "../components/AppReview.vue";
import AppInput from "../components/UI/AppInput.vue";
import AppSelect from "../components/UI/AppSelect.vue";
import AppTextarea from "../components/UI/AppTextarea.vue";

import {Navigation} from "swiper"
import {Swiper, SwiperSlide} from "swiper/vue";
import "swiper/css";
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import {reactive, ref, watch} from "vue";

const swiperModules = [Navigation]

let washingSliderBreakpoints = {
  0: {
    slidesPerView: 1,
    spaceBetween: 20
  },
  640: {
    slidesPerView: 1.5,
    spaceBetween: 20
  },
  768: {
    slidesPerView: 2,
    spaceBetween: 40
  },
  992: {
    slidesPerView: 3
  },
  1200: {
    slidesPerView: 4,
    spaceBetween: 30
  }
}

let benefitsSliderBreakpoints = {
  0: {
    slidesPerView: 1,
    spaceBetween: 20
  },
  580: {
    slidesPerView: 1.5,
    spaceBetween: 20
  },
  768: {
    slidesPerView: 2,
    spaceBetween: 20
  },
  820: {
    slidesPerView: 2.25,
    spaceBetween: 40
  },
  958: {
    slidesPerView: 2.5
  },
  1200: {
    slidesPerView: 3,
    spaceBetween: 30
  }
}

let reviewsSliderBreakpoints = {
  0: {
    slidesPerView: 1,
  },
  576: {
    slidesPerView: 1,
    spaceBetween: 30
  },
  768: {
    slidesPerView: 1.5
  },
  992: {
    slidesPerView: 2
  },
  1200: {
    slidesPerView: 2.5,
    spaceBetween: 90
  }
}

let cleaningSwiper = ref({})

let ourServices = [
  {
    title: "Contactless Washing",
    description: "Vestibulum tortor risus, rutrum at congue sed ultricies finibus.",
    icon: new URL('../assets/icons/u_snowflake.svg', import.meta.url)
  },
  {
    title: "Safety Materials",
    description: "Cras aliquam tristique metus, eu gravida diam vestibulum gravida.",
    icon: new URL('../assets/icons/u_wind-moon.svg', import.meta.url)
  },
  {
    title: "Modern Equipment",
    description: "Fusce maximus molestie nisl, ut dapibus libero vestibulum aliquam.",
    icon: new URL('../assets/icons/u_wind-sun.svg', import.meta.url)
  },
  {
    title: "Extensive Cleaning",
    description: "Sestibulum non dolor sit amet mi moles tincidunt vel non velit.",
    icon: new URL('../assets/icons/u_wind.svg', import.meta.url)
  },
  {
    title: "Contactless Washing",
    description: "Vestibulum tortor risus, rutrum at congue sed ultricies finibus.",
    icon: new URL('../assets/icons/u_wind-moon.svg', import.meta.url)
  },
]

let ourBenefits = [
  {
    title: "Natural Cleaners",
    description: "Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
    icon: new URL('../assets/icons/speedometer.svg', import.meta.url)
  },
  {
    title: "Heightened care",
    description: "Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
    icon: new URL('../assets/icons/speedometer.svg', import.meta.url)
  },
  {
    title: "Aromatization",
    description: "Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
    icon: new URL('../assets/icons/speedometer.svg', import.meta.url)
  },
  {
    title: "Natural Cleaners",
    description: "Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
    icon: new URL('../assets/icons/speedometer.svg', import.meta.url)
  }
]

let reviews = [
  {
    title: "Incredible Experience",
    text: "We had an incredible experience working with Landify and were impressed they made such a big difference in only three weeks. Our team is so grateful for the wonderful improvements they made and their ability to get familiar with the concept so quickly. It acted as a catalyst to take our design to the next level and get more eyes on our product.",
    date: "12/10/13",
    user: {
      name: "Esther Howard",
      image: new URL('../assets/img/user_1.jpg', import.meta.url)
    }
  },
  {
    title: "Dependable, Responsive, Professional Partner",
    text: "Fermin Apps has collaborated with Landify team for several projects such as Photo Sharing Apps and Custom Social Networking Apps. The experience has been pleasant, professional and exceeding our expectations. The team is always thinking beyond the current tasks & helps us formulate a vision and possibilities for future.",
    date: "10/28/12",
    user: {
      name: "Ralph Edwards",
      image: new URL('../assets/img/user_2.jpg', import.meta.url)
    }
  },
  {
    title: "Dependable, Responsive, Professional Partner",
    text: "Fermin Apps has collaborated with Landify team for several projects such as Photo Sharing Apps and Custom Social Networking Apps. The experience has been pleasant, professional and exceeding our expectations. The team is always thinking beyond the current tasks & helps us formulate a vision and possibilities for future.",
    date: "7/27/13",
    user: {
      name: "Guy Hawkins",
      image: new URL('../assets/img/user_3.jpg', import.meta.url)
    }
  },
]

let appeal = reactive({
  name: "",
  phone: "",
  address: "",
  time: "",
  text: ""
})
</script>

<style scoped>
.intro {
  padding-top: 0;
}

.professional-washing {
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

.professional-washing img {
  width: 100%;
  height: auto;
}

.buttons-wrapper {
  display: flex;
  gap: 20px;
  margin-top: 50px;
}

@media (max-width: 768px) {
  .professional-washing .inner {
    flex-direction: column;
    gap: 50px;
    order: 2;
  }

  .professional-washing .content {
    width: auto;
  }

  .professional-washing .image {
    display: none;
  }
}

.about-us .inner {
  display: flex;
  align-items: center;
  flex: 1;
  gap: 60px;
}

.quote {
  position: relative;
  color: white;
  margin-top: 30px;
  margin-left: 24px;
  z-index: 3;
}

.quote::before {
  content: "";
  position: absolute;
  top: -14px;
  left: -24px;
  width: 46px;
  height: 39px;
  background-image: url("../assets/icons/q.png");
  z-index: -1;
}

@media (max-width: 768px) {
  .about-us .inner {
    flex-direction: column-reverse;
  }
}

.our-services .inner {
  position: relative;
}

.our-services .inner::before, .our-services .inner::after {
  content: "";
  width: 100%;
  height: 130%;
  position: absolute;
  top: -30px;
  right: -100px;
  z-index: -1;
}

.our-services .inner::before {
  background-image: url("../assets/img/back-car.png");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: right;
  opacity: 0.7;
}

.our-services .inner::after {
  background: linear-gradient(90deg, var(--background-color) 46%, transparent 100%);
}

.cleaning-services .inner {
  display: flex;
  justify-content: space-between;
  gap: 50px;
}

.cleaning-services .content {
  width: 42%;
}

.cleaning-services img {
  border-radius: 10px;
}

.cleaning-services .buttons-wrapper {
  display: flex;
  justify-content: space-between;
}

.cleaning-services-nav {
  display: flex;
  gap: 10px;
}

@media (max-width: 992px) {
  .cleaning-services .inner {
    gap: 30px;
  }
}

@media (max-width: 768px) {
  .cleaning-services .inner {
    flex-direction: column;
  }

  .cleaning-services .content {
    width: auto;
  }

  .cleaning-services img {
    width: 100%;
    height: auto;
  }
}

.our-benefits :deep(.card) {
  padding: 30px 45px;
}

.our-benefits :deep(.icon) {
  height: 64px;
  width: 64px;
}

.reviews .title {
  margin-bottom: 80px;
}

@media (max-width: 576px) {
  .reviews .title {
    margin-bottom: 40px;
  }
}

.contact-us .inner{
  display: flex;
  justify-content: space-between;
  gap: 30px;
}

.contact-us .content {
  width: 50%;
}

.contact-us .map {
  display: flex;
  align-items: center;
}

.contact-us .map img {
  width: 100%;
  height: auto;
}

.contact-form {
  display: flex;
  flex-wrap: wrap;
  justify-content: stretch;
  gap: 20px;
}

.contact-form > * {
  flex-grow: 1;
}

.contact-text {
  width: 100%;
}

.contact-button {
  flex-grow: 0;
}

@media (max-width: 768px) {
  .contact-us .inner {
    flex-direction: column-reverse;
  }

  .contact-us .content {
    width: auto;
  }
}
</style>

<template>
  <footer class="footer">
    <div class="container">
      <div class="inner">
        <div class="company-info">
          <span class="company-name">Car Wash</span>
          <span class="company-copyright">©2021 Car Wash. All Rights Reserved</span>
        </div>
        <div class="pages">
          <span class="title">Pages</span>
          <ul class="list-reset">
            <li v-for="item in pages"><router-link :to="{name: item.route}">{{item.name}}</router-link></li>
          </ul>
        </div>
        <div>
          <span class="title">Cars</span>
          <ul class="list-reset">
            <li v-for="item in cars"><router-link :to="{name: 'Booking'}">{{item}}</router-link></li>
          </ul>
        </div>
        <div>
          <span class="title">Services</span>
          <ul class="list-reset">
            <li v-for="item in services">{{item}}</li>
          </ul>
        </div>
        <div class="contacts">
          <div class="phones">
            <a href="tel:3033550105">(303) 985-0105</a>
            <span>, </span>
            <a href="tel:3033550107">(303) 355-0107</a>
          </div>
          <div class="email">
            <a href="mailto:mifs@info.com">mifs@info.com</a>
          </div>
          <div class="address">
            2972 Westheimer Rd. Santa Ana, Illinois 85486
          </div>
          <div class="social">
            <social-widget />
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import SocialWidget from "../components/SocialWidget.vue"

let pages = [
  {
    name: "Home",
    route: "Home"
  },
  {
    name: "Booking",
    route: "Booking"
  },
  {
    name: "About Us",
    route: "AboutUs"
  },
  {
    name: "Car Rental",
    route: "CarRental"
  }
]

let cars = [
    "Sedan",
    "SUV",
    "PickUp",
    "MiniBus"
]

let services = [
    "Contactless Washing",
    "Safety Materials",
    "Modern Equipment",
    "Extensive Cleaning"
]
</script>

<style scoped>
a {
  color: var(--text-color);
}

.footer {
  padding: 70px 0;
  background-color: black;
}

.inner {
  display: flex;
  justify-content: space-between;
  gap: 30px;
}

.company-info {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.social :deep(.social-list) {
  flex-direction: row;
}

.title {
  display: block;
  margin-bottom: 26px;
  color: white;
  text-transform: uppercase;
  font-weight: 700;
}

.company-name {
  font-size: 30px;
  color: white;
}

.contacts {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.email a {
  color: white;
}

@media (max-width: 1200px) {
  .inner {
    flex-wrap: wrap;
  }

  .contacts {
    width: 100%;
    text-align: center;
    margin-top: 50px;
  }
}

@media (max-width: 768px) {
  .inner {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .company-info {
    margin-bottom: 30px;
  }

  .title {
    margin-bottom: 10px;
  }
}
</style>

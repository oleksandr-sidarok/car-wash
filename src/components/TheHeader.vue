<template>
  <header class="header">
    <div class="container">
      <div class="header-inner">
        <a href="/" class="logo">
          <img src="../assets/car-wash-logo.svg">
        </a>
        <nav class="nav">
          <ul class="nav-list list-reset">
            <li v-for="item in tabs" class="nav-item" :class="{current: currentTab === item.route}">
              <router-link :to="{name: item.route}">
                {{item.name.toUpperCase()}}
              </router-link>
            </li>
          </ul>
        </nav>
        <div class="profile">
          <router-link to="" class="nav-item sign-in">
            SIGN IN
          </router-link>
          <router-link to="" class="nav-item">
            <svg width="62" height="62" viewBox="0 0 62 62" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M34.8145 27.578C34.8145 29.7143 33.0826 31.4462 30.9462 31.4462C28.8098 31.4462 27.078 29.7143 27.078 27.578C27.078 25.4416 28.8098 23.7097 30.9462 23.7097C33.0826 23.7097 34.8145 25.4416 34.8145 27.578ZM37.3934 27.578C37.3934 31.1386 34.5069 34.0251 30.9462 34.0251C27.3856 34.0251 24.4991 31.1386 24.4991 27.578C24.4991 24.0173 27.3856 21.1308 30.9462 21.1308C34.5069 21.1308 37.3934 24.0173 37.3934 27.578ZM24.531 34.3994C24.7093 34.2617 24.9254 34.1768 25.1505 34.1692C25.8095 34.1469 26.1442 34.3005 26.4016 34.5915C26.8982 35.153 26.5718 36.0647 25.9877 36.5345C24.9137 37.3981 24.0834 38.5345 23.6046 39.8272H38.2873C37.8086 38.5348 36.9785 37.3986 35.9049 36.535C35.3207 36.0651 34.9946 35.1533 35.4913 34.5917C35.7488 34.3006 36.0833 34.1471 36.7422 34.1696C36.9673 34.1773 37.1832 34.2621 37.3614 34.3998C39.452 36.0143 40.8947 38.3998 41.2442 41.1195C41.335 41.8258 40.749 42.4061 40.0368 42.4061H21.8551C21.1429 42.4061 20.5569 41.8258 20.6477 41.1195C20.9972 38.3996 22.4402 36.0138 24.531 34.3994Z"/>
            </svg>
          </router-link>
          <router-link to="" class="nav-item">
            <svg width="62" height="62" viewBox="0 0 62 62" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M19.3413 23.7096C19.3413 22.9975 19.9186 22.4202 20.6307 22.4202H24.499C25.071 22.4202 25.5746 22.797 25.736 23.3458L28.6874 33.3803H37.676L38.9654 28.2226H30.9461C30.234 28.2226 29.6567 27.6453 29.6567 26.9332C29.6567 26.221 30.234 25.6437 30.9461 25.6437H40.6168C41.0139 25.6437 41.3888 25.8267 41.6332 26.1396C41.8775 26.4526 41.9641 26.8607 41.8678 27.2459L39.9336 34.9825C39.7901 35.5565 39.2744 35.9591 38.6827 35.9591H27.7226C27.1506 35.9591 26.6469 35.5823 26.4855 35.0336L23.5342 24.999H20.6307C19.9186 24.999 19.3413 24.4217 19.3413 23.7096ZM29.6567 39.1827C29.6567 40.607 28.5021 41.7616 27.0779 41.7616C25.6536 41.7616 24.499 40.607 24.499 39.1827C24.499 37.7584 25.6536 36.6039 27.0779 36.6039C28.5021 36.6039 29.6567 37.7584 29.6567 39.1827ZM38.6827 41.7616C40.107 41.7616 41.2616 40.607 41.2616 39.1827C41.2616 37.7584 40.107 36.6039 38.6827 36.6039C37.2584 36.6039 36.1039 37.7584 36.1039 39.1827C36.1039 40.607 37.2584 41.7616 38.6827 41.7616Z"/>
            </svg>
          </router-link>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
  import {computed} from "vue";
  import {useRoute} from "vue-router"

  let route = useRoute()

  let tabs = [
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

  let currentTab = computed(() => {
    return route.name
  })
</script>

<style scoped>
  .header {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    width: 100%;
    padding: 10px 0;
    z-index: 10;
  }

  .fixed {
    position: fixed;
    background: black;
  }

  .header-inner {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .nav-list {
    display: flex;
    gap: 50px;
  }

  .nav-item {
    color: white;
    fill: white;
    font-weight: 600;
  }

  .current {
    color: var(--accent-color);
  }

  .nav-item:hover {
    color: var(--accent-color);
    fill: var(--accent-color);
    filter: opacity(60%);
    transition: color 0.3s ease, fill 0.3s ease;
  }

  .nav-item a {
    color: inherit;
  }

  .profile {
    display: flex;
    align-items: center;
  }

  .sign-in {
    margin-right: 25px;
  }
</style>

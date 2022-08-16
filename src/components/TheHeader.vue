<template>
  <div class="mask" v-show="navIsShowed" @click="burgerHandler"></div>
  <header class="header" :class="{fixed: headerIsFixed}">
    <div class="container">
      <div class="header-inner">
        <a href="/" class="logo">
          <img src="../assets/car-wash-logo.svg">
        </a>
        <nav class="nav">
          <button class="burger-btn btn-reset" @click="burgerHandler">
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 20 20" fill="#ffffff">
              <path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd" />
            </svg>
          </button>
          <transition>
            <ul class="nav-list list-reset" v-show="navIsShowed">
              <li v-for="item in tabs" class="nav-item" :class="{current: currentTab === item.route}">
                <router-link :to="{name: item.route}">
                  {{item.name.toUpperCase()}}
                </router-link>
              </li>
            </ul>
          </transition>
        </nav>
        <div class="profile">
          <router-link to="" class="nav-item sign-in">
            SIGN IN
          </router-link>
          <router-link to="" class="nav-item">
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M14.8138 6.57799C14.8138 8.71438 13.0819 10.4463 10.9456 10.4463C8.80916 10.4463 7.07727 8.71438 7.07727 6.57799C7.07727 4.4416 8.80916 2.70971 10.9456 2.70971C13.0819 2.70971 14.8138 4.4416 14.8138 6.57799ZM17.3927 6.57799C17.3927 10.1386 14.5062 13.0251 10.9456 13.0251C7.3849 13.0251 4.49842 10.1386 4.49842 6.57799C4.49842 3.01734 7.3849 0.130859 10.9456 0.130859C14.5062 0.130859 17.3927 3.01734 17.3927 6.57799ZM4.5303 13.3994C4.70861 13.2617 4.92468 13.1768 5.14983 13.1692C5.80885 13.1469 6.14347 13.3005 6.40087 13.5915C6.89752 14.153 6.57115 15.0647 5.987 15.5345C4.91306 16.3982 4.08269 17.5346 3.60392 18.8273H18.2866C17.8079 17.5348 16.9778 16.3987 15.9042 15.5351C15.3201 15.0652 14.9939 14.1533 15.4906 13.5917C15.7481 13.3006 16.0826 13.1471 16.7416 13.1696C16.9666 13.1773 17.1825 13.2622 17.3608 13.3998C19.4513 15.0143 20.894 17.3999 21.2435 20.1195C21.3343 20.8258 20.7483 21.4061 20.0361 21.4061H1.85437C1.14224 21.4061 0.556231 20.8258 0.646999 20.1195C0.996522 17.3996 2.43949 15.0139 4.5303 13.3994Z" fill="white"/>
            </svg>
          </router-link>
          <router-link to="" class="nav-item">
            <svg width="23" height="20" viewBox="0 0 23 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M0.34082 1.70984C0.34082 0.997706 0.918116 0.42041 1.63025 0.42041H5.49853C6.07053 0.42041 6.57416 0.797246 6.73556 1.346L9.68689 11.3805H18.6755L19.9649 6.22283H11.9457C11.2335 6.22283 10.6562 5.64553 10.6562 4.9334C10.6562 4.22127 11.2335 3.64398 11.9457 3.64398H21.6164C22.0134 3.64398 22.3883 3.82691 22.6327 4.13987C22.877 4.45284 22.9636 4.86093 22.8673 5.24613L20.9331 12.9827C20.7896 13.5567 20.2739 13.9594 19.6822 13.9594H8.72209C8.15009 13.9594 7.64646 13.5826 7.48506 13.0338L4.53373 2.99926H1.63025C0.918116 2.99926 0.34082 2.42197 0.34082 1.70984ZM10.6562 17.183C10.6562 18.6072 9.50164 19.7618 8.07738 19.7618C6.65312 19.7618 5.49853 18.6072 5.49853 17.183C5.49853 15.7587 6.65312 14.6041 8.07738 14.6041C9.50164 14.6041 10.6562 15.7587 10.6562 17.183ZM19.6822 19.7618C21.1065 19.7618 22.2611 18.6072 22.2611 17.183C22.2611 15.7587 21.1065 14.6041 19.6822 14.6041C18.258 14.6041 17.1034 15.7587 17.1034 17.183C17.1034 18.6072 18.258 19.7618 19.6822 19.7618Z" fill="white"/>
            </svg>
          </router-link>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import {computed, onMounted, ref} from "vue";
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

  let body
  let scrollY = ref(0)
  onMounted(() => {
    addEventListener("scroll", (e) => {
      scrollY.value = window.scrollY
    })

    addEventListener("resize", (e) => {
      if(window.innerWidth > 992) {
        burgerHandler(null, "full")
      } else {
        burgerHandler(null, "close")
      }
    })

    body = document.body
  })

  let navIsShowed = ref(true)

  const burgerHandler = (_, mode = "toggle") => {
    if (mode === "open") {
      navIsShowed.value = true
      body.classList.add('noscroll')
    } else if (mode === "close") {
      navIsShowed.value = false
      body.classList.remove('noscroll')
    } else if (mode === "full") {
      navIsShowed.value = true
      body.classList.remove('noscroll')
    }else {
      navIsShowed.value = !navIsShowed.value
      body.classList.toggle('noscroll')
    }
  }

  const headerIsFixed = computed(() => {
    return navIsShowed.value || scrollY.value > 900
  })
</script>

<style scoped>
  .header {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    width: 100%;
    padding: 20px 0;
    transition: background-color 0.2s ease;
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

  .logo {
    display: flex;
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

  .burger-btn {
    display: none;
  }

  .profile {
    display: flex;
    align-items: center;
    gap: 50px;
  }

  .profile > * {
    display: flex;
    align-items: center;
  }

  .mask {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: none;
    width: 100vh;
    height: 100vh;
    background: black;
    opacity: 0.5;
    z-index: 5;
  }

  .v-enter-active,
  .v-leave-active {
    transition: opacity 0.2s ease;
  }

  .v-enter-from,
  .v-leave-to {
    opacity: 0;
  }


  @media (max-width: 992px) {
    .nav {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      display: flex;
      height: 100%;
    }

    .nav-list {
      display: flex;
      padding: 70px;
      position: absolute;
      top: 100%;
      left: 50%;
      transform: translateX(-50%);
      flex-direction: column;
      text-align: center;
      white-space: nowrap;
      background: var(--background-color);
      width: 100vw;
    }

    .burger-btn {
      display: block;
      align-self: center;
      justify-self: center;
    }

    .burger-btn svg {
      display: block;
    }

    .mask {
      display: block;
    }
  }

  @media (max-width: 768px) {
    .sign-in {
      display: none;
    }
  }

  @media (max-width: 576px) {
    .profile {
      gap: 20px
    }

    .logo img {
      height: 34px;
    }
  }

  @media (max-width: 412px) {
    .logo img {
      height: 26px;
    }
  }
</style>

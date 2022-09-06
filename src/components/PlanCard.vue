<template>
  <div class="card">
    <div class="price">{{price}}</div>
    <div class="level">{{level}}</div>
    <hr>
    <ul class="benefits-list list-reset">
      <li class="benefit" v-for="(val, key) in benefitsList" :class="{available: val}">{{key}}</li>
    </ul>
    <app-button
        type="checkbox"
        color="#46D68C"
        :decoration="selected ? 'fill' : 'outlined'"
        @click="$emit('select')"
    >
      Select Plan
    </app-button>
  </div>
</template>

<script setup>
  import {computed} from "vue";
  import AppButton from "./UI/AppButton.vue"

  const props = defineProps({
    price: {
      type: [Number, String],
      required: true
    },
    level: {
      type: String,
      required: true
    },
    selected: {
      type: Boolean,
      default: false
    }
  })

  const benefitsList = computed(() => {
    switch (props.level) {
      case 'Basic License': return {
        "Secure your customer usage": true,
        "View basic analytics": false,
        "Up to 350 customer profiles": false,
        "Custom network name": true
      }
      case 'Social License': return {
        "Secure your customer usage": true,
        "View basic analytics": true,
        "Up to 350 customer profiles": true,
        "Custom network name": false
      }
      case 'Marketing License': return {
        "Secure your customer usage": true,
        "View basic analytics": false,
        "Up to 350 customer profiles": true,
        "Custom network name": true
      }
      case 'Pro License': return {
        "Secure your customer usage": true,
        "View basic analytics": true,
        "Up to 350 customer profiles": true,
        "Custom network name": true
      }
    }
    throw `Error, license ${props.level} is not exists`
  })
</script>

<style scoped>
hr {
  width: 100%;
}
.card {
  position: relative;
  min-width: 230px;
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

.level {
  color: #F3B10E;
  font-weight: 700;
  font-size: 20px;
}

.price {
  font-size: 36px;
  font-weight: 700;
  color: white;
}

.price::before {
  content: "INR";
  font-size: 16px;
  font-weight: normal;
}

.price::after {
  content: "/month";
  font-size: 12px;
  font-weight: normal;
}

.benefits-list {
  margin: 30px 16px;
}

.benefit {
  padding-inline-start: 8px;
}

.benefit::marker {
  content: "✓";
  background-image: url("../assets/icons/check-yellow.svg");
}

.benefit.available::marker {
  color: #F3B10E;
}
</style>

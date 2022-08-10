import {createRouter, createWebHistory} from "vue-router";

import HomePage from "../views/HomePage.vue";

const routes = [
    {
        path: "/",
        name: "Home",
        component: HomePage
    },
    {
        path: "/booking",
        name: "Booking",
        component: HomePage
    },
    {
        path: "/about-us",
        name: "AboutUs",
        component: HomePage
    },
    {
        path: "/car-rental",
        name: "CarRental",
        component: HomePage
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router

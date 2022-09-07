import {defineStore} from "pinia";

export const useBookingStore = defineStore('booking', {
    state: () => {
        return {
            car: null,
            plan: null,
            services: new Set(["Modern Equipment"]),
            date: null
        }
    }
})

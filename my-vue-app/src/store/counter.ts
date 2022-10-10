import { defineStore } from 'pinia';
import { ref, computed } from 'vue'

// Options API,
// export const useStoreCounter = defineStore('counter', {
//     state: () => ({
//         count: 1,
//     }),
//     getters: {
//         doubleCount: (state) => state.count * 2
//     },
//     actions: {
//         increment() {
//             this.count++
//         }
//     }
// });

// Composition API
export const useCounterStore = defineStore('counter', () => {
    const count = ref(0)
    const name = ref('Eduardo')
    const doubleCount = computed(() => count.value * 2)
    function increment() {
        count.value++
    }

    return { count, name, doubleCount, increment }
})
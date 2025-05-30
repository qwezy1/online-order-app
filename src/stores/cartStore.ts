import { defineStore } from 'pinia'
import type { MenuItem } from '../data/menuItems'

export const useCartStore = defineStore('cart', {
    state: () => ({
        items: [] as MenuItem[],
    }),

    actions: {
        addItem(item: MenuItem) {
            this.items.push(item)
        },

        removeItem(id: number) {
            const index = this.items.findIndex(item => item.id === id);
            if (index !== -1) {
                this.items.splice(index, 1);
            }
        },


        clearCart() {
            this.items = []
        },
    },
})

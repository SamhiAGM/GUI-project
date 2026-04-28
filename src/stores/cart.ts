import { defineStore } from 'pinia'
import type { CartItem, Product } from '../types'

export const useCartStore = defineStore('cart', {
  state: () => ({
    items: [] as CartItem[]
  }),
  getters: {
    totalItems: (state) => state.items.reduce((sum, item) => sum + item.quantity, 0),
    subtotal: (state) => state.items.reduce((sum, item) => sum + item.price * item.quantity, 0)
  },
  actions: {
    addToCart(product: Product) {
      const existing = this.items.find((item) => item.id === product.id)
      if (existing) {
        existing.quantity += 1
        return
      }
      this.items.push({ ...product, quantity: 1 })
    },
    removeItem(id: number) {
      this.items = this.items.filter((item) => item.id !== id)
    },
    clearCart() {
      this.items = []
    }
  }
})

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
    addToCart(product: Product, quantity: number = 1) {
      const existing = this.items.find((item) => item.id === product.id)
      if (existing) {
        existing.quantity += quantity
        return
      }
      this.items.push({ ...product, quantity })
    },
    removeItem(id: number) {
      this.items = this.items.filter((item) => item.id !== id)
    },
    updateQuantity(id: number, quantity: number) {
      const item = this.items.find((i) => i.id === id)
      if (item) {
        item.quantity = quantity
      }
    },
    clearCart() {
      this.items = []
    }
  }
})

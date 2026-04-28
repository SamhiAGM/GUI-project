<template>
  <section>
    <h1 class="page-title">Checkout</h1>
    <p class="page-subtitle">Enter your details and complete the purchase.</p>

    <div v-if="cart.items.length === 0" class="alert">
      <p>Your cart is empty. Add products before checking out.</p>
    </div>

    <form v-else @submit.prevent="submitOrder" class="card">
      <div class="field">
        <label for="name">Full Name</label>
        <input id="name" v-model="name" type="text" required />
      </div>
      <div class="field">
        <label for="email">Email Address</label>
        <input id="email" v-model="email" type="email" required />
      </div>
      <div class="field">
        <label for="address">Shipping Address</label>
        <textarea id="address" v-model="address" required></textarea>
      </div>
      <div class="field">
        <label for="notes">Order Notes</label>
        <textarea id="notes" v-model="notes" placeholder="Optional"></textarea>
      </div>
      <div class="grid" style="align-items:center; justify-content:space-between; gap:1rem; margin-top:1rem;">
        <p class="price">Order total: ${{ cart.subtotal.toFixed(2) }}</p>
        <button class="button" type="submit">Place Order</button>
      </div>
    </form>

    <div v-if="orderPlaced" class="alert" style="margin-top: 1.5rem;">
      <p>Thank you, {{ name }}! Your order has been received.</p>
      <p>We will email your receipt to <strong>{{ email }}</strong>.</p>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useCartStore } from '../stores/cart'

const cart = useCartStore()
const name = ref('')
const email = ref('')
const address = ref('')
const notes = ref('')
const orderPlaced = ref(false)

const submitOrder = () => {
  if (!name.value || !email.value || !address.value) {
    return
  }

  orderPlaced.value = true
  cart.clearCart()
}
</script>

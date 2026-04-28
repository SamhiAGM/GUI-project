<template>
  <section>
    <h1 class="page-title">Your Cart</h1>
    <p class="page-subtitle">Review items in your cart before checkout.</p>

    <div v-if="cart.items.length === 0" class="alert">
      <p>Your cart is empty. Browse products to add something great.</p>
    </div>

    <div v-else>
      <table class="table">
        <thead>
          <tr>
            <th>Product</th>
            <th>Qty</th>
            <th>Price</th>
            <th>Total</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in cart.items" :key="item.id">
            <td>{{ item.name }}</td>
            <td>{{ item.quantity }}</td>
            <td>${{ item.price.toFixed(2) }}</td>
            <td>${{ (item.price * item.quantity).toFixed(2) }}</td>
            <td>
              <button class="button button-secondary" @click="remove(item.id)">Remove</button>
            </td>
          </tr>
        </tbody>
      </table>

      <div class="card">
        <h2>Total items: {{ cart.totalItems }}</h2>
        <p class="price">Subtotal: ${{ cart.subtotal.toFixed(2) }}</p>
        <RouterLink to="/checkout" class="button">Continue to Checkout</RouterLink>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { useCartStore } from '../stores/cart'

const cart = useCartStore()
const remove = (id: number) => cart.removeItem(id)
</script>

<template>
  <section v-if="product">
    <div class="product-details">
      <img :src="product.image" :alt="product.name" />
      <div>
        <h1 class="page-title">{{ product.name }}</h1>
        <p class="badge">{{ product.category }}</p>
        <p class="page-subtitle">{{ product.description }}</p>
        <p class="price">${{ product.price.toFixed(2) }}</p>
        <p>Stock available: {{ product.stock }}</p>
        <button class="button" @click="addToCart">Add to Cart</button>
      </div>
    </div>
  </section>
  <section v-else>
    <div class="alert">
      <p>Product not found. Please return to the home page.</p>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router'
import { useCartStore } from '../stores/cart'
import { products } from '../data/products'
import type { Product } from '../types'

const route = useRoute()
const router = useRouter()
const cart = useCartStore()

const productId = Number(route.params.id)
const product = products.find((item) => item.id === productId)

const addToCart = () => {
  if (!product) {
    router.push('/')
    return
  }

  cart.addToCart(product)
}
</script>

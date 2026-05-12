<template>
  <section v-if="product" class="product-page">
    <div class="product-details">
      <div class="product-image-container">
        <img :src="product.image" :alt="product.name" class="main-image" />
      </div>
      <div class="product-info-container">
        <h1 class="page-title">{{ product.name }}</h1>
        <p class="badge">{{ product.category }}</p>
        <p class="page-subtitle">{{ product.description }}</p>
        <div class="price-action">
          <p class="price">Rs {{ product.price.toLocaleString('en-US', {minimumFractionDigits: 2}) }}</p>
          <p class="stock-status">Stock available: {{ product.stock }}</p>
          
          <div class="quantity-selector">
            <label for="quantity">Quantity:</label>
            <select id="quantity" v-model="quantity">
              <option v-for="n in Math.min(10, product.stock)" :key="n" :value="n">
                {{ n }}
              </option>
            </select>
          </div>

          <button class="button buy-button" @click="addToCart">Add to Cart</button>
        </div>
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
import { ref } from 'vue'

const route = useRoute()
const router = useRouter()
const cart = useCartStore()

const productId = Number(route.params.id)
const product = products.find((item) => item.id === productId)
const quantity = ref(1)

const addToCart = () => {
  if (!product) {
    router.push('/')
    return
  }

  cart.addToCart(product, quantity.value)
  router.push('/cart')
}
</script>

<style scoped>
.product-page {
  max-width: 1200px;
  margin: 0 auto;
}

.quantity-selector {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin: 1.5rem 0;
}

.quantity-selector label {
  font-weight: 600;
  color: var(--muted);
}

.quantity-selector select {
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  background: var(--input-bg);
  border: 1px solid var(--input-border);
  color: var(--text);
  font-weight: 600;
  cursor: pointer;
}
</style>

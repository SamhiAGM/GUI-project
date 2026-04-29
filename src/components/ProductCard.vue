<template>
  <article class="card">
    <RouterLink :to="`/product/${product.id}`" class="card-image-link">
      <div class="image-wrapper">
        <img :src="product.image" :alt="product.name" />
      </div>
    </RouterLink>
    <div class="card-content">
      <h3 class="card-heading">{{ product.name }}</h3>
      <div class="price-container">
        <span class="old-price">Rs {{ (product.price * 1.25).toLocaleString('en-US', {minimumFractionDigits: 2}) }}</span>
        <span class="price">Rs {{ product.price.toLocaleString('en-US', {minimumFractionDigits: 2}) }}</span>
      </div>
      <button class="button add-to-cart-btn" @click.stop="addProduct">
        Add to Cart
      </button>
    </div>
  </article>
</template>

<script setup lang="ts">
import { useCartStore } from '../stores/cart'
import type { Product } from '../types'
import { defineProps } from 'vue'
import { useRouter } from 'vue-router'

const props = defineProps<{ product: Product }>()
const cart = useCartStore()
const router = useRouter()

const addProduct = () => {
  cart.addToCart(props.product)
  router.push('/cart')
}
</script>

<style scoped>
.add-to-cart-btn {
  margin-top: 1rem;
  width: 100%;
  opacity: 0;
  transform: translateY(10px);
  transition: all 0.3s ease;
  padding: 0.6rem;
  font-size: 0.9rem;
  background: var(--accent);
  color: var(--bg-shade);
}

.card:hover .add-to-cart-btn {
  opacity: 1;
  transform: translateY(0);
}

.add-to-cart-btn:hover {
  background: var(--accent-strong);
  box-shadow: 0 0 15px var(--accent);
}
</style>

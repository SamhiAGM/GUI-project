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
        <span class="old-price">Rs {{ (product.price + 10000).toLocaleString('en-US', {minimumFractionDigits: 2}) }}</span>
        <span class="price">Rs {{ product.price.toLocaleString('en-US', {minimumFractionDigits: 2}) }}</span>
      </div>
    </div>
  </article>
</template>

<script setup lang="ts">
import { useCartStore } from '../stores/cart'
import type { Product } from '../types'
import { defineProps } from 'vue'

const props = defineProps<{ product: Product }>()
const cart = useCartStore()

const addProduct = () => {
  cart.addToCart(props.product)
}
</script>

<template>
  <article class="card">
    <RouterLink :to="`/product/${product.id}`">
      <img :src="product.image" :alt="product.name" />
    </RouterLink>
    <div>
      <h3 class="card-heading">{{ product.name }}</h3>
      <p class="card-text">{{ product.description }}</p>
      <div class="grid" style="align-items: center; justify-content: space-between;">
        <span class="price">${{ product.price.toFixed(2) }}</span>
        <button class="button" @click="addProduct">Add to Cart</button>
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

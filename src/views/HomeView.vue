<template>
  <section>
    <div class="hero">
      <h1 class="page-title" style="text-align: center;">Seamless shopping, swift delivery.</h1>
      <p class="page-subtitle" style="text-align: center;">
        Fast shopping with Vue power.
      </p>
    </div>

    <div class="search-bar">
      <input
        id="search"
        type="search"
        v-model="searchTerm"
        placeholder="Search Your Products"
      />
      <select id="category" v-model="selectedCategory">
        <option value="all">All Categories</option>
        <option v-for="category in categories" :key="category" :value="category">
          {{ category }}
        </option>
      </select>
      <button class="search-button" aria-label="Search">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="11" cy="11" r="8"></circle>
          <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
        </svg>
      </button>
    </div>

    <div class="grid product-grid">
      <ProductCard
        v-for="product in filteredProducts"
        :key="product.id"
        :product="product"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import ProductCard from '../components/ProductCard.vue'
import { products } from '../data/products'

const searchTerm = ref('')
const selectedCategory = ref('all')

const categories = computed(() => {
  return Array.from(new Set(products.map((product) => product.category))).sort()
})

const filteredProducts = computed(() => {
  const lowerSearch = searchTerm.value.trim().toLowerCase()

  return products.filter((product) => {
    const matchesCategory = selectedCategory.value === 'all' || product.category === selectedCategory.value
    const matchesSearch =
      !lowerSearch ||
      product.name.toLowerCase().includes(lowerSearch) ||
      product.description.toLowerCase().includes(lowerSearch)

    return matchesCategory && matchesSearch
  })
})
</script>

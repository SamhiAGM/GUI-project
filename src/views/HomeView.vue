<template>
  <section>
    <div class="hero">
      <h1 class="page-title" style="text-align: center;">Seamless shopping, swift delivery.</h1>
      <p class="page-subtitle" style="text-align: center;">
        Fast shopping with Vue power.
      </p>
    </div>

    <div class="toolbar">
      <div class="field">
        <label for="search">Search products</label>
        <input
          id="search"
          type="search"
          v-model="searchTerm"
          placeholder="Search by name or description"
        />
      </div>

      <div class="field">
        <label for="category">Filter by category</label>
        <select id="category" v-model="selectedCategory">
          <option value="all">All categories</option>
          <option v-for="category in categories" :key="category" :value="category">
            {{ category }}
          </option>
        </select>
      </div>
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

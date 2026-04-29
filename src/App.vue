<template>
  <div class="app-shell">
    <header class="site-header">
      <div>
        <div class="brand">TechNova</div>
        <div class="user-badge" v-if="auth.isAuthenticated">Hello, {{ auth.userName }}</div>
      </div>

      <nav class="main-nav">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/cart">Cart</RouterLink>
        <RouterLink to="/checkout">Checkout</RouterLink>
        <RouterLink v-if="!auth.isAuthenticated" to="/login">Login</RouterLink>
        <RouterLink v-if="!auth.isAuthenticated" to="/signup">Signup</RouterLink>
        <button class="button button-secondary theme-toggle" @click="toggleTheme">
          {{ theme === 'dark' ? 'Light Mode' : 'Dark Mode' }}
        </button>
        <button v-if="auth.isAuthenticated" class="button button-secondary" @click="logout">
          Logout
        </button>
      </nav>
    </header>
    <main>
      <RouterView v-slot="{ Component }">
        <transition name="page" mode="out-in">
          <component :is="Component" />
        </transition>
      </RouterView>
    </main>
    <footer class="site-footer">
      <p>TechNova • Built with Vue 3, TypeScript, Pinia, and Vue Router.</p>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { ref, onMounted } from 'vue'
import { useAuthStore } from './stores/auth'

const auth = useAuthStore()
const logout = () => auth.logout()

const theme = ref<'dark' | 'light'>('dark')

const applyTheme = (value: 'dark' | 'light') => {
  theme.value = value
  document.documentElement.classList.toggle('light', value === 'light')
  document.documentElement.classList.toggle('dark', value === 'dark')
  localStorage.setItem('theme', value)
}

const toggleTheme = () => applyTheme(theme.value === 'dark' ? 'light' : 'dark')

onMounted(() => {
  const savedTheme = localStorage.getItem('theme') as 'dark' | 'light' | null
  const prefersDark = window.matchMedia?.('(prefers-color-scheme: dark)').matches
  applyTheme(savedTheme ?? (prefersDark ? 'dark' : 'light'))
})
</script>

<template>
  <div class="app-shell" :class="{ 'is-transitioning': isTransitioning }">
    <header class="site-header">
      <div class="brand-container">
        <div class="logo-wrapper">
          <svg class="brand-logo" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle class="logo-ring" cx="20" cy="20" r="18" stroke="currentColor" stroke-width="2" stroke-dasharray="60 40" />
            <path class="logo-star" d="M20 10L22.5 17.5H30L23.75 22.5L26.25 30L20 25L13.75 30L16.25 22.5L10 17.5H17.5L20 10Z" fill="currentColor" />
            <circle class="logo-core" cx="20" cy="20" r="4" fill="var(--accent)" />
          </svg>
        </div>
        <div class="brand-text-group">
          <div class="brand">TechNova</div>
          <div class="user-badge" v-if="auth.isAuthenticated">Hello, {{ auth.userName }}</div>
        </div>
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
      <div class="footer-content">
        <p>TechNova • Built with Vue 3, TypeScript, Pinia, and Vue Router.</p>
        <div class="footer-contact">
          <a href="mailto:SamgiAGM1207@gmail.com" class="contact-link">SamgiAGM1207@gmail.com</a>
          <div class="contact-divider">|</div>
          <a href="https://instagram.com/SamhiAGM" target="_blank" class="contact-link insta-link">
            <svg class="insta-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
            <span>SamhiAGM</span>
          </a>
          <div class="contact-divider">|</div>
          <a href="tel:0753999958" class="contact-link">0753999958</a>
        </div>
      </div>
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
const isTransitioning = ref(false)

const applyTheme = (value: 'dark' | 'light') => {
  theme.value = value
  document.documentElement.classList.toggle('light', value === 'light')
  document.documentElement.classList.toggle('dark', value === 'dark')
  localStorage.setItem('theme', value)
  
  // Trigger transition animation
  isTransitioning.value = true
  document.documentElement.classList.add('theme-transitioning')
  setTimeout(() => {
    isTransitioning.value = false
    document.documentElement.classList.remove('theme-transitioning')
  }, 800)
}

const toggleTheme = () => applyTheme(theme.value === 'dark' ? 'light' : 'dark')

onMounted(() => {
  const savedTheme = localStorage.getItem('theme') as 'dark' | 'light' | null
  const prefersDark = window.matchMedia?.('(prefers-color-scheme: dark)').matches
  applyTheme(savedTheme ?? (prefersDark ? 'dark' : 'light'))
})
</script>

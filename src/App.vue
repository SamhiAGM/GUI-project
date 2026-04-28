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
        <button v-if="auth.isAuthenticated" class="button button-secondary" @click="logout">
          Logout
        </button>
      </nav>
    </header>
    <main>
      <RouterView />
    </main>
    <footer class="site-footer">
      <p>TechNova • Built with Vue 3, TypeScript, Pinia, and Vue Router.</p>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { useAuthStore } from './stores/auth'

const auth = useAuthStore()
const logout = () => auth.logout()
</script>

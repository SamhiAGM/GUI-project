<template>
  <section class="auth-page login-page">
    <div class="auth-card card animate-scale">
      <header class="auth-header">
        <div class="auth-icon-wrapper">
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path>
            <polyline points="10 17 15 12 10 7"></polyline>
            <line x1="15" y1="12" x2="3" y2="12"></line>
          </svg>
        </div>
        <h1 class="page-title">Welcome Back</h1>
        <p class="page-subtitle">Access your account to continue shopping.</p>
      </header>

      <form @submit.prevent="submitLogin" class="auth-form">
        <div class="field animate-1">
          <label for="email">Email address</label>
          <input id="email" type="email" v-model="email" placeholder="Enter your email" required />
        </div>
        <div class="field animate-2">
          <label for="password">Password</label>
          <input id="password" type="password" v-model="password" placeholder="Enter your password" required />
        </div>

        <button class="button login-btn animate-3" type="submit">Login</button>
      </form>

      <div class="auth-footer animate-4">
        <p class="message error-message" v-if="auth.message">{{ auth.message }}</p>
        <p class="message">
          Don't have an account?
          <RouterLink to="/signup">Create one here.</RouterLink>
        </p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter, RouterLink } from 'vue-router'
import { useAuthStore } from '../stores/auth'

const router = useRouter()
const auth = useAuthStore()
const email = ref('')
const password = ref('')

const submitLogin = () => {
  const success = auth.login(email.value, password.value)
  if (success) {
    router.push('/')
  }
}
</script>

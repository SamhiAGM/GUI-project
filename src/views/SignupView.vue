<template>
  <section class="auth-page signup-page">
    <div class="auth-card card animate-scale">
      <header class="auth-header">
        <div class="auth-icon-wrapper">
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
            <circle cx="8.5" cy="7" r="4"></circle>
            <line x1="20" y1="8" x2="20" y2="14"></line>
            <line x1="23" y1="11" x2="17" y2="11"></line>
          </svg>
        </div>
        <h1 class="page-title">Create Account</h1>
        <p class="page-subtitle">Start a new account and get easy checkout.</p>
      </header>

      <form @submit.prevent="submitSignup" class="auth-form">
        <div class="field animate-1">
          <label for="name">Full name</label>
          <input id="name" type="text" v-model="name" placeholder="Enter your full name" required />
        </div>
        <div class="field animate-2">
          <label for="email">Email address</label>
          <input id="email" type="email" v-model="email" placeholder="Enter your email" required />
        </div>
        <div class="field animate-3">
          <label for="password">Password</label>
          <input id="password" type="password" v-model="password" placeholder="Create a password" required />
        </div>

        <button class="button login-btn animate-4" type="submit">Create account</button>
      </form>

      <div class="auth-footer animate-5">
        <p class="message error-message" v-if="auth.message">{{ auth.message }}</p>
        <p class="message">
          Already registered?
          <RouterLink to="/login">Log in here.</RouterLink>
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
const name = ref('')
const email = ref('')
const password = ref('')

const submitSignup = () => {
  const success = auth.signup(name.value, email.value, password.value)
  if (success) {
    router.push('/')
  }
}
</script>

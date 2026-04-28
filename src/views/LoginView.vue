<template>
  <section class="auth-page">
    <div class="card">
      <h1 class="page-title">Login</h1>
      <p class="page-subtitle">Access your account to continue shopping.</p>

      <form @submit.prevent="submitLogin">
        <div class="field">
          <label for="email">Email address</label>
          <input id="email" type="email" v-model="email" required />
        </div>
        <div class="field">
          <label for="password">Password</label>
          <input id="password" type="password" v-model="password" required />
        </div>

        <button class="button" type="submit">Login</button>
      </form>

      <p class="message" v-if="auth.message">{{ auth.message }}</p>
      <p class="message">
        Don't have an account?
        <RouterLink to="/signup">Create one here.</RouterLink>
      </p>
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

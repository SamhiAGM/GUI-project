<template>
  <section class="auth-page">
    <div class="card">
      <h1 class="page-title">Signup</h1>
      <p class="page-subtitle">Start a new account and get easy checkout.</p>

      <form @submit.prevent="submitSignup">
        <div class="field">
          <label for="name">Full name</label>
          <input id="name" type="text" v-model="name" required />
        </div>
        <div class="field">
          <label for="email">Email address</label>
          <input id="email" type="email" v-model="email" required />
        </div>
        <div class="field">
          <label for="password">Password</label>
          <input id="password" type="password" v-model="password" required />
        </div>

        <button class="button" type="submit">Create account</button>
      </form>

      <p class="message" v-if="auth.message">{{ auth.message }}</p>
      <p class="message">
        Already registered?
        <RouterLink to="/login">Log in here.</RouterLink>
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

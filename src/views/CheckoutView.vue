<template>
  <section class="checkout-page">
    <header class="checkout-header">
      <div class="header-content">
        <div class="checkout-icon-wrapper">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <rect x="2" y="5" width="20" height="14" rx="2"></rect>
            <line x1="2" y1="10" x2="22" y2="10"></line>
          </svg>
        </div>
        <div>
          <h1 class="page-title">Checkout</h1>
          <p class="page-subtitle corner-subtitle">Enter your details and complete the purchase.</p>
        </div>
      </div>
    </header>

    <div v-if="cart.items.length === 0 && !orderPlaced" class="alert empty-checkout">
      <p>Your cart is empty. Add products before checking out.</p>
      <RouterLink to="/" class="button" style="margin-top: 1rem;">Back to Store</RouterLink>
    </div>

    <form v-else-if="!orderPlaced" @submit.prevent="submitOrder" class="checkout-form card">
      <div class="form-grid">
        <div class="field animate-1">
          <label for="name">Full Name</label>
          <input id="name" v-model="name" type="text" placeholder="John Doe" required />
        </div>
        <div class="field animate-2">
          <label for="email">Email Address</label>
          <input id="email" v-model="email" type="email" placeholder="john@example.com" required />
        </div>
        <div class="field animate-3">
          <label for="phone">Phone Number</label>
          <input id="phone" v-model="phone" type="tel" placeholder="07XXXXXXXX" required />
        </div>
        <div class="field animate-4">
          <label for="address">Shipping Address</label>
          <textarea id="address" v-model="address" placeholder="123 Street Name" required></textarea>
        </div>
        <div class="field animate-5">
          <label for="city">City / District</label>
          <input id="city" v-model="city" type="text" placeholder="Colombo" required />
        </div>
        <div class="field animate-6">
          <label for="postalCode">Postal Code</label>
          <input id="postalCode" v-model="postalCode" type="text" placeholder="10100" required />
        </div>

        <div class="payment-section animate-7">
          <h3 class="section-title">Payment Details</h3>
          <div class="field">
            <label for="cardNumber">Card Number</label>
            <input id="cardNumber" v-model="cardNumber" type="text" placeholder="xxxx xxxx xxxx xxxx" required />
          </div>
          <div class="payment-row">
            <div class="field">
              <label for="expiry">Expiry Date</label>
              <input id="expiry" v-model="expiry" type="text" placeholder="MM/YY" required />
            </div>
            <div class="field">
              <label for="cvv">CVV</label>
              <input id="cvv" v-model="cvv" type="text" placeholder="xxx" required />
            </div>
          </div>
        </div>

        <div class="field animate-8">
          <label for="notes">Order Notes</label>
          <textarea id="notes" v-model="notes" placeholder="Optional notes for delivery"></textarea>
        </div>
      </div>
      
      <div class="order-total-bar animate-9">
        <div class="total-info">
          <span class="label">Amount to Pay</span>
          <p class="price">Rs {{ cart.subtotal.toLocaleString('en-US', {minimumFractionDigits: 2}) }}</p>
        </div>
        <button class="button checkout-submit-btn" type="submit">Place Order</button>
      </div>
    </form>

    <div v-if="orderPlaced" class="alert" style="margin-top: 1.5rem;">
      <p>Thank you, {{ name }}! Your order has been received.</p>
      <p>We will email your receipt to <strong>{{ email }}</strong>.</p>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useCartStore } from '../stores/cart'

const cart = useCartStore()
const name = ref('')
const email = ref('')
const phone = ref('')
const address = ref('')
const city = ref('')
const postalCode = ref('')
const cardNumber = ref('')
const expiry = ref('')
const cvv = ref('')
const notes = ref('')
const orderPlaced = ref(false)

const submitOrder = () => {
  if (!name.value || !email.value || !phone.value || !address.value || !city.value || !postalCode.value || !cardNumber.value || !expiry.value || !cvv.value) {
    return
  }

  orderPlaced.value = true
  cart.clearCart()
}
</script>

<style scoped>
.checkout-page {
  max-width: 800px;
  margin: 0 auto;
}

.checkout-header {
  margin-bottom: 3rem;
  padding: 3rem;
  background: var(--surface-strong);
  border-radius: 2rem;
  border: 1px solid var(--accent);
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.4);
  position: relative;
  overflow: hidden;
  animation: slideDownFade 0.8s var(--transition-slow) both;
}

.checkout-header::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle at top left, rgba(125, 211, 252, 0.15) 0%, transparent 60%);
  pointer-events: none;
}

.header-content {
  display: flex;
  align-items: center;
  gap: 1.5rem;
}

.checkout-icon-wrapper {
  background: var(--accent);
  color: var(--bg-shade);
  padding: 1rem;
  border-radius: 1.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 8px 20px rgba(125, 211, 252, 0.3);
  animation: scaleIn 0.6s var(--transition-slow) both;
}

.checkout-form {
  padding: 2.5rem;
  animation: fadeIn 0.8s var(--transition-slow) both;
  animation-delay: 0.2s;
}

.form-grid {
  display: grid;
  gap: 1.5rem;
  margin-bottom: 2.5rem;
}

.order-total-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 2rem;
  border-top: 1px solid var(--input-border);
  gap: 2rem;
}

.total-info .label {
  font-size: 0.9rem;
  color: var(--muted);
  display: block;
  margin-bottom: 0.25rem;
}

.total-info .price {
  font-size: 1.5rem;
  font-weight: 800;
  color: var(--accent);
  margin: 0;
}

.checkout-submit-btn {
  flex: 1;
  max-width: 250px;
  background: linear-gradient(135deg, var(--accent) 0%, var(--accent-strong) 100%);
  color: var(--bg-shade);
}

.animate-1 { animation: slideUpFade 0.6s var(--transition-slow) both; animation-delay: 0.3s; }
.animate-2 { animation: slideUpFade 0.6s var(--transition-slow) both; animation-delay: 0.4s; }
.animate-3 { animation: slideUpFade 0.6s var(--transition-slow) both; animation-delay: 0.5s; }
.animate-4 { animation: slideUpFade 0.6s var(--transition-slow) both; animation-delay: 0.6s; }
.animate-5 { animation: slideUpFade 0.6s var(--transition-slow) both; animation-delay: 0.7s; }
.animate-6 { animation: slideUpFade 0.6s var(--transition-slow) both; animation-delay: 0.8s; }
.animate-7 { animation: slideUpFade 0.6s var(--transition-slow) both; animation-delay: 0.9s; }
.animate-8 { animation: slideUpFade 0.6s var(--transition-slow) both; animation-delay: 1.0s; }
.animate-9 { animation: slideUpFade 0.6s var(--transition-slow) both; animation-delay: 1.1s; }

.payment-section {
  grid-column: 1 / -1;
  margin-top: 1rem;
  padding-top: 1rem;
  border-top: 1px solid var(--glass-border);
}

.section-title {
  font-size: 1.1rem;
  font-weight: 700;
  color: var(--accent);
  margin-bottom: 1.25rem;
}

.payment-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
}

.empty-checkout {
  text-align: center;
  padding: 4rem;
  animation: scaleIn 0.8s var(--transition-slow) both;
}

@keyframes slideDownFade {
  from { opacity: 0; transform: translateY(-20px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>

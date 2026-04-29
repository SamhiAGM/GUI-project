<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { useCartStore } from '../stores/cart'

const cart = useCartStore()
const remove = (id: number) => cart.removeItem(id)
</script>

<template>
  <div class="cart-page">
    <header class="cart-header">
      <div class="header-content">
        <div class="cart-icon-wrapper">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="9" cy="21" r="1"></circle>
            <circle cx="20" cy="21" r="1"></circle>
            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
          </svg>
        </div>
        <div>
          <h1 class="page-title">Your Cart</h1>
          <p class="page-subtitle corner-subtitle">Review items in your cart before checkout.</p>
        </div>
      </div>
    </header>

    <div v-if="cart.items.length === 0" class="empty-cart">
      <div class="empty-icon">🛒</div>
      <h2>Your cart is empty</h2>
      <p>Looks like you haven't added anything to your cart yet.</p>
      <RouterLink to="/" class="button button-primary">Start Shopping</RouterLink>
    </div>

    <div v-else class="cart-layout">
      <div class="cart-items">
        <div v-for="(item, index) in cart.items" :key="item.id" class="cart-item-card" :style="{ animationDelay: (index * 0.1) + 's' }">
          <div class="item-info">
            <div class="item-details">
              <h3 class="item-name">{{ item.name }}</h3>
              <p class="item-price">Rs {{ item.price.toLocaleString('en-US', {minimumFractionDigits: 2}) }}</p>
            </div>
          </div>
          <div class="item-actions">
            <div class="quantity-control">
              <span>Qty: {{ item.quantity }}</span>
            </div>
            <div class="item-total">
              Rs {{ (item.price * item.quantity).toLocaleString('en-US', {minimumFractionDigits: 2}) }}
            </div>
            <button class="remove-btn" @click="remove(item.id)" title="Remove item">
              <span class="icon">✕</span>
            </button>
          </div>
        </div>
      </div>

      <aside class="cart-summary">
        <div class="summary-card">
          <h2 class="summary-title">Order Summary</h2>
          <div class="summary-row">
            <span>Total Items</span>
            <span>{{ cart.totalItems }}</span>
          </div>
          <div class="summary-row total">
            <span>Subtotal</span>
            <span class="subtotal-amount">Rs {{ cart.subtotal.toLocaleString('en-US', {minimumFractionDigits: 2}) }}</span>
          </div>
          <RouterLink to="/checkout" class="button checkout-btn">
            Proceed to Checkout
          </RouterLink>
        </div>
      </aside>
    </div>
  </div>
</template>

<style scoped>
.cart-page {
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
}

.cart-header {
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

.cart-header::before {
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

.cart-icon-wrapper {
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

.cart-header .page-title {
  margin: 0;
  font-size: 2.5rem;
  text-align: left;
}

.corner-subtitle {
  margin: 0.5rem 0 0;
  font-size: 1rem;
  font-weight: 500;
  opacity: 0.8;
  color: var(--accent);
}

@keyframes slideDownFade {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.cart-layout {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
}

@media (min-width: 1024px) {
  .cart-layout {
    grid-template-columns: 1fr 350px;
  }
}

.cart-items {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.cart-item-card {
  background: var(--surface-card);
  border-radius: 1.25rem;
  padding: 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1.5rem;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  border: 1px solid rgba(255, 255, 255, 0.05);
  animation: slideInLeft 0.6s var(--transition-slow) both;
}

.cart-item-card:hover {
  transform: translateX(5px);
  background: rgba(255, 255, 255, 0.05);
}

.item-details h3 {
  margin: 0 0 0.25rem;
  font-size: 1.1rem;
}

.item-price {
  color: var(--muted);
  font-size: 0.9rem;
  margin: 0;
}

.item-actions {
  display: flex;
  align-items: center;
  gap: 2rem;
}

.item-total {
  font-weight: 700;
  color: var(--price);
  min-width: 100px;
  text-align: right;
}

.remove-btn {
  background: rgba(239, 68, 68, 0.1);
  color: var(--danger);
  border: none;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease;
}

.remove-btn:hover {
  background: var(--danger);
  color: white;
}

.summary-card {
  background: var(--surface-strong);
  border-radius: 1.5rem;
  padding: 2rem;
  position: sticky;
  top: 100px;
  border: 1px solid var(--accent);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
}

.summary-title {
  margin: 0 0 1.5rem;
  font-size: 1.25rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  padding-bottom: 1rem;
}

.summary-row {
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
  color: var(--muted);
}

.summary-row.total {
  margin-top: 1.5rem;
  padding-top: 1.5rem;
  border-top: 2px dashed rgba(255, 255, 255, 0.1);
  color: var(--text);
  font-weight: 700;
  font-size: 1.2rem;
}

.subtotal-amount {
  color: var(--accent);
}

.checkout-btn {
  width: 100%;
  margin-top: 1.5rem;
  padding: 1.2rem;
  font-size: 1.1rem;
  background: linear-gradient(135deg, var(--accent) 0%, var(--accent-strong) 100%);
  color: var(--bg-shade);
}

.empty-cart {
  text-align: center;
  padding: 5rem 2rem;
  background: var(--surface-card);
  border-radius: 2rem;
  border: 2px dashed rgba(255, 255, 255, 0.1);
}

.empty-icon {
  font-size: 4rem;
  margin-bottom: 1.5rem;
}

.empty-cart h2 {
  margin-bottom: 0.5rem;
}

.empty-cart p {
  color: var(--muted);
  margin-bottom: 2rem;
}
</style>

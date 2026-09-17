import { defineStore } from 'pinia';
export const useCartStore = defineStore('cart', {
    state: () => ({
        items: []
    }),
    getters: {
        totalItems: (state) => state.items.reduce((sum, item) => sum + item.quantity, 0),
        subtotal: (state) => state.items.reduce((sum, item) => sum + item.price * item.quantity, 0)
    },
    actions: {
        addToCart(product, quantity = 1) {
            const existing = this.items.find((item) => item.id === product.id);
            if (existing) {
                existing.quantity += quantity;
                return;
            }
            this.items.push({ ...product, quantity });
        },
        removeItem(id) {
            this.items = this.items.filter((item) => item.id !== id);
        },
        updateQuantity(id, quantity) {
            const item = this.items.find((i) => i.id === id);
            if (item) {
                item.quantity = quantity;
            }
        },
        clearCart() {
            this.items = [];
        }
    }
});
//# sourceMappingURL=cart.js.map
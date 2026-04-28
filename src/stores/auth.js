import { defineStore } from 'pinia';
export const useAuthStore = defineStore('auth', {
    state: () => ({
        users: [],
        currentUser: null,
        message: ''
    }),
    getters: {
        isAuthenticated: (state) => !!state.currentUser,
        userName: (state) => state.currentUser?.name ?? ''
    },
    actions: {
        signup(name, email, password) {
            const normalizedEmail = email.trim().toLowerCase();
            if (!name || !email || !password) {
                this.message = 'All fields are required.';
                return false;
            }
            if (this.users.find((user) => user.email === normalizedEmail)) {
                this.message = 'Email already registered. Please log in.';
                return false;
            }
            const newUser = {
                id: Date.now(),
                name: name.trim(),
                email: normalizedEmail,
                password
            };
            this.users.push(newUser);
            this.currentUser = newUser;
            this.message = 'Signup successful. Welcome!';
            return true;
        },
        login(email, password) {
            const normalizedEmail = email.trim().toLowerCase();
            const user = this.users.find((user) => user.email === normalizedEmail);
            if (!user || user.password !== password) {
                this.message = 'Email or password is incorrect.';
                return false;
            }
            this.currentUser = user;
            this.message = 'Login successful.';
            return true;
        },
        logout() {
            this.currentUser = null;
            this.message = '';
        }
    }
});
//# sourceMappingURL=auth.js.map
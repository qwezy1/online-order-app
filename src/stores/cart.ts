import { reactive, watch } from 'vue';

interface CartItem {
    id: number;
    name: string;
    price: number;
    quantity: number;
}

const CART_STORAGE_KEY = 'restaurant_cart';

const cartState = reactive({
    items: [] as CartItem[],
});

function loadCart() {
    const stored = localStorage.getItem(CART_STORAGE_KEY);
    if (stored) {
        try {
            cartState.items = JSON.parse(stored);
        } catch {
            cartState.items = [];
        }
    }
}

function saveCart() {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cartState.items));
}

// Следим за изменениями и сохраняем
watch(
    () => cartState.items,
    () => {
        saveCart();
    },
    { deep: true }
);

function addToCart(item: { id: number; name: string; price: number }) {
    const existing = cartState.items.find((i) => i.id === item.id);
    if (existing) {
        existing.quantity++;
    } else {
        cartState.items.push({ ...item, quantity: 1 });
    }
}

function removeFromCart(id: number) {
    cartState.items = cartState.items.filter((i) => i.id !== id);
}

function clearCart() {
    cartState.items = [];
}

function getTotal() {
    return cartState.items.reduce((sum, item) => sum + item.price * item.quantity, 0);
}

loadCart();

export function useCart() {
    return {
        cartState,
        addToCart,
        removeFromCart,
        clearCart,
        getTotal,
    };
}

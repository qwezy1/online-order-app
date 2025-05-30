<script setup lang="ts">
import { ref, computed } from 'vue'
import MenuItem from '../components/MenuItem.vue'
import { menuItems, type MenuItem as MenuItemType } from '../data/menuItems'
import { useCartStore } from '../stores/cartStore'

const selectedCategory = ref<string>('Все')
const cartStore = useCartStore()

const categories = Array.from(new Set(menuItems.map(item => item.category)))
categories.unshift('Все')

const filteredMenu = computed(() => {
  return selectedCategory.value === 'Все'
      ? menuItems
      : menuItems.filter(item => item.category === selectedCategory.value)
})

function addToCart(item: MenuItemType) {
  cartStore.addItem(item)
}
</script>

<template>
  <div class="menu-page">
    <h1>Меню</h1>

    <div class="categories">
      <button
          v-for="cat in categories"
          :key="cat"
          :class="{ active: cat === selectedCategory }"
          @click="selectedCategory = cat"
      >
        {{ cat }}
      </button>
    </div>

    <div class="menu-grid">
      <MenuItem
          v-for="item in filteredMenu"
          :key="item.id"
          :item="item"
          @add-to-cart="addToCart"
      />
    </div>
  </div>
</template>

<style scoped>
.menu-page {
  padding: 2rem;
  max-width: 1200px;
  margin: auto;
}

.categories {
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
}

.categories button {
  padding: 0.5rem 1rem;
  border: none;
  background: #ddd;
  border-radius: 8px;
  cursor: pointer;
}

.categories button.active {
  background: #42b983;
  color: white;
}

.menu-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 1.5rem;
}
</style>

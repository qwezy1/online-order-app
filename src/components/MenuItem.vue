<template>
  <div class="menu-card">
    <div class="menu-card__content">
      <h3 class="menu-card__title">{{ item.name }}</h3>
      <p class="menu-card__description">{{ item.description }}</p>
      <div class="menu-card__footer">
        <span class="menu-card__price">{{ item.price }}₽</span>
        <button class="menu-card__button" @click="$emit('add-to-cart', item)">Добавить</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
import type { MenuItem } from '../data/menuItems';

const props = defineProps<{ item: MenuItem }>();
</script>

<style scoped>
.menu-card {
  display: flex;
  flex-direction: column;
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  overflow: hidden;
  transition: transform 0.2s ease;
}

.menu-card:hover {
  transform: translateY(-4px);
}

.menu-card__image {
  width: 100%;
  height: 160px;
  object-fit: cover;
}

.menu-card__content {
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.menu-card__title {
  font-size: 1.2rem;
  font-weight: bold;
  margin: 0;
}

.menu-card__description {
  font-size: 0.95rem;
  color: #555;
  flex: 1;
}

.menu-card__footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 0.5rem;
}

.menu-card__price {
  font-size: 1.1rem;
  font-weight: bold;
  color: #42b983;
}

.menu-card__button {
  background-color: #42b983;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.2s ease;
}

.menu-card__button:hover {
  background-color: #369b6e;
}
</style>

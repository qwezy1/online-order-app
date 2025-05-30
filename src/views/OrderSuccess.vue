<template>
  <div class="order-success">
    <h1>Заказ успешно оформлен!</h1>
    <p>Спасибо за покупку. Мы свяжемся с вами в ближайшее время.</p>
  </div>
</template>

<script setup lang="ts">
// Пока логики нет, но если понадобится — можно добавить здесь
</script>

<style scoped>
.order-success {
  padding: 2rem;
  text-align: center;
  color: #2c3e50;
  font-family: Arial, sans-serif;
}

.order-success h1 {
  color: #42b983;
  margin-bottom: 1rem;
}

.order-success p {
  font-size: 1.2rem;
}
</style>

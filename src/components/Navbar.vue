<template>
  <nav class="navbar">
    <router-link to="/">Главная</router-link> |
    <router-link to="/menu">Меню</router-link> |
    <router-link to="/cart">Корзина</router-link>
  </nav>
</template>

<style scoped>
.navbar {
  padding: 1rem;
  background-color: #f5f5f5;
}
.navbar a {
  margin: 0 10px;
  text-decoration: none;
  font-weight: bold;
  color: #333;
}
.navbar a.router-link-exact-active {
  color: #42b983;
}
</style>

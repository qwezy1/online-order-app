# 🍽️ Online Restaurant Order App

Vue 3 web-приложение для онлайн-заказов блюд.



👉 [Open on GitHub Pages](https://qwezy1.github.io/online-order-app/)

## 📦  Steck

- Vue 3 + Composition API
- TypeScript
- Pinia (управление корзиной)
- Vite (билд и разработка)
- GitHub Pages (хостинг)

## 🔧 Download

```bash
npm install
npm run dev

## Docker
```bash
docker build -t vue-vite-dev .
docker run -p 5173:5173 -v ${PWD}:/app -v /app/node_modules vue-vite-dev
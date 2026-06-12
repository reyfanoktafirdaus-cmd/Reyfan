<template>
  <div id="app">
    <Navbar />
    <main>
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>
    <Footer />
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    Navbar,
    Footer
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Inter:wght@300;400;500;600&display=swap');

:root {
  --color-primary: #2D5A3D;
  --color-primary-light: #4A7C5C;
  --color-primary-dark: #1E3D2A;
  --color-cream: #FAF7F2;
  --color-cream-dark: #F0EBE3;
  --color-white: #FFFFFF;
  --color-gray-light: #F5F5F5;
  --color-gray: #E8E8E8;
  --color-text: #2C3E2D;
  --text-muted: #6B7B6E;
  --font-heading: 'Playfair Display', Georgia, serif;
  --font-body: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  --shadow-soft: 0 4px 20px rgba(45, 90, 61, 0.08);
  --shadow-medium: 0 8px 30px rgba(45, 90, 61, 0.12);
  --transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  font-family: var(--font-body);
  color: var(--color-text);
  background-color: var(--color-cream);
  line-height: 1.6;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

h1, h2, h3, h4, h5, h6 {
  font-family: var(--font-heading);
  font-weight: 600;
  line-height: 1.2;
}

a {
  text-decoration: none;
  color: inherit;
}

img {
  max-width: 100%;
  display: block;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.4s ease, transform 0.4s ease;
}

.fade-enter-from {
  opacity: 0;
  transform: translateY(20px);
}

.fade-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}

.fade-enter-to,
.fade-leave-from {
  opacity: 1;
  transform: translateY(0);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
}

.btn-primary {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: var(--color-primary);
  color: var(--color-white);
  padding: 14px 32px;
  border-radius: 50px;
  font-weight: 500;
  font-size: 15px;
  border: none;
  cursor: pointer;
  transition: var(--transition);
  font-family: var(--font-body);
}

.btn-primary:hover {
  background: var(--color-primary-dark);
  transform: translateY(-2px);
  box-shadow: var(--shadow-medium);
}

.btn-secondary {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: transparent;
  color: var(--color-primary);
  padding: 14px 32px;
  border-radius: 50px;
  font-weight: 500;
  font-size: 15px;
  border: 2px solid var(--color-primary);
  cursor: pointer;
  transition: var(--transition);
  font-family: var(--font-body);
}

.btn-secondary:hover {
  background: var(--color-primary);
  color: var(--color-white);
  transform: translateY(-2px);
}

.section-padding {
  padding: 80px 0;
}

.section-title {
  text-align: center;
  margin-bottom: 60px;
}

.section-title h2 {
  font-size: 2.5rem;
  color: var(--color-primary-dark);
  margin-bottom: 16px;
}

.section-title p {
  font-size: 1.1rem;
  color: var(--text-muted);
  max-width: 600px;
  margin: 0 auto;
}

@media (max-width: 768px) {
  .section-title h2 {
    font-size: 1.8rem;
  }

  .section-padding {
    padding: 50px 0;
  }
}
</style>

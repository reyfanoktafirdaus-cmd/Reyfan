<template>
  <nav class="navbar" :class="{ 'navbar-scrolled': isScrolled, 'navbar-open': isMenuOpen }">
    <div class="container navbar-container">
      <router-link to="/" class="navbar-brand" @click="closeMenu">
        <svg class="brand-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M2 17L12 22L22 17" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M2 12L12 17L22 12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        <span class="brand-text">Jabodetabek<span class="brand-accent">Nature</span></span>
      </router-link>

      <button class="navbar-toggle" @click="toggleMenu" aria-label="Toggle navigation">
        <span class="toggle-bar" :class="{ 'open': isMenuOpen }"></span>
        <span class="toggle-bar" :class="{ 'open': isMenuOpen }"></span>
        <span class="toggle-bar" :class="{ 'open': isMenuOpen }"></span>
      </button>

      <ul class="navbar-menu" :class="{ 'active': isMenuOpen }">
        <li v-for="item in menuItems" :key="item.path" class="navbar-item">
          <router-link
            :to="item.path"
            class="navbar-link"
            :class="{ 'active': $route.path === item.path }"
            @click="closeMenu"
          >
            {{ item.name }}
          </router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
  data() {
    return {
      isScrolled: false,
      isMenuOpen: false,
      menuItems: [
        { name: 'Beranda', path: '/' },
        { name: 'Profil', path: '/profile' },
        { name: 'Eksplorasi', path: '/explore' },
        { name: 'Galeri', path: '/gallery' },
        { name: 'Kontak', path: '/contact' }
      ]
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll() {
      this.isScrolled = window.scrollY > 50
    },
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen
    },
    closeMenu() {
      this.isMenuOpen = false
    }
  }
}
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  padding: 20px 0;
  transition: var(--transition);
  background: transparent;
}

.navbar-scrolled {
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(20px);
  box-shadow: var(--shadow-soft);
  padding: 14px 0;
}

.navbar-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.navbar-brand {
  display: flex;
  align-items: center;
  gap: 10px;
  font-family: var(--font-heading);
  font-size: 1.4rem;
  font-weight: 700;
  color: var(--color-white);
  transition: var(--transition);
}

.navbar-scrolled .navbar-brand {
  color: var(--color-primary-dark);
}

.brand-icon {
  width: 28px;
  height: 28px;
  color: inherit;
}

.brand-accent {
  color: #8FB996;
  font-weight: 400;
}

.navbar-menu {
  display: flex;
  list-style: none;
  gap: 8px;
  align-items: center;
}

.navbar-link {
  padding: 8px 18px;
  border-radius: 50px;
  font-size: 14px;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.85);
  transition: var(--transition);
  position: relative;
}

.navbar-scrolled .navbar-link {
  color: var(--color-text);
}

.navbar-link:hover,
.navbar-link.active {
  color: var(--color-white);
  background: rgba(255, 255, 255, 0.15);
}

.navbar-scrolled .navbar-link:hover,
.navbar-scrolled .navbar-link.active {
  color: var(--color-primary);
  background: rgba(45, 90, 61, 0.1);
}

.navbar-toggle {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 5px;
  z-index: 1001;
}

.toggle-bar {
  display: block;
  width: 24px;
  height: 2px;
  background: var(--color-white);
  transition: var(--transition);
  border-radius: 2px;
}

.navbar-scrolled .toggle-bar {
  background: var(--color-primary-dark);
}

.toggle-bar.open:nth-child(1) {
  transform: rotate(45deg) translate(5px, 5px);
}

.toggle-bar.open:nth-child(2) {
  opacity: 0;
}

.toggle-bar.open:nth-child(3) {
  transform: rotate(-45deg) translate(5px, -5px);
}

@media (max-width: 768px) {
  .navbar-toggle {
    display: flex;
  }

  .navbar-menu {
    position: fixed;
    top: 0;
    right: -100%;
    width: 80%;
    max-width: 300px;
    height: 100vh;
    background: var(--color-white);
    flex-direction: column;
    padding: 100px 30px 30px;
    gap: 0;
    transition: right 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    box-shadow: -10px 0 30px rgba(0, 0, 0, 0.1);
  }

  .navbar-menu.active {
    right: 0;
  }

  .navbar-link {
    color: var(--color-text) !important;
    padding: 14px 20px;
    display: block;
    border-radius: 12px;
    font-size: 16px;
  }

  .navbar-link:hover,
  .navbar-link.active {
    background: var(--color-cream) !important;
    color: var(--color-primary) !important;
  }

  .navbar-item {
    width: 100%;
  }
}
</style>

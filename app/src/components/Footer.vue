<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-grid">
        <div class="footer-brand">
          <router-link to="/" class="footer-logo">
            <svg class="logo-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M2 17L12 22L22 17" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M2 12L12 17L22 12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <span>Jabodetabek<span class="logo-accent">Nature</span></span>
          </router-link>
          <p class="footer-desc">
            Menjelajahi keindahan alam tersembunyi di kawasan Jabodetabek. Temukan destinasi wisata alam yang memukau dan teduh.
          </p>
          <div class="footer-social">
            <a href="#" class="social-link" aria-label="Instagram">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
              </svg>
            </a>
            <a href="#" class="social-link" aria-label="Twitter">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/>
              </svg>
            </a>
            <a href="#" class="social-link" aria-label="YouTube">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19.13c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"/>
                <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/>
              </svg>
            </a>
          </div>
        </div>

        <div class="footer-links">
          <h4>Tautan Cepat</h4>
          <ul>
            <li v-for="item in quickLinks" :key="item.path">
              <router-link :to="item.path">{{ item.name }}</router-link>
            </li>
          </ul>
        </div>

        <div class="footer-links">
          <h4>Destinasi Populer</h4>
          <ul>
            <li v-for="dest in popularDestinations" :key="dest">
              <router-link to="/explore">{{ dest }}</router-link>
            </li>
          </ul>
        </div>

        <div class="footer-contact">
          <h4>Hubungi Kami</h4>
          <div class="contact-item">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
              <circle cx="12" cy="10" r="3"/>
            </svg>
            <span>Jakarta, Indonesia</span>
          </div>
          <div class="contact-item">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
              <polyline points="22,6 12,13 2,6"/>
            </svg>
            <span>info@jabodetabeknature.id</span>
          </div>
        </div>
      </div>

      <div class="footer-bottom">
        <p> Jabodetabek Nature. Seluruh hak cipta dilindungi.</p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  data() {
    return {
      quickLinks: [
        { name: 'Beranda', path: '/' },
        { name: 'Profil', path: '/profile' },
        { name: 'Eksplorasi', path: '/explore' },
        { name: 'Galeri', path: '/gallery' },
        { name: 'Kontak', path: '/contact' }
      ],
      popularDestinations: [
        'Kebun Raya Bogor',
        'Taman Safari',
        'Curug Cilember',
        'Pulau Macan',
        'Gunung Pancar'
      ]
    }
  }
}
</script>

<style scoped>
.footer {
  background: var(--color-primary-dark);
  color: rgba(255, 255, 255, 0.8);
  padding: 60px 0 0;
}

.footer-grid {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1.5fr;
  gap: 40px;
  padding-bottom: 50px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.footer-logo {
  display: flex;
  align-items: center;
  gap: 10px;
  font-family: var(--font-heading);
  font-size: 1.3rem;
  font-weight: 700;
  color: var(--color-white);
  margin-bottom: 16px;
}

.logo-icon {
  width: 26px;
  height: 26px;
}

.logo-accent {
  color: #8FB996;
  font-weight: 400;
}

.footer-desc {
  font-size: 14px;
  line-height: 1.7;
  margin-bottom: 20px;
  color: rgba(255, 255, 255, 0.7);
}

.footer-social {
  display: flex;
  gap: 12px;
}

.social-link {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-white);
  transition: var(--transition);
}

.social-link:hover {
  background: var(--color-primary-light);
  transform: translateY(-3px);
}

.social-link svg {
  width: 18px;
  height: 18px;
}

.footer-links h4,
.footer-contact h4 {
  font-family: var(--font-body);
  font-size: 15px;
  font-weight: 600;
  color: var(--color-white);
  margin-bottom: 20px;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.footer-links ul {
  list-style: none;
}

.footer-links li {
  margin-bottom: 12px;
}

.footer-links a {
  color: rgba(255, 255, 255, 0.7);
  font-size: 14px;
  transition: var(--transition);
}

.footer-links a:hover {
  color: var(--color-white);
  padding-left: 5px;
}

.contact-item {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 14px;
  font-size: 14px;
}

.contact-item svg {
  width: 18px;
  height: 18px;
  flex-shrink: 0;
  color: #8FB996;
}

.footer-bottom {
  padding: 24px 0;
  text-align: center;
  font-size: 13px;
  color: rgba(255, 255, 255, 0.5);
}

@media (max-width: 992px) {
  .footer-grid {
    grid-template-columns: 1fr 1fr;
    gap: 30px;
  }
}

@media (max-width: 576px) {
  .footer-grid {
    grid-template-columns: 1fr;
    gap: 30px;
  }
}
</style>

<template>
  <div class="home">
    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-bg">
        <img src="../assets/images/hero-bg.jpg" alt="Pemandangan Alam Jabodetabek" />
        <div class="hero-overlay"></div>
      </div>
      <div class="hero-content">
        <span class="hero-badge">Jelajahi Keindahan</span>
        <h1 class="hero-title">Eksplorasi Wisata Alam Jabodetabek</h1>
        <p class="hero-desc">
          Temukan destinasi wisata alam tersembunyi yang memukau di kawasan Jabodetabek. 
          Dari pegunungan hijau hingga pantai eksotis, semuanya menanti petualangan Anda.
        </p>
        <div class="hero-cta">
          <router-link to="/explore" class="btn-primary">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="11" cy="11" r="8"/>
              <line x1="21" y1="21" x2="16.65" y2="16.65"/>
            </svg>
            Mulai Eksplorasi
          </router-link>
          <router-link to="/gallery" class="btn-secondary" style="color: white; border-color: rgba(255,255,255,0.5);">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
              <circle cx="8.5" cy="8.5" r="1.5"/>
              <polyline points="21 15 16 10 5 21"/>
            </svg>
            Lihat Galeri
          </router-link>
        </div>
        <div class="hero-stats">
          <div class="stat-item" v-for="(stat, index) in stats" :key="index">
            <span class="stat-number">{{ stat.number }}</span>
            <span class="stat-label">{{ stat.label }}</span>
          </div>
        </div>
      </div>
      <div class="hero-scroll">
        <span>Gulir ke bawah</span>
        <div class="scroll-line"></div>
      </div>
    </section>

    <!-- Featured Destinations -->
    <section class="featured section-padding">
      <div class="container">
        <div class="section-title">
          <span class="section-badge">Destinasi Unggulan</span>
          <h2>Tempat Wisata Paling Populer</h2>
          <p>Jelajahi destinasi alam terbaik di kawasan Jabodetabek yang wajib Anda kunjungi</p>
        </div>
        <div class="destinations-grid">
          <div 
            v-for="(dest, index) in featuredDestinations" 
            :key="dest.id" 
            class="destination-card"
            :class="{ 'featured-card': index === 0 }"
            @mouseenter="activeCard = dest.id"
            @mouseleave="activeCard = null"
          >
            <div class="card-image">
              <img :src="dest.image" :alt="dest.name" />
              <div class="card-overlay">
                <span class="card-badge">{{ dest.category }}</span>
              </div>
              <div class="card-hover" :class="{ 'active': activeCard === dest.id }">
                <p>{{ dest.shortDesc }}</p>
                <router-link to="/explore" class="card-link">
                  Lihat Detail
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"/>
                    <polyline points="12 5 19 12 12 19"/>
                  </svg>
                </router-link>
              </div>
            </div>
            <div class="card-content">
              <div class="card-meta">
                <span class="card-location">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                  {{ dest.location }}
                </span>
                <span class="card-rating">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                  </svg>
                  {{ dest.rating }}
                </span>
              </div>
              <h3>{{ dest.name }}</h3>
              <p class="card-price">{{ dest.price }}</p>
            </div>
          </div>
        </div>
        <div class="section-cta">
          <router-link to="/explore" class="btn-primary">
            Lihat Semua Destinasi
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"/>
              <polyline points="12 5 19 12 12 19"/>
            </svg>
          </router-link>
        </div>
      </div>
    </section>

    <!-- Why Choose Us -->
    <section class="why-us section-padding">
      <div class="container">
        <div class="why-grid">
          <div class="why-content">
            <span class="section-badge">Mengapa Kami</span>
            <h2>Pengalaman Wisata Alam Terbaik</h2>
            <p>Kami menghadirkan informasi lengkap dan terpercaya tentang destinasi wisata alam di Jabodetabek untuk memastikan pengalaman berwisata Anda tak terlupakan.</p>
            <div class="features-list">
              <div class="feature-item" v-for="(feature, index) in features" :key="index">
                <div class="feature-icon">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" v-html="feature.icon"></svg>
                </div>
                <div class="feature-text">
                  <h4>{{ feature.title }}</h4>
                  <p>{{ feature.desc }}</p>
                </div>
              </div>
            </div>
          </div>
          <div class="why-image">
            <img src="../assets/images/gunung-gede.jpg" alt="Jalur pendakian Gunung" />
            <div class="why-image-accent"></div>
          </div>
        </div>
      </div>
    </section>

    <!-- Categories -->
    <section class="categories section-padding">
      <div class="container">
        <div class="section-title">
          <span class="section-badge">Kategori</span>
          <h2>Jelajahi Berdasarkan Kategori</h2>
          <p>Pilih jenis wisata alam yang sesuai dengan minat Anda</p>
        </div>
        <div class="categories-grid">
          <router-link 
            to="/explore" 
            class="category-card" 
            v-for="(cat, index) in categories" 
            :key="index"
            :style="{ backgroundImage: `url(${cat.image})` }"
          >
            <div class="category-overlay"></div>
            <div class="category-content">
              <span class="category-count">{{ cat.count }} destinasi</span>
              <h3>{{ cat.name }}</h3>
            </div>
          </router-link>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="cta-section">
      <div class="container">
        <div class="cta-box">
          <div class="cta-content">
            <h2>Siap Memulai Petualangan Anda?</h2>
            <p>Jangan lewatkan kesempatan untuk menjelajahi keindahan alam Jabodetabek. Hubungi kami untuk informasi lebih lanjut dan rekomendasi perjalanan.</p>
            <div class="cta-buttons">
              <router-link to="/contact" class="btn-primary">
                Hubungi Kami
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
              </router-link>
              <router-link to="/explore" class="btn-secondary">
                Jelajahi Destinasi
              </router-link>
            </div>
          </div>
          <div class="cta-image">
            <img src="../assets/images/danau.jpg" alt="Danau indah" />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import kebunRayaImg from '../assets/images/kebun-raya-bogor.jpg'
import curugCilemberImg from '../assets/images/curug-cilember.jpg'
import pulauMacanImg from '../assets/images/pulau-macan.jpg'
import gunungPancarImg from '../assets/images/gunung-pancar.jpg'
import tamanSafariImg from '../assets/images/taman-safari.jpg'
import gunungGedeImg from '../assets/images/gunung-gede.jpg'
import curugImg from '../assets/images/curug-cilember.jpg'
import pinusImg from '../assets/images/gunung-pancar.jpg'

export default {
  name: 'Home',
  data() {
    return {
      activeCard: null,
      stats: [
        { number: '50+', label: 'Destinasi' },
        { number: '10K+', label: 'Pengunjung' },
        { number: '4.9', label: 'Rating' }
      ],
      featuredDestinations: [
        {
          id: 1,
          name: 'Kebun Raya Bogor',
          location: 'Bogor, Jawa Barat',
          category: 'Taman Botani',
          image: kebunRayaImg,
          rating: '4.8',
          price: 'Rp 25.000',
          shortDesc: 'Kebun raya tertua di Asia Tenggara dengan koleksi ribuan jenis tumbuhan dari seluruh dunia.'
        },
        {
          id: 2,
          name: 'Curug Cilember',
          location: 'Cisarua, Bogor',
          category: 'Air Terjun',
          image: curugCilemberImg,
          rating: '4.7',
          price: 'Rp 15.000',
          shortDesc: 'Tujuh air terjun bertingkat yang dikelilingi oleh hutan pinus yang asri dan sejuk.'
        },
        {
          id: 3,
          name: 'Pulau Macan',
          location: 'Kepulauan Seribu',
          category: 'Pulau',
          image: pulauMacanImg,
          rating: '4.9',
          price: 'Rp 500.000',
          shortDesc: 'Pulau eksotis dengan pantai berpasir putih dan air laut yang jernih berwarna biru kehijauan.'
        },
        {
          id: 4,
          name: 'Gunung Pancar',
          location: 'Bogor, Jawa Barat',
          category: 'Hutan Pinus',
          image: gunungPancarImg,
          rating: '4.6',
          price: 'Rp 20.000',
          shortDesc: 'Hutan pinus yang rindang dengan udara sejuk, cocok untuk camping dan outbound.'
        },
        {
          id: 5,
          name: 'Taman Safari',
          location: 'Cisarua, Bogor',
          category: 'Safari',
          image: tamanSafariImg,
          rating: '4.8',
          price: 'Rp 200.000',
          shortDesc: 'Taman margasatwa modern dengan berbagai satwa eksotis dari berbagai belahan dunia.'
        }
      ],
      features: [
        {
          icon: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>',
          title: 'Informasi Terpercaya',
          desc: 'Semua informasi destinasi telah diverifikasi dan diperbarui secara berkala.'
        },
        {
          icon: '<circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>',
          title: 'Jadwal & Harga Real-time',
          desc: 'Dapatkan informasi terkini mengenai jadwal operasional dan harga tiket masuk.'
        },
        {
          icon: '<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>',
          title: 'Review Pengunjung',
          desc: 'Baca ulasan dan pengalaman nyata dari para pengunjung.'
        },
        {
          icon: '<rect x="1" y="4" width="22" height="16" rx="2" ry="2"/><line x1="1" y1="10" x2="23" y2="10"/>',
          title: 'Pemesanan Mudah',
          desc: 'Informasi lengkap cara pemesanan tiket dan paket wisata.'
        }
      ],
      categories: [
        { name: 'Air Terjun', count: 12, image: curugImg },
        { name: 'Hutan & Pinus', count: 8, image: pinusImg },
        { name: 'Pulau & Pantai', count: 15, image: pulauMacanImg },
        { name: 'Gunung & Dataran Tinggi', count: 10, image: gunungGedeImg }
      ]
    }
  }
}
</script>

<style scoped>
/* Hero Section */
.hero {
  position: relative;
  height: 100vh;
  min-height: 700px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.hero-bg {
  position: absolute;
  inset: 0;
  z-index: 1;
}

.hero-bg img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.hero-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to bottom, rgba(30, 61, 42, 0.6) 0%, rgba(30, 61, 42, 0.4) 50%, rgba(30, 61, 42, 0.7) 100%);
}

.hero-content {
  position: relative;
  z-index: 2;
  text-align: center;
  max-width: 800px;
  padding: 0 24px;
  color: var(--color-white);
}

.hero-badge {
  display: inline-block;
  padding: 8px 20px;
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(10px);
  border-radius: 50px;
  font-size: 13px;
  font-weight: 500;
  letter-spacing: 2px;
  text-transform: uppercase;
  margin-bottom: 24px;
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.hero-title {
  font-size: 3.5rem;
  font-weight: 700;
  margin-bottom: 20px;
  line-height: 1.1;
  text-shadow: 0 2px 20px rgba(0, 0, 0, 0.3);
}

.hero-desc {
  font-size: 1.15rem;
  line-height: 1.7;
  margin-bottom: 36px;
  opacity: 0.9;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.hero-cta {
  display: flex;
  gap: 16px;
  justify-content: center;
  margin-bottom: 60px;
}

.hero-stats {
  display: flex;
  justify-content: center;
  gap: 60px;
}

.stat-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
}

.stat-number {
  font-family: var(--font-heading);
  font-size: 2.2rem;
  font-weight: 700;
}

.stat-label {
  font-size: 13px;
  opacity: 0.8;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.hero-scroll {
  position: absolute;
  bottom: 40px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  color: var(--color-white);
  font-size: 12px;
  letter-spacing: 2px;
  text-transform: uppercase;
  opacity: 0.7;
}

.scroll-line {
  width: 1px;
  height: 40px;
  background: linear-gradient(to bottom, rgba(255, 255, 255, 0.5), transparent);
  animation: scrollPulse 2s infinite;
}

@keyframes scrollPulse {
  0%, 100% { opacity: 0.3; transform: scaleY(0.7); }
  50% { opacity: 1; transform: scaleY(1); }
}

/* Featured Section */
.featured {
  background: var(--color-cream);
}

.section-badge {
  display: inline-block;
  padding: 6px 16px;
  background: rgba(45, 90, 61, 0.1);
  color: var(--color-primary);
  border-radius: 50px;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  margin-bottom: 16px;
}

.destinations-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  margin-bottom: 40px;
}

.destination-card {
  background: var(--color-white);
  border-radius: 20px;
  overflow: hidden;
  box-shadow: var(--shadow-soft);
  transition: var(--transition);
}

.destination-card:hover {
  transform: translateY(-8px);
  box-shadow: var(--shadow-medium);
}

.destination-card.featured-card {
  grid-column: span 2;
  grid-row: span 2;
}

.card-image {
  position: relative;
  overflow: hidden;
  aspect-ratio: 4/3;
}

.destination-card.featured-card .card-image {
  aspect-ratio: 16/10;
}

.card-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s ease;
}

.destination-card:hover .card-image img {
  transform: scale(1.08);
}

.card-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  padding: 16px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}

.card-badge {
  padding: 6px 14px;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border-radius: 50px;
  font-size: 11px;
  font-weight: 600;
  color: var(--color-primary);
}

.card-hover {
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(30, 61, 42, 0.9) 0%, rgba(30, 61, 42, 0.4) 100%);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 24px;
  opacity: 0;
  transition: opacity 0.4s ease;
}

.card-hover.active {
  opacity: 1;
}

.card-hover p {
  color: rgba(255, 255, 255, 0.9);
  font-size: 14px;
  line-height: 1.6;
  margin-bottom: 12px;
}

.card-link {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  color: var(--color-white);
  font-weight: 500;
  font-size: 14px;
  transition: gap 0.3s ease;
}

.card-link:hover {
  gap: 10px;
}

.card-content {
  padding: 20px;
}

.card-meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
}

.card-location {
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 13px;
  color: var(--text-muted);
}

.card-rating {
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 13px;
  font-weight: 600;
  color: #E8A838;
}

.card-content h3 {
  font-size: 1.15rem;
  color: var(--color-primary-dark);
  margin-bottom: 6px;
}

.card-price {
  font-size: 14px;
  color: var(--color-primary);
  font-weight: 600;
}

.section-cta {
  text-align: center;
}

/* Why Us Section */
.why-us {
  background: var(--color-white);
}

.why-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: center;
}

.why-content h2 {
  font-size: 2.2rem;
  color: var(--color-primary-dark);
  margin-bottom: 16px;
}

.why-content > p {
  color: var(--text-muted);
  margin-bottom: 36px;
  line-height: 1.7;
}

.features-list {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.feature-item {
  display: flex;
  gap: 16px;
  align-items: flex-start;
}

.feature-icon {
  width: 48px;
  height: 48px;
  border-radius: 14px;
  background: rgba(45, 90, 61, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-primary);
  flex-shrink: 0;
}

.feature-text h4 {
  font-family: var(--font-body);
  font-size: 16px;
  font-weight: 600;
  color: var(--color-primary-dark);
  margin-bottom: 4px;
}

.feature-text p {
  font-size: 14px;
  color: var(--text-muted);
  line-height: 1.5;
}

.why-image {
  position: relative;
}

.why-image img {
  border-radius: 24px;
  width: 100%;
  height: 500px;
  object-fit: cover;
}

.why-image-accent {
  position: absolute;
  bottom: -20px;
  right: -20px;
  width: 200px;
  height: 200px;
  border-radius: 24px;
  background: var(--color-primary);
  opacity: 0.1;
  z-index: -1;
}

/* Categories */
.categories {
  background: var(--color-cream);
}

.categories-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
}

.category-card {
  position: relative;
  height: 300px;
  border-radius: 20px;
  overflow: hidden;
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: flex-end;
  transition: var(--transition);
}

.category-card:hover {
  transform: translateY(-6px);
  box-shadow: var(--shadow-medium);
}

.category-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(30, 61, 42, 0.8) 0%, rgba(30, 61, 42, 0.2) 60%, transparent 100%);
}

.category-content {
  position: relative;
  z-index: 2;
  padding: 24px;
  color: var(--color-white);
}

.category-count {
  font-size: 12px;
  opacity: 0.8;
  letter-spacing: 1px;
}

.category-content h3 {
  font-size: 1.3rem;
  margin-top: 4px;
}

/* CTA Section */
.cta-section {
  background: var(--color-white);
  padding: 80px 0;
}

.cta-box {
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  background: var(--color-primary-dark);
  border-radius: 28px;
  overflow: hidden;
  align-items: center;
}

.cta-content {
  padding: 60px;
  color: var(--color-white);
}

.cta-content h2 {
  font-size: 2.2rem;
  margin-bottom: 16px;
}

.cta-content p {
  opacity: 0.85;
  line-height: 1.7;
  margin-bottom: 32px;
}

.cta-buttons {
  display: flex;
  gap: 16px;
}

.cta-image img {
  width: 100%;
  height: 400px;
  object-fit: cover;
}

/* Responsive */
@media (max-width: 992px) {
  .destinations-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .destination-card.featured-card {
    grid-column: span 2;
    grid-row: span 1;
  }
  
  .destination-card.featured-card .card-image {
    aspect-ratio: 16/9;
  }
  
  .why-grid {
    grid-template-columns: 1fr;
    gap: 40px;
  }
  
  .why-image {
    order: -1;
  }
  
  .why-image img {
    height: 350px;
  }
  
  .categories-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .cta-box {
    grid-template-columns: 1fr;
  }
  
  .cta-image {
    display: none;
  }
  
  .cta-content {
    padding: 40px;
    text-align: center;
  }
  
  .cta-buttons {
    justify-content: center;
  }
}

@media (max-width: 768px) {
  .hero-title {
    font-size: 2.2rem;
  }
  
  .hero-desc {
    font-size: 1rem;
  }
  
  .hero-cta {
    flex-direction: column;
    align-items: center;
  }
  
  .hero-stats {
    gap: 30px;
  }
  
  .stat-number {
    font-size: 1.6rem;
  }
  
  .destinations-grid {
    grid-template-columns: 1fr;
  }
  
  .destination-card.featured-card {
    grid-column: span 1;
  }
  
  .categories-grid {
    grid-template-columns: 1fr;
  }
  
  .category-card {
    height: 220px;
  }
  
  .cta-buttons {
    flex-direction: column;
    align-items: stretch;
  }
  
  .cta-content {
    padding: 32px 24px;
  }
  
  .cta-content h2 {
    font-size: 1.6rem;
  }
}
</style>

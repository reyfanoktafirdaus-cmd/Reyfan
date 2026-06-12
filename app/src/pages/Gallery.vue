<template>
  <div class="gallery-page">
    <!-- Page Header -->
    <section class="page-header">
      <div class="header-bg">
        <img src="../assets/images/gunung-pancar.jpg" alt="Hutan Pinus" />
        <div class="header-overlay"></div>
      </div>
      <div class="header-content">
        <span class="header-badge">Galeri</span>
        <h1>Koleksi Foto Wisata Alam</h1>
        <p>Lihat keindahan alam Jabodetabek melalui koleksi foto pilihan kami</p>
      </div>
    </section>

    <!-- Gallery Section -->
    <section class="gallery-section section-padding">
      <div class="container">
        <div class="gallery-filter">
          <button 
            v-for="filter in filters" 
            :key="filter"
            class="filter-btn"
            :class="{ active: activeFilter === filter }"
            @click="activeFilter = filter"
          >
            {{ filter }}
          </button>
        </div>

        <transition-group 
          name="gallery" 
          tag="div" 
          class="gallery-grid"
        >
          <div 
            v-for="(photo, index) in filteredPhotos" 
            :key="photo.id"
            class="gallery-item"
            :class="photo.size"
            @click="openLightbox(photo)"
          >
            <div class="gallery-image-wrapper">
              <img :src="photo.src" :alt="photo.title" loading="lazy" />
              <div class="gallery-overlay">
                <div class="gallery-overlay-content">
                  <span class="gallery-category">{{ photo.category }}</span>
                  <h4>{{ photo.title }}</h4>
                  <p>{{ photo.location }}</p>
                  <button class="gallery-view-btn">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                      <circle cx="12" cy="12" r="3"/>
                    </svg>
                    Lihat Foto
                  </button>
                </div>
              </div>
            </div>
          </div>
        </transition-group>
      </div>
    </section>

    <!-- Lightbox -->
    <transition name="fade">
      <div v-if="lightboxOpen" class="lightbox" @click.self="closeLightbox">
        <button class="lightbox-close" @click="closeLightbox">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"/>
            <line x1="6" y1="6" x2="18" y2="18"/>
          </svg>
        </button>
        <button class="lightbox-nav prev" @click="prevPhoto" v-if="filteredPhotos.length > 1">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="15 18 9 12 15 6"/>
          </svg>
        </button>
        <button class="lightbox-nav next" @click="nextPhoto" v-if="filteredPhotos.length > 1">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="9 18 15 12 9 6"/>
          </svg>
        </button>
        
        <div class="lightbox-content">
          <img :src="currentPhoto.src" :alt="currentPhoto.title" />
          <div class="lightbox-info">
            <span class="lightbox-category">{{ currentPhoto.category }}</span>
            <h3>{{ currentPhoto.title }}</h3>
            <p>{{ currentPhoto.location }} {{ currentPhoto.description }}</p>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import { ref, computed } from 'vue'
import kebunRayaImg from '../assets/images/kebun-raya-bogor.jpg'
import curugCilemberImg from '../assets/images/curug-cilember.jpg'
import pulauMacanImg from '../assets/images/pulau-macan.jpg'
import gunungPancarImg from '../assets/images/gunung-pancar.jpg'
import tamanSafariImg from '../assets/images/taman-safari.jpg'
import mangroveImg from '../assets/images/mangrove.jpg'
import gunungGedeImg from '../assets/images/gunung-gede.jpg'
import sawahImg from '../assets/images/sawah.jpg'
import danauImg from '../assets/images/danau.jpg'
import jakartaImg from '../assets/images/jakarta-skyline.jpg'

export default {
  name: 'Gallery',
  setup() {
    const activeFilter = ref('Semua')
    const lightboxOpen = ref(false)
    const currentPhotoIndex = ref(0)
    
    const filters = ['Semua', 'Taman', 'Air Terjun', 'Pulau', 'Hutan', 'Gunung', 'Pantai']
    
    const photos = [
      {
        id: 1,
        title: 'Kebun Raya Bogor',
        location: 'Bogor, Jawa Barat',
        category: 'Taman',
        size: 'large',
        src: kebunRayaImg,
        description: '- Kebun raya tertua di Asia Tenggara'
      },
      {
        id: 2,
        title: 'Curug Cilember',
        location: 'Cisarua, Bogor',
        category: 'Air Terjun',
        size: 'medium',
        src: curugCilemberImg,
        description: '- Tujuh air terjun bertingkat'
      },
      {
        id: 3,
        title: 'Pulau Macan',
        location: 'Kepulauan Seribu',
        category: 'Pulau',
        size: 'medium',
        src: pulauMacanImg,
        description: '- Pulau ekowisata eksotis'
      },
      {
        id: 4,
        title: 'Hutan Pinus Gunung Pancar',
        location: 'Bogor, Jawa Barat',
        category: 'Hutan',
        size: 'large',
        src: gunungPancarImg,
        description: '- Hutan pinus yang instagrammable'
      },
      {
        id: 5,
        title: 'Taman Safari Indonesia',
        location: 'Cisarua, Bogor',
        category: 'Taman',
        size: 'medium',
        src: tamanSafariImg,
        description: '- Taman margasatwa terbesar'
      },
      {
        id: 6,
        title: 'Hutan Mangrove PIK',
        location: 'Jakarta Utara',
        category: 'Pantai',
        size: 'medium',
        src: mangroveImg,
        description: '- Ekowisata mangrove Jakarta'
      },
      {
        id: 7,
        title: 'Jalur Pendakian Gunung',
        location: 'Bogor, Jawa Barat',
        category: 'Gunung',
        size: 'large',
        src: gunungGedeImg,
        description: '- Jalur trekking dengan pemandangan'
      },
      {
        id: 8,
        title: 'Persawahan Hijau',
        location: 'Cianjur, Jawa Barat',
        category: 'Taman',
        size: 'medium',
        src: sawahImg,
        description: '- Pemandangan persawahan yang asri'
      },
      {
        id: 9,
        title: 'Danau Situ Gede',
        location: 'Bogor, Jawa Barat',
        category: 'Taman',
        size: 'medium',
        src: danauImg,
        description: '- Danau dengan pemandangan gunung'
      },
      {
        id: 10,
        title: 'Jakarta dari Ketinggian',
        location: 'DKI Jakarta',
        category: 'Taman',
        size: 'wide',
        src: jakartaImg,
        description: '- Panorama kota Jakarta'
      }
    ]
    
    const filteredPhotos = computed(() => {
      if (activeFilter.value === 'Semua') return photos
      return photos.filter(p => p.category === activeFilter.value)
    })
    
    const currentPhoto = computed(() => filteredPhotos.value[currentPhotoIndex.value] || photos[0])
    
    const openLightbox = (photo) => {
      currentPhotoIndex.value = filteredPhotos.value.findIndex(p => p.id === photo.id)
      lightboxOpen.value = true
      document.body.style.overflow = 'hidden'
    }
    
    const closeLightbox = () => {
      lightboxOpen.value = false
      document.body.style.overflow = ''
    }
    
    const nextPhoto = () => {
      currentPhotoIndex.value = (currentPhotoIndex.value + 1) % filteredPhotos.value.length
    }
    
    const prevPhoto = () => {
      currentPhotoIndex.value = (currentPhotoIndex.value - 1 + filteredPhotos.value.length) % filteredPhotos.value.length
    }
    
    // Keyboard navigation
    const handleKeydown = (e) => {
      if (!lightboxOpen.value) return
      if (e.key === 'Escape') closeLightbox()
      if (e.key === 'ArrowRight') nextPhoto()
      if (e.key === 'ArrowLeft') prevPhoto()
    }
    
    window.addEventListener('keydown', handleKeydown)
    
    return {
      activeFilter,
      filters,
      filteredPhotos,
      lightboxOpen,
      currentPhoto,
      openLightbox,
      closeLightbox,
      nextPhoto,
      prevPhoto
    }
  }
}
</script>

<style scoped>
/* Page Header */
.page-header {
  position: relative;
  height: 50vh;
  min-height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.header-bg {
  position: absolute;
  inset: 0;
}

.header-bg img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.header-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(30, 61, 42, 0.85) 0%, rgba(45, 90, 61, 0.7) 100%);
}

.header-content {
  position: relative;
  z-index: 2;
  text-align: center;
  color: var(--color-white);
  padding: 0 24px;
}

.header-badge {
  display: inline-block;
  padding: 6px 18px;
  background: rgba(255, 255, 255, 0.15);
  border-radius: 50px;
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 2px;
  text-transform: uppercase;
  margin-bottom: 16px;
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.header-content h1 {
  font-size: 3rem;
  margin-bottom: 12px;
}

.header-content p {
  font-size: 1.1rem;
  opacity: 0.85;
  max-width: 500px;
  margin: 0 auto;
}

/* Gallery Section */
.gallery-section {
  background: var(--color-cream);
}

.gallery-filter {
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-bottom: 40px;
  flex-wrap: wrap;
}

.filter-btn {
  padding: 10px 22px;
  border-radius: 50px;
  border: 1px solid var(--color-gray);
  background: var(--color-white);
  font-family: var(--font-body);
  font-size: 13px;
  font-weight: 500;
  color: var(--color-text);
  cursor: pointer;
  transition: var(--transition);
}

.filter-btn:hover {
  border-color: var(--color-primary);
  color: var(--color-primary);
}

.filter-btn.active {
  background: var(--color-primary);
  color: var(--color-white);
  border-color: var(--color-primary);
}

/* Gallery Grid */
.gallery-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: 280px;
  gap: 16px;
  grid-auto-flow: dense;
}

.gallery-item {
  border-radius: 16px;
  overflow: hidden;
  cursor: pointer;
}

.gallery-item.large {
  grid-column: span 2;
  grid-row: span 2;
}

.gallery-item.wide {
  grid-column: span 2;
}

.gallery-image-wrapper {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.gallery-image-wrapper img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
}

.gallery-item:hover .gallery-image-wrapper img {
  transform: scale(1.1);
}

.gallery-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(30, 61, 42, 0.9) 0%, rgba(30, 61, 42, 0.3) 50%, transparent 100%);
  display: flex;
  align-items: flex-end;
  padding: 24px;
  opacity: 0;
  transition: opacity 0.4s ease;
}

.gallery-item:hover .gallery-overlay {
  opacity: 1;
}

.gallery-overlay-content {
  transform: translateY(20px);
  transition: transform 0.4s ease;
}

.gallery-item:hover .gallery-overlay-content {
  transform: translateY(0);
}

.gallery-category {
  display: inline-block;
  padding: 4px 12px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 50px;
  font-size: 11px;
  font-weight: 500;
  color: var(--color-white);
  margin-bottom: 8px;
}

.gallery-overlay-content h4 {
  font-size: 1.1rem;
  color: var(--color-white);
  margin-bottom: 4px;
}

.gallery-overlay-content p {
  font-size: 13px;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 12px;
}

.gallery-view-btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 10px 20px;
  background: var(--color-white);
  color: var(--color-primary);
  border: none;
  border-radius: 50px;
  font-family: var(--font-body);
  font-size: 13px;
  font-weight: 500;
  cursor: pointer;
  transition: var(--transition);
}

.gallery-view-btn:hover {
  background: var(--color-primary);
  color: var(--color-white);
}

/* Gallery Transition */
.gallery-enter-active,
.gallery-leave-active {
  transition: all 0.4s ease;
}

.gallery-enter-from,
.gallery-leave-to {
  opacity: 0;
  transform: scale(0.9);
}

/* Lightbox */
.lightbox {
  position: fixed;
  inset: 0;
  z-index: 9999;
  background: rgba(0, 0, 0, 0.95);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px;
}

.lightbox-close {
  position: absolute;
  top: 24px;
  right: 24px;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  border: none;
  color: var(--color-white);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: var(--transition);
  z-index: 10;
}

.lightbox-close:hover {
  background: rgba(255, 255, 255, 0.2);
}

.lightbox-nav {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  border: none;
  color: var(--color-white);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: var(--transition);
  z-index: 10;
}

.lightbox-nav:hover {
  background: rgba(255, 255, 255, 0.2);
}

.lightbox-nav.prev {
  left: 24px;
}

.lightbox-nav.next {
  right: 24px;
}

.lightbox-content {
  max-width: 1000px;
  width: 100%;
  text-align: center;
}

.lightbox-content img {
  max-height: 70vh;
  max-width: 100%;
  border-radius: 12px;
  object-fit: contain;
}

.lightbox-info {
  margin-top: 24px;
  color: var(--color-white);
}

.lightbox-category {
  display: inline-block;
  padding: 4px 14px;
  background: rgba(255, 255, 255, 0.15);
  border-radius: 50px;
  font-size: 12px;
  font-weight: 500;
  margin-bottom: 10px;
}

.lightbox-info h3 {
  font-size: 1.5rem;
  margin-bottom: 6px;
}

.lightbox-info p {
  opacity: 0.8;
  font-size: 14px;
}

/* Responsive */
@media (max-width: 992px) {
  .gallery-grid {
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: 220px;
  }
  
  .gallery-item.large {
    grid-column: span 2;
    grid-row: span 2;
  }
}

@media (max-width: 768px) {
  .header-content h1 {
    font-size: 2rem;
  }
  
  .gallery-grid {
    grid-template-columns: repeat(2, 1fr);
    grid-auto-rows: 180px;
    gap: 10px;
  }
  
  .gallery-item.large {
    grid-column: span 2;
    grid-row: span 2;
  }
  
  .gallery-item.wide {
    grid-column: span 2;
  }
  
  .lightbox-nav {
    display: none;
  }
  
  .lightbox {
    padding: 20px;
  }
}
</style>

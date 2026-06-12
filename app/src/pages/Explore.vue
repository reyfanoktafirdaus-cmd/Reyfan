<template>
  <div class="explore-page">
    <!-- Page Header -->
    <section class="page-header">
      <div class="header-bg">
        <img src="../assets/images/gunung-gede.jpg" alt="Pemandangan Gunung" />
        <div class="header-overlay"></div>
      </div>
      <div class="header-content">
        <span class="header-badge">Eksplorasi</span>
        <h1>Destinasi Wisata Alam</h1>
        <p>Temukan informasi lengkap tentang destinasi wisata alam menarik di Jabodetabek</p>
      </div>
    </section>

    <!-- Filter Section -->
    <section class="filter-section">
      <div class="container">
        <div class="filter-bar">
          <div class="filter-search">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="11" cy="11" r="8"/>
              <line x1="21" y1="21" x2="16.65" y2="16.65"/>
            </svg>
            <input 
              type="text" 
              v-model="searchQuery" 
              placeholder="Cari destinasi wisata..."
            />
          </div>
          <div class="filter-categories">
            <button 
              v-for="cat in categories" 
              :key="cat"
              class="filter-btn"
              :class="{ active: selectedCategory === cat }"
              @click="selectedCategory = cat"
            >
              {{ cat }}
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- Destinations List -->
    <section class="destinations-list section-padding">
      <div class="container">
        <div class="results-count" v-if="filteredDestinations.length > 0">
          Menampilkan {{ filteredDestinations.length }} destinasi wisata
        </div>
        <div class="results-count" v-else>
          Tidak ada destinasi yang cocok dengan pencarian Anda
        </div>
        
        <div class="explore-grid">
          <article 
            v-for="dest in filteredDestinations" 
            :key="dest.id"
            class="explore-card"
          >
            <div class="explore-image">
              <img :src="dest.image" :alt="dest.name" />
              <span class="explore-category">{{ dest.category }}</span>
            </div>
            <div class="explore-content">
              <h3>{{ dest.name }}</h3>
              <div class="explore-location">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
                {{ dest.location }}
              </div>
              
              <!-- Sejarah Singkat -->
              <div class="explore-section" v-if="dest.history">
                <h4>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <circle cx="12" cy="12" r="10"/>
                    <polyline points="12 6 12 12 16 14"/>
                  </svg>
                  Sejarah
                </h4>
                <p>{{ dest.history }}</p>
              </div>
              
              <!-- Daya Tarik -->
              <div class="explore-section" v-if="dest.attractions">
                <h4>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                  </svg>
                  Daya Tarik
                </h4>
                <ul>
                  <li v-for="(attr, i) in dest.attractions" :key="i">{{ attr }}</li>
                </ul>
              </div>
              
              <!-- Aktivitas -->
              <div class="explore-section" v-if="dest.activities">
                <h4>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
                  </svg>
                  Aktivitas
                </h4>
                <div class="activity-tags">
                  <span v-for="(act, i) in dest.activities" :key="i" class="activity-tag">{{ act }}</span>
                </div>
              </div>
              
              <!-- Spot Foto -->
              <div class="explore-section" v-if="dest.photoSpots">
                <h4>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/>
                    <circle cx="12" cy="13" r="4"/>
                  </svg>
                  Spot Foto
                </h4>
                <ul>
                  <li v-for="(spot, i) in dest.photoSpots" :key="i">{{ spot }}</li>
                </ul>
              </div>
              
              <!-- Info Card -->
              <div class="info-card">
                <div class="info-row">
                  <span class="info-label">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                      <line x1="16" y1="2" x2="16" y2="6"/>
                      <line x1="8" y1="2" x2="8" y2="6"/>
                      <line x1="3" y1="10" x2="21" y2="10"/>
                    </svg>
                    Jam Operasional
                  </span>
                  <span class="info-value">{{ dest.hours }}</span>
                </div>
                <div class="info-row">
                  <span class="info-label">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <circle cx="12" cy="12" r="10"/>
                      <line x1="12" y1="8" x2="12" y2="12"/>
                      <line x1="12" y1="16" x2="12.01" y2="16"/>
                    </svg>
                    Harga Tiket
                  </span>
                  <span class="info-value price">{{ dest.price }}</span>
                </div>
                <div class="info-row">
                  <span class="info-label">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
                    </svg>
                    Fasilitas
                  </span>
                  <span class="info-value">{{ dest.facilities }}</span>
                </div>
              </div>
              
              <div class="explore-rating">
                <div class="stars">
                  <svg v-for="n in 5" :key="n" width="16" height="16" viewBox="0 0 24 24" :fill="n <= Math.round(dest.rating) ? 'currentColor' : 'none'" stroke="currentColor" stroke-width="2">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                  </svg>
                </div>
                <span>{{ dest.rating }}/5.0</span>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { computed, ref } from 'vue'
import kebunRayaImg from '../assets/images/kebun-raya-bogor.jpg'
import curugCilemberImg from '../assets/images/curug-cilember.jpg'
import pulauMacanImg from '../assets/images/pulau-macan.jpg'
import gunungPancarImg from '../assets/images/gunung-pancar.jpg'
import tamanSafariImg from '../assets/images/taman-safari.jpg'
import mangroveImg from '../assets/images/mangrove.jpg'

export default {
  name: 'Explore',
  setup() {
    const searchQuery = ref('')
    const selectedCategory = ref('Semua')
    
    const categories = ['Semua', 'Taman Botani', 'Air Terjun', 'Pulau', 'Hutan', 'Safari', 'Pantai', 'Gunung']
    
    const destinations = [
      {
        id: 1,
        name: 'Kebun Raya Bogor',
        location: 'Bogor, Jawa Barat',
        category: 'Taman Botani',
        image: kebunRayaImg,
        rating: 4.8,
        price: 'Rp 25.000',
        hours: '08:00 - 16:00 WIB',
        facilities: 'Toilet, Masjid, Restoran, Parkir',
        history: 'Didirikan pada tahun 1817 oleh Prof. Caspar Georg Carl Reinwardt. Merupakan kebun raya tertua di Asia Tenggara dengan luas 87 hektar dan koleksi lebih dari 15.000 jenis tumbuhan.',
        attractions: [
          'Makam Belanda Belanda yang bersejarah',
          'Istana Bogor dengan rusa tutul',
          'Gembok Cinta di jembatan gantung',
          'Koleksi anggrek langka di Rumah Anggrek',
          'Taman Mexico dengan koleksi kaktus'
        ],
        activities: ['Jalan-jalan santai', 'Fotografi', 'Picnic', 'Edukasi tumbuhan'],
        photoSpots: ['Jembatan Gantung', 'Istana Bogor', 'Rumah Kaca', 'Danau Gunting']
      },
      {
        id: 2,
        name: 'Curug Cilember',
        location: 'Cisarua, Bogor',
        category: 'Air Terjun',
        image: curugCilemberImg,
        rating: 4.7,
        price: 'Rp 15.000',
        hours: '07:00 - 17:00 WIB',
        facilities: 'Toilet, Warung, Tempat camping, Parkir',
        history: 'Air terjun alami yang telah ada sejak ratusan tahun lalu. Nama Cilember berasal dari bahasa Sunda yang berarti "lembah air". Memiliki tujuh tingkatan air terjun yang dikelilingi hutan pinus.',
        attractions: [
          'Tujuh air terjun bertingkat',
          'Hutan pinus yang asri',
          'Area camping yang luas',
          'Jalur trekking yang menantang',
          'Kolam alami di bawah air terjun'
        ],
        activities: ['Trekking', 'Camping', 'Fotografi', 'Berendam alami'],
        photoSpots: ['Air Terjun Utama', 'Jembatan Kayu', 'Area Camping', 'Kolam Alami']
      },
      {
        id: 3,
        name: 'Pulau Macan',
        location: 'Kepulauan Seribu, Jakarta',
        category: 'Pulau',
        image: pulauMacanImg,
        rating: 4.9,
        price: 'Rp 500.000',
        hours: '24 Jam (Penginapan)',
        facilities: 'Resort, Restoran, Snorkeling, Parkir',
        history: 'Pulau Macan atau Tiger Islands adalah destinasi eco-resort yang mengusung konsep pariwisata berkelanjutan. Pulau ini terkenal dengan keindahan bawah laut dan konsep environmentally friendly.',
        attractions: [
          'Pantai berpasir putih',
          'Terumbu karang yang masih alami',
          'Villa kayu di atas air',
          'Sunset view yang spektakuler',
          'Bioluminescence di malam hari'
        ],
        activities: ['Snorkeling', 'Diving', 'Kayaking', 'Sunset cruise', 'Yoga'],
        photoSpots: ['Villa Atas Air', 'Pantai Barat', 'Dermaga Utama', 'Sunset Point']
      },
      {
        id: 4,
        name: 'Gunung Pancar',
        location: 'Bogor, Jawa Barat',
        category: 'Hutan',
        image: gunungPancarImg,
        rating: 4.6,
        price: 'Rp 20.000',
        hours: '06:00 - 17:00 WIB',
        facilities: 'Toilet, Warung, Area camping, Parkir',
        history: 'Taman Wisata Alam Gunung Pancar terletak di kaki Gunung Salak dengan ketinggian 300-800 mdpl. Dikenal dengan hutan pinusnya yang rindang dan udara yang sejuk sepanjang tahun.',
        attractions: [
          'Hutan pinus yang instagrammable',
          'Mata air panas alami',
          'Jalur trekking dengan pemandangan indah',
          'Area outbound',
          'Camping ground yang luas'
        ],
        activities: ['Camping', 'Trekking', 'Outbound', 'Fotografi', 'Piknik'],
        photoSpots: ['Hutan Pinus', 'Mata Air Panas', 'Bukit Teletubbies', 'Area Camping']
      },
      {
        id: 5,
        name: 'Taman Safari Indonesia',
        location: 'Cisarua, Bogor',
        category: 'Safari',
        image: tamanSafariImg,
        rating: 4.8,
        price: 'Rp 200.000',
        hours: '09:00 - 17:00 WIB',
        facilities: 'Restoran, Toilet, Shuttle bus, Parkir luas',
        history: 'Taman Safari Indonesia Bogor didirikan pada tahun 1980 dan merupakan taman safari pertama di Indonesia. Terletak di lereng Gunung Gede Pangrango dengan luas 168 hektar.',
        attractions: [
          'Safari journey melihat satwa liar',
          'Pertunjukan satwa yang edukatif',
          'Baby zoo dengan satwa lucu',
          'Waterpark & wahana permainan',
          'Penguin house dengan suhu minus'
        ],
        activities: ['Safari journey', 'Feeding animals', 'Fotografi', 'Waterpark'],
        photoSpots: ['Savana Africa', 'Bali Safari', 'Penguin House', 'Baby Zoo']
      },
      {
        id: 6,
        name: 'Hutan Mangrove PIK',
        location: 'Penjaringan, Jakarta Utara',
        category: 'Pantai',
        image: mangroveImg,
        rating: 4.5,
        price: 'Rp 25.000',
        hours: '08:00 - 18:00 WIB',
        facilities: 'Toilet, Warung musholla, Parkir',
        history: 'Hutan Mangrove di Pantai Indah Kapuk (PIK) merupakan salah satu ekowisata mangrove yang berhasil dikembangkan di Jakarta. Berfungsi sebagai paru-paru kota dan habitat berbagai satwa.',
        attractions: [
          'Jembatan kayu sepanjang 3km',
          'Spot bird watching',
          'Area planting mangrove',
          'Sunset view yang indah',
          'Wisata kayaking'
        ],
        activities: ['Bird watching', 'Kayaking', 'Planting mangrove', 'Fotografi'],
        photoSpots: ['Jembatan Kayu', 'Spot Sunset', 'Area Planting', 'Bird Tower']
      }
    ]
    
    const filteredDestinations = computed(() => {
      let result = destinations
      
      if (selectedCategory.value !== 'Semua') {
        result = result.filter(d => d.category === selectedCategory.value)
      }
      
      if (searchQuery.value.trim()) {
        const query = searchQuery.value.toLowerCase()
        result = result.filter(d => 
          d.name.toLowerCase().includes(query) || 
          d.location.toLowerCase().includes(query) ||
          d.category.toLowerCase().includes(query)
        )
      }
      
      return result
    })
    
    return {
      searchQuery,
      selectedCategory,
      categories,
      filteredDestinations
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

/* Filter Section */
.filter-section {
  background: var(--color-white);
  padding: 24px 0;
  border-bottom: 1px solid var(--color-gray);
  position: sticky;
  top: 60px;
  z-index: 100;
}

.filter-bar {
  display: flex;
  align-items: center;
  gap: 24px;
  flex-wrap: wrap;
}

.filter-search {
  flex: 1;
  min-width: 250px;
  position: relative;
}

.filter-search svg {
  position: absolute;
  left: 16px;
  top: 50%;
  transform: translateY(-50%);
  color: var(--text-muted);
}

.filter-search input {
  width: 100%;
  padding: 12px 16px 12px 44px;
  border: 2px solid var(--color-gray);
  border-radius: 50px;
  font-family: var(--font-body);
  font-size: 14px;
  transition: var(--transition);
  background: var(--color-cream);
}

.filter-search input:focus {
  outline: none;
  border-color: var(--color-primary);
  background: var(--color-white);
}

.filter-categories {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
}

.filter-btn {
  padding: 10px 20px;
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

/* Destinations List */
.destinations-list {
  background: var(--color-cream);
}

.results-count {
  font-size: 14px;
  color: var(--text-muted);
  margin-bottom: 24px;
}

.explore-grid {
  display: flex;
  flex-direction: column;
  gap: 30px;
}

.explore-card {
  display: grid;
  grid-template-columns: 400px 1fr;
  background: var(--color-white);
  border-radius: 24px;
  overflow: hidden;
  box-shadow: var(--shadow-soft);
  transition: var(--transition);
}

.explore-card:hover {
  box-shadow: var(--shadow-medium);
}

.explore-image {
  position: relative;
  height: 100%;
  min-height: 300px;
}

.explore-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.explore-category {
  position: absolute;
  top: 16px;
  left: 16px;
  padding: 6px 14px;
  background: rgba(255, 255, 255, 0.95);
  border-radius: 50px;
  font-size: 12px;
  font-weight: 600;
  color: var(--color-primary);
}

.explore-content {
  padding: 32px;
}

.explore-content h3 {
  font-size: 1.5rem;
  color: var(--color-primary-dark);
  margin-bottom: 8px;
}

.explore-location {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 14px;
  color: var(--text-muted);
  margin-bottom: 20px;
}

.explore-section {
  margin-bottom: 20px;
}

.explore-section h4 {
  display: flex;
  align-items: center;
  gap: 8px;
  font-family: var(--font-body);
  font-size: 14px;
  font-weight: 600;
  color: var(--color-primary-dark);
  margin-bottom: 10px;
}

.explore-section h4 svg {
  color: var(--color-primary);
}

.explore-section p {
  font-size: 14px;
  color: var(--text-muted);
  line-height: 1.7;
  padding-left: 24px;
}

.explore-section ul {
  list-style: none;
  padding-left: 24px;
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.explore-section li {
  font-size: 14px;
  color: var(--text-muted);
  position: relative;
  padding-left: 16px;
}

.explore-section li::before {
  content: '';
  position: absolute;
  left: 0;
  top: 9px;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--color-primary-light);
}

.activity-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  padding-left: 24px;
}

.activity-tag {
  padding: 6px 14px;
  background: rgba(45, 90, 61, 0.08);
  border-radius: 50px;
  font-size: 12px;
  font-weight: 500;
  color: var(--color-primary);
}

/* Info Card */
.info-card {
  background: var(--color-cream);
  border-radius: 16px;
  padding: 20px;
  margin: 20px 0;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.info-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
}

.info-label {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 13px;
  color: var(--text-muted);
}

.info-label svg {
  color: var(--color-primary);
}

.info-value {
  font-size: 13px;
  font-weight: 500;
  color: var(--color-primary-dark);
  text-align: right;
}

.info-value.price {
  color: var(--color-primary);
  font-weight: 600;
  font-size: 15px;
}

.explore-rating {
  display: flex;
  align-items: center;
  gap: 10px;
  padding-top: 16px;
  border-top: 1px solid var(--color-gray);
  margin-top: 16px;
}

.stars {
  display: flex;
  gap: 3px;
  color: #E8A838;
}

.explore-rating span {
  font-size: 14px;
  font-weight: 500;
  color: var(--color-text);
}

/* Responsive */
@media (max-width: 992px) {
  .explore-card {
    grid-template-columns: 1fr;
  }
  
  .explore-image {
    height: 250px;
    min-height: auto;
  }
}

@media (max-width: 768px) {
  .header-content h1 {
    font-size: 2rem;
  }
  
  .filter-bar {
    flex-direction: column;
    align-items: stretch;
  }
  
  .filter-search {
    min-width: auto;
  }
  
  .filter-categories {
    overflow-x: auto;
    flex-wrap: nowrap;
    padding-bottom: 8px;
  }
  
  .explore-content {
    padding: 24px 20px;
  }
}
</style>

<template>
  <div class="profile-page">
    <!-- Page Header -->
    <section class="page-header">
      <div class="header-bg">
        <img src="../assets/images/jakarta-skyline.jpg" alt="Jakarta Skyline" />
        <div class="header-overlay"></div>
      </div>
      <div class="header-content">
        <span class="header-badge">Tentang Kami</span>
        <h1>Profil Jabodetabek Nature</h1>
        <p>Mengenal lebih dekat platform wisata alam terpercaya di kawasan Jabodetabek</p>
      </div>
    </section>

    <!-- About Section -->
    <section class="about section-padding">
      <div class="container">
        <div class="about-grid">
          <div class="about-image">
            <img src="../assets/images/sawah.jpg" alt="Pemandangan Alam" />
            <div class="about-accent"></div>
          </div>
          <div class="about-content">
            <span class="section-badge">Siapa Kami</span>
            <h2>Platform Wisata Alam Terpercaya</h2>
            <p>
              Jabodetabek Nature adalah platform informasi wisata alam yang didedikasikan untuk 
              memperkenalkan dan mempromosikan keindahan alam di kawasan Jabodetabek. Didirikan 
              dengan semangat mencintai alam, kami berkomitmen untuk menghadirkan informasi 
              akurat dan terkini tentang destinasi wisata alam.
            </p>
            <p>
              Kami memahami bahwa kebutuhan akan wisata alam yang berkualitas semakin meningkat, 
              terutama bagi masyarakat perkotaan yang membutuhkan refresing dari hiruk-pikuk kota. 
              Oleh karena itu, kami hadir sebagai solusi untuk membantu Anda menemukan destinasi 
              wisata alam terbaik yang sesuai dengan kebutuhan dan preferensi Anda.
            </p>
            <div class="about-stats">
              <div class="about-stat" v-for="(stat, index) in aboutStats" :key="index">
                <span class="about-stat-number">{{ stat.number }}</span>
                <span class="about-stat-label">{{ stat.label }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Vision Mission -->
    <section class="vision-mission section-padding">
      <div class="container">
        <div class="vm-grid">
          <div class="vm-card vision">
            <div class="vm-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                <circle cx="12" cy="12" r="3"/>
              </svg>
            </div>
            <h3>Visi Kami</h3>
            <p>
              Menjadi platform informasi wisata alam terdepan di Jabodetabek yang 
              menginspirasi masyarakat untuk mencintai dan melestarikan keindahan alam 
              sekitar mereka, serta meningkatkan kesadaran akan pentingnya pelestarian lingkungan.
            </p>
          </div>
          <div class="vm-card mission">
            <div class="vm-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="10"/>
                <line x1="2" y1="12" x2="22" y2="12"/>
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
              </svg>
            </div>
            <h3>Misi Kami</h3>
            <ul>
              <li v-for="(mission, index) in missions" :key="index">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
                {{ mission }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Values -->
    <section class="values section-padding">
      <div class="container">
        <div class="section-title">
          <span class="section-badge">Nilai-Nilai</span>
          <h2>Nilai-Nilai Kami</h2>
          <p>Prinsip yang kami pegang teguh dalam setiap langkah</p>
        </div>
        <div class="values-grid">
          <div class="value-card" v-for="(value, index) in values" :key="index">
            <div class="value-number">{{ String(index + 1).padStart(2, '0') }}</div>
            <h4>{{ value.title }}</h4>
            <p>{{ value.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Coverage Area -->
    <section class="coverage section-padding">
      <div class="container">
        <div class="coverage-grid">
          <div class="coverage-content">
            <span class="section-badge">Cakupan Area</span>
            <h2>Area Jabodetabek</h2>
            <p>
              Kami mencakup seluruh wilayah Jabodetabek yang terdiri dari Jakarta, Bogor, 
              Depok, Tangerang, dan Bekasi. Setiap wilayah memiliki keunikan dan daya tarik 
              wisata alamnya masing-masing.
            </p>
            <div class="area-list">
              <div class="area-item" v-for="(area, index) in areas" :key="index">
                <div class="area-icon">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                </div>
                <div class="area-info">
                  <h5>{{ area.name }}</h5>
                  <span>{{ area.destinations }} destinasi wisata</span>
                </div>
              </div>
            </div>
          </div>
          <div class="coverage-map">
            <img src="../assets/images/jakarta-skyline.jpg" alt="Jabodetabek Area" />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Profile',
  data() {
    return {
      aboutStats: [
        { number: '2019', label: 'Berdiri Sejak' },
        { number: '50+', label: 'Destinasi' },
        { number: '25K+', label: 'Pengikut' }
      ],
      missions: [
        'Menyediakan informasi lengkap dan akurat tentang wisata alam di Jabodetabek',
        'Mempromosikan destinasi wisata alam lokal untuk mendukung ekonomi masyarakat',
        'Mendorong kesadaran pelestarian alam dan lingkungan hidup',
        'Memberikan panduan praktis untuk pengalaman wisata yang aman dan menyenangkan',
        'Membangun komunitas pecinta alam yang peduli terhadap lingkungan'
      ],
      values: [
        {
          title: 'Keaslian Informasi',
          desc: 'Kami memastikan setiap informasi yang kami sajikan adalah akurat dan telah diverifikasi secara langsung.'
        },
        {
          title: 'Kepedulian Lingkungan',
          desc: 'Kami selalu mengedepankan prinsip eco-tourism dan melestarikan keindahan alam.'
        },
        {
          title: 'Pelayanan Terbaik',
          desc: 'Komitmen kami adalah memberikan pengalaman terbaik bagi setiap pengunjung platform kami.'
        },
        {
          title: 'Inovasi Berkelanjutan',
          desc: 'Kami terus berinovasi untuk menghadirkan fitur dan konten yang bermanfaat.'
        }
      ],
      areas: [
        { name: 'DKI Jakarta', destinations: 12 },
        { name: 'Kota Bogor', destinations: 18 },
        { name: 'Kota Depok', destinations: 6 },
        { name: 'Kota Tangerang', destinations: 8 },
        { name: 'Kota Bekasi', destinations: 6 }
      ]
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

/* About Section */
.about {
  background: var(--color-cream);
}

.about-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: center;
}

.about-image {
  position: relative;
}

.about-image img {
  width: 100%;
  height: 500px;
  object-fit: cover;
  border-radius: 24px;
}

.about-accent {
  position: absolute;
  top: -20px;
  left: -20px;
  width: 150px;
  height: 150px;
  border-radius: 24px;
  background: var(--color-primary);
  opacity: 0.1;
  z-index: -1;
}

.about-content h2 {
  font-size: 2.2rem;
  color: var(--color-primary-dark);
  margin-bottom: 16px;
}

.about-content > p {
  color: var(--text-muted);
  line-height: 1.8;
  margin-bottom: 16px;
}

.about-stats {
  display: flex;
  gap: 40px;
  margin-top: 36px;
  padding-top: 36px;
  border-top: 1px solid var(--color-gray);
}

.about-stat {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.about-stat-number {
  font-family: var(--font-heading);
  font-size: 1.8rem;
  font-weight: 700;
  color: var(--color-primary);
}

.about-stat-label {
  font-size: 13px;
  color: var(--text-muted);
}

/* Vision Mission */
.vision-mission {
  background: var(--color-white);
}

.vm-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
}

.vm-card {
  padding: 48px;
  border-radius: 24px;
  transition: var(--transition);
}

.vm-card.vision {
  background: var(--color-cream);
}

.vm-card.mission {
  background: var(--color-primary-dark);
  color: var(--color-white);
}

.vm-icon {
  width: 64px;
  height: 64px;
  border-radius: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 24px;
}

.vision .vm-icon {
  background: rgba(45, 90, 61, 0.1);
  color: var(--color-primary);
}

.mission .vm-icon {
  background: rgba(255, 255, 255, 0.1);
  color: var(--color-white);
}

.vm-card h3 {
  font-size: 1.5rem;
  margin-bottom: 16px;
}

.vm-card p {
  line-height: 1.8;
  color: inherit;
  opacity: 0.85;
}

.vm-card ul {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.vm-card li {
  display: flex;
  gap: 12px;
  align-items: flex-start;
  font-size: 15px;
  line-height: 1.6;
  opacity: 0.9;
}

.vm-card li svg {
  flex-shrink: 0;
  margin-top: 3px;
  color: #8FB996;
}

/* Values */
.values {
  background: var(--color-cream);
}

.values-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
}

.value-card {
  background: var(--color-white);
  padding: 36px;
  border-radius: 20px;
  transition: var(--transition);
}

.value-card:hover {
  transform: translateY(-6px);
  box-shadow: var(--shadow-medium);
}

.value-number {
  font-family: var(--font-heading);
  font-size: 2.5rem;
  font-weight: 700;
  color: rgba(45, 90, 61, 0.15);
  line-height: 1;
  margin-bottom: 16px;
}

.value-card h4 {
  font-family: var(--font-body);
  font-size: 17px;
  font-weight: 600;
  color: var(--color-primary-dark);
  margin-bottom: 10px;
}

.value-card p {
  font-size: 14px;
  color: var(--text-muted);
  line-height: 1.6;
}

/* Coverage */
.coverage {
  background: var(--color-white);
}

.coverage-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: center;
}

.coverage-content h2 {
  font-size: 2.2rem;
  color: var(--color-primary-dark);
  margin-bottom: 16px;
}

.coverage-content > p {
  color: var(--text-muted);
  line-height: 1.8;
  margin-bottom: 32px;
}

.area-list {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.area-item {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 16px 20px;
  background: var(--color-cream);
  border-radius: 14px;
  transition: var(--transition);
}

.area-item:hover {
  background: rgba(45, 90, 61, 0.08);
}

.area-icon {
  width: 40px;
  height: 40px;
  border-radius: 12px;
  background: var(--color-primary);
  color: var(--color-white);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.area-info h5 {
  font-family: var(--font-body);
  font-size: 15px;
  font-weight: 600;
  color: var(--color-primary-dark);
}

.area-info span {
  font-size: 13px;
  color: var(--text-muted);
}

.coverage-map img {
  width: 100%;
  height: 450px;
  object-fit: cover;
  border-radius: 24px;
}

/* Responsive */
@media (max-width: 992px) {
  .about-grid {
    grid-template-columns: 1fr;
    gap: 40px;
  }
  
  .about-image {
    order: -1;
  }
  
  .about-image img {
    height: 350px;
  }
  
  .vm-grid {
    grid-template-columns: 1fr;
  }
  
  .values-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .coverage-grid {
    grid-template-columns: 1fr;
    gap: 40px;
  }
  
  .coverage-map {
    order: -1;
  }
  
  .coverage-map img {
    height: 300px;
  }
}

@media (max-width: 768px) {
  .header-content h1 {
    font-size: 2rem;
  }
  
  .about-stats {
    gap: 24px;
  }
  
  .values-grid {
    grid-template-columns: 1fr;
  }
  
  .vm-card {
    padding: 32px 24px;
  }
}
</style>

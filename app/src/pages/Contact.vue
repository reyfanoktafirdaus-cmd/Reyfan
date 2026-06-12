<template>
  <div class="contact-page">
    <!-- Page Header -->
    <section class="page-header">
      <div class="header-bg">
        <img src="../assets/images/danau.jpg" alt="Danau" />
        <div class="header-overlay"></div>
      </div>
      <div class="header-content">
        <span class="header-badge">Kontak</span>
        <h1>Hubungi Kami</h1>
        <p>Punya pertanyaan atau saran? Silakan hubungi kami melalui form di bawah ini</p>
      </div>
    </section>

    <!-- Contact Section -->
    <section class="contact-section section-padding">
      <div class="container">
        <div class="contact-grid">
          <!-- Contact Info -->
          <div class="contact-info">
            <span class="section-badge">Informasi Kontak</span>
            <h2>Mari Berkomunikasi</h2>
            <p>
              Kami siap membantu Anda dengan informasi seputar wisata alam Jabodetabek. 
              Jangan ragu untuk menghubungi kami melalui berbagai kanal yang tersedia.
            </p>
            
            <div class="info-list">
              <div class="info-item">
                <div class="info-icon">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                </div>
                <div class="info-text">
                  <h4>Alamat</h4>
                  <p>Jl. Wisata Alam No. 123, Jakarta Selatan, DKI Jakarta 12345</p>
                </div>
              </div>
              
              <div class="info-item">
                <div class="info-icon">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                  </svg>
                </div>
                <div class="info-text">
                  <h4>Email</h4>
                  <p>info@jabodetabeknature.id</p>
                </div>
              </div>
              
              <div class="info-item">
                <div class="info-icon">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                  </svg>
                </div>
                <div class="info-text">
                  <h4>Telepon</h4>
                  <p>+62 21 1234 5678</p>
                </div>
              </div>
              
              <div class="info-item">
                <div class="info-icon">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <circle cx="12" cy="12" r="10"/>
                    <polyline points="12 6 12 12 16 14"/>
                  </svg>
                </div>
                <div class="info-text">
                  <h4>Jam Operasional</h4>
                  <p>Senin - Jumat: 09:00 - 17:00 WIB</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Contact Form -->
          <div class="contact-form-wrapper">
            <form @submit.prevent="submitForm" class="contact-form" novalidate>
              <h3>Kirim Pesan</h3>
              
              <div class="form-group" :class="{ 'has-error': errors.name }">
                <label for="name">Nama Lengkap <span>*</span></label>
                <input 
                  type="text" 
                  id="name" 
                  v-model="form.name"
                  @blur="validateField('name')"
                  placeholder="Masukkan nama lengkap Anda"
                />
                <span class="error-message" v-if="errors.name">{{ errors.name }}</span>
              </div>
              
              <div class="form-row">
                <div class="form-group" :class="{ 'has-error': errors.email }">
                  <label for="email">Email <span>*</span></label>
                  <input 
                    type="email" 
                    id="email" 
                    v-model="form.email"
                    @blur="validateField('email')"
                    placeholder="email@contoh.com"
                  />
                  <span class="error-message" v-if="errors.email">{{ errors.email }}</span>
                </div>
                
                <div class="form-group" :class="{ 'has-error': errors.phone }">
                  <label for="phone">Nomor Telepon</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    v-model="form.phone"
                    @blur="validateField('phone')"
                    placeholder="+62 812 3456 7890"
                  />
                  <span class="error-message" v-if="errors.phone">{{ errors.phone }}</span>
                </div>
              </div>
              
              <div class="form-group" :class="{ 'has-error': errors.subject }">
                <label for="subject">Subjek <span>*</span></label>
                <select 
                  id="subject" 
                  v-model="form.subject"
                  @blur="validateField('subject')"
                >
                  <option value="">Pilih subjek pesan</option>
                  <option value="informasi">Informasi Destinasi</option>
                  <option value="kerjasama">Kerjasama</option>
                  <option value="saran">Saran & Masukan</option>
                  <option value="lainnya">Lainnya</option>
                </select>
                <span class="error-message" v-if="errors.subject">{{ errors.subject }}</span>
              </div>
              
              <div class="form-group" :class="{ 'has-error': errors.message }">
                <label for="message">Pesan <span>*</span></label>
                <textarea 
                  id="message" 
                  v-model="form.message"
                  @blur="validateField('message')"
                  rows="5"
                  placeholder="Tulis pesan Anda di sini..."
                ></textarea>
                <span class="error-message" v-if="errors.message">{{ errors.message }}</span>
              </div>
              
              <button type="submit" class="btn-submit" :disabled="isSubmitting">
                <span v-if="!isSubmitting">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <line x1="22" y1="2" x2="11" y2="13"/>
                    <polygon points="22 2 15 22 11 13 2 9 22 2"/>
                  </svg>
                  Kirim Pesan
                </span>
                <span v-else class="loading">
                  <svg class="spinner" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <circle cx="12" cy="12" r="10" stroke-dasharray="60" stroke-dashoffset="20"/>
                  </svg>
                  Mengirim...
                </span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>

    <!-- Success Modal -->
    <transition name="fade">
      <div v-if="showSuccess" class="modal-overlay" @click.self="showSuccess = false">
        <div class="modal-content">
          <div class="modal-icon">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
              <polyline points="22 4 12 14.01 9 11.01"/>
            </svg>
          </div>
          <h3>Pesan Terkirim!</h3>
          <p>Terima kasih telah menghubungi kami. Kami akan segera merespons pesan Anda.</p>
          <button class="btn-primary" @click="showSuccess = false">Tutup</button>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import { reactive, ref } from 'vue'

export default {
  name: 'Contact',
  setup() {
    const form = reactive({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    })
    
    const errors = reactive({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    })
    
    const isSubmitting = ref(false)
    const showSuccess = ref(false)
    
    const validateField = (field) => {
      errors[field] = ''
      
      switch (field) {
        case 'name':
          if (!form.name.trim()) {
            errors.name = 'Nama lengkap wajib diisi'
          } else if (form.name.trim().length < 3) {
            errors.name = 'Nama minimal 3 karakter'
          }
          break
          
        case 'email':
          if (!form.email.trim()) {
            errors.email = 'Email wajib diisi'
          } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
            errors.email = 'Format email tidak valid'
          }
          break
          
        case 'phone':
          if (form.phone && !/^[\d\+\-\s()]{7,15}$/.test(form.phone)) {
            errors.phone = 'Format nomor telepon tidak valid'
          }
          break
          
        case 'subject':
          if (!form.subject) {
            errors.subject = 'Silakan pilih subjek pesan'
          }
          break
          
        case 'message':
          if (!form.message.trim()) {
            errors.message = 'Pesan wajib diisi'
          } else if (form.message.trim().length < 10) {
            errors.message = 'Pesan minimal 10 karakter'
          }
          break
      }
    }
    
    const validateForm = () => {
      validateField('name')
      validateField('email')
      validateField('phone')
      validateField('subject')
      validateField('message')
      
      return !errors.name && !errors.email && !errors.phone && !errors.subject && !errors.message
    }
    
    const submitForm = async () => {
      if (!validateForm()) return
      
      isSubmitting.value = true
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500))
      
      isSubmitting.value = false
      showSuccess.value = true
      
      // Reset form
      form.name = ''
      form.email = ''
      form.phone = ''
      form.subject = ''
      form.message = ''
    }
    
    return {
      form,
      errors,
      isSubmitting,
      showSuccess,
      validateField,
      submitForm
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

/* Contact Section */
.contact-section {
  background: var(--color-cream);
}

.contact-grid {
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  gap: 60px;
  align-items: start;
}

.contact-info h2 {
  font-size: 2.2rem;
  color: var(--color-primary-dark);
  margin-bottom: 16px;
}

.contact-info > p {
  color: var(--text-muted);
  line-height: 1.8;
  margin-bottom: 40px;
}

.info-list {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.info-item {
  display: flex;
  gap: 16px;
  align-items: flex-start;
}

.info-icon {
  width: 50px;
  height: 50px;
  border-radius: 14px;
  background: rgba(45, 90, 61, 0.1);
  color: var(--color-primary);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.info-text h4 {
  font-family: var(--font-body);
  font-size: 15px;
  font-weight: 600;
  color: var(--color-primary-dark);
  margin-bottom: 4px;
}

.info-text p {
  font-size: 14px;
  color: var(--text-muted);
  line-height: 1.5;
}

/* Contact Form */
.contact-form-wrapper {
  background: var(--color-white);
  border-radius: 24px;
  padding: 40px;
  box-shadow: var(--shadow-soft);
}

.contact-form h3 {
  font-size: 1.4rem;
  color: var(--color-primary-dark);
  margin-bottom: 28px;
}

.form-group {
  margin-bottom: 20px;
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
}

.form-group label {
  display: block;
  font-size: 14px;
  font-weight: 500;
  color: var(--color-primary-dark);
  margin-bottom: 8px;
}

.form-group label span {
  color: #E74C3C;
}

.form-group input,
.form-group select,
.form-group textarea {
  width: 100%;
  padding: 14px 18px;
  border: 2px solid var(--color-gray);
  border-radius: 14px;
  font-family: var(--font-body);
  font-size: 14px;
  color: var(--color-text);
  background: var(--color-cream);
  transition: var(--transition);
}

.form-group input:focus,
.form-group select:focus,
.form-group textarea:focus {
  outline: none;
  border-color: var(--color-primary);
  background: var(--color-white);
}

.form-group textarea {
  resize: vertical;
  min-height: 120px;
}

.form-group.has-error input,
.form-group.has-error select,
.form-group.has-error textarea {
  border-color: #E74C3C;
  background: rgba(231, 76, 60, 0.03);
}

.error-message {
  display: block;
  font-size: 12px;
  color: #E74C3C;
  margin-top: 6px;
}

.btn-submit {
  width: 100%;
  padding: 16px;
  background: var(--color-primary);
  color: var(--color-white);
  border: none;
  border-radius: 14px;
  font-family: var(--font-body);
  font-size: 15px;
  font-weight: 500;
  cursor: pointer;
  transition: var(--transition);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
}

.btn-submit:hover:not(:disabled) {
  background: var(--color-primary-dark);
  transform: translateY(-2px);
  box-shadow: var(--shadow-medium);
}

.btn-submit:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

.loading {
  display: flex;
  align-items: center;
  gap: 10px;
}

.spinner {
  animation: spin 1s linear infinite;
}

@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

/* Modal */
.modal-overlay {
  position: fixed;
  inset: 0;
  z-index: 9999;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  backdrop-filter: blur(5px);
}

.modal-content {
  background: var(--color-white);
  border-radius: 24px;
  padding: 48px;
  text-align: center;
  max-width: 420px;
  width: 100%;
  animation: modalIn 0.3s ease;
}

@keyframes modalIn {
  from {
    opacity: 0;
    transform: scale(0.9);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

.modal-icon {
  width: 72px;
  height: 72px;
  border-radius: 50%;
  background: rgba(45, 90, 61, 0.1);
  color: var(--color-primary);
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 24px;
}

.modal-content h3 {
  font-size: 1.5rem;
  color: var(--color-primary-dark);
  margin-bottom: 12px;
}

.modal-content p {
  color: var(--text-muted);
  margin-bottom: 28px;
  line-height: 1.6;
}

/* Responsive */
@media (max-width: 992px) {
  .contact-grid {
    grid-template-columns: 1fr;
    gap: 40px;
  }
  
  .contact-form-wrapper {
    order: -1;
  }
}

@media (max-width: 768px) {
  .header-content h1 {
    font-size: 2rem;
  }
  
  .form-row {
    grid-template-columns: 1fr;
  }
  
  .contact-form-wrapper {
    padding: 28px 20px;
  }
  
  .modal-content {
    padding: 36px 24px;
  }
}
</style>

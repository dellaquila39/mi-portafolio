<template>
  <!-- Componente principal con márgenes laterales -->
  <v-footer :elevation="0" class="app-footer" :class="{ 'footer-expanded': expanded }">
    <!-- Contenedor principal con estructura responsive -->
    <v-container>
      <v-row>
        <!-- Columna 1: Marca y derechos -->
        <v-col cols="12" md="4" class="footer-column">
          <div class="footer-brand">
            <h3 class="brand-title">Agustín</h3>
            <p class="brand-subtitle">Desarrollador Web</p>
          </div>
        </v-col>

        <!-- Columna 2: Navegación -->
        <v-col cols="12" md="4" class="footer-column">
          <h4 class="column-title">Navegación</h4>
          <nav class="footer-nav">
            <RouterLink
              v-for="item in navItems"
              :key="item.text"
              :to="item.to"
              class="nav-item"
              @click="scrollToTop"
            >
              {{ item.text }}
            </RouterLink>
          </nav>
        </v-col>

        <!-- Columna 3: Contacto y redes -->
        <v-col cols="12" md="4" class="footer-column">
          <h4 class="column-title">Conectemos</h4>

          <!-- Información de contacto -->
          <div class="contact-info">
            <a
              href="mailto:agustin.dev@outlook.es"
              class="contact-link email-link"
              aria-label="Enviar email"
            >
              <v-icon size="18" class="contact-icon">mdi-email</v-icon>
              <span>agustin.dev@outlook.es</span>
            </a>

            <div class="contact-link location-link">
              <v-icon size="18" class="contact-icon">mdi-map-marker</v-icon>
              <span>Buenos Aires, Argentina</span>
            </div>
          </div>

          <!-- Redes sociales -->
          <div class="social-links">
            <a
              v-for="social in socialLinks"
              :key="social.name"
              :href="social.url"
              target="_blank"
              rel="noopener noreferrer"
              class="social-link"
              :class="`social-${social.name}`"
              :aria-label="social.name"
            >
              <v-icon size="22">{{ social.icon }}</v-icon>
              <span class="social-tooltip">{{ social.tooltip }}</span>
            </a>
          </div>
        </v-col>
      </v-row>

      <!-- Línea divisoria -->
      <v-divider class="footer-divider" />

      <!-- Pie final -->
      <div class="footer-bottom">
        <p class="footer-legend">Desarrollado por <strong>Agustín dell Aquila</strong></p>
        <p class="brand-subtitle">© {{ currentYear }}</p>
      </div>
    </v-container>
  </v-footer>
</template>

<script setup>
import { ref, computed } from 'vue'
import { RouterLink } from 'vue-router'

// Estado reactivo
const expanded = ref(false)

// Año actual dinámico
const currentYear = computed(() => new Date().getFullYear())

// Items de navegación (consistentes con el navbar)
const navItems = [
  { text: 'Inicio', to: '/' },
  { text: 'Proyectos', to: '/projects' },
  { text: 'Estudios', to: '/studies' },
  { text: 'Contacto', to: '/contact' },
]

// Links de redes sociales con colores corporativos
const socialLinks = [
  {
    name: 'github',
    icon: 'mdi-github',
    url: 'https://github.com/dellaquila39',
    tooltip: 'GitHub',
    color: '#333333',
  },
  {
    name: 'linkedin',
    icon: 'mdi-linkedin',
    url: 'https://www.linkedin.com/in/agustin-dell-aquila/',
    tooltip: 'LinkedIn',
    color: '#0A66C2',
  },
  {
    name: 'whatsapp',
    icon: 'mdi-whatsapp',
    url: 'https://wa.me/5491138185204',
    tooltip: 'WhatsApp',
    color: '#25D366',
  },
]

// Función para scroll al top al hacer click en links
const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  })
}
</script>

<style scoped>
/* ===== FOOTER BASE ===== */
.app-footer {
  background: rgba(20, 20, 30, 0.85) !important;
  backdrop-filter: blur(20px) saturate(180%);
  -webkit-backdrop-filter: blur(20px) saturate(180%);
  border-top: 1px solid rgba(139, 92, 246, 0.15);
  border-radius: 28px 28px 0 0 !important;
  margin-top: 80px;
  padding: 48px 0 24px !important;
}

/* Contenedor con márgenes laterales */
.v-container {
  max-width: 1200px !important;
}

/* ===== ESTRUCTURA POR COLUMNAS ===== */
.footer-column {
  padding: 20px 32px;
}

@media (max-width: 960px) {
  .footer-column {
    padding: 16px 24px;
    text-align: center;
  }
}

/* ===== MARCA PERSONAL ===== */
.footer-brand {
  margin-bottom: 24px;
}

.brand-title {
  font-size: 1.8rem;
  font-weight: 700;
  letter-spacing: -0.5px;
  color: rgba(255, 255, 255, 0.95);
  margin-bottom: 4px;
}

.brand-subtitle {
  font-size: 0.95rem;
  color: rgba(139, 92, 246, 0.9);
  font-weight: 500;
  letter-spacing: 0.5px;
}

.footer-copyright {
  margin-top: 20px;
}

.footer-copyright p {
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.9rem;
  margin: 4px 0;
}

.location {
  font-size: 0.85rem !important;
  color: rgba(255, 255, 255, 0.5) !important;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 6px;
}

@media (max-width: 960px) {
  .location {
    justify-content: center;
  }
}

/* ===== TÍTULOS DE COLUMNAS ===== */
.column-title {
  font-size: 1.1rem;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 20px;
  position: relative;
  padding-bottom: 8px;
}

.column-title::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 40px;
  height: 2px;
  background: linear-gradient(90deg, rgba(139, 92, 246, 0.8), transparent);
  border-radius: 2px;
}

@media (max-width: 960px) {
  .column-title::after {
    left: 50%;
    transform: translateX(-50%);
  }
}

/* ===== NAVEGACIÓN ===== */
.footer-nav {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.nav-item {
  color: rgba(255, 255, 255, 0.75);
  text-decoration: none;
  font-size: 0.95rem;
  padding: 6px 0;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  border-radius: 6px;
  display: inline-block;
  max-width: max-content;
}

.nav-item:hover {
  color: rgba(139, 92, 246, 0.95);
  transform: translateX(4px);
  background: rgba(139, 92, 246, 0.08);
  padding: 6px 12px;
}

@media (max-width: 960px) {
  .nav-item {
    max-width: 100%;
    text-align: center;
  }

  .nav-item:hover {
    transform: none;
    background: rgba(139, 92, 246, 0.15);
  }
}

/* ===== INFORMACIÓN DE CONTACTO ===== */
.contact-info {
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 28px;
}

.contact-link {
  display: flex;
  align-items: center;
  gap: 12px;
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
  font-size: 0.95rem;
  transition: all 0.3s ease;
  padding: 8px 0;
}

.contact-icon {
  color: rgba(139, 92, 246, 0.8) !important;
  transition: all 0.3s ease;
}

.email-link:hover {
  color: rgba(139, 92, 246, 0.95);
}

.email-link:hover .contact-icon {
  color: rgba(139, 92, 246, 1) !important;
  transform: translateY(-2px);
}

.location-link {
  color: rgba(255, 255, 255, 0.6);
}

/* ===== REDES SOCIALES ===== */
.social-links {
  display: flex;
  gap: 16px;
  margin-top: 20px;
}

.social-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.08);
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
}

.social-link::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: currentColor;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.social-link:hover {
  transform: translateY(-4px);
  border-color: rgba(139, 92, 246, 0.3);
  box-shadow: 0 8px 24px rgba(139, 92, 246, 0.15);
}

.social-link:hover::before {
  opacity: 0.08;
}

.social-link .v-icon {
  position: relative;
  z-index: 1;
  transition: transform 0.3s ease;
}

.social-link:hover .v-icon {
  transform: scale(1.1);
}

/* Colores corporativos por red social */
.social-github:hover {
  color: #333 !important;
}

.social-linkedin:hover {
  color: #0a66c2 !important;
}

.social-whatsapp:hover {
  color: #25d366 !important;
}

/* Tooltip en hover */
.social-tooltip {
  position: absolute;
  bottom: -30px;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(20, 20, 30, 0.95);
  color: white;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 0.75rem;
  white-space: nowrap;
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s ease;
  border: 1px solid rgba(139, 92, 246, 0.2);
  backdrop-filter: blur(10px);
}

.social-link:hover .social-tooltip {
  opacity: 1;
  visibility: visible;
  bottom: -38px;
}

@media (max-width: 960px) {
  .social-links {
    justify-content: center;
  }
}

/* ===== LÍNEA DIVISORIA ===== */
.footer-divider {
  margin: 40px 0 24px !important;
  border-color: rgba(255, 255, 255, 0.1) !important;
}

/* ===== PIE FINAL ===== */
.footer-bottom {
  text-align: center;
  padding-top: 16px;
}

.footer-legend {
  color: rgba(255, 255, 255, 0.5);
  font-size: 0.85rem;
  letter-spacing: 0.5px;
  font-style: italic;
}

/* ===== RESPONSIVE ===== */
@media (max-width: 600px) {
  .app-footer {
    margin-top: 60px;
    padding: 32px 0 20px !important;
    border-radius: 20px 20px 0 0 !important;
  }

  .footer-column {
    padding: 12px 16px;
  }

  .brand-title {
    font-size: 1.5rem;
  }

  .social-links {
    gap: 12px;
  }

  .social-link {
    width: 40px;
    height: 40px;
  }
}

/* ===== MEJORAS DE ACCESIBILIDAD ===== */
@media (prefers-reduced-motion: reduce) {
  .app-footer,
  .nav-item,
  .social-link,
  .contact-link {
    animation: none !important;
    transition: none !important;
  }
}

/* ===== ESTADOS DE FOCO ===== */
.nav-item:focus-visible,
.social-link:focus-visible,
.contact-link:focus-visible {
  outline: 2px solid rgba(139, 92, 246, 0.8);
  outline-offset: 2px;
  border-radius: 4px;
}
</style>

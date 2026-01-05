<template>
  <v-app-bar flat height="60" class="app-navbar">
    <v-container class="navbar-container">
      <v-row align="center" justify="space-between" no-gutters>
        <!-- Marca -->
        <v-col cols="auto">
          <div class="navbar-brand">
            <span class="brand-name">Agustín</span>
          </div>
        </v-col>

        <!-- Links desktop -->
        <v-col cols="auto" class="d-none d-md-flex">
          <nav class="navbar-links">
            <v-btn
              v-for="item in items"
              :key="item.text"
              :to="item.to"
              variant="text"
              class="nav-btn"
            >
              <v-icon left size="20">{{ item.icon }}</v-icon>
              {{ item.text }}
            </v-btn>
          </nav>
        </v-col>

        <!-- Sociales + menú -->
        <v-col cols="auto">
          <div class="navbar-actions">
            <v-btn
              icon
              variant="text"
              class="icon-btn github"
              href="https://github.com/dellaquila39"
              target="_blank"
              aria-label="GitHub"
            >
              <v-icon size="32">mdi-github</v-icon>
            </v-btn>

            <v-btn
              icon
              variant="text"
              class="icon-btn linkedin"
              href="https://www.linkedin.com/in/agustin-dell-aquila/"
              target="_blank"
              aria-label="LinkedIn"
            >
              <v-icon size="32">mdi-linkedin</v-icon>
            </v-btn>

            <v-btn
              icon
              variant="text"
              class="icon-btn whatsapp"
              href="https://wa.me/5491138185204"
              target="_blank"
              aria-label="whatsapp"
            >
              <v-icon size="32">mdi-whatsapp</v-icon>
            </v-btn>

            <!-- Hamburguesa -->
            <v-btn icon variant="text" class="d-md-none" @click="menu = !menu">
              <v-icon>{{ menu ? 'mdi-close' : 'mdi-menu' }}</v-icon>
            </v-btn>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </v-app-bar>

  <!-- Menú móvil -->
  <v-expand-transition>
    <div v-if="menu" class="mobile-menu mobile-menu--absolute">
      <v-container>
        <v-btn
          v-for="item in items"
          :key="item.text"
          :to="item.to"
          class="mobile-link"
          variant="text"
          block
          @click="menu = false"
        >
          {{ item.text }}
        </v-btn>
      </v-container>
    </div>
  </v-expand-transition>
</template>

<script setup>
import { ref } from 'vue'

const menu = ref(false)

const items = [
  { text: 'Inicio', to: '/', icon: 'mdi-home' },
  { text: 'Proyectos', to: '/projects', icon: 'mdi-folder' },
  { text: 'Estudios', to: '/studies', icon: 'mdi-book' },
  { text: 'Contacto', to: '/contact', icon: 'mdi-email' },
]
</script>

<style scoped>
/* ===== NAVBAR BASE ===== */
.app-navbar {
  background: rgba(20, 20, 30, 0.75);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border-radius: 28px;
  border: 1px solid rgba(139, 92, 246, 0.15);
  margin: 12px auto;
  max-width: 1200px;
  width: calc(100% - 48px);
  left: 0;
  right: 0;
}

/* Contenedor */
.navbar-container {
  max-width: 1000px;
}

/* ===== MARCA ===== */
.navbar-brand {
  font-size: 1.7rem;
  font-weight: 700;
  letter-spacing: -0.5px;
  cursor: default;
}

.brand-name {
  color: #000000fb;
  transition: color 0.7s ease;
}

.navbar-brand:hover .brand-name {
  color: var(--color-accent);
}

/* ===== LINKS ===== */
.navbar-links {
  display: flex;
  gap: 8px;
}

.nav-btn {
  font-size: 1rem;
  font-weight: 500;
  color: black;
  border-radius: 14px;
  padding: 6px 14px;
}

.nav-btn:hover {
  background: rgba(139, 92, 246, 0.15);
  transform: translateY(-5px);
  transition: transform 0.5s ease;
}

/* ===== ACCIONES ===== */
.navbar-actions {
  display: flex;
  align-items: center;
  gap: 8px;
}

.icon-btn {
  transition: transform 0.5s ease;
}

.icon-btn:hover {
  background: rgba(139, 92, 246, 0.15);
  transform: translateY(-5px);
}

.linkedin {
  color: #0a66c2;
}

.github {
  color: #333;
}

.whatsapp {
  color: #25d366;
}

/* ===== MOBILE ===== */
.mobile-menu {
  background: rgba(20, 20, 30, 0.95);
  backdrop-filter: blur(20px);
  border-top: 1px solid rgba(139, 92, 246, 0.15);
  border-radius: 0 0 28px 28px;
}

.mobile-menu--absolute {
  position: absolute;
  top: 100px;
  left: 0;
  right: 0;
  width: 100%;
  z-index: 1000;
  margin-top: 8px;
}

.mobile-link {
  font-size: 1.1rem;
  color: rgba(255, 255, 255, 0.85) !important;
  margin-bottom: 8px;
}

.mobile-link:hover {
  color: #8b5cf6 !important;
  background: rgba(139, 92, 246, 0.1) !important;
}

/* ===== RESPONSIVE ===== */
@media (max-width: 600px) {
  .app-navbar {
    max-width: calc(100% - 16px) !important;
    width: calc(100% - 16px) !important;
    margin: 8px auto !important;
  }

  .navbar-brand {
    font-size: 1.4rem;
  }
}

/* Ajuste para que el contenido no quede debajo del navbar fixed */
:deep(html) {
  scroll-padding-top: 80px;
}
</style>

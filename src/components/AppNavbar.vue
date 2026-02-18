<template>
  <v-app-bar flat height="60" class="app-navbar" position="fixed">
    <v-container class="navbar-container">
      <v-row align="center" justify="space-between" no-gutters>
        <!-- descarga cv -->
        <v-col cols="auto">
          <a
            href="Agustin-Dell-Aquila.pdf"
            target="_blank"
            rel="noopener"
            class="download-button"
            aria-label="Descargar CV"
          >
            <div class="docs">
              <v-icon size="18">mdi-file-document-outline</v-icon>
              <span>Agustín CV</span>
            </div>

            <div class="download">
              <v-icon size="22">mdi-tray-arrow-down</v-icon>
            </div>
          </a>
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
              <v-icon class="mr-2" left size="20">{{ item.icon }}</v-icon>
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
  <v-slide-y-transition>
    <div v-if="menu" class="mobile-menu">
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
  </v-slide-y-transition>
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
  background: var(--color-accent-light) !important;
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border-radius: 28px;
  border: 1px solid var(--color-accent-dark);
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

/* ===== descarga cv ===== */
.download-button {
  position: relative;
  border: none;
  cursor: pointer;
  text-decoration: none;
  font-weight: 600;
  border-radius: 18px;
  overflow: hidden;
  z-index: 1;
  color: var(--color-bg-main);
}

/* Parte visible */
.download-button .docs {
  display: flex;
  align-items: center;
  gap: 8px;
  min-height: 42px;
  padding: 0 18px;
  border-radius: 18px;
  background: var(--color-accent-light);
  border: 1px solid var(--color-accent-dark);
  color: var(--color-text-text);
  backdrop-filter: blur(16px);
  transition: all 0.5s cubic-bezier(0.77, 0, 0.175, 1);
}

/* Fondo animado */
.download-button .download {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 18px;
  background: var(--color-accent);
  transform: translateY(0%);
  transition: all 0.5s cubic-bezier(0.77, 0, 0.175, 1);
  z-index: -1;
  color: var(--color-bg-main);
}

/* Hover */
.download-button:hover .download {
  transform: translateY(100%);
}

.download-button:hover {
  transform: translateY(-4px);
  transition: transform 0.4s ease;
}

/* Animación del icono */
.download-button:hover .download .v-icon {
  animation: bounceDown 0.8s ease infinite;
}

@keyframes bounceDown {
  0% {
    transform: translateY(0%);
  }
  50% {
    transform: translateY(-15%);
  }
  100% {
    transform: translateY(0%);
  }
}

/* ===== LINKS ===== */
.navbar-links {
  display: flex;
  gap: 8px;
}

.nav-btn {
  font-size: 1rem;
  font-weight: 500;
  color: var(--color-text-text);
  border-radius: 14px;
  padding: 6px 14px;
}

.nav-btn:hover {
  background: var(--color-accent-light);
  transform: translateY(-7px);
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
  background: var(--color-accent-light);
  transform: translateY(-7px);
}

.linkedin {
  color: var(--color-social-linkedin);
}

.github {
  color: var(--color-social-github);
}

.whatsapp {
  color: var(--color-social-whatsapp);
}

/* ===== MOBILE ===== */
.mobile-menu {
  position: fixed;
  top: 65px;
  left: 50%;
  transform: translateX(-50%);
  width: calc(100% - 48px);
  max-width: 1200px;
  z-index: 999;

  background: var(--color-accent-transp);
  backdrop-filter: blur(20px);
  border-radius: 0 0 28px 28px;
  border: 1px solid var(--color-accent-dark);
}

.mobile-link {
  font-size: 1.1rem;
  color: var(--color-text-text) !important;
  margin-bottom: 8px;
}

.mobile-link:hover {
  color: var(--color-accent-dark) !important;
  background: var(--color-accent-soft) !important;
}

.app-navbar :deep(.v-toolbar__content) {
  overflow: visible;
}

.app-navbar :deep(.v-app-bar) {
  overflow: visible;
}

/* ===== RESPONSIVE ===== */
@media (max-width: 600px) {
  .app-navbar {
    max-width: calc(100% - 16px);
    width: calc(100% - 16px);
    margin: 8px auto;
  }

  .navbar-brand {
    font-size: 1.4rem;
  }
}

@media (max-width: 600px) {
  .download-button .docs span {
    display: none; /* solo icono en mobile */
  }

  .download-button .docs {
    padding: 0 12px;
    min-height: 38px;
  }
}

/* Ajuste para que el contenido no quede debajo del navbar fixed */
:deep(html) {
  scroll-padding-top: 80px;
}
</style>

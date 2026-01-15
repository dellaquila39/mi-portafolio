<template>
  <!-- Contenedor principal -->
  <div class="home-view">
    <!-- Sección 1: Hero - Presentación impactante -->
    <section class="hero-section" ref="heroSection">
      <v-container class="hero-container">
        <v-row align="center" justify="center" class="hero-row">
          <v-col cols="12" lg="8" class="text-center">
            <!-- Titulo y Enfoque -->
            <div class="intro-badge">
              <span class="badge-text">Desarrollador Web & Product Thinker</span>
            </div>

            <!-- Título principal -->
            <h1 class="hero-title">
              <span class="title-line">Transformo</span>
              <span class="title-line accent-line">
                ideas <span class="highlight">en experiencias</span>
              </span>
              <span class="title-line">digitales</span>
            </h1>

            <!-- Subtítulo -->
            <p class="hero-subtitle">
              No solo escribo código. Diseño soluciones que
              <span class="accent-text">resuelven problemas reales</span>
              y generan valor tangible para los usuarios y el negocio.
            </p>

            <!-- CTA principal -->
            <div class="hero-actions">
              <v-btn
                color="primary"
                size="large"
                class="primary-btn"
                @click="scrollToProjects"
                variant="flat"
              >
                <v-icon left>mdi-rocket-launch</v-icon>
                Ver mis proyectos
              </v-btn>

              <v-btn
                color="surface"
                size="large"
                class="secondary-btn"
                href="#philosophy"
                variant="text"
              >
                <v-icon left>mdi-arrow-down</v-icon>
                Conoce mi enfoque
              </v-btn>
            </div>

            <!-- Scroll indicator -->
            <div class="scroll-indicator" @click="scrollToPhilosophy">
              <div class="scroll-line"></div>
              <v-icon size="20" class="scroll-icon">mdi-chevron-double-down</v-icon>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <!-- Sección 2: Filosofía de trabajo -->
    <section id="philosophy" class="philosophy-section" ref="philosophySection">
      <v-container>
        <v-row>
          <!-- Columna izquierda: Título y texto -->
          <v-col cols="12" lg="5" class="philosophy-text">
            <div class="section-label">
              <v-icon size="18">mdi-lightbulb-on</v-icon>
              <span>Mi filosofía</span>
            </div>

            <h2 class="section-title">
              El código es solo <span class="accent-text">la herramienta</span>, <br />el producto
              es <span class="accent-text">el resultado</span>
            </h2>

            <p class="philosophy-content">
              Creo que el verdadero valor en el desarrollo web no está en las líneas de código, sino
              en cómo esas líneas se traducen en
              <strong>soluciones que las personas aman usar</strong>.
            </p>

            <div class="philosophy-points">
              <div class="point">
                <v-icon size="24" color="primary">mdi-target</v-icon>
                <div>
                  <h4>Enfoque centrado en el usuario</h4>
                  <p>Cada decisión técnica está alineada con la experiencia final del usuario.</p>
                </div>
              </div>

              <div class="point">
                <v-icon size="24" color="primary">mdi-chart-timeline</v-icon>
                <div>
                  <h4>Iteración constante</h4>
                  <p>
                    Prefiero lanzar rápido, aprender y mejorar, que buscar la perfección desde el
                    día uno.
                  </p>
                </div>
              </div>

              <div class="point">
                <v-icon size="24" color="primary">mdi-puzzle</v-icon>
                <div>
                  <h4>Producto > Código</h4>
                  <p>
                    Mi mejor habilidad no es programar, es entender qué hay que construir y por qué.
                  </p>
                </div>
              </div>
            </div>
          </v-col>

          <!-- Columna derecha: Visualización -->
          <v-col cols="12" lg="7" class="philosophy-visual">
            <div class="visual-container">
              <!-- Card 1: Idea -->
              <div class="idea-card glass-card" :class="{ visible: isVisible }">
                <div class="card-header">
                  <v-icon size="28" color="primary">mdi-brain</v-icon>
                  <h3>Idea</h3>
                </div>
                <p>Identificación del problema y concepción de la solución</p>
              </div>

              <!-- Card 2: Diseño -->
              <div class="design-card glass-card" :class="{ visible: isVisible }">
                <div class="card-header">
                  <v-icon size="28" color="primary">mdi-pencil-ruler</v-icon>
                  <h3>Diseño</h3>
                </div>
                <p>Prototipado y validación de la experiencia de usuario</p>
              </div>

              <!-- Card 3: Desarrollo -->
              <div class="dev-card glass-card" :class="{ visible: isVisible }">
                <div class="card-header">
                  <v-icon size="28" color="primary">mdi-code-braces</v-icon>
                  <h3>Desarrollo</h3>
                </div>
                <p>Implementación técnica con mejores prácticas y escalabilidad</p>
              </div>

              <!-- Card 4: Producto -->
              <div class="product-card glass-card highlight-card" :class="{ visible: isVisible }">
                <div class="card-header">
                  <v-icon size="28">mdi-rocket</v-icon>
                  <h3>Producto</h3>
                </div>
                <p>Soluón funcional que genera valor y satisface necesidades</p>
              </div>

              <!-- Línea de progreso -->
              <div class="progress-line">
                <div class="line" :style="{ width: isVisible ? '100%' : '0%' }"></div>
              </div>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <!-- Sección 3: Stack tecnológico (visual) -->
    <section class="stack-section">
      <v-container>
        <div class="text-center mb-12">
          <div class="section-label">
            <v-icon size="18">mdi-tools</v-icon>
            <span>Herramientas principales</span>
          </div>
          <h2 class="section-title">
            Construyo con <span class="accent-text">tecnologías modernas</span>, <br />pero pienso
            en <span class="accent-text">problemas atemporales</span>
          </h2>
          <p class="section-subtitle">
            Estas son las herramientas que uso para materializar ideas, pero lo más importante es
            saber cuándo y por qué usarlas.
          </p>
        </div>

        <!-- Stack visual -->
        <div class="stack-visual">
          <div class="stack-layer frontend-layer" :class="{ visible: stackVisible }">
            <h3 class="layer-title">Frontend</h3>
            <div class="tech-grid">
              <div class="tech-item" v-for="tech in frontendTech" :key="tech.name">
                <div class="tech-icon">
                  <v-icon size="32">{{ tech.icon }}</v-icon>
                </div>
                <span class="tech-name">{{ tech.name }}</span>
              </div>
            </div>
          </div>

          <div class="stack-layer backend-layer" :class="{ visible: stackVisible }">
            <h3 class="layer-title">Backend & Tools</h3>
            <div class="tech-grid">
              <div class="tech-item" v-for="tech in backendTech" :key="tech.name">
                <div class="tech-icon">
                  <v-icon size="32">{{ tech.icon }}</v-icon>
                </div>
                <span class="tech-name">{{ tech.name }}</span>
              </div>
            </div>
          </div>
        </div>
      </v-container>
    </section>

    <!-- Sección 4: Cierre inspiracional -->

    <!-- Mensaje inspiracional -->
    <div class="inspiration-quote">
      <v-icon size="64" color="primary" class="quote-icon">mdi-format-quote-open</v-icon>
      <p class="quote-text">
        "El mejor código no es el más complejo, sino el que mejor
        <span class="accent-text">comunica una idea</span> y
        <span class="accent-text">resuelve un problema</span>."
      </p>
      <div class="quote-author">
        <div class="author-line"></div>
        <span>— Mi enfoque de desarrollo</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

// Estados para animaciones
const isVisible = ref(false)
const stackVisible = ref(false)

// Referencias a las secciones
const heroSection = ref(null)
const philosophySection = ref(null)

// Archivo CV

// Tecnologías frontend
const frontendTech = [
  { name: 'Vue.js 3', icon: 'mdi-vuejs' },
  { name: 'Vuetify', icon: 'mdi-vuetify' },
  { name: 'JavaScript', icon: 'mdi-language-javascript' },
  { name: 'HTML5', icon: 'mdi-language-html5' },
  { name: 'CSS3', icon: 'mdi-language-css3' },
]

// Tecnologías backend y tools
const backendTech = [
  { name: 'Node.js', icon: 'mdi-nodejs' },
  { name: 'Git', icon: 'mdi-git' },
  { name: 'PostgreSQL', icon: 'mdi-database-check' },
  { name: 'REST API', icon: 'mdi-api' },
  { name: 'VS Code', icon: 'mdi-microsoft-visual-studio-code' },
]

// Scroll functions
const scrollToProjects = () => {
  router.push('/projects')
}

const scrollToPhilosophy = () => {
  philosophySection.value?.scrollIntoView({ behavior: 'smooth' })
}

// Observer para animaciones
let observer

onMounted(() => {
  // Configurar Intersection Observer para animaciones
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.target.classList.contains('philosophy-visual')) {
          if (entry.isIntersecting) {
            isVisible.value = true
          }
        }
        if (entry.target.classList.contains('stack-visual')) {
          if (entry.isIntersecting) {
            stackVisible.value = true
          }
        }
      })
    },
    {
      threshold: 0.3,
      rootMargin: '0px 0px -100px 0px',
    },
  )

  // Observar elementos
  const philosophyVisual = document.querySelector('.philosophy-visual')
  const stackVisual = document.querySelector('.stack-visual')

  if (philosophyVisual) observer.observe(philosophyVisual)
  if (stackVisual) observer.observe(stackVisual)
})

onUnmounted(() => {
  if (observer) {
    observer.disconnect()
  }
})
</script>

<style scoped>
/* ===== VARIABLES Y ESTILOS BASE ===== */
.home-view {
  overflow-x: hidden;
  scroll-behavior: smooth;
}

section {
  padding: 120px 0;
  position: relative;
}

@media (max-width: 960px) {
  section {
    padding: 80px 0;
  }
}

/* ===== HERO SECTION ===== */
.hero-section {
  min-height: 100vh;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
}

.hero-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background:
    radial-gradient(circle at 20% 50%, rgba(139, 92, 246, 0.1) 0%, transparent 50%),
    radial-gradient(circle at 80% 20%, rgba(59, 130, 246, 0.05) 0%, transparent 50%);
  z-index: -1;
}

.intro-badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  background: rgba(139, 92, 246, 0.1);
  border: 1px solid rgba(139, 92, 246, 0.2);
  border-radius: 24px;
  margin-bottom: 32px;
  backdrop-filter: blur(10px);
  animation: fadeInUp 0.8s ease;
}

.badge-text {
  font-size: 0.9rem;
  font-weight: 500;
  color: rgba(139, 92, 246, 0.9);
  letter-spacing: 0.5px;
}

.hero-title {
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 800;
  line-height: 1.1;
  margin-bottom: 24px;
  animation: fadeInUp 0.8s ease 0.2s both;
}

.title-line {
  display: block;
}

.accent-line {
  color: rgba(139, 92, 246, 0.9);
  position: relative;
  display: inline-block;
}

.highlight {
  position: relative;
  color: #fff;
}

.highlight::after {
  content: '';
  position: absolute;
  bottom: 4px;
  left: 0;
  width: 100%;
  height: 8px;
  background: rgba(139, 92, 246, 0.3);
  z-index: -1;
  border-radius: 4px;
}

.hero-subtitle {
  font-size: clamp(1.1rem, 2vw, 1.3rem);
  color: rgba(255, 255, 255, 0.8);
  max-width: 800px;
  margin: 0 auto 40px;
  line-height: 1.6;
  animation: fadeInUp 0.8s ease 0.4s both;
}

.accent-text {
  color: rgba(139, 92, 246, 0.9);
  font-weight: 600;
}

.hero-actions {
  display: flex;
  gap: 16px;
  justify-content: center;
  margin-bottom: 60px;
  animation: fadeInUp 0.8s ease 0.6s both;
}

@media (max-width: 600px) {
  .hero-actions {
    flex-direction: column;
    align-items: center;
  }

  .hero-actions .v-btn {
    width: 100%;
    max-width: 300px;
  }
}

.primary-btn {
  padding: 16px 32px !important;
  font-weight: 600 !important;
  letter-spacing: 0.3px;
  border-radius: 12px !important;
  background: linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%) !important;
  box-shadow: 0 8px 32px rgba(139, 92, 246, 0.3) !important;
  transition: all 0.3s ease !important;
}

.primary-btn:hover {
  transform: translateY(-2px) !important;
  box-shadow: 0 12px 40px rgba(139, 92, 246, 0.4) !important;
}

.secondary-btn {
  padding: 16px 32px !important;
  font-weight: 500 !important;
  border-radius: 12px !important;
}

.scroll-indicator {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  cursor: pointer;
  animation: fadeIn 1s ease 1s both;
}

.scroll-line {
  width: 1px;
  height: 60px;
  background: linear-gradient(to bottom, rgba(139, 92, 246, 0.8), transparent);
}

.scroll-icon {
  color: rgba(139, 92, 246, 0.8);
  animation: bounce 2s infinite;
}

@keyframes bounce {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(8px);
  }
}

/* ===== PHILOSOPHY SECTION ===== */
.section-label {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 6px 12px;
  background: rgba(139, 92, 246, 0.1);
  border-radius: 20px;
  margin-bottom: 24px;
  color: rgba(139, 92, 246, 0.9);
  font-size: 0.9rem;
  font-weight: 500;
}

.section-title {
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 700;
  line-height: 1.2;
  margin-bottom: 24px;
}

.philosophy-content {
  font-size: 1.1rem;
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.7;
  margin-bottom: 40px;
}

.philosophy-points {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.point {
  display: flex;
  gap: 16px;
  align-items: flex-start;
}

.point h4 {
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 4px;
  color: rgba(255, 255, 255, 0.95);
}

.point p {
  font-size: 0.95rem;
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.6;
}

/* Visualización de filosofía */
.philosophy-visual {
  position: relative;
  padding-left: 40px;
}

.visual-container {
  position: relative;
  max-width: 800px;
  margin: 0 auto;
}

.glass-card {
  background: rgba(30, 30, 40, 0.6);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  padding: 24px;
  position: relative;
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
}

.glass-card.visible {
  opacity: 1;
  transform: translateY(0);
}

.highlight-card {
  background: linear-gradient(135deg, rgba(139, 92, 246, 0.15), rgba(59, 130, 246, 0.1));
  border-color: rgba(139, 92, 246, 0.3);
}

.card-header {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 16px;
}

.card-header h3 {
  font-size: 1.3rem;
  font-weight: 600;
}

.glass-card p {
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.6;
}

/* Posicionamiento de las cards */
.idea-card {
  position: absolute;
  top: 0;
  left: 0;
  width: 280px;
  transition-delay: 0.1s;
}

.design-card {
  position: absolute;
  top: 120px;
  right: 0;
  width: 280px;
  transition-delay: 0.3s;
}

.dev-card {
  position: absolute;
  top: 240px;
  left: 40px;
  width: 280px;
  transition-delay: 0.5s;
}

.product-card {
  position: absolute;
  top: 360px;
  right: 20px;
  width: 320px;
  transition-delay: 0.7s;
}

.progress-line {
  position: absolute;
  top: 0;
  left: 140px;
  width: 2px;
  height: 480px;
  background: rgba(255, 255, 255, 0.1);
  z-index: -1;
}

.progress-line .line {
  height: 100%;
  background: linear-gradient(to bottom, rgba(139, 92, 246, 0.8), transparent);
  transition: width 1.5s ease;
}

@media (max-width: 960px) {
  .philosophy-visual {
    padding-left: 0;
    margin-top: 60px;
  }

  .idea-card,
  .design-card,
  .dev-card,
  .product-card {
    position: relative !important;
    top: auto !important;
    left: auto !important;
    right: auto !important;
    width: 100% !important;
    margin-bottom: 20px;
    opacity: 0;
    transform: translateY(20px);
  }

  .glass-card.visible {
    opacity: 1;
    transform: translateY(0);
  }

  .progress-line {
    display: none;
  }
}

/* ===== STACK SECTION ===== */
.stack-section {
  background: rgba(10, 10, 15, 0.5);
  border-radius: 40px;
  margin: 0 20px;
}

@media (max-width: 960px) {
  .stack-section {
    margin: 0 12px;
    border-radius: 24px;
  }
}

.section-subtitle {
  font-size: 1.1rem;
  color: rgba(255, 255, 255, 0.7);
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
}

.stack-visual {
  max-width: 1000px;
  margin: 0 auto;
}

.stack-layer {
  background: rgba(20, 20, 30, 0.6);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 20px;
  padding: 40px;
  margin-bottom: 24px;
  opacity: 0;
  transform: translateX(-30px);
  transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
}

.stack-layer.visible {
  opacity: 1;
  transform: translateX(0);
}

.backend-layer {
  transform: translateX(30px);
  transition-delay: 0.3s;
}

.backend-layer.visible {
  transform: translateX(0);
}

.layer-title {
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 32px;
  text-align: center;
  color: rgba(139, 92, 246, 0.9);
}

.tech-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  gap: 24px;
}

.tech-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  padding: 20px;
  background: rgba(255, 255, 255, 0.03);
  border-radius: 12px;
  transition: all 0.3s ease;
}

.tech-item:hover {
  background: rgba(139, 92, 246, 0.1);
  transform: translateY(-4px);
}

.tech-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 64px;
  height: 64px;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 16px;
}

.tech-name {
  font-size: 0.95rem;
  font-weight: 500;
  text-align: center;
}

.stack-note {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 12px 20px;
  background: rgba(139, 92, 246, 0.1);
  border-radius: 12px;
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.9rem;
}

/* Quote inspiracional */
.inspiration-quote {
  text-align: center;
  position: relative;
  padding: 0 40px;
}

.quote-icon {
  margin-bottom: 20px;
  opacity: 0.5;
}

.quote-text {
  font-size: 1.5rem;
  font-style: italic;
  line-height: 1.5;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 24px;
  position: relative;
}

.quote-author {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  color: rgba(255, 255, 255, 0.6);
  font-size: 0.95rem;
}

.author-line {
  width: 40px;
  height: 1px;
  background: rgba(139, 92, 246, 0.5);
}

/* ===== ANIMACIONES ===== */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

/* ===== RESPONSIVE ADJUSTMENTS ===== */
@media (max-width: 600px) {
  .hero-title {
    font-size: 2.2rem;
  }

  .hero-subtitle {
    font-size: 1.1rem;
  }

  .section-title {
    font-size: 1.8rem;
  }

  .tech-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .quote-text {
    font-size: 1.2rem;
    padding: 0 16px;
  }
}

/* ===== ACCESSIBILITY ===== */
@media (prefers-reduced-motion: reduce) {
  .glass-card,
  .stack-layer,
  .v-btn,
  .tech-item,
  .social-icon {
    transition: none !important;
    animation: none !important;
  }

  .scroll-icon {
    animation: none !important;
  }
}

/* Focus states */
.v-btn:focus-visible,
.social-icon:focus-visible {
  outline: 2px solid rgba(139, 92, 246, 0.8);
  outline-offset: 2px;
  border-radius: 4px;
}
</style>

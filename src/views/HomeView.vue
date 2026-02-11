<template>
  <main class="home-view">
    <!-- Sección Hero/Bienvenida -->
    <section class="hero-section" aria-labelledby="hero-title">
      <v-container>
        <v-row align="center" justify="center" class="hero-content">
          <v-col cols="12" class="text-center">
            <h1 id="hero-title" class="hero-title">
              <span class="text-accent">Agustin Dell Aquila</span>
              <span class="hero-subtitle text-text">Portafolio Profesional</span>
            </h1>
            <p class="hero-description mt-2 text-text">
              Desarrollador Frontend especializado en <span class="social-vue">Vue.js</span> ·
              Transformando ideas en productos digitales.
            </p>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <!-- Sección Filosofía -->
    <section class="philosophy-section" aria-labelledby="philosophy-title">
      <v-container>
        <v-row>
          <v-col cols="12">
            <header class="section-header">
              <h2 id="philosophy-title" class="section-title">
                Mi <span class="text-accent">Enfoque de Desarrollo</span>
              </h2>
              <p class="section-subtitle text-text">
                Del código al producto:
                <span class="text-accent">una historia de transformación</span>
              </p>
            </header>
          </v-col>
        </v-row>

        <v-row class="philosophy-steps">
          <v-col cols="12" md="4">
            <article class="philosophy-card glass">
              <div class="step-number">01</div>
              <h3 class="step-title">Visión del Producto</h3>
              <p class="step-description">
                Antes de empezar a programar, me tomo el tiempo de entender el objetivo del proyecto
                y a quién está dirigido, para desarrollar soluciones que realmente aporten valor.
              </p>
            </article>
          </v-col>

          <v-col cols="12" md="4">
            <article class="philosophy-card glass">
              <div class="step-number">02</div>
              <h3 class="step-title">Arquitectura Iterativa</h3>
              <p class="step-description">
                Trabajo en ciclos cortos, priorizando una base funcional desde el inicio. A partir
                del feedback, voy mejorando la estructura del proyecto y agregando nuevas
                funcionalidades de forma progresiva.
              </p>
            </article>
          </v-col>

          <v-col cols="12" md="4">
            <article class="philosophy-card glass">
              <div class="step-number">03</div>
              <h3 class="step-title">Entrega de Valor</h3>
              <p class="step-description">
                Cada commit debe aportar valor tangible. Optimizo procesos, automatizo tareas
                repetitivas y documento decisiones técnicas para equipos futuros.
              </p>
            </article>
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="12">
            <div class="philosophy-summary glass">
              <p class="summary-text">
                Mi filosofía se centra en el <strong>producto final</strong> más que en la
                complejidad técnica. Creo que el mejor desarrollo ocurre cuando entendemos que cada
                línea de código es un medio para resolver problemas reales de usuarios reales.
              </p>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <!-- Sección Stack Tecnológico -->
    <section class="stack-section" aria-labelledby="stack-title">
      <v-container>
        <v-row>
          <v-col cols="12">
            <header class="section-header">
              <h2 id="stack-title" class="section-title">
                Stack <span class="text-accent">Tecnológico</span>
              </h2>
              <p class="section-subtitle">
                <span class="text-accent">Herramientas y tecnologías</span> que utilizo para
                construir proyectos
              </p>
            </header>
          </v-col>
        </v-row>

        <v-row class="stack-categories">
          <!-- Frontend -->
          <v-col cols="12" md="6" lg="3">
            <article class="stack-category glass">
              <h3 class="category-title">Frontend</h3>
              <ul class="stack-list" aria-label="Tecnologías de Frontend">
                <li class="stack-item">JavaScript (ES6+)</li>
                <li class="stack-item">Vue 3 + Composition API + Script Setup</li>
                <li class="stack-item">Pinia (En adopción)</li>
                <li class="stack-item">Vuetify 3</li>
                <li class="stack-item">Vue Router</li>
                <li class="stack-item">HTML5 Semántico</li>
                <li class="stack-item">CSS3 + Style Scoped</li>
              </ul>
            </article>
          </v-col>

          <!-- Backend & APIs -->
          <v-col cols="12" md="6" lg="3">
            <article class="stack-category glass">
              <h3 class="category-title">Backend & APIs</h3>
              <ul class="stack-list" aria-label="Tecnologías de Backend y APIs">
                <li class="stack-item">Node.js</li>
                <li class="stack-item">REST APIs</li>
                <li class="stack-item">PostgreSQL</li>
                <li class="stack-item">Postman</li>
              </ul>
            </article>
          </v-col>

          <!-- Comunicación & Gestión -->
          <v-col cols="12" md="6" lg="3">
            <article class="stack-category glass">
              <h3 class="category-title">Comunicación & Gestión</h3>
              <ul class="stack-list" aria-label="Herramientas de comunicación y gestión">
                <li class="stack-item">Slack</li>
                <li class="stack-item">Jira</li>
                <li class="stack-item">Trello</li>
              </ul>
            </article>
          </v-col>

          <!-- Herramientas & Configuración -->
          <v-col cols="12" md="6" lg="3">
            <article class="stack-category glass">
              <h3 class="category-title">Herramientas & Configuración</h3>
              <ul class="stack-list" aria-label="Herramientas de desarrollo y configuración">
                <li class="stack-item">Git + GitHub</li>
                <li class="stack-item">Vite</li>
                <li class="stack-item">ESLint</li>
                <li class="stack-item">Prettier</li>
                <li class="stack-item">Npm Scripts</li>
              </ul>
            </article>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <!-- Sección Sobre Mí -->
    <section class="about-section" aria-labelledby="about-title">
      <v-container>
        <v-row align="center">
          <v-col cols="12" lg="4">
            <figure class="profile-image-container">
              <img
                src="@/assets/images/perfil/perfil.jpg"
                alt="Foto de Agustin Dell Aquila - Desarrollador Frontend"
                class="profile-image glass"
                width="300"
                height="300"
                loading="lazy"
              />
              <figcaption class="visually-hidden">
                Agustin Dell Aquila, Desarrollador Frontend
              </figcaption>
            </figure>
          </v-col>

          <v-col cols="12" lg="8">
            <article class="about-content">
              <header>
                <h2 id="about-title" class="section-title text-accent">Sobre Mí</h2>
              </header>

              <div class="about-text">
                <p>
                  Soy un <strong>Desarrollador Frontend Junior</strong> apasionado por crear
                  experiencias digitales intuitivas y eficientes. Mi viaje en el desarrollo web
                  comenzó con la curiosidad de entender cómo las ideas se transforman en
                  aplicaciones funcionales que impactan a las personas.
                </p>

                <p>
                  Lo que más me entusiasma de <span class="social-vue">Vue.js</span> y su ecosistema
                  es la elegancia de su sintaxis y la capacidad para construir interfaces complejas
                  manteniendo un código limpio y mantenible. Cada día busco aprender algo nuevo, ya
                  sea una optimización de rendimiento, un patrón de diseño más eficiente o una mejor
                  práctica de accesibilidad.
                </p>

                <p>
                  Creo firmemente en el <strong>aprendizaje continuo</strong> y en que la mejor
                  manera de crecer es enfrentando desafíos reales con equipos diversos. Mi objetivo
                  es contribuir a proyectos significativos donde pueda aplicar mis habilidades
                  mientras aprendo de desarrolladores más experimentados.
                </p>
              </div>

              <blockquote class="quote-block glass mt-3">
                <p class="quote-text">
                  "El mejor código no es el más complejo, sino el que mejor comunica una idea y
                  resuelve un problema."
                </p>
                <footer class="quote-footer">— Mi enfoque de desarrollo</footer>
              </blockquote>
            </article>
          </v-col>
        </v-row>
      </v-container>
    </section>
  </main>
</template>

<script setup>
/*porximamente... :) */
</script>

<style scoped>
.home-view {
  padding-top: 2rem;
  padding-bottom: 4rem;
}

.hero-section {
  padding: 4rem 0;
  position: relative;
  overflow: hidden;
}

.hero-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 100%;
  background: linear-gradient(135deg, rgba(139, 92, 246, 0.05) 0%, transparent 50%);
  z-index: -1;
}

.hero-title {
  font-size: 3.5rem;
  font-weight: 700;
  line-height: 1.2;
  margin-bottom: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

@media (max-width: 960px) {
  .hero-title {
    font-size: 2.5rem;
  }
}

@media (max-width: 600px) {
  .hero-title {
    font-size: 2rem;
  }
}

.hero-subtitle {
  font-size: 1.5rem;
  font-weight: 400;
}

.hero-description {
  font-size: 1.25rem;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
}

.section-header {
  text-align: center;
  margin-bottom: 3rem;
}

.section-title {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
}

.section-subtitle {
  font-size: 1.25rem;
}

.social-vue {
  color: var(--color-social-vue);
  font-weight: 600;
}

.philosophy-steps {
  margin-bottom: 3rem;
}

.philosophy-card {
  padding: 2rem;
  height: 100%;
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
  position: relative;
  overflow: hidden;
}

.philosophy-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.4);
}

.step-number {
  font-size: 4rem;
  font-weight: 900;
  color: var(--color-accent);
  opacity: 0.2;
  line-height: 1;
  margin-bottom: 1rem;
}

.step-title {
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: var(--color-text-primary);
}

.step-description {
  color: var(--color-text-secondary);
  line-height: 1.6;
}

.philosophy-summary {
  padding: 2.5rem;
  border-left: 4px solid var(--color-accent);
}

.summary-text {
  font-size: 1.25rem;
  line-height: 1.7;
  color: var(--color-text-text);
}

.summary-text strong {
  color: var(--color-accent);
  font-weight: 600;
}

.stack-categories {
  margin-top: 2rem;
}

.stack-category {
  padding: 2rem;
  height: 100%;
  transition: transform 0.3s ease;
}

.stack-category:hover {
  transform: translateY(-3px);
}

.category-title {
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  color: var(--color-accent);
  padding-bottom: 0.75rem;
  border-bottom: 2px solid rgba(139, 92, 246, 0.2);
}

.stack-list {
  list-style: none;
  padding: 0;
}

.stack-item {
  padding: 0.75rem 0;
  color: var(--color-text-text);
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  position: relative;
  padding-left: 1.5rem;
}

.stack-item:last-child {
  border-bottom: none;
}

.stack-item::before {
  content: '▸';
  position: absolute;
  left: 0;
  color: var(--color-accent);
}

.about-section {
  padding-top: 4rem;
}

.profile-image-container {
  text-align: center;
}

.profile-image {
  width: 100%;
  max-width: 300px;
  height: auto;
  aspect-ratio: 1;
  object-fit: cover;
  border-radius: 50%;
  margin: 0 auto;
  border: 3px solid rgba(139, 92, 246, 0.3);
  padding: 5px;
}

.about-content {
  padding-left: 2rem;
}

@media (max-width: 960px) {
  .about-content {
    padding-left: 0;
    margin-top: 2rem;
  }
}

.about-text {
  margin-top: 1.5rem;
}

.about-text p {
  margin-bottom: 1.25rem;
  line-height: 1.7;
  color: var(--color-text-text);
}

.about-text strong {
  color: var(--color-accent);
  font-weight: 600;
}

.quote-block {
  padding: 2rem;
  border-left: 4px solid var(--color-accent);
}

.quote-text {
  font-size: 1.5rem;
  font-style: italic;
  line-height: 1.5;
  color: var(--color-text-text);
  margin-bottom: 1rem;
}

.quote-footer {
  font-size: 1rem;
  color: var(--color-accent);
  font-weight: 600;
  text-align: right;
}

/* cnlase de utilidad para accesibilidad */
.visually-hidden {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}

/* Animciones sutiles */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>

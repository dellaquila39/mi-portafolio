<template>
  <v-container class="pa-0 pa-md-3" fluid>
    <!-- Header de la sección -->
    <v-row class="mt-3 mt-md-6 mb-8" justify="center">
      <v-col cols="12" md="10" lg="8" class="text-center">
        <h2 class="text-h4 text-md-h3 font-weight-bold mb-4">
          Formación <span class="text-accent">académica</span>
        </h2>
        <p class="text-body-1 text-md-h6">
          <span class="text-accent">Mi recorrido educativo,</span> donde la teoría se encuentra con
          la práctica
        </p>
      </v-col>
    </v-row>

    <!-- Cards de educación -->
    <v-row class="mx-0 mx-md-3" justify="center">
      <v-col cols="12" md="10" lg="8">
        <v-slide-x-transition group>
          <article
            v-for="education in educationData"
            :key="education.id"
            class="glass pa-5 pa-md-6 mb-6"
          >
            <!-- Header de la card -->
            <header class="mb-5">
              <div class="d-flex flex-wrap align-start justify-space-between mb-3">
                <div class="mb-3 mb-sm-0">
                  <h3 class="text-h5 text-md-h4 font-weight-bold mb-1">{{ education.title }}</h3>
                  <p class="text-body-1 text-md-h6 text-text mb-1">
                    {{ education.institution }}
                  </p>
                  <p class="text-body-2 text-md-body-1 text-text">
                    {{ formatDate(education.period.start) }} -
                    {{ education.period.end ? formatDate(education.period.end) : 'Presente' }}
                  </p>
                </div>
                <v-chip
                  :color="education.status === 'completed' ? 'accent' : 'primary'"
                  variant="flat"
                  size="x-large"
                  size-md="small"
                  class="mt-1 px-2 px-md-3 font-weight-medium"
                >
                  {{ education.status === 'completed' ? 'Finalizado' : 'En curso' }}
                </v-chip>
              </div>

              <!-- Descripción -->
              <p class="text-body-1 text-text mb-4">
                {{ education.description }}
              </p>
            </header>

            <!-- Indicadores académicos -->
            <section v-if="education.subjects && education.subjects.length" class="mb-5">
              <div class="glass-inner pa-4 rounded-lg mb-4">
                <div class="d-flex flex-wrap align-center justify-space-between">
                  <div class="mb-3 mb-sm-0">
                    <h4 class="text-h6 font-weight-medium mb-1">Rendimiento académico</h4>
                    <p class="text-body-1 text-primary">Resumen de calificaciones</p>
                  </div>
                  <dl class="kpi-list d-flex flex-wrap gap-3 ma-0">
                    <div class="text-center">
                      <dt class="text-caption text-secondary">Promedio</dt>
                      <dd class="text-h5 text-md-h4 font-weight-bold text-accent ma-0">
                        {{ calculateAverage(education.subjects) }}
                      </dd>
                    </div>
                    <div class="text-center">
                      <dt class="text-caption text-secondary">Materias</dt>
                      <dd class="text-h5 text-md-h4 font-weight-bold ma-0">
                        {{ education.subjects.length }}
                      </dd>
                    </div>
                  </dl>
                </div>
              </div>

              <!-- Materias destacadas -->
              <div v-if="getTopSubject(education.subjects)" class="mb-4">
                <v-alert variant="tonal" color="accent" density="compact" class="text-body-2">
                  <div class="d-flex align-center">
                    <v-icon size="small" class="mr-2" aria-hidden="true">mdi-trophy</v-icon>
                    <span
                      >Materia destacada:
                      <strong>{{ getTopSubject(education.subjects).name }}</strong> ({{
                        getTopSubject(education.subjects).grade
                      }})</span
                    >
                  </div>
                </v-alert>
              </div>
            </section>

            <!-- Acordeón de materias -->
            <section v-if="education.subjects && education.subjects.length">
              <v-expansion-panels variant="accordion" class="rounded-lg">
                <v-expansion-panel class="glass-inner">
                  <v-expansion-panel-title
                    class="text-body-1 font-weight-medium text-secondary"
                    :aria-controls="`acordeon-${education.id}`"
                  >
                    Ver materias y calificaciones

                    <template #actions="{ expanded }">
                      <v-icon class="color-icon">
                        {{ expanded ? 'mdi-chevron-up' : 'mdi-chevron-down' }}
                      </v-icon>
                    </template>
                  </v-expansion-panel-title>
                  <v-expansion-panel-text :id="`acordeon-${education.id}`" role="region">
                    <div class="pt-4">
                      <!-- Lista de materias semántica -->
                      <ul class="subject-list pa-0 ma-0">
                        <li
                          v-for="(subject, index) in education.subjects"
                          :key="index"
                          class="subject-item pa-3 mb-2 rounded-lg"
                        >
                          <header class="subject-header mb-2 mb-sm-0">
                            <h5 class="text-body-1 font-weight-medium mb-1">
                              {{ subject.name }}
                            </h5>
                            <time
                              v-if="subject.date"
                              :datetime="subject.date"
                              class="text-body-2 text-primary d-block"
                            >
                              {{ formatDate(subject.date) }}
                            </time>
                          </header>
                          <div class="d-flex align-center gap-2 gap-md-3">
                            <v-chip
                              v-if="subject.grade !== null"
                              :color="getGradeColor(subject.grade)"
                              variant="flat"
                              size="medium"
                              size-md="small"
                              class="font-weight-medium px-2 px-md-3"
                              :aria-label="`Nota final ${subject.grade}`"
                            >
                              {{ subject.grade }}
                            </v-chip>
                            <v-chip
                              v-if="subject.status"
                              :color="getStatusColor(subject.status)"
                              variant="outlined"
                              size="large"
                              size-md="small"
                              :aria-label="`Estado ${formatStatus(subject.status)}`"
                            >
                              {{ formatStatus(subject.status) }}
                            </v-chip>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </v-expansion-panel-text>
                </v-expansion-panel>
              </v-expansion-panels>
            </section>
          </article>
        </v-slide-x-transition>
      </v-col>
    </v-row>

    <!-- Cierre narrativo -->
    <v-row class="mt-8 mt-md-10 mb-10" justify="center">
      <v-col cols="12" md="8" lg="6" class="text-center">
        <div class="glass pa-5 pa-md-6">
          <v-icon size="48" color="accent" class="mb-4" aria-hidden="true">mdi-school</v-icon>
          <p class="text-body-1 mb-3">
            Formarse es aprender a
            <span class="text-accent">cuestionar, comprender y construir.</span>
          </p>
          <p class="text-body-3 text-text">
            Actualizando constantemente mis habilidades con cursos, prácticas y proyectos
          </p>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
// Datos de educación
const educationData = [
  {
    id: 1,
    status: 'completed',
    title: 'Tecnicatura Superior en Programación',
    institution: 'Instituto Técnico Superior Teclab',
    period: {
      start: '2022-05',
      end: '2024-12',
    },
    description:
      'Formación técnica orientada al desarrollo web, diseño de sistemas y soluciones digitales.',

    subjects: [
      { name: 'Programación Mobile', date: '2024-12-07', grade: 8, status: 'approved' },
      { name: 'Gestión de Proyectos', date: '2024-10-26', grade: 7, status: 'approved' },
      { name: 'Interfaz de Desarrollo', date: '2024-09-28', grade: 6, status: 'approved' },
      { name: 'Práctica Profesionalizante', date: '2024-07-30', grade: null, status: 'completed' },
      { name: 'Integraciones Web', date: '2023-10-12', grade: 7, status: 'approved' },
      {
        name: 'Diseño de Sistemas de Información',
        date: '2023-09-23',
        grade: 10,
        status: 'approved',
      },
      {
        name: 'Decisiones y Resoluciones Eficientes',
        date: '2023-07-31',
        grade: 6,
        status: 'approved',
      },
      {
        name: 'Gestión Operativa en la Nube (Cloud Practitioner)',
        date: '2023-06-03',
        grade: 7,
        status: 'approved',
      },
      { name: 'Gestión de la Configuración', date: '2023-05-25', grade: 5, status: 'approved' },
      { name: 'Gestión de Personas', date: '2023-02-06', grade: 7, status: 'approved' },
      { name: 'Lógica de Programación', date: '2023-02-02', grade: 9, status: 'approved' },
      { name: 'Programación Web', date: '2023-01-24', grade: 7, status: 'approved' },
      {
        name: 'Organización del Tiempo y del Trabajo',
        date: '2022-10-03',
        grade: 7,
        status: 'approved',
      },
      { name: 'Experiencia de Usuario', date: '2022-08-05', grade: 6, status: 'approved' },
      { name: 'Base de Datos', date: '2022-08-03', grade: 6, status: 'approved' },
    ],
  },
  {
    id: 2,
    status: 'in-progress',
    title: 'Tecnicatura en Desarrollo de Software',
    institution: 'Universidad de Pilar',
    period: {
      start: '2025-03',
      end: null,
    },
    description:
      'Formación orientada al desarrollo de software, arquitectura de sistemas y metodologías modernas de ingeniería.',

    subjects: [
      { name: 'Redes de Datos', date: '2025-08-', grade: 8, status: 'promoted' },
      {
        name: 'Fundamentos del Desarrollo de Software y Metodologías Ágiles',
        date: '2025-08-',
        grade: 10,
        status: 'promoted',
      },
      { name: 'Arquitectura de Computadoras', date: '2025-03-', grade: 10, status: 'promoted' },
      { name: 'Fundamentos de la Computación', date: '2025-03-', grade: 9, status: 'promoted' },
      { name: 'Lógica', date: '2025-03-', grade: 9, status: 'promoted' },
      { name: 'Matemática Discreta', date: '2025-03-', grade: 10, status: 'promoted' },
      { name: 'Estructura de Datos', date: '2026-03-', grade: 8, status: 'promoted' },
      { name: 'Cultura Digital', date: '2026-03-', grade: null, status: 'completed' },
      {
        name: 'Elementos para la comprensión de lengua extranjera',
        date: '2026-03-',
        grade: 9,
        status: 'promoted',
      },
      {
        name: 'Taller de lectura y escritura académica',
        date: '2026-03-',
        grade: null,
        status: 'completed',
      },
    ],
  },
]

// Funciones de utilidad (sin cambios)
const formatDate = (dateString) => {
  if (!dateString) return ''
  const date = new Date(dateString)
  return date.toLocaleDateString('es-ES', { year: 'numeric', month: 'short' })
}

const calculateAverage = (subjects) => {
  const gradedSubjects = subjects.filter((s) => s.grade !== null)
  if (gradedSubjects.length === 0) return '-'
  const sum = gradedSubjects.reduce((acc, subject) => acc + subject.grade, 0)
  return (sum / gradedSubjects.length).toFixed(1)
}

const getTopSubject = (subjects) => {
  const gradedSubjects = subjects.filter((s) => s.grade !== null)
  if (gradedSubjects.length === 0) return null
  return gradedSubjects.reduce((max, subject) => (subject.grade > max.grade ? subject : max))
}

const getGradeColor = (grade) => {
  if (grade >= 9) return 'success'
  if (grade >= 7) return 'primary'
  return 'warning'
}

const getStatusColor = (status) => {
  switch (status) {
    case 'promoted':
      return 'success'
    case 'approved':
      return 'primary'
    case 'completed':
      return 'accent'
    default:
      return 'secondary'
  }
}

const formatStatus = (status) => {
  const statusMap = {
    promoted: 'Promocionado',
    approved: 'Aprobado',
    completed: 'Completado',
  }
  return statusMap[status] || status
}
</script>

<style scoped>
/* Estilos mínimos y específicos */
.glass-inner {
  background: var(--color-bg-surface-dark);
  border: 1px solid var(--color-accent-dark);
}

.color-icon {
  color: var(--color-accent);
}

/* Lista semántica de materias */
.subject-list {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

.subject-item {
  background: var(--color-bg-surface);
  transition: all 0.2s ease;
  border: 1px solid transparent;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
}

.subject-item:hover {
  background: var(--color-bg-surface-mediun);
  border-color: var(--color-accent-dark);
}

.subject-header {
  flex: 1;
  min-width: 200px;
  color: var(--color-text-primary);
}

/* KPIs semánticos */
.kpi-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.kpi-list div {
  text-align: center;
}

.kpi-list dt {
  margin-bottom: 0.25rem;
}

.kpi-list dd {
  margin: 0;
}

/* Clases utilitarias para flex gap */
.gap-2 {
  gap: 0.5rem;
}

.gap-3 {
  gap: 1rem;
}

/* Ajustes responsivos */
@media (max-width: 600px) {
  .d-flex.justify-space-between {
    flex-direction: column;
  }

  .subject-item {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.75rem;
  }

  .subject-header {
    min-width: auto;
    width: 100%;
  }
}
</style>

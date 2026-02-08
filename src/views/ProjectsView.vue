<template>
  <v-container class="pa-0 pa-md-3" fluid>
    <!-- Header -->
    <v-row class="mt-3 mt-md-6 mb-8" justify="center">
      <v-col cols="12" md="8" lg="6" class="text-center">
        <h1 class="text-h4 text-md-h3 font-weight-bold mb-2">
          <span class="text-accent">Proyectos</span> personales
        </h1>
        <p class="text-body-1 text-md-h6 text-text">
          Experiencias digitales en <span class="text-accent">desarrollo y programación</span>.
        </p>
      </v-col>
    </v-row>

    <!-- Projects Grid -->
    <v-row class="mx-0 mx-md-3" justify="center" align="stretch">
      <!-- Project 1 -->
      <v-col cols="12" md="6" lg="4">
        <v-card class="glass h-100 d-flex flex-column" elevation="0">
          <div class="pa-5 flex-grow-1">
            <!-- Visual -->
            <v-img
              :src="todoMamparaImage"
              :aspect-ratio="16 / 9"
              cover
              class="rounded-t-lg"
            ></v-img>

            <!-- Content -->
            <h3 class="text-h5 text-surface font-weight-bold mb-3">Todo Mampara</h3>
            <p class="text-body-1 text-surface mb-4">
              Sitio corporativo que combina catálogo de diseño profesional con atención
              personalizada y facilidades de contacto.
            </p>

            <!-- Tech Stack -->
            <div class="mb-5">
              <v-chip size="small" class="mr-2 mb-2" color="accent" variant="flat">Vue 2</v-chip>
              <v-chip size="small" class="mr-2 mb-2" color="surface">JavaScript</v-chip>
              <v-chip size="small" class="mr-2 mb-2" color="surface">Vuetify</v-chip>
              <v-chip size="small" class="mb-2" color="surface">Vue Router</v-chip>
            </div>
          </div>

          <!-- Action -->
          <v-card-actions class="px-5 pb-5 pt-0">
            <v-btn
              variant="flat"
              color="primary"
              block
              append-icon="mdi-arrow-right"
              href="https://www.todomampara.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visitar sitio web Todo Mampara (se abre en nueva ventana)"
              Explorar
              proyecto
              >Explorar proyecto</v-btn
            >
          </v-card-actions>
        </v-card>
      </v-col>

      <!-- Project 2 -->
      <v-col cols="12" md="6" lg="4">
        <v-card class="glass h-100 d-flex flex-column" elevation="0">
          <div class="pa-5 flex-grow-1">
            <!-- Visual -->
            <v-img :src="smarflyimage" :aspect-ratio="16 / 9" cover class="rounded-t-lg"></v-img>

            <!-- Content -->
            <h3 class="text-h5 text-surface font-weight-bold mb-3">Smart-Fly</h3>
            <p class="text-body-1 text-surface mb-4">
              Servicios de drones certificados para captura aérea de propiedades, resaltando
              espacios, entorno y valor visual mediante inspección y relevamiento aéreo.
            </p>

            <!-- Tech Stack -->
            <div class="mb-5">
              <v-chip size="small" class="mr-2 mb-2" color="accent" variant="flat">Vue 2</v-chip>
              <v-chip size="small" class="mr-2 mb-2" color="surface">JavaScript</v-chip>
              <v-chip size="small" class="mr-2 mb-2" color="surface">vuetify</v-chip>
              <v-chip size="small" class="mb-2" color="surface">Vue Router</v-chip>
            </div>
          </div>

          <!-- Action -->
          <v-card-actions class="px-5 pb-5 pt-0">
            <v-btn
              variant="flat"
              color="primary"
              block
              append-icon="mdi-arrow-right"
              href="https://grand-beijinho-3b9cc0.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visitar sitio web Todo Mampara (se abre en nueva ventana)"
              >Explorar proyecto</v-btn
            >
          </v-card-actions>
        </v-card>
      </v-col>

      <!-- Project 3 -->
      <v-col cols="12" md="6" lg="4">
        <v-card class="glass h-100 d-flex flex-column" elevation="0">
          <div class="pa-5 flex-grow-1">
            <!-- Visual -->
            <v-img
              :src="comunicacionclienteservidor"
              :aspect-ratio="16 / 9"
              cover
              class="rounded-t-lg"
            ></v-img>

            <!-- Content -->
            <h3 class="text-h5 text-surface font-weight-bold mb-3">
              Comunicación Cliente Servidor
            </h3>
            <p class="text-body-1 text-surface mb-4">
              Simulación de comunicación cliente-servidor en Python mediante sockets UDP, con
              detección de errores CRC16-CCITT y retransmisión automática.
            </p>

            <!-- Tech Stack -->
            <div class="mb-5">
              <v-chip size="small" class="mr-2 mb-2" color="surface">Python 3</v-chip>
              <v-chip size="small" class="mr-2 mb-2" color="surface">UDP Sockets</v-chip>
              <v-chip size="small" class="mb-2" color="surface">CRC16-CCITT</v-chip>
              <v-chip size="small" class="mb-2" color="surface">Networking Fundamentals</v-chip>
            </div>
          </div>

          <!-- Action -->
          <v-card-actions class="px-5 pb-5 pt-0">
            <v-btn
              variant="flat"
              color="primary"
              block
              append-icon="mdi-arrow-right"
              href="https://github.com/dellaquila39/comunicaci-n-cliente-servidor"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visitar sitio web Todo Mampara (se abre en nueva ventana)"
              Explorar
              proyecto
              >Ver codigo</v-btn
            >
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>

    <!-- CTA -->
    <v-row class="mt-8 mt-md-12 mb-10" justify="center">
      <v-col cols="12" class="text-center">
        <p class="text-body-1 text-primary mb-4">¿Quieres conocer más?</p>
        <v-btn
          variant="outlined"
          color="accent"
          size="large"
          target="_blank"
          rel="noopener noreferrer"
          class="px-8"
          href="https://wa.me/5491138185204"
        >
          Contactar
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import todoMamparaImage from '@/assets/images/projects/todo-mampara-img.jpg'
import smarflyimage from '@/assets/images/projects/smart-fly-img.jpg'
import comunicacionclienteservidor from '@/assets/images/projects/comunicacion-cliente-servidor-img.jpg'
</script>

<style scoped>
/* Estilos mínimos y específicos solo para este componente */
.bg-gradient-accent {
  background: linear-gradient(135deg, var(--color-accent) 0%, #6d28d9 100%);
}

.bg-gradient-purple {
  background: linear-gradient(135deg, #7c3aed 0%, #5b21b6 100%);
}

.bg-gradient-blue {
  background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%);
}

.bg-surface {
  background-color: rgba(255, 255, 255, 0.05);
}

.text-surface {
  color: var(--color-text-primary);
}

.h-100 {
  height: 100%;
}

/* Transición sutil al hover */
.v-card {
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
}

.v-card:hover {
  transform: translateY(-4px);
}
</style>

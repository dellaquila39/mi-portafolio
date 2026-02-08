<template>
  <v-container class="pa-0 pa-md-3" fluid>
    <!-- introducción -->
    <v-row class="mt-3 mt-md-6 mb-10" justify="center">
      <v-col cols="12" md="8" lg="6" class="text-center">
        <h2 class="text-h4 text-md-h3 font-weight-bold mb-4">
          Hablemos, <span class="text-accent">sin compromisos</span>
        </h2>
        <p class="text-body-1 text-md-h6 text-text">
          Si llegaste hasta acá,
          <span class="text-accent">probablemente tengamos algo interesante para charlar.</span>
        </p>
      </v-col>
    </v-row>

    <!-- principal de contacto -->
    <v-row class="mx-0 mx-md-3 mb-10" justify="center">
      <v-col cols="12" md="10" lg="8">
        <div class="glass pa-5 pa-md-6">
          <p class="text-body-1 mb-8 text-center">
            Elige cómo prefieres contactarme. Respondo rápido y converso sobre cualquier idea.
          </p>

          <!-- canales de contacto -->
          <v-row class="mb-8" justify="center">
            <v-col
              v-for="channel in channels"
              :key="channel.id"
              cols="6"
              sm="3"
              class="text-center"
            >
              <v-btn
                variant="text"
                class="d-flex flex-column pa-4 h-100 channel-btn"
                :class="{ 'channel-btn--active': activeChannel === channel.id }"
                @click="selectChannel(channel.id)"
              >
                <v-icon
                  size="48"
                  class="mb-3"
                  :class="{ 'text-accent': activeChannel === channel.id }"
                  >{{ channel.icon }}</v-icon
                >
                <span
                  class="text-body-2"
                  :class="{ 'text-accent font-weight-medium': activeChannel === channel.id }"
                  >{{ channel.name }}</span
                >
              </v-btn>
            </v-col>
          </v-row>

          <!-- panel contextual -->
          <v-slide-y-transition>
            <div
              v-if="activeChannel"
              class="context-panel rounded-lg pa-5 mb-2"
              :style="{
                '--social-color': `var(--color-social-${activeChannel})`,
                '--social-soft': `var(--color-social-${activeChannel}-soft)`,
              }"
            >
              <div class="d-flex align-center mb-4">
                <v-icon
                  size="24"
                  class="mr-3"
                  :style="{ color: `var(--color-social-${activeChannel})` }"
                  >{{ getActiveChannel().icon }}</v-icon
                >
                <h3 class="text-h6 font-weight-medium">
                  {{ getActiveChannel().title }}
                </h3>
              </div>

              <p class="text-body-1 mb-5">
                {{ getActiveChannel().message }}
              </p>

              <v-btn
                :href="getActiveChannel().actionLink"
                target="_blank"
                rel="noopener noreferrer"
                variant="flat"
                size="large"
                class="action-btn px-6"
                :style="{
                  '--social-color': `var(--color-social-${activeChannel})`,
                  '--social-soft': `var(--color-social-${activeChannel}-soft)`,
                }"
              >
                {{ getActiveChannel().actionText }}
                <v-icon right>mdi-arrow-right</v-icon>
              </v-btn>
            </div>
          </v-slide-y-transition>
        </div>
      </v-col>
    </v-row>

    <!-- final -->
    <v-row class="mx-0 mx-md-3 mt-8" justify="center">
      <v-col cols="12" md="8" lg="6" class="text-center">
        <p class="text-body-3 text-primary">
          Sin formularios, sin burocracia. Solo conversación directa cuando quieras.
        </p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { ref } from 'vue'

// estado del canal activo
const activeChannel = ref('whatsapp') // Por defecto WhatsApp para mejor UX

// datos de los canales
const channels = [
  {
    id: 'whatsapp',
    name: 'WhatsApp',
    icon: 'mdi-whatsapp',
    title: 'Conversemos por WhatsApp',
    message:
      'Perfecto para charlas rápidas y directas. Respondo en minutos, ideal para resolver dudas al instante.',
    actionText: 'Escribir por WhatsApp',
    actionLink: 'https://wa.me/5491138185204',
  },
  {
    id: 'email',
    name: 'Email',
    icon: 'mdi-email',
    title: 'Hablemos por correo',
    message:
      'Ideal para propuestas detalladas, documentos o conversaciones más estructuradas. Respondo en menos de 24 horas.',
    actionText: 'Enviar correo',
    actionLink: 'mailto:agustin.dev@outlook.es',
  },
  {
    id: 'linkedin',
    name: 'LinkedIn',
    icon: 'mdi-linkedin',
    title: 'Conectemos en LinkedIn',
    message:
      'Para oportunidades profesionales, networking o ver mi experiencia laboral completa. Conectemos y conversemos allí.',
    actionText: 'Ver perfil',
    actionLink: 'https://www.linkedin.com/in/agustin-dell-aquila/',
  },
  {
    id: 'github',
    name: 'GitHub',
    icon: 'mdi-github',
    title: 'Veamos el código',
    message:
      'Si te interesa cómo trabajo, mis proyectos o quieres colaborar. El código habla por sí mismo.',
    actionText: 'Explorar código',
    actionLink: 'https://github.com/dellaquila39',
  },
]

// métodos
const selectChannel = (channelId) => {
  activeChannel.value = channelId
}

const getActiveChannel = () => {
  return channels.find((channel) => channel.id === activeChannel.value) || channels[0]
}
</script>

<style scoped>
/* Botones de canal */
.channel-btn {
  transition: all 0.2s ease;
  border: 1px solid transparent;
  border-radius: var(--radius-sm);
}

.channel-btn:hover {
  background-color: rgba(139, 92, 246, 0.05);
  border-color: rgba(139, 92, 246, 0.2);
}

.channel-btn--active {
  background-color: rgba(139, 92, 246, 0.1);
  border-color: var(--color-accent);
}

/* Panel contextual */
.context-panel {
  background: var(--color-bg-surface);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-left: 4px solid var(--social-color);
}

/* Botón de acción  */
.action-btn {
  background-color: var(--social-color) !important;
  transition: all 0.3s ease !important;
  border: 1px solid transparent !important;
}

.action-btn:hover {
  background-color: var(--social-soft) !important;
  border-color: var(--social-color) !important;
  transform: translateY(-2px);
}
</style>

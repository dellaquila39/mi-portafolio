<template>
  <v-dialog v-model="showAlert" max-width="500" persistent>
    <v-card class="site-alert-card pa-4">
      <div class="d-flex align-center mb-3">
        <v-icon class="mr-2 icon">mdi-hammer-wrench</v-icon>
        <h3 class="title">Sitio en desarrollo</h3>
      </div>

      <p class="text-body-1 mb-4 text-color">
        Este portfolio sigue afinando detalles y agregando contenido. Si encuentras algo que no
        funciona o tienes sugerencias, <strong>¡no dudes en contactarme!</strong>
      </p>

      <div class="text-right">
        <v-btn class="btn-close" variant="flat" @click="closeAlert"> Entendido </v-btn>
      </div>
    </v-card>
  </v-dialog>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const showAlert = ref(false)

onMounted(() => {
  if (!sessionStorage.getItem('siteAlertShown')) {
    showAlert.value = true
  }
})

function closeAlert() {
  showAlert.value = false
  sessionStorage.setItem('siteAlertShown', 'true')
}
</script>

<style scoped>
.site-alert-card {
  background: var(--color-accent-soft);
  border: 1px solid var(--color-accent-border);
  border-radius: 18px !important;
  backdrop-filter: blur(10px);
}

.title {
  color: var(--color-accent);
  font-weight: 600;
}

.text-color {
  color: var(--color-text-text);
}

.icon {
  color: var(--color-accent);
}

.btn-close {
  background: var(--color-accent);
  color: white;
  border-radius: 10px;
}

.btn-close:hover {
  background: var(--color-accent-dark);
}
</style>

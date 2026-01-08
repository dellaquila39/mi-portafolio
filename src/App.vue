<template>
  <v-app>
    <!-- Barra de navegación superior (siempre visible) -->
    <AppNavbar />

    <!-- Contenido central que cambia según la ruta -->
    <v-main>
      <RouterView />
    </v-main>

    <!-- Footer siempre visible -->
    <AppFooter />
  </v-app>
</template>

<script setup>
// Componentes globales de layout
import AppNavbar from '@/components/AppNavbar.vue'
import AppFooter from '@/components/AppFooter.vue'
</script>

<style scoped></style>

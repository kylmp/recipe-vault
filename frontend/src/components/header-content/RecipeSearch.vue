<template>
  <v-text-field 
    class="mt-5"
    density="compact" 
    label="Search Recipes" 
    placeholder="Search..." 
    v-model="searchStr"
    variant="outlined">
  </v-text-field>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const searchStr = ref('');
</script>

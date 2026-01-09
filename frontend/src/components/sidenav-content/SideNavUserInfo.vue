<template>
  <v-list-item class="mb-2">
    <template #prepend>
      <v-avatar color="primary">
        <v-img v-if="userImage" :src="userImage" alt="Avatar"></v-img>
        <span v-else class="text-h5">K</span>
      </v-avatar>
    </template>
    <v-list-item-title>Kyle</v-list-item-title>
    <v-list-item-subtitle>23 Recipes</v-list-item-subtitle>
  </v-list-item>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const userImage = ref('');
</script>

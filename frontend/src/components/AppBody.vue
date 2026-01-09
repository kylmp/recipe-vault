<template>
  <v-main>
    <details-display v-if="recipeId !== undefined" :recipeId="recipeId"/>
    <recipes-display v-else/>
  </v-main>
</template>

<script setup lang="ts">
import DetailsDisplay from './body-content/DetailsDisplay.vue';
import RecipesDisplay from './body-content/RecipesDisplay.vue';

const { recipeId } = defineProps({
  recipeId: String, 
  default: undefined
});
</script>

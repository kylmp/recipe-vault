<template>
  <v-main>
    <recipe-display :recipeId="searchResultId"></recipe-display>
  </v-main>
</template>

<script setup>
import { ref } from 'vue'
import RecipeDisplay from './body-content/RecipeDisplay.vue';
import { useSearchStore } from '../stores/searchStore';

const searchStore = useSearchStore();
const searchResultId = ref('nothing');

// When recipe search updates, load recipe page
searchStore.$subscribe((mutation, state) => {
  searchResultId.value = state.searchString;
});
</script>

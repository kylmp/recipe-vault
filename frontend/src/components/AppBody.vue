<template>
  <v-main>
    <recipe-details :recipeId="searchResultId"/>
  </v-main>
</template>

<script setup>
import { ref } from 'vue'
import RecipeDetails from './body-content/RecipeDetails.vue';
import { useSearchStore } from '../stores/searchStore';

const searchStore = useSearchStore();
const searchResultId = ref('nothing');

// When recipe search updates, load recipe page
searchStore.$subscribe((mutation, state) => {
  searchResultId.value = state.searchString;
});
</script>

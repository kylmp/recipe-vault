<template>
  <v-main>
    <details-display :recipeId="searchResultId"/>
  </v-main>
</template>

<script setup>
import { ref } from 'vue'
import DetailsDisplay from './body-content/DetailsDisplay.vue';
import { useSearchStore } from '../stores/searchStore';

const searchStore = useSearchStore();
const searchResultId = ref('nothing');

// When recipe search updates, load recipe page
searchStore.$subscribe((mutation, state) => {
  searchResultId.value = state.searchString;
});
</script>

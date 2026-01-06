<template>
  <v-text-field 
    class="mt-5"
    density="compact" 
    label="Search Recipes" 
    placeholder="Search..." 
    v-model="searchStr"
    variant="outlined"
    @keydown.enter.prevent="loadRecpie">
  </v-text-field>
</template>

<script setup>
import { ref } from 'vue'
import { useSearchStore } from '../../stores/searchStore';

const searchStore = useSearchStore();
const searchStr = ref('');

const loadRecpie = () => {
  searchStore.update(searchStr.value);
}
</script>

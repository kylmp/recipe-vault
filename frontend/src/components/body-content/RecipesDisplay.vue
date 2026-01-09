<template>
  <v-container>
    <v-row>
      <v-col>
        <recipe-filter/>
      </v-col>
    </v-row>
    <v-row class="pt-4 fill-height" justify="center">
      <v-col class="pr-0 mr-0">
        recipe results
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import { useRoute } from 'vue-router';
import RecipeFilter from './recipes-view/RecipeFilter.vue';

const route = useRoute();

const categories = ref([]);
const tags = ref([]);
const lists = ref([]);

const parseList = (value) => {
  if (!value) return [];
  const arr = Array.isArray(value) ? value.join(',') : value;
  return arr.split(',').map((item) => item.trim()).filter(Boolean);
};

watch(
  () => route.query,
  (query) => {
    categories.value = parseList(query.categories);
    tags.value = parseList(query.tags);
    lists.value = parseList(query.lists);

    if (query.categories || query.tags || query.lists) {
      const cleanUrl = route.path + (route.hash || '');
      window.history.replaceState({}, '', cleanUrl);
    }
  },
  { immediate: true }
);
</script>

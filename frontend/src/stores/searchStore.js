import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useSearchStore = defineStore('searchStore', () => {
  const searchString = ref('');
  const categories = ref([]);
  const tags = ref([]);
  
  const update = (searchStringUpdate, categoriesUpdate, tagsUpdate) => {
    searchString.value = searchStringUpdate;
    categories.value = categoriesUpdate;
    tags.value = tagsUpdate;
  }

  return { searchString, categories, tags, update };
});

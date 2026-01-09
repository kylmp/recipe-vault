import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useSearchStore = defineStore('searchStore', () => {
  const searchString = ref<string>('');
  const categories = ref<string[] | undefined>(undefined);
  const tags = ref<string[] | undefined>(undefined);
  
  const update = (
    searchStringUpdate: string,
    categoriesUpdate?: string[],
    tagsUpdate?: string[]
  ) => {
    searchString.value = searchStringUpdate;
    categories.value = categoriesUpdate;
    tags.value = tagsUpdate;
  }

  return { searchString, categories, tags, update };
});

import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useSettingsStore = defineStore('settingsStore', () => {
  const name = ref<string>('Recipe Vault');
  
  const update = (settings: { name?: string }) => {
    if (settings.name !== undefined) {
      name.value = settings.name;
    }
  }

  return { name, update };
});

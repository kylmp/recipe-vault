import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useSettingsStore = defineStore('settingsStore', () => {
  const name = ref('Recpie Vault');
  
  const update = (settings) => {
    name.value = settings.name;
  }

  return { name, update };
});

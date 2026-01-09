import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { AlertApi } from '../../common/types';

export const useAlertStore = defineStore('alertStore', () => {
  const alert = ref<AlertApi | null>(null);

  const update = (al: AlertApi | null) => {
    alert.value = al;
  }

  return { alert, update };
}); 

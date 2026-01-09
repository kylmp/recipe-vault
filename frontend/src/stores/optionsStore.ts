import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useOptionsStore = defineStore('optionsStore', () => {
  const darkTheme = ref(false);
  
  const setDarkTheme = (theme: boolean) => {
    darkTheme.value = theme;
  }
  
  const toggleDarkTheme = () => {
    darkTheme.value = !darkTheme.value;
  }

  return { 
    darkTheme, setDarkTheme, toggleDarkTheme,
  };
});

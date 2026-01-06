import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useUiStore = defineStore('uiStore', () => {
  const drawerOpen = ref(true);

  const setDrawerOpen = (value) => {
    drawerOpen.value = value;
  };

  const toggleDrawer = () => {
    drawerOpen.value = !drawerOpen.value;
  };

  return { drawerOpen, setDrawerOpen, toggleDrawer };
});

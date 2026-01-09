import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useUiStore = defineStore('uiStore', () => {
  const drawerOpen = ref<boolean>(true);

  const setDrawerOpen = (value: boolean) => {
    drawerOpen.value = value;
  };

  const toggleDrawer = () => {
    drawerOpen.value = !drawerOpen.value;
  };

  return { drawerOpen, setDrawerOpen, toggleDrawer };
});

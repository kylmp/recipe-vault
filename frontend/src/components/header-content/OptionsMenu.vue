<template>
  <v-btn @click="optionsButtonClicked" id="menu-activator" icon="mdi-dots-vertical"></v-btn>
  <v-menu 
    v-model="menu" 
    :close-on-content-click="close" 
    activator="#menu-activator" 
    location="bottom" 
    transition="slide-y-transition">
    <v-card 
      @mouseenter="menuEntered" 
      @mouseleave="menuExited" 
      class="options-card">
      <label 
        v-for="(option, index) in options.values()" 
        :key="option.label" 
        :for="`option-switch-${index}`" 
        class="switch-label">
        <v-switch 
          :id="`option-switch-${index}`" :label="option.label" 
          v-model="option.state" @click="option.click" 
          density="compact" color="highlight-text" hide-details>
        </v-switch>
      </label>
    </v-card>
  </v-menu>
</template>

<script setup>
import { ref } from 'vue'
import { useTheme } from 'vuetify'
import { useOptionsStore } from '../../stores/optionsStore';
import { useAlertStore } from '../../stores/alertStore';

const theme = useTheme();
const optionsStore = useOptionsStore();
const alertStore = useAlertStore();
const menu = ref(false);
const close = ref(false);

const menuExitTimeoutBeforeCloseInMs = 500;
var closeMenuTimeout;

// Clear any alert when menu is opened (having both open causes a bug)
const optionsButtonClicked = () => {
  alertStore.alert.clear()
}

// 500ms delay before closing options menu if cursor leaves the menu (cancelled if cursor enters again)
const menuEntered = () => {
  clearTimeout(closeMenuTimeout);
}
const menuExited = () => {
  closeMenuTimeout = setTimeout(() => menu.value = false, menuExitTimeoutBeforeCloseInMs);
}

const toggleTheme = () => {
  theme.change(options.value.get('theme').state ? 'lightTheme' : 'darkTheme');
  localStorage.setItem("recipe-vault-theme", options.value.get('theme').state ? "light" : "dark");
  optionsStore.toggleDarkTheme();
};

// Map for building options menu, <key, { display text, click function, default state }>
const options = ref(new Map([
  ['theme', {label: "Dark Theme", click: toggleTheme, state: true}],
]));

// Set theme state from local storage
const themeOption = localStorage.getItem("recipe-vault-theme") === "light" ? false : true;
options.value.set('theme', {...options.value.get('theme'), state: themeOption})
optionsStore.setDarkTheme(themeOption);
theme.change(themeOption ? 'darkTheme' : 'lightTheme');
</script>

<style scoped>
.options-card {
  margin-left: -255px;
  max-width: 300px;
  padding-left: 16px;
}

.switch-label {
  cursor: pointer;
  display: block;
  padding: 6px 0;
}
</style>

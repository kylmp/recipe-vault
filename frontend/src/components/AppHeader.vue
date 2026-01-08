<template>
  <v-app-bar height="56" elevation="1" color="header" class="pr-1">
    <v-app-bar-nav-icon v-if="isMobile" @click="uiStore.toggleDrawer" />
    <v-app-bar-title>
      <v-btn variant="text" class="px-0 no-hover" :ripple="false" @click="router.push('/')">
        <v-avatar color="header" size="28">
          <v-img src="/recipe-vault-logo.svg" alt="Recipe Vault" />
        </v-avatar>
        <span class="text-h6 pl-4">{{ name }}</span>
      </v-btn>
    </v-app-bar-title>
    <recipe-search v-if="!isMobile" />
    <options-menu/>
  </v-app-bar>
</template>

<script setup>
import { storeToRefs } from 'pinia'
import { useDisplay } from 'vuetify';
import { useRouter } from 'vue-router';
import { useSettingsStore } from '../stores/settingsStore';
import { useUiStore } from '../stores/uiStore';

import RecipeSearch from './header-content/RecipeSearch.vue'
import OptionsMenu from './header-content/OptionsMenu.vue'

const settingsStore = useSettingsStore();
const { name } = storeToRefs(settingsStore);
const uiStore = useUiStore();
const { mobile } = useDisplay();
const isMobile = mobile;
const router = useRouter();
</script>

<style scoped>
.no-hover :deep(.v-btn__overlay) {
  background-color: transparent !important;
  opacity: 0 !important;
}
</style>
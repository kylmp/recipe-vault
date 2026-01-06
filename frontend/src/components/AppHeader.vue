<template>
  <v-app-bar height="56" elevation="1" color="header" class="pr-1">
    <v-app-bar-title>
      <v-list-item class="px-0" density="compact">
        <template #prepend>
          <v-avatar color="header" size="28">
            <v-img src="/recipe-vault-logo.svg" alt="Recipe Vault" />
          </v-avatar>
        </template>
        <v-list-item-title class="text-h6">{{ name }}</v-list-item-title>
      </v-list-item>
    </v-app-bar-title>
    <recipe-search/>
    <options-menu/>
  </v-app-bar>
</template>

<script setup>
import { storeToRefs } from 'pinia'
import { useSettingsStore } from '../stores/settingsStore';

import RecipeSearch from './header-content/RecipeSearch.vue'
import OptionsMenu from './header-content/OptionsMenu.vue'

const settingsStore = useSettingsStore();
const { name } = storeToRefs(settingsStore);
</script>

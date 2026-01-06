<template>
  <v-app-bar height="56" elevation="1" color="header" class="pr-1">
    <v-app-bar-title>{{name}}</v-app-bar-title>
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

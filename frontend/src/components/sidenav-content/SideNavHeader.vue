<template>
  <v-sheet class="sidenav-list-header">
    <v-sheet v-if="loggedIn">
      <side-nav-user-info/>
      <v-divider/>
      <side-nav-button label="New Recipe" icon="mdi-plus"/>
    </v-sheet>
    <side-nav-button v-else label="Login to create" icon="mdi-plus"/>
  </v-sheet>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import SideNavUserInfo from './SideNavUserInfo.vue'
import SideNavButton from './SideNavButton.vue';
const loggedIn = ref(true);
</script>
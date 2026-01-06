<template>
  <v-navigation-drawer color="sidenav" :width="300" permanent>
    <v-list density="compact" height="100%" v-model:selected="selection" class="sidenav-list">
      <v-sheet class="sidenav-list-header">
        <v-sheet v-if="loggedIn">
          <side-nav-user-info/>
          <v-divider/>
          <side-nav-button label="New Recipe" icon="mdi-plus"/>
        </v-sheet>
        <side-nav-button v-else label="Login to create" icon="mdi-plus"/>
      </v-sheet>
      <side-nav-collapsable-list label="Recently Viewed" icon="mdi-chef-hat" :items="recents"/>
      <side-nav-collapsable-list label="Favorites" icon="mdi-heart" :items="favorites"/>
      <side-nav-collapsable-list label="Categories" icon="mdi-shape" :items="categories"/>
    </v-list>
  </v-navigation-drawer>
</template>

<script setup>
import { ref } from 'vue';
import SideNavUserInfo from './sidenav-content/SideNavUserInfo.vue';
import SideNavButton from './sidenav-content/SideNavButton.vue';
import SideNavCollapsableList from './sidenav-content/SideNavCollapsableList.vue';

const selection = ref([]);
const loggedIn = ref(true);
const recents = ref([
  {name: "Cinnamon Rolls", id: "recipe-1"},
  {name: "Blueberry Yogurt", id: "recipe-2"},
  {name: "Gumbo", id: "recipe-3"}
]);
const favorites = ref([
  {name: "Pineapple Pizza", id: "recipe-4"},
  {name: "Tom Yum Soup", id: "recipe-5"}
]);
const categories = ref([
  {name: "Dessert", id: "category-1"},
  {name: "Pizza", id: "category-2"}
]);
</script>

<style scoped>
.sidenav-list {
  overflow-y: auto;
  padding-top: 0;
}

.sidenav-list :deep(.v-list-subheader) {
  padding-top: 0;
  margin-top: 0;
}

.sidenav-list-header {
  position: sticky;
  top: 0;
  z-index: 1;
  padding-top: 4px;
  background-color: rgb(var(--v-theme-sidenav)) !important;
}

.v-list-item__append > .v-icon {
  margin-inline-start: 0;
}
</style>

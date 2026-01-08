<template>
  <v-navigation-drawer v-model="drawerOpen" color="sidenav" :width="300" :temporary="isMobile" :permanent="!isMobile">
    <v-list density="compact" height="100%" v-model:selected="selection" class="sidenav-list">
      <side-nav-header/>
      <side-nav-collapsable-list label="Recently Viewed" icon="mdi-chef-hat" :items="recents"/>
      <side-nav-collapsable-list label="Favorites" icon="mdi-heart" :items="favorites"/>
      <side-nav-collapsable-list label="Lists" icon="mdi-list-box-outline" :items="lists"/>
      <side-nav-collapsable-list label="Categories" icon="mdi-shape" :items="categories"/>
    </v-list>
  </v-navigation-drawer>
</template>

<script setup>
import { ref, watch } from 'vue';
import { storeToRefs } from 'pinia';
import { useDisplay } from 'vuetify';
import SideNavHeader from './sidenav-content/SideNavHeader.vue';
import SideNavCollapsableList from './sidenav-content/SideNavCollapsableList.vue';
import { useUiStore } from '../stores/uiStore';

const selection = ref([]);
const uiStore = useUiStore();
const { drawerOpen } = storeToRefs(uiStore);
const { mobile } = useDisplay();
const isMobile = mobile;

const recents = ref([
  {name: "Cinnamon Rolls", id: "recipe-1", route: `/recipe/1-cinnamon-rolls`},
  {name: "Blueberry Yogurt", id: "recipe-2", route: `/recipe/2-blueberry-yogurt`},
  {name: "Gumbo", id: "recipe-3", route: `/recipe/3-gumbo`}
]);
const favorites = ref([
  {name: "Pineapple Pizza", id: "recipe-4", route: `/recipe/4-pineapple-pizza`},
  {name: "Tom Yum Soup", id: "recipe-5", route: `/recipe/5-tom-yum-soup`}
]);
const categories = ref([
  {name: "Dessert", id: "category-1", route: `/?categories=test1,test2&tags=test1`},
  {name: "Pizza", id: "category-2", route: `/?categories=test3`}
]);
const lists = ref([
  {name: "Home", id: "category-3", route: `/?lists=home`},
  {name: "Outside", id: "category-4", route: `/?lists=outside`}
]);

watch(isMobile, (value) => {
  uiStore.setDrawerOpen(!value);
}, { immediate: true });
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

<template>
  <v-navigation-drawer v-model="drawerOpen" color="sidenav" :width="300" :temporary="isMobile" :permanent="!isMobile">
    <v-list density="compact" height="100%" v-model:selected="selection" class="sidenav-list">
      <side-nav-header/>
      <side-nav-collapsable-list v-for="group of navGroups" :label="group.label" :items="group.items"/>
    </v-list>
  </v-navigation-drawer>
</template>

<script setup lang="ts">
import { Ref, ref, watch } from 'vue';
import { storeToRefs } from 'pinia';
import { useDisplay } from 'vuetify';
import SideNavHeader from './sidenav-content/SideNavHeader.vue';
import SideNavCollapsableList from './sidenav-content/SideNavCollapsableList.vue';
import { useUiStore } from '../stores/uiStore';
import { SideNavItem } from '../../../common/types';

const selection = ref([]);
const uiStore = useUiStore();
const { drawerOpen } = storeToRefs(uiStore);
const { mobile } = useDisplay();
const isMobile = mobile;

const navGroups: Ref<Array<{ label: string; items: SideNavItem[] }>> = ref([
  {label: "Recently Viewed", items: [
    {name: "Cinnamon Rolls", id: "recipe-1", route: "/recipe/1-cinnamon-rolls", icon: "mdi-chef-hat"},
    {name: "Blueberry Yogurt", id: "recipe-2", route: "/recipe/2-blueberry-yogurt", icon: "mdi-chef-hat"},
    {name: "Gumbo", id: "recipe-3", route: "/recipe/3-gumbo", icon: "mdi-chef-hat"}
  ]},
  {label: "Favorites", items: [
    {name: "Pineapple Pizza", id: "recipe-4", route: "/recipe/4-pineapple-pizza", icon: "mdi-heart"},
    {name: "Tom Yum Soup", id: "recipe-5", route: "/recipe/5-tom-yum-soup", icon: "mdi-heart"}
  ]},
  {label: "Lists", items: [
    {name: "Home", id: "category-3", route: "/?lists=home", icon: "mdi-shape"},
    {name: "Outside", id: "category-4", route: "/?lists=outside", icon: "mdi-shape"}
  ]},
  {label: "Categories", items: [
    {name: "Dessert", id: "category-1", route: "/?categories=test1,test2&tags=test1", icon: "mdi-list-box-outline"},
    {name: "Pizza", id: "category-2", route: "/?categories=test3", icon: "mdi-list-box-outline"}
  ]}
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

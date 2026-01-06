<template>
<v-list density="compact" height="100%" v-model:selected="selection" class="sidenav-list">
  <div class="sidenav-list-header">
    <v-list-item class="mb-2">
      <template #prepend>
        <v-avatar class="user-avatar" color="primary">
          <v-img v-if="userImage" :src="userImage" alt="Avatar"></v-img>
          <span v-else class="text-h5">K</span>
        </v-avatar>
      </template>
      <v-list-item-title>Kyle</v-list-item-title>
      <v-list-item-subtitle>23 Recipes</v-list-item-subtitle>
    </v-list-item>
    <v-divider></v-divider>
    <v-list-item>
      <v-list-item-title class="pa-0 ma-0">
        <v-btn variant="text" block height="32" color="highlight-text" prepend-icon="mdi-plus">
          New Recipe
        </v-btn>
      </v-list-item-title>
    </v-list-item>
    <v-list-item>
      <v-list-item-title class="pa-0 ma-0">
        <v-btn variant="text" block height="32" color="highlight-text" prepend-icon="mdi-plus">
          Login to create
        </v-btn>
      </v-list-item-title>
    </v-list-item>
  </div>
  <v-list-subheader>
    <span>Recently Viewed</span>
  </v-list-subheader>
  <v-list-item
    title="content"
    min-height="32"
    color="highlight-text"
    @click="photoSelected(photo.name)">
    <template v-slot:append>
      <v-icon size="x-small">mdi-earth</v-icon>
    </template>
  </v-list-item>
  <v-list-subheader>
    <span>Favorites</span>
  </v-list-subheader><v-list-subheader>
    <span>Favorites</span>
  </v-list-subheader><v-list-subheader>
    <span>Favorites</span>
  </v-list-subheader><v-list-subheader>
    <span>Favorites</span>
  </v-list-subheader><v-list-subheader>
    <span>Favorites</span>
  </v-list-subheader><v-list-subheader>
    <span>Favorites</span>
  </v-list-subheader><v-list-subheader>
    <span>Favorites</span>
  </v-list-subheader><v-list-subheader>
    <span>Favorites</span>
  </v-list-subheader><v-list-subheader>
    <span>Favorites</span>
  </v-list-subheader><v-list-subheader>
    <span>Favorites</span>
  </v-list-subheader><v-list-subheader>
    <span>Favorites</span>
  </v-list-subheader><v-list-subheader>
    <span>Favorites</span>
  </v-list-subheader><v-list-subheader>
    <span>Favorites</span>
  </v-list-subheader><v-list-subheader>
    <span>Favorites</span>
  </v-list-subheader><v-list-subheader>
    <span>Favorites</span>
  </v-list-subheader><v-list-subheader>
    <span>Favorites</span>
  </v-list-subheader><v-list-subheader>
    <span>Favorites</span>
  </v-list-subheader><v-list-subheader>
    <span>Favorites</span>
  </v-list-subheader><v-list-subheader>
    <span>Favorites</span>
  </v-list-subheader><v-list-subheader>
    <span>Favorites</span>
  </v-list-subheader><v-list-subheader>
    <span>Favorites</span>
  </v-list-subheader><v-list-subheader>
    <span>Favorites</span>
  </v-list-subheader>
  <v-list-item
    title="content"
    min-height="32"
    color="highlight-text"
    @click="photoSelected(photo.name)">
    <template v-slot:append>
      <v-icon size="x-small">mdi-earth</v-icon>
    </template>
  </v-list-item>
  <v-list-subheader>
    <span>Categories</span>
  </v-list-subheader>
  <v-list-item
    title="content"
    min-height="32"
    color="highlight-text"
    @click="photoSelected(photo.name)">
    <template v-slot:append>
      <v-icon size="x-small">mdi-earth</v-icon>
    </template>
  </v-list-item>
</v-list>
</template>

<script setup>
import { ref } from 'vue';
const selection = ref([]);
const userImage = ref('');
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

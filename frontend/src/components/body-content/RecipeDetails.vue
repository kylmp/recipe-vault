<template>
  <v-container fill-height fluid>
    <v-row justify="center" align="center" class="text-center">
        <div>
          <span class="text-h6">{{title}}</span>
          <br>
          <span class="text-body-1">{{body}}</span>
        </div>
    </v-row>
  </v-container>
</template>

<script setup>
import { ref, watch } from 'vue'

const props = defineProps(['recipeId']);

const title = ref('Recipe');
const body = ref('');

watch(() => props.recipeId, () => {
  loadRecipe(props.recipeId);
});

const loadRecipe = (id) => {
  body.value = id;
}

loadRecipe(props.recipeId);
</script>

<style scoped>
.v-row {
  height: calc(100vh - 64px);
}
</style>

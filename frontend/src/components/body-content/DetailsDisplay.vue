<template>
  <!-- <v-container fill-height fluid>
    <v-row justify="center" align="center" class="text-center">
        <div>
          <span class="text-h6">{{title}}</span>
          <br>
          <span class="text-body-1">{{body}}</span>
        </div>
    </v-row>
  </v-container> -->
  <v-container>
    <v-row class="pt-4 fill-height" justify="center">
      <v-col class="pr-0 mr-0">
        details
      </v-col>
      <v-col>
        image
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'

const props = defineProps<{ recipeId?: string }>();

const title = ref('Recipe');
const body = ref('');

watch(() => props.recipeId, () => {
  loadRecipe(props.recipeId);
});

const loadRecipe = (id?: string) => {
  body.value = id ?? '';
}

loadRecipe(props.recipeId);
</script>

<style scoped>
.v-row {
  height: calc(100vh - 64px);
}
</style>

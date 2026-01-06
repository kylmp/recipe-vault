<template>
  <v-list-item>
    <v-list-item-title class="pa-0 ma-0">
      <v-btn variant="text" block height="32" :color="color" :prepend-icon="icon">
        {{ label }}
      </v-btn>
    </v-list-item-title>
  </v-list-item>
</template>

<script setup>
defineProps({
  label: {
    type: String,
    required: true,
  },
  icon: {
    type: String,
    default: undefined,
  },
  color: {
    type: String,
    default: 'highlight-text',
  },
});
</script>

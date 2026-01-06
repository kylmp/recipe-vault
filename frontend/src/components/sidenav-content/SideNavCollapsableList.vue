<template>
  <v-list-subheader
    class="sidenav-collapsible__header"
    role="button"
    tabindex="0"
    @click="toggleOpen"
    @keydown.enter.prevent="toggleOpen"
    @keydown.space.prevent="toggleOpen">
    <div class="sidenav-collapsible__content">
      <span>{{ label }}</span>
      <v-icon class="sidenav-collapsible__toggle">
        {{ isOpen ? 'mdi-chevron-down' : 'mdi-chevron-right' }}
      </v-icon>
    </div>
  </v-list-subheader>
  <v-expand-transition>
    <div v-show="isOpen">
      <v-list-item
        v-for="item in items"
        :key="item.id"
        :title="item.name"
        min-height="32"
        class="sidenav-collapsible__item"
        :color="color"
        @click="handleItemClick(item)">
        <template #prepend>
          <v-icon size="18">{{ icon }}</v-icon>
        </template>
      </v-list-item>
    </div>
  </v-expand-transition>
</template>

<script setup>
import { ref } from 'vue';

defineProps({
  label: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    default: 'highlight-text',
  },
  icon: {
    type: String,
    default: undefined,
  },
  items: {
    type: Array,
    required: true,
  },
});

const isOpen = ref(true);

const toggleOpen = () => {
  isOpen.value = !isOpen.value;
};

const emit = defineEmits(['item-click']);

const handleItemClick = (item) => {
  emit('item-click', item);
};
</script>

<style scoped>
.sidenav-collapsible__header {
  cursor: pointer;
}

.sidenav-collapsible__content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  box-sizing: border-box;
}

.sidenav-collapsible__toggle {
  margin-inline-start: auto;
}

.sidenav-collapsible__header :deep(.v-list-subheader__text) {
  width: 100%;
}

.sidenav-collapsible__header :deep(.v-list-subheader__content) {
  padding-inline-end: 0;
}

.sidenav-collapsible__item :deep(.v-list-item__prepend) {
  margin-inline-end: -16px;
}
</style>

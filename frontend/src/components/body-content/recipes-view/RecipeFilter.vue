<template>
  <v-sheet :class="filterSheetClass">
    <v-row>
      <!-- Filter by name input -->
      <v-text-field 
        label="Filter Recipes" 
        placeholder="Filter by recipe name..." 
        v-model="filterString"
        variant="outlined">
        <template #append-inner>
          <v-menu
            v-model="filterMenuOpen"
            location="bottom"
            :close-on-content-click="false"
            @after-enter="focusFilterSearch">

            <!-- Data filter popup button -->
            <template #activator="{ props }">
              <v-btn
                color="highlight-text"
                variant="text"
                icon="mdi-filter-menu-outline"
                v-bind="props">
              </v-btn>
            </template>

            <!-- Select data filters menu -->
            <v-card width="320">

              <!-- Search data filters input -->
              <v-row class="mt-3 ml-2 mr-2">
                <v-text-field
                  ref="filterSearchRef"
                  v-model="filterSearch"
                  label="Search filters"
                  variant="outlined"
                  density="compact"
                  hide-details
                  :append-inner-icon="filterSearch ? 'mdi-close-circle' : undefined"
                  @click:append-inner.stop="clearFilterSearch"
                />
              </v-row>

              <!-- Subtitle & clear button -->
              <v-row class="ml-2 mr-2 mt-5 justify-space-between align-center">
                <span class="text-caption text-medium-emphasis">Select categories, tags, lists to filter by</span>
                <v-btn variant="text" size="x-small" color="error" :disabled="selectedFilters.length === 0" @click="clearSelected">Clear</v-btn>
              </v-row>

              <!-- Separator -->
              <v-divider class="mt-6"/>

              <!-- Available data filters list -->
              <v-list class="mt-0" density="compact">
                <v-list-item
                  v-for="option in filteredFilterOptions"
                  :key="option"
                  @click="toggleFilter(option)">
                  <v-list-item-title>{{ option }}</v-list-item-title>
                  <template #append>
                    <v-icon v-if="selectedFilters.includes(option)">mdi-check</v-icon>
                  </template>
                </v-list-item>
              </v-list>
            </v-card>
          </v-menu>
        </template>
      </v-text-field>
    </v-row>

    <!-- Selected data filter chips -->
    <v-row class="mt-0">
      <v-chip
        v-for="value in selectedFilters"
        :key="value"
        color="highlight-text"
        closable
        class="ma-1"
        size="small"
        prepend-icon="mdi-filter-variant"
        @click:close="removeFilter(value)">
        {{ value }}
      </v-chip>
    </v-row>
  </v-sheet>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useDisplay } from 'vuetify'
const filterString = ref('');
const filterMenuOpen = ref(false);
const selectedFilters = ref([]);
const filterSearch = ref('');
const filterSearchRef = ref(null);
const { mobile } = useDisplay();
const filterSheetClass = computed(() =>
  mobile.value ? 'mt-4 ml-2 mr-2 bg-transparent' : 'mt-4 ml-12 mr-12 bg-transparent'
);

const filterOptions = ref([
  'Recently Viewed',
  'Favorites',
  'Categories',
  'Tags',
  'Lists',
]);

const filteredFilterOptions = computed(() => {
  const search = filterSearch.value.trim().toLowerCase();
  if (!search) {
    return filterOptions.value;
  }
  return filterOptions.value.filter((option) =>
    option.toLowerCase().includes(search)
  );
});

const toggleFilter = (option) => {
  if (selectedFilters.value.includes(option)) {
    selectedFilters.value = selectedFilters.value.filter((item) => item !== option);
    return;
  }
  selectedFilters.value = [...selectedFilters.value, option];
};

const removeFilter = (option) => {
  selectedFilters.value = selectedFilters.value.filter((item) => item !== option);
};

const clearFilterSearch = () => {
  filterSearch.value = '';
};

const focusFilterSearch = () => {
  const input = filterSearchRef.value?.$el?.querySelector('input');
  input?.focus();
};

const clearSelected = () => {
  selectedFilters.value = [];
};
</script>

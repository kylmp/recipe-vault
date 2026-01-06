import { createApp } from 'vue'
import { vuetifyConfig } from './plugins/vuetify-config'
import { axiosConfig } from './plugins/axios-config'
import { createVuetify } from 'vuetify'
import { loadFonts } from './plugins/webfontloader'
import { createPinia } from 'pinia'
import RecipeVault from './RecipeVault.vue'

loadFonts();
const pinia = createPinia();
const vuetify = createVuetify(vuetifyConfig);

const photoMetadataUpdaterApp = createApp(RecipeVault);
photoMetadataUpdaterApp.use(pinia);
photoMetadataUpdaterApp.use(vuetify);
photoMetadataUpdaterApp.provide('axios', axiosConfig);

photoMetadataUpdaterApp.mount('#recipe-vault-app');

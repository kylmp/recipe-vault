import { createApp } from 'vue'
import { createRouter } from 'vue-router'
import { vuetifyConfig } from './plugins/vuetify-config'
import { axiosConfig } from './plugins/axios-config'
import { createVuetify } from 'vuetify'
import { loadFonts } from './plugins/webfontloader'
import { createPinia } from 'pinia'
import { routerConfig } from './plugins/router'
import RecipeVault from './RecipeVault.vue'

loadFonts();

const photoMetadataUpdaterApp = createApp(RecipeVault);

photoMetadataUpdaterApp.use(createPinia());
photoMetadataUpdaterApp.use(createVuetify(vuetifyConfig));
photoMetadataUpdaterApp.use(createRouter(routerConfig));

photoMetadataUpdaterApp.provide('axios', axiosConfig);

photoMetadataUpdaterApp.mount('#recipe-vault-app');

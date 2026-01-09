import { createApp } from 'vue';
import { createRouter } from 'vue-router';
import { createVuetify } from 'vuetify';
import { createPinia } from 'pinia';
import axios from 'axios';

import { vuetifyConfig } from './plugins/vuetify';
import { axiosConfig } from './plugins/axios';
import { routerConfig } from './plugins/router';
import { loadFonts } from './plugins/webfontloader';

import RecipeVault from './RecipeVault.vue';

loadFonts();

const photoMetadataUpdaterApp = createApp(RecipeVault);

photoMetadataUpdaterApp.use(createPinia());
photoMetadataUpdaterApp.use(createVuetify(vuetifyConfig));
photoMetadataUpdaterApp.use(createRouter(routerConfig));

photoMetadataUpdaterApp.provide('axios', axios.create(axiosConfig));

photoMetadataUpdaterApp.mount('#recipe-vault-app');

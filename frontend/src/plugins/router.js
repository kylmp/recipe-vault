import { createWebHistory } from 'vue-router'
import AppBody from '../components/AppBody.vue';

const routes = [
  {
    path: '/',
    name: 'recipes list',
    component: AppBody,
    props: route => ({
      recipeId: undefined
    }),
  },
  {
    path: '/recipe/:id-:slug',
    name: 'recipe details',
    component: AppBody,
    props: route => ({
      recipeId: route.params.id
    }),
  },
]

export const routerConfig = {
  history: createWebHistory(),
  routes,
};

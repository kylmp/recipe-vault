import { createWebHistory, RouteRecordRaw, RouterOptions } from 'vue-router'
import AppBody from '../components/AppBody.vue';

const routes: RouteRecordRaw[] = [
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
      recipeId: String(route.params.id)
    }),
  },
]

export const routerConfig: RouterOptions = {
  history: createWebHistory(),
  routes,
};

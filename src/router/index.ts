import { RouteRecordRaw, createRouter, createWebHistory } from 'vue-router';

import HomeView from '../views/Home.vue';
import SiteIframeView from '../views/Site.vue';
import AboutView from '../views/About.vue';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Home',
    component: HomeView,
  },
  {
    path: '/site/:siteName',
    name: 'site-iframe',
    component: SiteIframeView,
    props: true,
  },
  {
    path: '/about',
    name: 'About',
    component: AboutView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

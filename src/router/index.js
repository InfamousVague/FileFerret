import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home';
import Send from '@/components/Send';
import Receive from '@/components/Receive';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  base: process.env.ROUTER_PREFIX,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/send',
      name: 'send',
      component: Send,
    },
    {
      path: '/receive',
      name: 'receive',
      component: Receive,
    },
  ],
});

export default router;

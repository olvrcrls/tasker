'use strict';
import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router);

import Home from '../views/Home'

const routes = [
    { path: '/', component: Home },
];

const router = new Router({
    mode: 'history',
    routes
})

export default router;

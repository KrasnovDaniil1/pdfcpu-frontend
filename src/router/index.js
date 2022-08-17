import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    {
        path: '/',
        name: 'about',
        component: () => import('../views/About.vue'),
    },
    {
        path: '/addstamp',
        name: 'addstamp',
        component: () => import('../views/AddStamp.vue'),
    },
    {
        path: '/deletestamp',
        name: 'deletestamp',
        component: () => import('../views/DeleteStamp.vue'),
    },
    {
        path: '/collect',
        name: 'collect',
        component: () => import('../views/Collect.vue'),
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;

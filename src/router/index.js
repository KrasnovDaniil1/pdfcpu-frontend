import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    {
        path: '/',
        name: 'about',
        component: () => import('../views/About.vue'),
    },
    {
        path: '/addstamp',
        name: 'stamp',
        component: () => import('../views/AddStamp.vue'),
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;

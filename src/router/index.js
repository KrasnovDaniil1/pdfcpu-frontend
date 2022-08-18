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
    {
        path: '/crop',
        name: 'crop',
        component: () => import('../views/Crop.vue'),
    },
    {
        path: '/optimize',
        name: 'optimize',
        component: () => import('../views/Optimize.vue'),
    },
    {
        path: '/rotate',
        name: 'rotate',
        component: () => import('../views/Rotate.vue'),
    },
    {
        path: '/trim',
        name: 'trim',
        component: () => import('../views/Trim.vue'),
    },
    {
        path: '/split',
        name: 'split',
        component: () => import('../views/Split.vue'),
    },
    {
        path: '/merge',
        name: 'merge',
        component: () => import('../views/Merge.vue'),
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;

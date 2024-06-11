import { createRouter, createWebHistory } from 'vue-router';

import AppHomepage from './pages/AppHomepage.vue';
import AppFeatures from './pages/AppFeatures.vue';

const router = createRouter({	
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'homepage',
            component: AppHomepage
        },
        {
            path: '/features',
            name: 'features',
            component: AppFeatures
        }
    ]
});

export { router };
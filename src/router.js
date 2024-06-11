import { createRouter, createWebHistory } from 'vue-router';

import AppHomepage from './pages/AppHomepage.vue';
import AppFeatures from './pages/AppFeatures.vue';
import ProjectsList from './pages/ProjectsList.vue';
import ProjectDescription from './pages/ProjectDescription.vue';

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
        },
        {
            path: '/projects',
            name: 'projects',
            component: ProjectsList
        },
        {
            path: '/projects/:slug',
            name: 'project-description',
            component: ProjectDescription
        }
    ]
});

export { router };
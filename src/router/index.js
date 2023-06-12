import { createWebHistory, createRouter } from "vue-router";
import HomePage from '../views/HomePage.vue';
import Todos from '../views/Todos.vue';
import SearchPage from '../views/SearchPage.vue';
import ProfilePage from "@/views/ProfilePage.vue";
import ParametrsPage from "@/views/ParametrsPage.vue";
import SetttingsPage from "@/views/SetttingsPage.vue";

const routes = [{
        path: '/',
        name: 'Home',
        component: HomePage
    },
    {
        path: '/todos',
        name: 'Todos',
        component: Todos
    },
    {
        path: '/search',
        name: 'Search',
        component: SearchPage
    },
    {
        path: '/profile',
        name: 'Profile',
        component: ProfilePage
    },
    {
        path: '/parametrs',
        name: 'Parametrs',
        component: ParametrsPage
    },
    {
        path: '/settings',
        name: 'Settings',
        component: SetttingsPage
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
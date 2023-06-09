import { createWebHistory, createRouter } from "vue-router";
import HomePage from '../views/HomePage.vue';
import Todos from '../views/Todos.vue';
import SearchPage from '../views/SearchPage.vue'
import ProfilePage from "@/views/ProfilePage.vue";

const routes = [{
        path: '/',
        name: "Home",
        component: HomePage
    },
    {
        path: '/todos',
        name: "Todos",
        component: Todos
    },
    {
        path: '/search',
        name: "Search",
        component: SearchPage
    },
    {
        path: '/profile',
        name: "Profile",
        component: ProfilePage
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
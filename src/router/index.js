import { createWebHistory, createRouter } from "vue-router";
import HomePage from '../views/HomePage.vue';
import Todos from '../views/Todos.vue';
const routes = [{
        path: '/',
        name: "Home",
        component: HomePage
    },
    {
        path: '/todos',
        name: "Todos",
        component: Todos
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
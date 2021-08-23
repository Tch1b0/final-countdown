import { createRouter, createWebHistory } from "@ionic/vue-router";
import { RouteRecordRaw } from "vue-router";
import Main from "../views/Main.vue";
import Share from "../views/Share.vue";
import Finished from "../views/Finished.vue";

const routes: Array<RouteRecordRaw> = [
    {
        path: "/",
        component: Main,
    },
    {
        path: "/share",
        component: Share,
    },
    {
        path: "/finished",
        component: Finished,
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;

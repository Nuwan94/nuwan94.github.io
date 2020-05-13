import Vue from "vue";
import Router from "vue-router";
import DashboardLayout from "@/layout/DashboardLayout";
import Profile from "./views/Profile.vue";
import Stats from "./views/Stats.vue";
// import Soon from "./views/Soon.vue";
import NotFound from "./views/NotFound.vue";

Vue.use(Router);

export default new Router({
    linkExactActiveClass: "active",
    mode: "hash",
    base: "/",
    routes: [{
        path: "/",
        redirect: "profile",
        component: DashboardLayout,
        children: [{
                path: "/",
                redirect: "/profile",
            },
            {
                path: "/profile",
                name: "profile",
                component: Profile,
            },
            {
                path: "/stats",
                name: "stat",
                component: Stats,
            },
            // {
            //     path: "/resume",
            //     name: "resume",
            //     component: Soon,
            // },
            // {
            //     path: "/portfolio",
            //     name: "portfolio",
            //     component: Soon,
            // },
            // {
            //     path: "/contact",
            //     name: "contact",
            //     component: Soon,
            // },
            // {
            //     path: "/hobbies",
            //     name: "hobbies",
            //     component: Soon,
            // },
            {
                path: "*",
                name: "notfound",
                component: NotFound,
            },
        ],
    }, ],
});
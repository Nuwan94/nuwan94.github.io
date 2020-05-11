import Vue from "vue";
import Router from "vue-router";
import DashboardLayout from "@/layout/DashboardLayout";
// import AuthLayout from "@/layout/AuthLayout";
Vue.use(Router);

export default new Router({
    linkExactActiveClass: "active",
    mode: "history",
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
                component: () =>
                    import ("./views/Profile.vue"),
            },
            {
                path: "/stats",
                name: "stat",
                component: () =>
                    import ("./views/Stats.vue"),
            },
            {
                path: "/resume",
                name: "resume",
                component: () =>
                    import ("./views/Soon.vue"),
            },
            {
                path: "/portfolio",
                name: "portfolio",
                component: () =>
                    import ("./views/Soon.vue"),
            },
            {
                path: "/contact",
                name: "contact",
                component: () =>
                    import ("./views/Soon.vue"),
            },
            {
                path: "/hobbies",
                name: "hobbies",
                component: () =>
                    import ("./views/Soon.vue"),
            },
            {
                path: "*",
                name: "notfound",
                component: () =>
                    import ("./views/NotFound.vue"),
            },
        ],
    }, ],
});
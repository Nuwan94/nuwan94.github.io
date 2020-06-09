import Vue from "vue";
import Router from "vue-router";
import DashboardLayout from "@/layout/DashboardLayout";
import Profile from "./views/Profile";
import Stats from "./views/Stats";
import Education from "./views/Education";
import Experience from "./views/Experience";

import Portfolio from "./views/Portfolio";
import Contact from "./views/Contact";
import NotFound from "./views/NotFound";

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
            {
                path: "/education",
                name: "education",
                component: Education,
            },
            {
                path: "/portfolio",
                name: "portfolio",
                component: Portfolio,
            },
            {
                path: "/contact",
                name: "contact",
                component: Contact,
            },
            {
                path: "/experience",
                name: "experience",
                component: Experience,
            },
            {
                path: "*",
                name: "notfound",
                component: NotFound,
            },
        ],
    }, ],
    scrollBehavior() {
        return { x: 0, y: 0 };
    },
});
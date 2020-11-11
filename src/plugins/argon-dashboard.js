import "@/assets/vendor/nucleo/css/nucleo.css";
import "@/assets/scss/argon.scss";
import "vue-github-buttons/dist/vue-github-buttons.css";
import "@/assets/vendor/nsa94/style.css";

import tooltip from "bootstrap-vue/es/components/tooltip";
import globalComponents from "./globalComponents";
import globalDirectives from "./globalDirectives";
import SidebarPlugin from "@/components/SidebarPlugin/index";
import NotificationPlugin from "@/components/NotificationPlugin/index";

export default {
    install(Vue) {
        Vue.use(globalComponents);
        Vue.use(globalDirectives);
        Vue.use(SidebarPlugin);
        Vue.use(NotificationPlugin);
        Vue.use(tooltip);
    },
};
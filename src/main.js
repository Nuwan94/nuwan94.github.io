/*!

=========================================================
* Vue Argon Dashboard - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Vue from "vue";

import App from "./App.vue";
import router from "./router";
import store from "./store/";

// import "./registerServiceWorker";
import ArgonDashboard from "./plugins/argon-dashboard";
import Vuelidate from "vuelidate";
import VueMoment from "vue-moment";

Vue.use(ArgonDashboard);
Vue.use(Vuelidate);
Vue.use(VueMoment);

Vue.config.productionTip = false;

new Vue({
    store,
    router,
    render: (h) => h(App),
    created() {
        this.$store.dispatch("loadAPIData");
    },
}).$mount("#app");
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import * as VueGoogleMaps from "vue2-google-maps";

import "@fortawesome/fontawesome-free/css/all.css";
import "@fortawesome/fontawesome-free/js/all.js";

Vue.config.productionTip = false;

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(VueGoogleMaps, {
    load: {
        key: "AIzaSyCPMUm4ZnEg8LzgvtjGa5cQX0zaiIrz6oI",
        libraries: "places",
    },
});

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

new Vue({
    router,
    render: (h) => h(App),
}).$mount("#app");
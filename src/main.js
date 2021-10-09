import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import store from "./store";

import router from "@/routes"
import {capitalize} from "@/filters"

Vue.filter('capitalize', capitalize)
Vue.config.productionTip = false;

new Vue({
  router,
  vuetify,
  render: (h) => h(App),
  store,
}).$mount("#app");

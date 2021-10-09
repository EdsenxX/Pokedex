import Vue from "vue";
import Router from "vue-router";

import Home from "@/views/Home";
import Pokemon from "@/views/Pokemon"

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: '/pokemon/:id',
      name: 'pokemon',
      component: Pokemon
    }
  ],
});

import Vue from "vue";
import VueRouter from "vue-router";
import Menu from "../views/Menu.vue";
import About from "../views/About.vue";
import Cart from "../views/Cart.vue";
import Nav from "../views/Nav.vue";
import Profile from "../views/Profile.vue";
import Status from "../views/Status.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Menu",
    component: Menu,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/cart",
    name: "Cart",
    component: Cart,
  },
  {
    path: "/status",
    name: "Status",
    component: Status,
  },
  {
    path: "/nav",
    name: "Nav",
    component: Nav,
  },
  {
    path: "/profile",
    name: "Profile",
    component: Profile,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;

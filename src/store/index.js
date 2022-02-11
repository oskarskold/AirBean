import Vue from "vue";
import Vuex from "vuex";
import menu from "../assets/data/menu.json";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    menu: menu,

    loginInfo: {
      name: "",
      email: "",
    },
    counter: 0,
  },
  mutations: {
    setCounter(state) {
      state.counter++;
    },
  },
  actions: {
    addToCart(context) {
      context.commit("setCounter");
    },
  },
  modules: {},
});

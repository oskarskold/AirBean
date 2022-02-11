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
    orderList: [],
  },
  mutations: {
    addToList(state, order) {
      state.orderList.push(order);
      state.counter = state.orderList.length
      console.log(state.orderList);

    },
  },
  actions: {
    addOrder(context, order) {
      context.commit("addToList", order);
    },
  },
  modules: {},
});

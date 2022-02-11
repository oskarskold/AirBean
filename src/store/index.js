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
      state.counter = state.orderList.length;
      // console.log(state.orderList);
    },
  },
  getters: {
    setTotal(state) {
      let total = 0;
      for (var order in state.orderList) {
        console.log(order);
        total += order.price
      }
      return total;
    },
  },
  actions: {
    addOrder(context, order) {
      context.commit("addToList", order);
    },
  },
  modules: {},
});

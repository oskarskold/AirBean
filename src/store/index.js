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
      // state.counter = order.amount;
      console.log(state.orderList);
    },
  },
  getters: {
    setTotal(state) {
      let total = 0;
      for (let order of state.orderList) {
        console.log(order);
        total += order.price * order.amount;
      }
      return total;
    },
  },
  actions: {
    addOrder(context, order) {
      if (context.state.orderList.includes(order)) {
        order.amount++;
        context.state.counter += order.amount;
      } else {
        context.commit("addToList", order);
      }
    },
  },
  modules: {},
});

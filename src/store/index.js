import { createStore } from "vuex";

export default createStore({
  state() {
    count;
  },
  getters: {},
  mutations: {
    increment(state) {
      state.count++;
    },
  },
  actions: {
    increment(context) {
      commit("increment");
    },
  },
});

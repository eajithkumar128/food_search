import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    foodResults: [],
    selection: -1
  },
  mutations: {
    search_food(state, response) {
      state.foodResults = response;
    },
    setSelection(state, payload) {
      state.selection = payload;
    }
  },
  actions: {
    action_search_food({ commit }) {
      axios.get("http://starlord.hackerearth.com/recipe").then((response) => {
        commit("search_food", response.data);
      });
    }
  },
  modules: {}
});

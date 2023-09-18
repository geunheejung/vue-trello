import Vue from "vue";
import Vuex from "vuex";
import { board, setAuthInHeader, auth } from "../api";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    isAddModal: false,
    boardList: [],
    token: null
  },
  getters: {
    isAuth(state) {
      return !!state.token;
    }
  },
  mutations: {
    TOGGLE_ADD_MODAL(state, isAddModal) {
      state.isAddModal = !state.isAddModal;
    },
    SET_BOARD_ITEM(state, item) {
      state.boardList.push(item);
    },
    SET_BOARD(state, boardList) {
      state.boardList = boardList;
    },
    LOGIN(state, token) {
      if (!token) return;

      state.token = token;
      localStorage.setItem("token", token);
      setAuthInHeader(token);
    },
    LOGOUT(state, token) {
      state.token = null;
      localStorage.setItem("token", null);
      setAuthInHeader(null);
    }
  },
  actions: {
    FETCH_BOARD(context) {
      board.fetch().then(data => {
        context.commit("SET_BOARD", data);
      });
    },
    ADD_BOARD(context, { title }) {
      board.add(title).then(res => {
        context.dispatch("FETCH_BOARD");
        context.commit("TOGGLE_ADD_MODAL");
      });
    },
    LOGIN({ commit }, { email, password }) {
      return auth.login(email, password).then(res => {
        commit("LOGIN", res.accessToken);
      });
    }
  }
});

export default store;

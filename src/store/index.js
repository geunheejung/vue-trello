import Vue from "vue";
import Vuex from "vuex";
import { board } from "../api";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    isAddModal: false,
    boardList: []
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
    }
  }
});

export default store;

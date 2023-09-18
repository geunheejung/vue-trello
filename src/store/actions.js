import { auth, board } from "../api";

export default {
  FETCH_BOARD(context) {
    board.fetch().then(data => {
      context.commit("SET_BOARD", data.list);
    });
  },
  FETCH_BOARD_ITEM(context, { id }) {
    board.fetch(id).then(data => {
      context.commit("SET_BOARD_ITEM", data.item);
    });
  },
  ADD_BOARD(context, { title }) {
    return board.add(title).then(res => {
      context.dispatch("FETCH_BOARD");
      context.commit("TOGGLE_ADD_MODAL");

      return res.item;
    });
  },
  LOGIN({ commit }, { email, password }) {
    return auth.login(email, password).then(res => {
      commit("LOGIN", res.accessToken);
    });
  }
};

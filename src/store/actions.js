import { auth, board } from "../api";

export default {
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
};

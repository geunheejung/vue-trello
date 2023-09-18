import { setAuthInHeader } from "../api";

export default {
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
};

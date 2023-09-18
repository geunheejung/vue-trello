<template>
  <Modal v-bind:isShowModal="isAddModal">
    <div slot="header">
      <h2>
        Create new board
        <a
          href=""
          class="modal-default-button"
          v-on:click.prevent="$emit('onClose')"
          >&times;</a
        >
      </h2>
    </div>
    <div slot="body">
      <form id="add-board-form" @submit.prevent="onSubmitCreateBoard">
        <input
          class="form-control"
          type="text"
          v-model="inputBoardTitle"
          ref="inputBoardTitle"
        />
      </form>
    </div>
    <div slot="footer">
      <button
        class="btn"
        :class="{ 'btn-success': isValidInput }"
        type="submit"
        form="add-board-form"
        :disabled="!isValidInput"
      >
        Create Board
      </button>
    </div>
  </Modal>
</template>

<script>
import { mapState } from "vuex";
import Modal from "./Modal.vue";
import { board } from "../api";

export default {
  components: { Modal },

  data() {
    return {
      inputBoardTitle: ""
    };
  },
  computed: {
    ...mapState(["isAddModal"]),
    isValidInput() {
      return !!this.inputBoardTitle.trim().length;
    }
  },
  updated() {
    if (this.isAddModal) {
      this.$refs.inputBoardTitle.focus();
    } else {
      this.inputBoardTitle = "";
    }
  },
  methods: {
    onSubmitCreateBoard() {
      this.$store.dispatch({ type: "ADD_BOARD", title: this.inputBoardTitle });
    }
  }
};
</script>

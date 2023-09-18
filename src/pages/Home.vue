<template>
  <div>
    <div class="home-title">Personal Boards</div>
    <div class="board-list">
      <div
        class="board-item"
        v-for="(board, i) in boardList"
        :key="i"
        :data-bgcolor="board.bgColor"
      >
        <router-link :to="`/b/${board.id}`">
          <div class="board-item-title">{{ board.title }}</div>
        </router-link>
      </div>
      <div class="board-item">
        <a class="new-board-btn" href="" @click.prevent="onClickCreateBoard">
          Create new board...
        </a>
      </div>
    </div>
    <!-- <AddBoard v-if="isAddBoard" /> -->
  </div>
</template>

<script>
import { board } from "../api";
// import AddBoard from "./AddBoard.vue";

export default {
  data() {
    return {
      boardList: []
    };
  },
  updated() {
    Array.from(document.querySelectorAll(".board-item")).forEach(el => {
      el.style.backgroundColor = el.dataset.bgcolor || "#ddd";
    });
  },
  // components: { AddBoard },
  created() {
    board.fetch().then(res => {
      debugger;
      this.boardList = res;
    });
  },
  methods: {
    onClickCreateBoard() {}
  }
};
</script>

<style>
.home-title {
  padding: 10px;
  font-size: 18px;
  font-weight: bold;
}
.board-list {
  padding: 10px;
  display: flex;
  flex-wrap: wrap;
}
.board-item {
  width: 23%;
  height: 100px;
  margin: 0 2% 20px 0;
  border-radius: 3px;
}
.board-item a {
  text-decoration: none;
  display: block;
  width: 100%;
  height: 100%;
}
.board-item a:hover,
.board-item a:focus {
  background-color: rgba(0, 0, 0, 0.1);
  color: #666;
}
.board-item-title {
  color: #fff;
  font-size: 18px;
  font-weight: 700;
  padding: 10px;
}
.board-item a.new-board-btn {
  display: table-cell;
  vertical-align: middle;
  text-align: center;
  height: 100px;
  width: inherit;
  color: #888;
  font-weight: 700;
}
</style>

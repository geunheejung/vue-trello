<template>
  <div>
    Home
    <ul>
      <li v-for="item in [1, 2, 3]" :key="item">
        <router-link :to="`/b/${item}`">Board {{ item }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";
import { board } from "../api";
export default {
  data() {
    return {
      loading: true,
      boards: []
    };
  },
  created() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      this.loading = true;

      board
        .fetch()
        .then(data => {
          this.boards = data;
        })
        .finally(() => {
          this.loading = false;
        });
    }
  }
};
</script>

<style></style>

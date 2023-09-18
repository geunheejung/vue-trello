<template>
  <div>
    Board
    <div v-if="loading">loading...</div>
    <div v-else>
      {{ bid }}
      <ul>
        <li v-for="item in [1, 2, 3]" :key="item">
          <router-link :to="`/b/${bid}/c/${item}`">Card {{ item }}</router-link>
        </li>
      </ul>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      bid: 0,
      loading: true
    };
  },
  watch: {
    $route: {
      handler: "fetchData",
      immediate: true
    }
  },
  methods: {
    fetchData() {
      this.loading = true;
      setTimeout(() => {
        this.loading = false;
        this.cid = this.$route.params.bid;
      }, 500);
    }
  }
};
</script>

<style></style>

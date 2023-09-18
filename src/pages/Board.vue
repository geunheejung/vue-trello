<template>
  <div>
    Board
    <ul>
      <li v-for="item in [1, 2, 3]" :key="item">
        <router-link :to="`/b/${bid}/c/${item}`">Board {{ item }}</router-link>
      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      bid: 0
    };
  },
  watch: {
    $route() {
      this.bid = this.$route.params.bid;
    }
  },
  created() {
    this.bid = this.$route.params.bid;
  }
};
</script>

<style></style>

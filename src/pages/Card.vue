<template>
  <div>
    <h1>CARD</h1>
    <div v-if="loading">loading...</div>
    <div v-else>cid: {{ cid }}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cid: 0,
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
        this.cid = this.$route.params.cid;
      }, 500);
    }
  }
};
</script>

<style></style>

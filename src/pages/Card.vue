<template>
  <div>
    <h1>CARD</h1>
    cid: {{ cid }}
  </div>
</template>

<script>
export default {
  data() {
    return {
      cid: 0
    };
  },
  watch: {
    $route() {
      this.cid = this.$route.params.cid;
    }
  },
  created() {
    this.cid = this.$route.params.cid;
  }
};
</script>

<style></style>

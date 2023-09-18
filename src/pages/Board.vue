<template>
  <div>
    Board
    {{ this.$route.params.bid }}
  </div>
</template>

<script>
export default {
  created() {
    const {
      $route: {
        params: { bid }
      }
    } = this;
    console.log(bid);
  }
};
</script>

<style></style>

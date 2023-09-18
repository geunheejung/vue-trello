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
export default {
  data() {
    return {
      loading: true,
      apiRes: {}
    };
  },
  created() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      const req = new XMLHttpRequest();

      req.open("GET", "http://localhost:3000/health");

      req.send();

      req.addEventListener("load", () => {
        this.loading = true;
        this.apiRes = {
          status: req.status,
          statusText: req.statusText,
          response: JSON.parse(req.response)
        };
      });
    }
  }
};
</script>

<style></style>

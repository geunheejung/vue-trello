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
      this.loading = true;
      axios
        .get(`http://localhost:3000/health`)
        .then(res => {
          this.apiRes = {
            status: res.status,
            statusText: res.statusText,
            response: res.data
          };
        })
        .finally(() => {
          this.loading = false;
        });
    }
  }
};
</script>

<style></style>

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
export default {};
</script>

<style></style>

<script>
import Header from "/src/components/common/Header.vue";
export default {
  name: "HelloWorld",
  components: {
    Header,
  },
};
</script>

<template>
  <Header></Header>
  <div>
    <router-link to="/">Home</router-link>
    <router-view />
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>

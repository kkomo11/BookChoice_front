<script>
import Header from "/src/components/common/Header.vue";
import Footer from "/src/components/common/Footer.vue";
export default {
  name: "HelloWorld",
  components: {
    Header,
    Footer,
  },
};
</script>

<template>
  <Header></Header>
  <div>
    <router-link to="/">Home</router-link>
    <router-view />
  </div>
  <Footer></Footer>
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

<template>
  <div id="nav">
    <img alt="Vue logo" src="../assets/logo.png" />
    <div>
      <div class="menu">
        <router-link to="/">Home</router-link>
        <router-link to="/about">Discover</router-link>
        <router-link to="/register">Register</router-link>
        <i class="fas fa-search" id="search"></i>
      </div>
      <input type="checkbox" id="check" />
      <label for="check">
        <i class="fas fa-bars" id="btn"></i>
        <i class="fas fa-times" id="cancel"></i>
      </label>
    </div>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  //   props: ["name", "logoImg", "navLinks"],
};
</script>

<style lang="scss" scoped>
@import "../scss/variables.scss";
</style>

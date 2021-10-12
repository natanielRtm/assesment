<template>
  <div class="header">
    <div id="nav">
    <img alt="Vue logo" src="../assets/logo.png" />
    <div>
      <div class="menu">
        <a href="#" class="target" >Home</a>
        <a href="#discover" class="target">Discover</a>
        <a href="#map-box" class="target">Register</a>
        <i class="fas fa-search" id="search"></i>
      </div>
      <input type="checkbox" id="check" />
      <label for="check">
        <i class="fas fa-bars" id="btn"></i>
        <i class="fas fa-times" id="cancel"></i>
      </label>
    </div>
  </div>
  </div>
</template>

<script>
export default {
  name: "Navbar",

};

</script>

<style lang="scss" scoped>
@import "../scss/variables.scss";
</style>

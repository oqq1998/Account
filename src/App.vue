<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">

  @import "~@/assets/style/helper.scss";
  @import "~@/assets/style/reset.scss";

  *{
    margin: 0;padding: 0;
    box-sizing: border-box;
  }
  body{
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #333;
    font-family: $font-hei;
    font-size: 16px;
  }
</style>

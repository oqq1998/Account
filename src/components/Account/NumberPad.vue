<template>
  <div class="numberPad">
    <div class="output">100</div>
    <div class="buttons">
      <button>1</button>
      <button>2</button>
      <button>3</button>
      <button>+</button>
      <button>4</button>
      <button>5</button>
      <button>6</button>
      <button>-</button>
      <button>7</button>
      <button>8</button>
      <button>9</button>
      <button class="ok">确认</button>
      <button>.</button>
      <button class="zero">0</button>
      <button><Icon name="Delete"/></button>
    </div>
  </div>
</template>

<script lang="ts">
  export default {
    name: 'NumberPad'
  };
</script>

<style lang="scss" scoped>
  @import "~@/assets/style/helper.scss";
  .numberPad {
    .output {
      @extend %clearFix;
      @extend %innerShadow;
      font-size: 34px;
      font-family: Consolas, monospace;
      padding: 8px 20px;
      text-align: right;
      height: 64px;
    }
    .buttons {
      @extend %clearFix;
      > button {
        .icon{
            width: 36px;
            height: 36px;
        }
        width: 25%;
        height: 64px;
        float: left;
        border: none;
        color:white;
        font-size: 18px;
        display: flex;
        justify-content: center;
        align-items: center;
        &.ok {
          height: 64*2px;
          float: right;
        }
        &:nth-child(12){
            background: $themeColor;
        }
        &:nth-child(15){
            background: lighten($themeColor,5%);
        }
        &:nth-child(14),&:nth-child(11),&:nth-child(8){
            background: lighten($themeColor,5%*2);
        }
        &:nth-child(4),&:nth-child(7),&:nth-child(10),&:nth-child(13){
            background: lighten($themeColor,5%*3);
        }
        &:nth-child(3),&:nth-child(6),&:nth-child(9){
            background: lighten($themeColor,5%*4);
        }
        &:nth-child(2),&:nth-child(5){
            background: lighten($themeColor,5%*5);
        }
        &:nth-child(1){
            background: lighten($themeColor,5%*6);
        }
      }
    }
  }
</style>
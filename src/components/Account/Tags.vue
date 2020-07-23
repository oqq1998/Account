<template>
  <div class="tags">
    <ul class="current">
        <li>购物</li>
        <li>交通</li>
        <li>餐饮</li>
        <li>居住</li>
        <li>餐饮</li>
        <li>居住</li>
        <li>餐饮</li>
        <li>居住</li>
    </ul>
    <div class="new">
      <button>新增标签</button>
    </div>
  </div>
</template>

<script lang="ts">
  export default {
    name: 'Tags'
  };
</script>

<style lang="scss" scoped>

    @import "~@/assets/style/helper.scss";

  .tags {
    @extend %clearFix;
    overflow: auto;
    font-size: 12px;
    padding: 16px;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    > .current {
      @extend %clearFix;
      display: flex;
      float: left;
      white-space: nowrap;
      flex-direction: row;
      flex-wrap: wrap;
      > li {
        background: #d9d9d9;
        $h: 24px;
        height: $h;
        line-height: $h;
        border-radius: $h/2;
        padding: 0 16px ;
        margin-right: 8px;
        margin-top: 8px;
      }
    }
    > .new {
      padding-top: 16px;
      button {
        background: transparent;
        border: none;
        color: #999;
        border-bottom: 1px solid;
        padding: 0 4px;
      }
    }
  }
</style>
<template>
  <div>
    <ul class="types">
      <li v-bind:class="type==='-'&&'selected'" @click="selectType('-')">支出</li>
      <li v-bind:class="type==='+'&&'selected'" @click="selectType('+')">收入</li>
    </ul>
  </div>
</template>

<script lang="ts">
    import Vue from 'vue'
    import {Component} from 'vue-property-decorator'

    @Component  
    export default class Types extends Vue{
        type = '-' //'-'表示支出，'+'表示收入
        selectType(type: string){
            if(type!=='-'&&type!=='+'){
                throw new Error('type is unknown')
            }
            this.type=type
        }
    }
</script>

<style lang="scss" scoped>
    @import "~@/assets/style/helper.scss";
    .types {
        background: $themeColor;
        display: flex;
        text-align: center;
        justify-content: center;
        > li {
            width: 88px;
            height: 56px;
            display: flex;
            justify-content: center;
            padding-top: 20px;
            position: relative;
            color:white;
            font-size: 18px;
        &.selected::after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 4px;
            background: lighten($themeColor,40%);
        }
    }
  }
</style>
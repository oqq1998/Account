<template>
    <div class="nav">     
        <router-link to="/labels" class="item" active-class="selected">
            <Icon name="Labels"/>
            标签
        </router-link>
        <router-link to="/account" class="item" active-class="selected">
            <Icon name="Account"/>
            记账
        </router-link>
        <router-link to="/statistics" class="item" active-class="selected">
            <Icon name="Statistics"/>
            统计
        </router-link>
    </div>
</template>

<script lang="ts">
    export default {
        name:"Nav"
    }
</script>

<style lang="scss" scoped>

    @import "~@/assets/style/helper.scss";
    @import "~@/assets/style/reset.scss";

    .nav{
        display: flex;
        flex-direction:row;
        font-size: 13px;
        box-shadow: 0 0 4px $shadow;
    }
    .item{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width:33.3333%;
        padding: 4.8px 0px 4px;
        color:#5D656B;
        .icon{
            width: 28px;
            height: 28px;
        }
    }
    .item.selected{
        color: $themeColor;
    }
</style>
<template>
    <div class="nav">     
        <router-link to="/labels" class="item">
            <Icon name="Labels"/>
            标签
        </router-link>
        <router-link to="/account" class="item">
            <Icon class="accountIcon" name="Account"/>
            记账
        </router-link>
        <router-link to="/statistics" class="item">
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
    .nav{
        display: flex;
        flex-direction:row;
        font-size: 13px;
        box-shadow: 0 0 3px rgba(0, 0, 0, 0.25);
    }
    .item{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width:33.3333%;
        padding: 4px 0px 4px;
        color:#5D656B;
        .icon{
            width: 24px;
            height: 24px;
            color:#3771bb;
        }
        .accountIcon{
            width:26px;
            height:26px;
        }
    }
</style>
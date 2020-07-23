<template>
    <div class="nav-wrapper">
        <!-- <header>我的记账本</header> -->
        <div class="content">
            <slot/>
        </div>
        <Nav/>
    </div>
</template>

<script lang="ts">
    export default {
        name:"Layout"
    }
</script>

<style lang="scss" scoped>
    @import "~@/assets/style/helper.scss";
    // header{
    //     display: flex;
    //     padding: 10px;
    //     background-color: $themeColor;
    //     color:white;
    //     box-shadow: 0 0 4px $shadow;
    // }
    .nav-wrapper{
        display: flex;
        flex-direction: column;
        height: 100vh;
    }
    .content{
        overflow: auto;
        flex-grow: 1;
        display: flex;
        flex-direction: column;
        background: rgb(250,250,250);
        overflow: hidden;
    }
</style>
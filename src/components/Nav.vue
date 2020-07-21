<template>
    <div class="nav">     
        <router-link to="/labels">
            <!-- <svg>
                <use xlink:href="#Labels"/>
            </svg> -->
            标签
        </router-link> | 
        <router-link to="/account">
            记账
        </router-link> | 
        <router-link to="/statistics">
            统计
        </router-link>
    </div>
</template>

<script lang="ts">
    // import x from '@/assets/icons/Labels.svg'
    export default {
        name:"Nav"
    }
</script>

<style lang="scss" scoped>

</style>
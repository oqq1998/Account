<template>
    <svg class="icon">
        <use :xlink:href="'#'+name"/>
        <!-- 相当于<use v-bind:xlink:href="‘#’+name"/> -->
        <!-- href后面的冒号接收的是字符串，不能在变量name前面加# -->
    </svg>
</template>

<script lang="ts">
    const importAll = (requireContext: __WebpackModuleApi.RequireContext) => requireContext.keys().forEach(requireContext);
    try {importAll(require.context('../assets/icons', true, /\.svg$/));} catch (error) {console.log(error);}
    export default{
        props:['name'],
        name:"Icon",
    }
</script>

<style lang="scss" scoped>
    .icon {
        width: 1em; 
        height: 1em;
        vertical-align: -0.15em;
        fill: currentColor;
        overflow: hidden;
    }
</style>
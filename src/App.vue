<template>
    <div id="app">
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: 'app',
    }
</script>

<style lang="less">
    * {
        padding: 0;
        margin: 0;
        outline: none;
        box-sizing: border-box;
    }

    #app {
        background-color: #222d32;
    }

    a {
        color: #3c8dbc;
        text-decoration: none;
    }

</style>

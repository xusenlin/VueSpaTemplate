<template>
    <div class="menu">
        menu
        con
        <router-view></router-view>
    </div>
</template>

<script>
    import Menu from '~/menu/index';

    export default {
        data() {
            return {
                menu: Menu,
            };
        },
        methods: {
            sidebarToggle() {
            },

        },
        mounted: function () {

        },
        components: {

        },
    }
</script>
<style lang="less">
    .menu {

    }
</style>
<template>
    <div class="container">
        <div>board container</div>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: "board",
        created: function() {
            this.$store.dispatch('getCategory');
            this.$store.dispatch('getList');
        }
    }
</script>

<style scoped lang="less">
    .container {

    }
</style>

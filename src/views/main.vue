<template>
    <div class="container">
        <!-- 여기서 전부 조합 예정 -->
        <div>main page</div>
        <List></List>
        <Advertisement></Advertisement>
    </div>
</template>

<script>
    import List from '../components/list';
    import Advertisement from "../components/advertisement";

    export default {
        name: "main",
        components: {
            List,
            Advertisement,
        }
    }
</script>

<style scoped>

</style>

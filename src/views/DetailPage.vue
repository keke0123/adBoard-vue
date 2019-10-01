<template>
    <div>
        detail page {{ no }}
        <div>title : {{ list.title }}</div>
        <div>email : {{ list.email }}</div>
        <div>작성일 : {{ dateFormat(list.updated_at) }}</div>
        <div>글내용 : {{ list.contents }}</div>
        <button class="btn btn-success" @click="goBack()">뒤로가기</button>
    </div>
</template>

<script>
    export default {
        name: "DetailPage",
        data: function() {
            return {
                no: this.$route.params.no
            }
        },
        computed: {
            list: {
                get: function() {
                    return this.$store.getters.detailList(this.no);
                }
            }
        },
        methods: {
            dateFormat: function(date) {
                return this.$moment(date, 'YYYY-MM-DD HH:mm:ss').format('YYYY-MM-DD');
            },
            goBack: function() {
                this.$router.go(-1);
            }
        },
        created: function() {
            console.log('list', this.list);
            // console.log('router', this.$route);
        }
    }
</script>

<style scoped lang="less">

</style>

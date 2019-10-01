<template>
    <div>
        <template v-if="list">
            <div class="detail-box">
                <div>no : {{ no }}</div>
                <div>title : {{ list.title }}</div>
                <div>email : {{ list.email }}</div>
                <div>작성일 : {{ dateFormat(list.updated_at) }}</div>
                <div>글내용 : {{ list.contents }}</div>
            </div>
        </template>
        <template v-if="replies">
            <div class="comment-box" v-for="(comment, index) in replies" :key="index">
                comment : {{ comment.contents }}
            </div>
        </template>
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
            // list: {
            //     get: function() {
            //         return this.$store.getters.detailList(this.no);
            //     }
            // }
            list: {
                get: function() {
                    // console.log(this.$store.state.detail);
                    return this.$store.state.detail.article;
                }
            },
            replies: {
                get: function() {
                    return this.$store.state.detail.replies;
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
            // console.log('list', this.list);
            // console.log('router', this.$route);
            this.$store.dispatch('getDetail', this.no);
            // console.log('detail', this.$store.state.detail);
        }
    }
</script>

<style scoped lang="less">
    .detail-box {
        border: 1px solid #2c3e50;

        div {
            text-align: left;
            &:last-child {
                margin-top: 10px;
            }
        }
    }
    .comment-box {
        border: 1px solid darkcyan;
        text-align: left;
    }
</style>

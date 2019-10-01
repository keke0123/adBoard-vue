<template>
    <div class="container" @click="moveDetailPage()">
        <div class="head">
            <div class="title">{{ item.title }}</div>
            <div class="no">{{ item.no }}</div>
        </div>
        <div class="body">
            <div class="body-head">
                <div class="email">{{ item.email }}</div>
                <div>&nbsp;|&nbsp;</div>
                <div class="createdTime">{{ dateFormat(item.updated_at) }}</div>
            </div>
            <div class="body-title">
                {{ item.title }}
            </div>
            <div class="body-content">
                {{ item.contents | strFormat(200) }}
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "list",
        props: ['item'],
        methods: {
            dateFormat: function(date) {
                return this.$moment(date, 'YYYY-MM-DD HH:mm:ss').format('YYYY-MM-DD');
            },
            moveDetailPage() {
                // console.log('go detail page');
                this.$router.push(`/detail/${this.item.no}`);
            },
        },
        created: function() {
            // console.log('item', this.item);
        }
    }
</script>

<style scoped lang="less">
    .container {
        border: 1px solid tomato;
        display: flex;
        flex-direction: column;
        padding: 0;
        cursor: pointer;

        .head {
            display: flex;
            justify-content: space-between;
            border-bottom: 1px solid tomato;
        }

        .body {
            display: flex;
            flex-direction: column;

            .body-head {
                display: flex;
                flex-direction: row;
            }
            .body-title {
                display: flex;
                justify-content: flex-start;
            }
            .body-content {
                text-align: left;
                word-break: break-all;
            }
        }
    }
</style>

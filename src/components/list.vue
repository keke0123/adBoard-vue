<template>
    <div class="container">
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
                {{ item.title | strFormat }}
            </div>
            <div class="body-content">
                {{ item.contents }}
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
            }
        },
        created: function() {
            console.log('item', this.item);
        }
    }
</script>

<style scoped lang="less">
    .container {
        border: 1px solid tomato;
        display: flex;
        flex-direction: column;
        padding: 0;

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

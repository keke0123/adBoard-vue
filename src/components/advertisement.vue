<template>
    <div class="container">
<!--        advertisement-->
        <div class="head">
            Sponsored
        </div>
        <div class="body">
            <div class="img-box">
                <img class="img" :src="url+item.img" alt="">
            </div>
            <div class="content-box">
                <div class="title">
                    {{ item.title }}
                </div>
                <div class="content">
                    {{ item.contents | strFormat(100) }}
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "advertisement",
        props: [
            'item'
        ],
        data: function (){
            return {
                url: 'http://comento.cafe24.com/public/images/'
            }
        },
        created: function() {
            // console.log('ad item', this.item);
        }
    }
</script>

<style scoped lang="less">
    .container {
        border: 1px solid darkgreen;
        padding: 3% 0;

        .head {
            display: flex;
            justify-content: flex-start;
        }

        .body {
            display: flex;
            justify-content: flex-start;
            flex-direction: column;
            @media (min-width: 480px) {
                flex-direction: row;
            }

            .img-box {
                width: 100%;
                height: 10vh;
                @media (min-width: 480px) {
                    width: 30%;
                }

                .img {
                    height: 100%;
                }
            }
            .content-box {
                width: 100%;
                @media (min-width: 480px) {
                    margin-left: 5%;
                    width: 65%;
                }

                .title {
                    text-align: left;
                }
                .content {
                    text-align: left;
                }
            }
        }
    }
</style>

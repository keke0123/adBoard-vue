<template>
    <div class="container">
        <button @click="closeBtn()" class="closeBtn">X</button>
        <div class="head">
            <h3>필터</h3>
        </div>
        <div class="body">
            <div v-for="item in category" :key="item.no">
                <input type="checkbox" v-model="item.checked">
                {{ item.name }}
            </div>
        </div>
        <div class="foot">
            <button @click="saveBtn()" class="btn btn-success">저장</button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "categoryFilter",
        props: [],
        data: function() {
            return {}
        },
        computed: {
            category: {
                // console.log('category', this.$store.state.category);
                get: function() {
                    return this.$store.state.category;
                },
                set: function(newValue) {
                    // console.log('new', newValue);
                }
            }
        },
        methods: {
            saveBtn: function() {
                this.$store.dispatch('setCategory', this.category);
                this.$store.dispatch('closeModal');
            },
            closeBtn: function() {
                this.$store.dispatch('closeModal');
            }
        },
        created: function() {
        }
    }
</script>

<style scoped lang="less">
    .container {
        width: 80vw;
        height: 20vh;
        padding: 2% 0;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        background-color: #fff;
        //
        border: 1px solid tomato;
        .head {
            display: flex;
            justify-content: flex-start;
            padding: 0 5%;
        }
        .body {
            display: flex;
            justify-content: space-around;
        }
        .foot {
            display: flex;
            justify-content: flex-end;
            padding: 0 5%;
        }

        .closeBtn {
            position: absolute;
            right: 5%;
            border: none;
            background-color: transparent;
        }
    }
</style>

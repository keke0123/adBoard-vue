<template>
    <div class="container">
        <!-- 여기서 전부 조합 예정 -->
        <div>main page</div>
        <div class="head">
            <button @click="toggleModal('show')" class="btn btn-primary">필터</button>
            <div class="head-right">
                <div @click="sort='asc'" :class="{'active': sort==='asc'}" class="sort">오름차순</div>
                <div @click="sort='desc'" :class="{'active': sort==='desc'}" class="sort">내림차순</div>
            </div>
        </div>
        <div class="body">
            <List></List>
            <Advertisement></Advertisement>
        </div>
        <!-- test -->
        <button @click="testBtn()" class="btn btn-danger">test button</button>
        <button @click="test2Btn()" class="btn btn-danger">test2 button</button>
        <!-- test -->

        <!-- modal -->
        <div v-if="isShowModal" class="modal-container">
            <div @click="toggleModal('close')" class="closeModal"></div>
            <CategoryFilter class="modal-content"></CategoryFilter>
        </div>
        <!-- modal -->
    </div>
</template>

<script>
    import List from '../components/list';
    import Advertisement from "../components/advertisement";
    import CategoryFilter from "../components/categoryFilter";

    export default {
        name: "main-page",
        components: {
            List,
            Advertisement,
            CategoryFilter,
        },
        computed: {
            isShowModal() {
                return this.$store.getters.showModal;
            },
            category() {
                return this.$store.state.category;
            },
            sort: {
                get: function() {
                    return this.$store.state.sort;
                },
                set: function(str) {
                    this.$store.dispatch('setSort', str);
                }
            }
        },
        methods: {
            toggleModal(type) {
                if(type=='show') {
                    this.$store.dispatch('showModal');
                } else if(type=='close') {
                    this.$store.dispatch('closeModal');
                }
            },
            testBtn() {
                // getList().then((val) => {
                //     console.log(val);
                // });
            },
            test2Btn() {
                console.log('category', this.category);
            }
        },
        created: function() {
            this.$store.dispatch('getCategory');
        }
    }
    // testApi().then((val) => {
    //     console.log(val);
    // });
    // axios.get('http://comento.cafe24.com/category.php').then((val) => {
    //     console.log(val);
    // })
    // 0:
    // name: "apple"
    // no: "1"
    // __proto__: Object
    // 1:
    // name: "banana"
    // no: "2"
    // __proto__: Object
    // 2:
    // name: "coconut"
    // no: "3"
    // axios.get('http://comento.cafe24.com/request.php', {
    //     params: {
    //         page: 1,
    //         ord: 'asc',
    //         category: [1]
    //     }
    // }).then((val) => {
    //     console.log(val);
    // })
    // axios.get('http://comento.cafe24.com/detail.php', {
    //     params: {
    //         req_no: 1,
    //     }
    // }).then((val) => {
    //     console.log(val);
    // })
</script>

<style scoped lang="less">
    .head {
        display: flex;
        justify-content: space-between;
        /*align-items: center;*/

        .head-right {
            display: flex;
            flex-direction: row;
            align-items: center;
            width: 30%;

            .sort {
                margin-left: 5%;
                cursor: pointer;

                &.active {
                    color: red;
                }
            }
        }
    }

    .modal-container {
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background-color: rgba(0,0,0,0.7);
        display: flex;
        align-items: center;

        .modal-content {
            position: relative;
            /*z-index: 2;*/
        }
        .closeModal {
            position: absolute;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            /*z-index: 1;*/
        }
    }
</style>


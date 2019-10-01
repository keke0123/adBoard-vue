<template>
    <div class="container">
        <!-- 여기서 전부 조합 예정 -->
        <div>main page</div>
        <!-- test -->
        <!--        <button @click="testBtn()" class="btn btn-danger">test button</button>-->
        <!--        <button @click="test2Btn()" class="btn btn-danger">test2 button</button>-->
        <!-- test -->
        <div class="head">
            <button @click="toggleModal('show')" class="btn btn-primary">필터</button>
            <div class="head-right">
                <div @click="sort='asc'" :class="{'active': sort==='asc'}" class="sort">오름차순</div>
                <div @click="sort='desc'" :class="{'active': sort==='desc'}" class="sort">내림차순</div>
            </div>
        </div>
        <div ref="scopeScroll" class="body">
            <template v-for="(item, index) in list">
                <div :key="index">
                    <List v-if="item.type === 'list'" :item="item"></List>
                    <Advertisement v-if="item.type === 'ads'" :item="item"></Advertisement>
                </div>
            </template>
        </div>

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
    // 임시
    // import axios from 'axios';
    import { apiGetAds } from "../api/request";

    export default {
        name: "main-page",
        components: {
            List,
            Advertisement,
            CategoryFilter,
        },
        data: function() {
            return {
                scrollFlag: null,
            }
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
            },
            list: {
                get: function() {
                    // return this.$store.state.list;
                    // console.log(this.$store.getters.boardList);
                    return this.$store.getters.boardList;
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
            scrollHandle(event) {
                // 이벤트 버블링 막기 위해서 이벤트 지연시킴
                if(this.scrollFlag !== null) {
                    clearTimeout(this.scrollFlag);
                }
                this.scrollFlag = setTimeout(() => {
                    // console.log('event', event);
                    console.log('window', window);
                    console.log('ref', this.$refs);
                    console.log('document', document.body.scrollTop);
                    const height = window.innerHeight;
                    const offsetY = window.scrollY;
                    console.log('height', height);
                    console.log('window', offsetY);
                    if(offsetY >= height) {
                        this.$store.dispatch('getList');
                    }
                    this.scrollFlag = null;
                }, 500);
            }
            // testBtn() {
            //     // getList().then((val) => {
            //     //     console.log(val);
            //     // });
            //     this.$store.dispatch('getList');
            // },
            // test2Btn() {
            //     // apiGetAds();
            //     console.log(this.$store.state.category);
            // }
        },
        created: function() {
            window.addEventListener('scroll', this.scrollHandle);
        },
        destroyed: function() {
            window.removeEventListener('scroll', this.scrollHandle);
        }
    }
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

    .body {
        /*overflow-y: scroll;*/
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


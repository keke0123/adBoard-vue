<template>
    <div class="container">
        <!-- 여기서 전부 조합 예정 -->
        <div>main page</div>
        <button @click="toggleModal('show')" class="btn btn-primary">show modal</button>
        <List></List>
        <Advertisement></Advertisement>
        <!-- test -->
        <button @click="testBtn()" class="btn btn-danger">test button</button>
        <!-- test -->
        <div v-if="isShowModal" @click="toggleModal('close')" class="modal-container">
            <div class="modal-content">hihi</div>
        </div>
    </div>
</template>

<script>
    import List from '../components/list';
    import Advertisement from "../components/advertisement";
    import { getList, testApi } from '../api/request';
    import axios from 'axios';

    export default {
        name: "main-page",
        components: {
            List,
            Advertisement,
        },
        computed: {
            isShowModal() {
                return this.$store.getters.showModal;
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
                getList().then((val) => {
                    console.log(val);
                });
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
            }
        }
    }
</script>

<style scoped lang="less">
    .modal-container {
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background-color: rgba(0,0,0,0.7);

        .modal-content {
            font-size: 30px;
            color: red;
            background-color: transparent;
            border: 0px;
        }
    }
</style>

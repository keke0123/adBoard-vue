import Vue from 'vue'
import Vuex from 'vuex'
import {apiGetCategory, apiGetList} from './api/request'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        isShowModal: false,
        category: [],
        sort: 'asc', // 오름차순: asc / 내림차순: desc
        list: [],
        page: 1,
    },
    getters: {
        showModal: state => state.isShowModal
    },
    mutations: {
        // modal
        showModal(state) {
            state.isShowModal = true;
        },
        closeModal(state) {
            state.isShowModal = false;
        },
        // category
        getCategory(state, array) {
            // console.log('array', array);
            state.category = array;
        },
        setCategory(state, array) {
            state.category = array;
        },
        // sort
        setSort(state, str) {
            state.sort = str;
        },
        // page
        pageUp(state) {
            state.page = state.page + 1;
        },
        // list
        setList(state, array) {
            state.list = array;
        },
        resetList(state) {
          state.list = [];
          state.page = 1;
        },
    },
    actions: {
        // modal
        showModal({commit}) {
            commit('showModal');
        },
        closeModal({commit}) {
            commit('closeModal');
        },
        // category
        // getCategory({ commit, state }) { // state.category 랑 비교 할꺼면 사용
        getCategory({commit}) {
            apiGetCategory().then((val) => {
                val.data.list = val.data.list.map((v) => {
                    return {...v, checked: true}
                });
                commit('getCategory', val.data.list);
            });
        },
        setCategory({commit, dispatch}, array) {
            // console.log('array', array);
            commit('setCategory', array);
          commit('resetList');
          dispatch('getList');
        },
        //sort
        setSort({commit, dispatch}, str) {
            commit('setSort', str);
            commit('resetList');
          dispatch('getList');
        },
        // list
        getList({commit, state}) {
            let category = state.category.map((val) => {
                // console.log(val);
                return parseInt(val.no);
            });
            // console.log(category);
            const params = {
                page: state.page,
                ord: state.sort,
                category,
            }
            apiGetList(params)
                .then((val) => {
                    // console.log(val.data);
                    let result = val.data.list.reduce(({result}, value) => {
                        // console.log(value);
                        let index = result.findIndex((val) => {
                            return val.no === value.no
                        });
                        if (index < 0) {
                            result.push(value);
                        }
                        return {result};
                    }, {result: state.list});
                    commit('setList', result.result);
                    commit('pageUp');
                });
        },
    }
})

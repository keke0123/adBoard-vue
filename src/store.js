import Vue from 'vue'
import Vuex from 'vuex'
import {apiGetAds, apiGetCategory, apiGetDetail, apiGetList} from './api/request'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        isShowModal: false,
        category: [],
        sort: 'asc', // 오름차순: asc / 내림차순: desc
        list: [],
        page: 1,
        ads: [],
        detail: {},
    },
    getters: {
        showModal: state => state.isShowModal,
        boardList: (state) => {
            let array = state.list.slice();
            let adsCount = state.ads.length < Math.floor(((state.page-1) * 10) / 4) ? state.ads.length : Math.floor(((state.page-1) * 10) / 4);
            for(let i=adsCount; i>0; i--) {
                array.splice(i*4, 0, state.ads[i-1]);
            }
            return array;
        },
        // detailList: (state) => (no) => {
        //     // console.log(no);
        //     return state.list.find(value => value.no == no);
        // }
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
          //ads
            state.ads = [];
        },
        // ads
        setAds(state, array) {
            state.ads = array;
        },
        // detail
        setDetail(state, object) {
            state.detail = object;
        }
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
        getList({commit, state, dispatch}) {
            let category = state.category
                .filter((val) => {
                    return val.checked === true;
                })
                .map((val) => {
                    return parseInt(val.no);
                });
            // console.log('category', category);
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
                        value.type = 'list';
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
            if(state.page % 2 > 0) {
                dispatch('getAds');
            }
        },
        // ads
        getAds({commit, state}) {
            // 20 이 4, 10 의 공배수니 list page 가 2 일때 5개 받아오는 방식이 좋겠다.
            // console.log('get ads');
            const params = {
                page: Math.floor(state.page/2)+1,
                limit: 5,
            }
            apiGetAds(params)
                .then((val) => {
                    let result = val.data.list.reduce(({result}, value) => {
                        value.type = 'ads';
                        let index = result.findIndex((val) => {
                            return val.no === value.no;
                        });
                        if(index < 0) {
                            result.push(value);
                        }
                        return {result};
                    }, {result: state.ads});
                    // console.log('val', result.result);
                    commit('setAds', result.result);
                })
        },
        // detail
        getDetail({commit}, no) {
            apiGetDetail(no).then((val) => {
                // console.log(val);
                commit('setDetail', val.data.detail);
            })
        },
    }
})

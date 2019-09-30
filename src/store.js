import Vue from 'vue'
import Vuex from 'vuex'
import { apiGetCategory } from './api/request'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isShowModal: false,
    category: [],
    sort: 'asc', // 오름차순: asc / 내림차순: desc
    list: [],
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
    }
  },
  actions: {
    // modal
    showModal({ commit }) {
      commit('showModal');
    },
    closeModal({ commit }) {
      commit('closeModal');
    },
    // category
    // getCategory({ commit, state }) { // state.category 랑 비교 할꺼면 사용
    getCategory({ commit }) {
      apiGetCategory().then((val) => {
        val.data.list = val.data.list.map((v) => {
          return {...v, checked: true}
        });
        commit('getCategory', val.data.list);
      });
    },
    setCategory({ commit }, array) {
      // console.log('array', array);
      commit('setCategory', array);
    },
    //sort
    setSort({commit}, str) {
      commit('setSort', str);
    },
    // list
    getList({ commit }) {
    },
  }
})

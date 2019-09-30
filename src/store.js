import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isShowModal: false,
  },
  getters: {
    showModal: state => state.isShowModal
  },
  mutations: {
    showModal(state) {
      state.isShowModal = true;
    },
    closeModal(state) {
      state.isShowModal = false;
    }
  },
  actions: {
    showModal({ commit }) {
      commit('showModal');
    },
    closeModal({ commit }) {
      commit('closeModal');
    }
  }
})

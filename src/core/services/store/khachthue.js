import api from '../api/api';

export default {
  namespace: true,
  state: {
    listKhachThue: [],
    errorCode: 0,
  },
  getters: {
    getlistKhachThue: (state) => state.listKhachThue,
    getErrorGuest: (state) => state.errorCode,
  },
  mutations: {
    SET_LIST_KHACHTHUE(state, payload) {
      state.listKhachThue = payload;
    },
    SET_ERROR_CODE(state, payload) {
      state.errorCode = payload;
    },
  },
  actions: {
    async getGuest({ commit }, payload) {
      const response = await api('getKhachThue', payload);
      if (response.data.error_code === 0) {
        commit('SET_LIST_KHACHTHUE', response.data.data);
      } else {
        // show message failed
      }
    },
    async deleteGuest({ commit }, payload) {
      const response = await api('deleteGuest', payload);
      commit('SET_ERROR_CODE', response.data.error_code);
    },
    // async updateAccount(payload) {
    //   const response = await api('updateAccount', payload);
    //   if (response.data.error_code === 0) {
    //     // commit('SET_LIST_ACCOUNT', response.data.data);
    //   } else {
    //     // show message failed
    //   }
    // },
  },
};

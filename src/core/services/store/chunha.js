import api from '../api/api';

export default {
  namespace: true,
  state: {
    listChuNha: [],
    errorCode: 0,
  },
  getters: {
    getlistChuNha: (state) => state.listChuNha,
    getErrorChuNha: (state) => state.errorCode,
  },
  mutations: {
    SET_LIST_CHUNHA(state, payload) {
      state.listChuNha = payload;
    },
    SET_ERROR_CODE(state, payload) {
      state.errorCode = payload;
    },
  },
  actions: {
    async getHost({ commit }, payload) {
      const response = await api('getChuNha', payload);
      if (response.data.error_code === 0) {
        commit('SET_LIST_CHUNHA', response.data.data);
      } else {
        // show message failed
      }
    },
    async deleteHost({ commit }, payload) {
      const response = await api('deleteHost', payload);
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

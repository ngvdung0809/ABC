import api from '../api/api';

export default {
  namespace: true,
  state: {
    listAccount: [],
  },
  getters: {
    getListAccount: (state) => state.listAccount,
  },
  mutations: {
    SET_LIST_ACCOUNT(state, payload) {
      state.listAccount = payload;
    },
  },
  actions: {
    async getAccount({ commit }, payload) {
      const response = await api('getAccount', payload);
      if (response.data.error_code === 0) {
        commit('SET_LIST_ACCOUNT', response.data.data);
      } else {
        // show message failed
      }
    },
    async updateAccount(payload) {
      const response = await api('updateAccount', payload);
      if (response.data.error_code === 0) {
        // commit('SET_LIST_ACCOUNT', response.data.data);
      } else {
        // show message failed
      }
    },
  },
};
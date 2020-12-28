import api from '../api/api';

export default {
  namespace: true,
  state: {
    listContract: [],
    errorCode: null,
  },
  getters: {
    getListContract: (state) => state.listContract,
    getErrorCodeContract: (state) => state.errorCode,
  },
  mutations: {
    SET_LIST_CONTRACT(state, payload) {
      state.listContract = payload;
    },
    SET_ERROR_CODE(state, payload) {
      state.errorCode = payload;
    },
  },
  actions: {
    async getContract({ commit }, payload) {
      const response = await api('getContract', payload);
      if (response.data.error_code === 0) {
        commit('SET_LIST_CONTRACT', response.data.data);
      } else {
        // show message failed
      }
    },
    async deleteContract({ commit }, payload) {
      const response = await api('deleteContract', payload);
      commit('SET_ERROR_CODE', response.data.error_code);
    },
  },
};

import api from '../api/api';

export default {
  namespace: true,
  state: {
    listToaNha: [],
    errorCode: 0,
  },
  getters: {
    getlistToaNha: (state) => state.listToaNha,
    getErrorCodeToaNha: (state) => state.errorCode,
  },
  mutations: {
    SET_LIST_TOANHA(state, payload) {
      state.listToaNha = payload;
    },
    SET_ERROR_CODE(state, payload) {
      state.errorCode = payload;
    },
  },
  actions: {
    async getBuilding({ commit }, payload) {
      const response = await api('getToaNha', payload);
      if (response.data.error_code === 0) {
        commit('SET_LIST_TOANHA', response.data.data);
      } else {
        // show message failed
      }
    },
    async deleteBuilding({ commit }, payload) {
      const response = await api('deleteToaNha', payload);
      commit('SET_ERROR_CODE', response.data.error_code)
    },
  },
};

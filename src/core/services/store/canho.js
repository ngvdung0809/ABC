import api from '../api/api';

export default {
  namespace: true,
  state: {
    listCanHo: [],
    errorCode: 0,
  },
  getters: {
    getlistCanHo: (state) => state.listCanHo,
    getErrorCodeCanHo: (state) => state.errorCode,
  },
  mutations: {
    SET_LIST_CANHO(state, payload) {
      state.listCanHo = payload;
    },
    SET_ERROR_CODE(state, payload) {
      state.errorCode = payload;
    },
  },
  actions: {
    async getAppartment({ commit }, payload) {
      const response = await api('getCanHo', payload);
      if (response.data.error_code === 0) {
        commit('SET_LIST_CANHO', response.data.data);
      } else {
        // show message failed
      }
    },
    async deleteCanHo({ commit }, payload) {
      const response = await api('deleteCanHo', payload);
      commit('SET_ERROR_CODE', response.data.error_code);
    },
    async addCanHo({ commit }, payload) {
      const response = await api('addCanHo', payload);
      commit('SET_ERROR_CODE', response.data.error_code);
    },
    async updateCanHo({ commit }, payload) {
      const response = await api('updateCanHo', payload);
      commit('SET_ERROR_CODE', response.data.error_code);
    },
  },
};

import Vue from 'vue';
import Vuex from 'vuex';

import htmlClass from './htmlclass.module';
import config from './config.module';
import account from './account';
import tenant from './tenant';
import chunha from './chunha'

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    htmlClass,
    config,
    account,
    tenant,
    chunha,
  },
});

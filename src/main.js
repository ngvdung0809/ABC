import Vue from 'vue';
import store from '@/core/services/store/index';
import App from './App.vue';
import router from './router/index';
import '@/core/plugins/portal-vue';
import '@/core/plugins/bootstrap-vue';
import '@/core/plugins/inline-svg';

Vue.config.productionTip = false;
// window.PerfectScrollbar = PerfectScrollbar;
// window.ClipboardJS = ClipboardJS;

// Remove this to disable mock API

// router.beforeEach((to, from, next) => {
//   // console.log(router);
//   // Ensure we checked auth before each page load.
//   // Promise.all([store.dispatch(VERIFY_AUTH)]).then(next);

//   // // reset config to initial state
//   // store.dispatch(RESET_LAYOUT_CONFIG);

//   // Scroll page to top on every route change
//   // setTimeout(() => {
//   //   window.scrollTo(0, 0);
//   // }, 100);
// });

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');

/* eslint-disable camelcase */
/* eslint-disable radix */

const api = (config) => ({
  loginApi: ({ username, password }) => config('post', '/auth/v1/login/', {
    username,
    password,
  }),
  getProfile: (tokenUser) => config('get', '/account/v1/profile/', '', {
    Authorization: `JWT ${tokenUser} `,
  }),
  logout: (token) => config('post', '/auth/v1/logout/', '', {
    Authorization: `JWT ${token} `,
  }),
  saveAnswerToServer: ({ tokenUser, answer, idListSurvey }) => config('post', '/answer/v1/', {
    answer,
    survey: idListSurvey,
  }, {
    Authorization: `JWT ${tokenUser} `,
  }),
  // account
  getAccount: (keyword) => config('get', `/account/v1/list-account/?search=${keyword}`),
  addAccount: (payload) => config('post', '/auth/v1/register/', payload),
  updateAccount: (payload) => config('patch', `/account/v1/${payload.id}/`, payload.data),
  deleteAccount: (payload) => config('post', '/account/v1/delete_account/', payload),
  // tenant
  getTenant: (keyword) => config('get', `/tenant/v1/list-tenant/?search=${keyword}`, ''),
  deleteTenant: (payload) => config('post', '/tenant/v1/delete-tenant/', payload),
  // chu nha
  getChuNha: (keyword) => config('get', `/chu-nha/v1/list-chu-nha/?search=${keyword}`, ''),
  deleteHost: (payload) => config('post', '/chu-nha/v1/delete_chunha/', payload),
  // khach thue
  getKhachThue: (keyword) => config('get', `/khach-thue/v1/list-khach_thue/?search=${keyword}`, ''),
  deleteGuest: (payload) => config('post', '/khach-thue/v1/delete_khachthue/', payload),
  // can ho
  getCanHo: (keyword) => config('get', `/can-ho/v1/list-can-ho/?search=${keyword}`, ''),
  deleteCanHo: (payload) => config('post', '/can-ho/v1/delete_canho/', payload),
  // toa nha
  getToaNha: (keyword) => config('get', `/toa-nha/v1/list-toa-nha/?search=${keyword}`, ''),
  deleteToaNha: (payload) => config('post', '/toa-nha/v1/delete_toanha/', payload),
  // dich vu
  getService: (keyword) => config('get', `/dich-vu/v1/list-dich-vu/?search=${keyword}`, ''),
  deleteService: (payload) => config('post', '/dich-vu/v1/delete_dichvu/', payload),
  changePassword: (payload) => config('post', '/auth/v1/change-password/', payload),
});

export default api;

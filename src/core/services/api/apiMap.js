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
<<<<<<< HEAD
  getAccount: () => config('get', '/account/v1/list-account/', ''),
  updateAccount: (payload) => config('patch', '/account/v1/list-account/', {
    id: payload.id,
  }, {
    Authorization: `JWT ${payload.tokenUser}`,
    data: payload.data,
  }),
  getTenant: (keyword) => config('get', `/tenant/v1/list-tenant/?search=${keyword}`, ''),
  getChuNha: (keyword) => config('get', `/chu-nha/v1/list-chu-nha/?search=${keyword}`, ''),
  getKhachThue: (keyword) => config('get', `/khach-thue/v1/list-khach_thue/?search=${keyword}`, ''),
  getCanHo: (keyword) => config('get', `/can-ho/v1/list-can-ho/?search=${keyword}`, ''),
  getToaNha: (keyword) => config('get', `/toa-nha/v1/list-toa-nha/?search=${keyword}`, ''),
  getService: (keyword) => config('get', `/dich-vu/v1/list-dich-vu/?search=${keyword}`, ''),
=======
  getAccount: () => config('get', '/account/v1/list-account/'),
  updateAccount: (payload) => config('patch', `/account/v1/${payload.id}/`, payload.data),
  getTenant: (tokenUser) => config('get', '/tenant/v1/list-tenant/', '', {
    Authorization: `JWT ${tokenUser}`,
  }),
>>>>>>> af5c670ddb21d56caea12edb40e2de72b7053d88
});

export default api;

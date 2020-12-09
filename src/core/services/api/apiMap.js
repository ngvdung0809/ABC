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
  getAccount: (tokenUser) => config('get', '/account/v1/list-account/', '', {
    Authorization: `JWT ${tokenUser}`,
  }),
  updateAccount: (payload) => config('patch', `/account/v1/${payload.id}/`, {
    data: payload.data,
  }, {
    Authorization: `JWT ${payload.tokenUser}`,
  }),
  getTenant: (tokenUser) => config('get', '/tenant/v1/list-tenant/', '', {
    Authorization: `JWT ${tokenUser}`,
  }),
});

export default api;

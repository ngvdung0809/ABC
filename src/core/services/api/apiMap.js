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
  getAccount: () => config('get', '/account/v1/list-account/', ''),
  updateAccount: (payload) => config('patch', '/account/v1/list-account/', {
    id: payload.id
  }, {
    Authorization: `JWT ${payload.tokenUser}`,
    data: payload.data,
  }),
  getTenant: (tokenUser) => config('get', '/tenant/v1/list-tenant/', '', {
    Authorization: `JWT ${tokenUser}`,
  }),
});

export default api;

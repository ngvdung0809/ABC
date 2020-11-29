/* eslint-disable camelcase */
/* eslint-disable radix */

const api = (config) => ({
  login: ({ email, password }) => config('post', '/auth/v1/login/', {
    email,
    password
  }),
  getProfile: (tokenUser) => config('get', '/account/v1/profile/', '', {
    Authorization: `JWT ${tokenUser} `
  }),
  logout: (token) => config('post', '/auth/v1/logout/', '', {
    Authorization: `JWT ${token} `
  }),
  saveAnswerToServer: ({ tokenUser, answer, idListSurvey }) => config('post', '/answer/v1/', {
    answer,
    survey: idListSurvey
  }, {
    Authorization: `JWT ${tokenUser} `
  }),
});

export default api;
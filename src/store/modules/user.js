const user = {
  namespaced: true,
  state: {
    login: false,
    userName: '未登录',
    token: '',
  },
  getters: {
    getLogin: state => state.login,
    getUserName: state => state.userName,
    getToken: state => state.token
  },
  mutations: {
    setLogin: (state, status) => {
      state.login = status;
    },
    setUserName: (state, name) => {
      state.userName = name;
    },
    setToken: (state, token) => {
      state.Token = token;
    }
  },};

export default user;

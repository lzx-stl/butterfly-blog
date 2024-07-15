import { login, logout, getInfo } from "@/api/user";
import { setItem, getItem, removeItem, getToken } from "@/utils/auth";
import router, { resetRouter } from "@/router";
const state = {
  token: "",
  user_id: getItem("user_id"),
  email: "",
  nickname: "",
  avatar: getItem("avatar"),
};

const mutations = {
  SET_TOKEN: (state, token) => {
    state.token = token;
  },
  SET_USER_ID(state, user_id) {
    state.user_id = user_id;
  },
  SET_EMAIL: (state, email) => {
    state.email = email;
  },
  SET_NICKNAME: (state, nickname) => {
    state.nickname = nickname;
  },
  SET_AVATAR: (state, avatar) => {
    state.avatar = avatar;
  },
};

const actions = {
  login({ commit }, userInfo) {
    console.log(userInfo);
    return new Promise((resolve, reject) => {
      const { email, password } = userInfo;
      login({ email: email.trim(), password: password.trim() })
        .then((res) => {
          const data = res.data;
          const { user_id } = data;
          commit("SET_USER_ID", user_id);
          setItem("user_id", user_id);
          resolve(data);
        })
        .catch((error) => {
          reject(error);
        });
    });
  },

  // get user info
  getInfo({ commit }) {
    const user_id = getItem("user_id");
    if (!user_id) return;
    return new Promise((resolve, reject) => {
      getInfo(user_id)
        .then((res) => {
          if (!res) {
            reject("Verification failed, please Login again.");
          }
          const data = res.data;
          const { email, nickname, avatar } = data;
          setItem("avatar", avatar);
          commit("SET_EMAIL", email);
          commit("SET_NICKNAME", nickname);
          commit("SET_AVATAR", avatar);
          resolve(data);
        })
        .catch((error) => {
          reject(error);
        });
    });
  },

  // user logout
  logout({ commit, state, dispatch }) {
    removeItem("user_id");
    commit("SET_USER_ID", "");
    commit("SET_EMAIL", "");
    commit("SET_NICKNAME", "");
    commit("SET_AVATAR", "");
    // return new Promise((resolve, reject) => {
    //   logout().then(() => {
    //     commit('SET_TOKEN', '')
    //     commit('SET_ROLES', [])
    //     removeToken()
    //     resetRouter()
    //     // reset visited views and cached views
    //     // to fixed https://github.com/PanJiaChen/vue-element-admin/issues/2485
    //     dispatch('tagsView/delAllViews', null, { root: true })
    //     resolve()
    //   }).catch(error => {
    //     reject(error)
    //   })
    // })
  },

  // remove token
  resetToken({ commit }) {
    return new Promise((resolve) => {
      commit("SET_TOKEN", "");
      commit("SET_ROLES", []);
      removeToken();
      resolve();
    });
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};

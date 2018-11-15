import Vue from 'vue'
import Vuex from 'vuex'
import { defaultClient as ApolloClient } from './main'
// import { gql } from 'apollo-boost';
import { SIGNIN_USER, GET_FOOD_LIST } from './queries';
// import { log } from 'util';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    food: []
  },
  mutations: {
    setFood: (state, payload) => {
      state.food = payload;
    }
  },
  actions: {
    getFood: ({ commit }) => {
      ApolloClient
      .query({
        query: GET_FOOD_LIST
      })
      .then(({ data }) => {
        commit('setFood', data.getProducts);
      })
      .catch(err => {
        console.log(err);
      });
    },
    signinUser: ({commit}, payload) => {
      ApolloClient
      .mutate({
        mutation: SIGNIN_USER,
        variables:payload
      })
      .then(({ data }) => {
        console.log(data.signinUser);
        localStorage.setItem('token', data.signinUser.token);
      })
      .catch(error => {
        console.log(error);
      });
    }
  },
  getters: {
    food: state => state.food
  }
});

import Vue from 'vue'
import Vuex from 'vuex'
import { defaultClient as ApolloClient } from './main'
// import { gql } from 'apollo-boost';
import { SIGNIN_USER, GET_FOOD_LIST, ADD_ORDER } from './queries';
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
    addOrder: ({ commit, payload }) => {
      ApolloClient
      .mutate({
        mutation: ADD_ORDER,
        variables: payload,
        update: (cache, {
          data: {
            addOrder
          }
        })
      })
      .then(({
        data
      }) => {
        console.log(data.addOrder);
      })
      .catch(err => {
        console.error(err);
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

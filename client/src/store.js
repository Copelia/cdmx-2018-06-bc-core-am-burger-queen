import Vue from 'vue'
import Vuex from 'vuex'
import { defaultClient as ApolloClient } from './main'
// import { gql } from 'apollo-boost';
import { SIGNIN_USER } from './queries';
// import { log } from 'util';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {
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
  }
});

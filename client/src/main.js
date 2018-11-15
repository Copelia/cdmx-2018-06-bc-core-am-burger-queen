import '@babel/polyfill'
import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'

import VueApollo from 'vue-apollo'
import ApolloClient from 'apollo-boost'
import { log } from 'util';

Vue.use(VueApollo)

export const defaultClient = new ApolloClient({
  uri: 'https://burger-queen-project-zsxsbwqude.now.sh/graphql'
  // uri: 'http://localhost:8080/graphql'
  // ,
  // fetchOptions:{
  //   credentials: "include"
  // },
  // request: operation =>{
  //   if(!localStorage.token){
  //     localStorage.setItem('token', '');
  //   }
  //   operation.setContext({
  //     headers:{
  //       authorization: localStorage.setItem('token', '')
  //     }
  //   });
  // },
  // onError: ({graphQLErrors, networkError}) => {
  //   if(networkError){
  //     console.log('networkError', networkError);
  //   }
  //   if(graphQLErrors){
  //     for(let err of graphQLErrors) {
  //       console.log(err);
  //     }
  //   }
  // }
});

const apolloProvider = new VueApollo({ defaultClient });
Vue.config.productionTip = false

new Vue({
  provide: apolloProvider.provide(),
  router,
  store,
  render: h => h(App)
}).$mount('#app')

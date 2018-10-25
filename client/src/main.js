import '@babel/polyfill'
import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'

import VueApollo from 'vue-apollo'
import ApolloClient from 'apollo-boost'

Vue.use(VueApollo)

// ({ uri: 'https://burger-queen-project-obewnbghxh.now.sh/graphql' })

export const defaultClient = new ApolloClient({
  uri: 'http://localhost:8080/graphql'
});

const apolloProvider = new VueApollo({ defaultClient });
Vue.config.productionTip = false

new Vue({
  provide: apolloProvider.provide(),
  router,
  store,
  render: h => h(App)
}).$mount('#app')

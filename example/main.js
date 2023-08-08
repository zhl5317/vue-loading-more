import Vue from 'vue'
import VueLoadingMore from '../src/index.js'
import App from './App.vue'
Vue.use(VueLoadingMore)

new Vue({
  el: '#app',
  render: h => (h)(App)
})

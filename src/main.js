import Vue from 'vue'
import MyPlugin from './lib/index.js'
import App from './App.vue'


// The plugin is loaded here.
Vue.use(MyPlugin)
new Vue({
  el: '#app',
  render: h => h(App)
})

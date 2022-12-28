import App from './App'

// #ifndef VUE3
import Vue from 'vue'
import plugins from './plugins'
import store from "./store";
import './permission'
Vue.use(plugins)
Vue.config.productionTip = false
Vue.prototype.$store = store
App.mpType = 'app'
const app = new Vue({
    ...App
})
app.$mount()
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'
export function createApp() {
  const app = createSSRApp(App)
  return {
    app
  }
}
// #endif

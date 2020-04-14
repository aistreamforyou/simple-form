// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import create from '@/utils/tools'
// 全局引入组件
import wbInput from './pages/input'
Vue.use(wbInput)
Vue.config.productionTip = false
Vue.prototype.$create = create
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

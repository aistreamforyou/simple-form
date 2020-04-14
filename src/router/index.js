import Vue from 'vue'
import Router from 'vue-router'
// import wbInput from '../pages/input/test'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/', redirect: '/form'
    },
    {
      path: '/input',
      name: 'input',
      component: () => import('@/test/test-input')
    },
    {
      path: '/form',
      name: 'form',
      component: () => import('@/pages/form/test')
    }
  ]
})

import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      // redirect:'/informationEntry'
    },
    // {
    //   path: '/informationEntry',      // 子表
    //   name: 'informationEntry',
    //   component: () => import(/* webpackChunkName: "about" */ '../views/informationEntry/informationEntry.vue')      
    // },
    // {
    //   path: '/tableList',      // 子表
    //   name: 'tableList',
    //   component: () => import(/* webpackChunkName: "about" */ '../views/tableList/tableList.vue')      
    // }
  ]
})

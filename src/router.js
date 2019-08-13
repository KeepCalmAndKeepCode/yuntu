import Vue from 'vue'
import Router from 'vue-router'

// import province from './views/province/province.vue'

Vue.use(Router)

let children = [
  {
    path:"nqgk",
    component: () => import("./views/citiesCounties/nqgk/nqgk.vue")
  },
  {
    path:"yqgz",
    component: () => import("./views/citiesCounties/yqgz/yqgz.vue")
  },
  {
    path:"tsncp",
    component: () => import("./views/citiesCounties/tsncp/tsncp.vue")
  },
  {
    path:"yns",
    component: () => import("./views/citiesCounties/yns/yns.vue")
  },
  {
    path:"wlw",
    component: () => import("./views/citiesCounties/wlw/wlw.vue")
  }
]

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  // publicPath:"./",
  routes: [
    {
      path: '/',
      name: 'home',
      component: e => import("./views/province/province.vue")
    },

    // //市级别重定向
    // {
    //   path:"/:city",
    //   redirect:"/:city/nqgk"
    // },
    // //区级别重定向
    // {
    //   path:"/:city/:county",
    //   redirect:"/:city/:county/nqgk"
    // },

    // 密令登录
    {
      path:"/secretRegistration",
      component:e => import("./views/secretRegistration/secretRegistration.vue")
    },
    // 普通登录
    {
      path:"/login",
      component:e => import("./views/normalLogin/logIn.vue")
    },
    {
      path: '/:city',
      name: 'city',
      component: () => import(/* webpackChunkName: "about" */ './views/citiesCounties/citiesCounties.vue'),
      redirect:"/:city/nqgk",
      children
    },
    {
      path: '/:city/:county',
      name: 'county',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/citiesCounties/citiesCounties.vue'),
      redirect:"/:city/:county/nqgk",
      children
    }
  ]
})

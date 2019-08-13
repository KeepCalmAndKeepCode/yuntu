import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  { 
    path: '/',
    name: 'province', 
    component: r =>  import ( './province.vue' )
  }
]

export default new VueRouter({
  // mode:"history",
  routes
})
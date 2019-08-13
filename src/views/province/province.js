import Vue from 'vue'
import province from './province.vue'
import router from './router.js'
import $ from 'jquery'

// Vue.use(require('vue-wechat-title'))

Vue.prototype.$ = $;

new Vue({
  router,
  render: h => h(province)
}).$mount('#provinceContainer')
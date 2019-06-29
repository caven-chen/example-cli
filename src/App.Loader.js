/*
 * @Author: Caven
 * @Date: 2019-06-14 13:20:27
 * @Last Modified by: Caven
 * @Last Modified time: 2019-06-29 13:25:20
 */
import Vue from 'vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'

const hub = new Vue()
class AppLoader {
  constructor() {
    Vue.config.productionTip = false
    Vue.use({
      install(Vue) {
        Vue.prototype.$hub = hub
      }
    })
  }
  install() {
    global.Vue = Vue
    return Promise.all([import('@/components')])
  }
}

const appLoader = new AppLoader()
export default appLoader

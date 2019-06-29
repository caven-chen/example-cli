/*
 * @Author: Caven
 * @Date: 2019-06-29 12:29:21
 * @Last Modified by: Caven
 * @Last Modified time: 2019-06-29 13:12:16
 */
import appLoader from './App.Loader'
;(async () => {
  await appLoader.install()
  Promise.all([import('./App.vue'), import('./router/index'), import('./store/index')]).then(
    ([{ default: App }, { default: router }, { default: store }]) => {
      new Vue({
        router,
        store,
        render: h => h(App)
      }).$mount('#app')
    }
  )
})()

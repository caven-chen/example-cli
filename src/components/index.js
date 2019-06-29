/*
 * @Author: Caven
 * @Date: 2019-06-29 12:30:54
 * @Last Modified by: Caven
 * @Last Modified time: 2019-06-29 13:25:28
 */
const componentsWatcher = scaner => {
  scaner.keys().map(key => {
    let name = scaner(key).default.name
    if (name) {
      Vue.component(name, function(resolve) {
        require([key + ''], resolve)
      })
    }
  })
}
const vueScaner = require.context('@/components', true, /^\.\/((?!\/)[\s\S])+\/index\.vue$/)
componentsWatcher(vueScaner)

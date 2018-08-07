/* 企业微信必须使用1.2.0的版本，其他版本会使previewFile接口失效 */
const wx = require('./1.2.0.js').wx

const plugin = {
  install (Vue) {
    Vue.prototype.$wechat = wx
    Vue.wechat = wx
  },
  $wechat: wx
}

export default plugin
export const install = plugin.install

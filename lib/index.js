import row from './row.vue'
import rowStart from './rowStart.vue'
import rowCenter from './rowCenter.vue'
import rowEnd from './rowEnd.vue'
import rowAround from './rowAround.vue'
import rowBetween from './rowBetween.vue'
import rowUnit from './rowUnit.vue'
import absoluteCenter from './absoluteCenter.vue'
import './flex.scss'

const install = (Vue) => {
  if (install.installed) return
  install.installed = true
  Vue.component(row.name, row)
  Vue.component(rowStart.name, rowStart)
  Vue.component(rowCenter.name, rowCenter)
  Vue.component(rowEnd.name, rowEnd)
  Vue.component(rowAround.name, rowAround)
  Vue.component(rowBetween.name, rowBetween)
  Vue.component(rowUnit.name, rowUnit)
  Vue.component(absoluteCenter.name, absoluteCenter)
}

const plugin = {
  install,
}
let GlobalVue = null;
if (typeof window !== 'undefined') {
  GlobalVue = window.Vue
} else if (typeof global !== 'undefined') {
  GlobalVue = global.Vue
}
if (GlobalVue) {
  GlobalVue.use(plugin)
}

component.install = install
export default {
  row,
  rowStart,
  rowCenter,
  rowEnd,
  rowAround,
  rowBetween,
  rowUnit,
  absoluteCenter
}

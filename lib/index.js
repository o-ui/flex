import row from './row'
import rowStart from './rowStart'
import rowCenter from './rowCenter'
import rowEnd from './rowEnd'
import rowAround from './rowAround'
import rowBetween from './rowBetween'
import rowUnit from './rowUnit'
import absoluteCenter from './absoluteCenter'

const install = (Vue) => {
  Vue.component(row.name, row)
  Vue.component(rowStart.name, rowStart)
  Vue.component(rowCenter.name, rowCenter)
  Vue.component(rowEnd.name, rowEnd)
  Vue.component(rowAround.name, rowAround)
  Vue.component(rowBetween.name, rowBetween)
  Vue.component(rowUnit.name, rowUnit)
  Vue.component(absoluteCenter.name, absoluteCenter)
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  install,
  row,
  rowStart,
  rowCenter,
  rowEnd,
  rowAround,
  rowBetween,
  rowUnit,
  absoluteCenter
}

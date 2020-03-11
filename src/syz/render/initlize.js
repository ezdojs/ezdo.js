import htmlRender from './html/'
import Static from '../base/static'
export default function(minObject, selector) {
  let htmldom = htmlRender.initView({target:minObject, ctrl: 'add'}, selector || '#app')
  Static.isInit = true
  return htmldom
}
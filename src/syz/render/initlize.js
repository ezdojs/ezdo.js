import htmlRender from './html/'
export default function(minObject, selector) {
  return htmlRender.initView({target:minObject, ctrl: 'add'}, selector || '#app')
}
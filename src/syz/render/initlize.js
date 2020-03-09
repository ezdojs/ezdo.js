import htmlRender from './html/'
export default function(minObject, selector) {
  htmlRender.initView({target:minObject, ctrl: 'add'}, selector || '#app')
}

import render from './html/'

let status = {}
const DEL = 'del'
const ADD = 'add'
const CLS = 'cls'
const RENDER_TIME = 30
let timeId = 0

function filter() {
  let repetitive = []
  for(let uniqueId in status) {
    let cmt = status[uniqueId]
    for(let uni2 in status) {
      let cmt2 = status[uni2]
      if(cmt2.ctrl === ADD || cmt2 === DEL || cmt2 === CLS) {
        if(cmt.target.parent.uniqueId === uni2) {
          repetitive.push(uniqueId)
        }
      }
    }
  }
  while(repetitive.length) {
    let uni = repetitive.shift()
    delete status[status]
  }
}

function tryPush() {
  if(timeId !== 0) {
    return
  }
  timeId = setTimeout(function(){
    filter()
    render.update(status)
    status = {}
    clearTimeout(timeId)
    timeId = 0
  }, RENDER_TIME)
}

export default function(target, ctrl) {
  if(ctrl === DEL || ctrl === ADD) {
    status[target.uniqueId] = { target, ctrl }
  }else {
    let stat = status[target.uniqueId]
    if(ctrl === DEL || ctrl === ADD) {
      return
    }else {
      status[target.uniqueId] = { target, ctrl }
    }
  }
  tryPush()
}
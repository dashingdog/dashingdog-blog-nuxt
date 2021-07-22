import Vue from 'vue'
const isServer = Vue.prototype.$isServer

export const on = (function() {
  if (!isServer && document.addEventListener) {
    return function(element, event, handler) {
      if (element && event && handler) {
        element.addEventListener(event, handler, false);
      }
    }
  }
})()

export const off = (function() {
  if (!isServer && document.removeEventListener) {
    return function(element, event, handler) {
      if (element && event && handler) {
        element.removeEventListener(event, handler, false);
      }
    }
  }
})()


/**
 * 获取光标位置
 * @param {DOMElement} element 输入框的dom节点
 * @return {Number} 光标位置
 */
export const getCursorPosition = (element) => {
  let caretOffset = 0
  const doc = element.ownerDocument || element.document
  const win = doc.defaultView || doc.parentWindow
  const sel = win.getSelection()
  if (sel.rangeCount > 0) {
    const range = win.getSelection().getRangeAt(0)
    const preCaretRange = range.cloneRange()
    preCaretRange.selectNodeContents(element)
    preCaretRange.setEnd(range.endContainer, range.endOffset)
    caretOffset = preCaretRange.toString().length
  }
  return caretOffset
}

/**
 * 设置光标位置
 * @param {DOMElement} element 输入框的dom节点
 * @param {Number} cursorPosition 光标位置的值
 */
export const setCursorPosition = (element, cursorPosition) => {
  const range = document.createRange()
  if (element.firstChild.length < cursorPosition) {
    return
  }
  range.setStart(element.firstChild, cursorPosition)
  range.setEnd(element.firstChild, cursorPosition)
  const sel = window.getSelection()
  sel.removeAllRanges()
  sel.addRange(range)
}

const mapping = {
  '(': ')',
  '[': ']',
  '{': '}'
}
const left = Object.entries(mapping).map(item => {return item[0]})

function f(str) {
  let arr = str.split('')

  if (arr.length % 2 !== 0) {
    // 如果长度为奇数直接返回false
    return false
  }
  else {
    const stack = []
    while (arr.length > 0){
      if (left.indexOf(arr[0]) >= 0) {
        // 左半边括号
        stack.push(arr.shift())
      }
      else {
        // 右半边括号
        const temp = stack.pop()
        if (arr[0] === mapping[temp]) {
          // 如果匹配，则arr和temp分别出栈
          arr.shift()
        }
        else {
          return false
        }
      }
    }
    return true
  }
}
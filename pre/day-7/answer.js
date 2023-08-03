function f(str) {
  const target = str.replace(/\s|[^0-9a-zA-Z]/g, '').toLowerCase()
  for (let i = 0; i < target.length / 2; i++) {
    if (target[i] !== target[target.length - i -1]) {
      return false
    }
  }
  return true
}

// 判读回文
// 也可以将字符串分为两部分，做反转之后比较是否相等，用空间换时间
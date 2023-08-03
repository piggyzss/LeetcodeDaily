function f(arr) {
  while (arr.length > 1) {
    const temp = arr.shift()
    const con = arr.indexOf(temp)
    if (arr.indexOf(temp) !== -1) {
      arr.splice(con , 1)
    } else {
      return temp
    }
  }
}

const a = [1, 5, 3, 7, 1, 3, 7]

// 这个方法不太好
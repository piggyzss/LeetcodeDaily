function f(arr, target) {
  let i = 0
  while (arr.length > 1) {
    const temp = arr.shift()
    const j = arr.indexOf(target-temp)
    if (j !== -1) {
      return [i, i+j+1]
    }
    i++
  }
}

const a = [1, 1, 2, 4, 6, 7, 12, 18]

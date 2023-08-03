function f(arr) {
  let i = 1
  let temp = arr[0]
  while(i <= arr.length) {
    if (arr[i] == temp) {
      arr.splice(i-1, 1)
    }
    else {
      temp = arr[i]
      i++
    }
  }
  return arr.length
}
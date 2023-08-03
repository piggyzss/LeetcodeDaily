function f(arr1, arr2) {
  let i = 0
  let j = 0
  while (j < arr2.length && i < arr1.length) {
    if (arr2[j] < arr1[i]) {
      arr1.splice(i, 0, arr2[j])
      i++
      j++
    }
    else {
      if (i == arr1.length-1) {
        arr1.push(arr2[j])
        j++
      }
      else {
        i++
      }
    }
  }
  return arr1
}
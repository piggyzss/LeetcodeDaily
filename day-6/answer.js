function f(arr) {
  let profit = 0
  let minPrice = arr[0]
  for(let i = 1; i < arr.length; i++) {
    if(arr[i] > arr[i-1]) {
      profit = Math.max(profit, arr[i] - minPrice)
    }
    else {
      minPrice =  Math.min(minPrice, arr[i])
    }
  }
  return profit
}

let a = [7,1,5,3,6,4]
console.log(f(a))
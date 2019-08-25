// 这道题自己没想出好方法来，动态规划还要再好好看看

function f(arr) {
  const len = arr.length;
  let max = arr[0];
  for (let i = 1; i < len; i++) {
    arr[i] = Math.max(0, arr[i - 1]) + arr[i];
    if (arr[i] > max) max = arr[i];
  }

  return max;
}
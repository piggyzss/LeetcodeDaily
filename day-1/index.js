// 一次循环，使用HashMap进行记录
const sum = (arr, target) => {
    // 使用number作为key，因此需要用map
    let map = new Map()
    for(let i = 0; i < arr.length; i++) {
        if(map.has(target - arr[i])) {
            return [map.get(target - arr[i]), i]
        }
        map.set(arr[i], i)
    }
    return [-1, -1]
}

const nums = [3,2,4]
const target = 6
console.log(sum(nums, target))
const getMidNum = (arr) => {
    const len = arr.length
    return len % 2 === 0 
    ? (arr[len / 2 - 1] +  arr[len / 2]) / 2
    : arr[~~(len / 2)]
}

const getMid = (arr1, arr2) => {
    let i = 0, j = 0, result = []
    while(i <= arr1.length || j <= arr2.lenth) {
        if (i === arr1.length) {
            return getMidNum(result.concat(arr2.splice(j)))
        } else if (j === arr2.length) {
            return getMidNum(result.concat(arr1.splice(i)))
        } else {
            if (arr1[i] < arr2[j]) {
                result.push(arr1[i])
                i++
            } else {
                result.push(arr2[j])
                j++
            }
        }
    }
    return getMidNum(result)
}

const nums1 = [1,2], nums2 = [3,4]
console.log(getMid(nums1, nums2))

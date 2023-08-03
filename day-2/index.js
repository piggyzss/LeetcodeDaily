// 一次循环，使用HashMap进行记录
const sum = (arr1, arr2) => {
    let len = arr1.length > arr2.length ? arr1.length : arr2.length
    let result = Array.from({length: len}, () => 0)
    let extra = 0
    for (let i = 0; i <= len; i++) {
        let temp = (arr1[i] ?? 0) + (arr2[i] ?? 0) + extra
        result[i] = temp % 10
        extra = ~~(temp/10)
    }

    return result
}

const l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
console.log(sum(l1, l2))


/********* Array.from 从一个类数组或可迭代对象生成一个新的浅拷贝数组实例 /*********/
// Array.from(arguments) 将类数组转换为数组
// Array.from(arr) 数组浅拷贝
// Array.from({length: len}, () => 0), 创建长度为len, 并填充初始值为0的数组
// Array.from({length: len}, (_, index) => index) 生成数字范围
// Array.from({length: len}, item => item*2) 数组加工
// Array.from('foo') 字符串生成数组
// Array.from(new　Set(arr)) 数组去重
// 字符串需要经历，向下->向右->向下->向右，这样的反复循环过程
// 设定 flag 变量表示是否向下，loc 变量表示当前字符串数组的下标
// loc下标变化过程为：0->1->n->n-1->0
// 到rows-1时，flag置反
// 如果 flag 为 true，则 loc+=1，字符串数组下标向后移动
// 如果 flag 为 false，则表示向右，则 loc−=1，字符串数组下标向前移动
// 时间复杂度：O(n)，n为字符串s的长度

const transformStr = (str, rows) => {
    if (str.length < rows) {
        return str
    }
    let arr = new Array(rows).fill('')
    let flag = false // false为向上，true为向下
    let i = 0, loc = 0
    while(i < str.length) {
        arr[loc] += str[i]
        if (i % (rows - 1) === 0) {
            flag = !flag
        }
        loc += flag ? 1 : -1
        i++
    }

    return arr.join('')
}

console.log(transformStr('PAYPALISHIRING', 4))

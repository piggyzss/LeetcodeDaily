// key1: 映入脑海的第一个想法是将数字转换为字符串，并检查字符串是否为回文。
// 但是，这需要额外的非常量空间来创建问题描述中所不允许的字符串。

// key2: 是将数字本身反转，然后将反转后的数字与原始数字进行比较，如果它们是相同的，那么这个数字就是回文。 
// 但是，如果反转后的数字大于 int.MAX\text{int.MAX}int.MAX，我们将遇到整数溢出问题。
// 考虑只反转 int\text{int}int 数字的一半


const huiwen = (num) => {
    let revertNumber = 0

    // 当 x < 0 时，x 不是回文数。
    // 当数字的最后一位是 0 且数字本身不等于0，x 不是回文数。
    if (num < 0 || (num % 10 === 0 && num !== 0)) {
        return false
    }

    while(num > revertNumber) {
        revertNumber = revertNumber * 10 + num % 10
        num = ~~(num / 10)
    }

    return num === revertNumber || num === ~~(revertNumber / 10)
}

console.log('shanshan revertNumber', huiwen("122410"))
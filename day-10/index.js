// key: 选择从右往左扫描
// 每次只考虑末尾字符的匹配问题
// s、p 串是否匹配，取决于：最右端是否匹配、剩余的子串是否匹配
// 若 s 和 p 最右侧匹配，则同时左移
// 若 s 和 p 最右侧不匹配，则s左移
// 若遇到p是特殊符号，则p左移

// base case
// s 或 p其中有一个

// const isMatch = (str, reg) => {
//     let i = str.length - 1
//     let j = reg.length - 1
//     let multiple = false
//     while(i > 0 || j > 0) {
//         if (multiple) {
//             if (str[i] === reg[j] || reg[j] === '.') {
//                 i--
//             } else {
//                 multiple = false
//                 j--
//             }
//         } else {
//             if (str[i] === reg[j] || reg[j] === '.') {
//                 i--
//                 j--
//             } else {
//                 if (reg[j] === '*') {
//                     multiple = true
//                     j--
//                 } else {
//                     return false 
//                 }
//             }
//         }
//     }
//     return i === 0 && j === 0
// }

const isMatch = (str, reg) => {
    const len1 = str.length, len2 = reg.length
    let arr = Array.from({length: len1 + 1}, () =>  new Array(len2 + 1).fill(false))
    // 初期值
    // str为空，reg为空，能匹配上
    arr[0][0] = true 

    // str为空，reg不为空，由于*可以匹配0个字符，所以有可能为true
    for (let i = 1; i <= len2; i++) {
        // 先单独处理 * 
        if (reg[i-1] === '*') {
            // arr[0]表示什么意思呢？-- str为空
            arr[0][i] = arr[0][i-2]
        }
    }

    for (let i = 1; i <= len1; i++) {
        for (let j = 1; j <= len2; j++) {
            // 文本串和模式串末位字符能匹配上
            if (str[i - 1] == reg[j - 1] || reg[j - 1] == ".") {
                arr[i][j] = arr[i - 1][j - 1]
            } else if (reg[j - 1] == "*") {
                // 模式串 * 的前一个字符能够跟文本串的末位匹配上
                if (str[i - 1] == reg[j - 2] || reg[j - 2] == ".") {
                    // *匹配0次的情况
                    // *匹配1次或多次的情况
                    arr[i][j] = arr[i][j - 2] || arr[i - 1][j - 2] || arr[i - 1][j]
                } else {
                    // 模式串*的前一个字符不能够跟文本串的末位匹配
                    arr[i][j] = arr[i][j - 2]
                }
            }
        }
    }
    return arr[len1][len2]
}

let s = "aa", p = "a*"
console.log('shanshan isMatch', isMatch(s, p))
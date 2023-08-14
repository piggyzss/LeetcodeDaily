// key: 滑动窗口
// 我们使用两个指针表示字符串中的某个子串（或窗口）的左右边界
// 其中左指针代表着上文中「枚举子串的起始位置」
// 右指针即为不包含重复字符的最长子串的结束位置

// 在每一步的操作中，我们会将左指针向右移动一格，表示我们开始枚举下一个字符作为起始位置
// 然后我们可以不断地向右移动右指针，但需要保证这两个指针对应的子串中没有重复的字符。
// 在移动结束后，这个子串就对应着 以左指针开始的，不包含重复字符的最长子串。我们记录下这个子串的长度；

// 在枚举结束后，我们找到的最长的子串的长度即为答案。

const maxSubstr = (str) => {
    let max = 0, start = 0, strMap = {}
    for(let i = 0; i < str.length; i++) {
        // 如果map出现了相同的字母，并且之前出现的字母的下标大于等于不重复序列最开始的下标就更新下标
        if(strMap[str[i]] !== undefined && strMap[str[i]] >= start){
            start = strMap[str[i]] + 1
        }
        strMap[str[i]] = i
        max = Math.max(max, i - start + 1)
    }
    return max
}

const str = "pwwkew"
console.log(maxSubstr(str))

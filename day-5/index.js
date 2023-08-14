// key: 动态转移方程 P(i,j)=P(i+1,j−1)∧(Si===Sj)
// 也就是说，只有 s[i+1:j−1] 是回文串，并且 sss 的第 i 和 j 个字母相同时，s[i:j]才会是回文串。


const getHuiwen = (str) => {
    let result = []
    let dp = Array.from({length: str.length}, () =>  new Array(str.length).fill(false))

    for (let i = 0; i < str.length; i++) {
        for (let j = 0; j <= i; j++) {
            if ( i === j) {
                dp[i][j] = true
            } else if ((str[i] === str[j]) && (i - j === 1)) {
                // 对称
                dp[i][j] = true
            } else if ((str[i] === str[j]) && (dp[i-1][j+1])) {
                // 非对称
                dp[i][j] = true
            }

            if (dp[i][j] && (i - j + 1 > result.length)) {
                result = str.slice(j, i+1)
            }
        }
    }

    return result
}

const s = "wsacbbdbbc"
console.log(getHuiwen(s))

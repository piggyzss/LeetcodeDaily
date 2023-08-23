// 

const atoi = (str) => {
    let result = 0, index = 0
    while(index < str.length) {
        let temp = str.slice(index, index + 1)
        if (temp !== ' ' && !isNaN(Number(temp))) {
            result = result * 10 + Number(temp)
        }
        if (result > Math.pow(2, 31) || result < Math.pow(-2, 31) - 1) {
            return 0
        }

        index++
    }
    return result
}

console.log('shanshan revertNumber', atoi("4193 with words"))
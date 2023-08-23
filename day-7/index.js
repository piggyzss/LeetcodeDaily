// 

const revertNumber = (num) => {
    let result = 0 
    while(num !== 0) {
        let temp = num % 10
        console.log('temp', temp)
        result = result * 10 + temp
        console.log('result', result)
        if (result > Math.pow(2, 31) || result < Math.pow(-2, 31) - 1)
        return 0
        num = ~~(num / 10)
    }
    return result
}

console.log('shanshan revertNumber', revertNumber(-120))
function solution(array, n){
    let count = 0
    for (num of array) if (num === n) count += 1
    return count
}
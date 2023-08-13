function solution(array) {
    array.sort((a, b) => a - b);
    const middle = Math.floor(array.length / 2);
    return array[middle]; 
}
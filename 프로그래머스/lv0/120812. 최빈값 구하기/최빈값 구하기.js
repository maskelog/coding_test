function solution(array) {
    let often = {}
    
    for (let num of array) {
        often[num] = (often[num] || 0)+1;
    }
    let maxCount = Math.max(...Object.values(often));
    let modes = [];
    for (let num in often) {
        if (often[num] === maxCount) {
            modes.push(Number(num));
        }
    }
    return modes.length === 1 ? modes[0] : -1;
}
function solution(num_list) {
    const odd = Number(num_list.filter((item)=>item%2===1).join(''))
    const even = Number(num_list.filter((item)=>item%2===0).join(''))
    return odd + even;
}
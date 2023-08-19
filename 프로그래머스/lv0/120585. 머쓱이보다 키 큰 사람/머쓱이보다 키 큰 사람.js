function solution(array, height) {
    var answer = array.filter((value) => value > height).length;
    return answer;
}
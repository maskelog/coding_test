function solution(l, r) {
    var answer = [];
    
    function generateNumbers(current) {
        if (current >= l && current <= r) {
            answer.push(current);
        }
        
        if (current > r) {
            return;
        }
        
        generateNumbers(current * 10);
        generateNumbers(current * 10 + 5);
    }
    
    generateNumbers(5);
    
    answer.sort((a, b) => a - b);
    
    return answer.length > 0 ? answer : [-1];
}

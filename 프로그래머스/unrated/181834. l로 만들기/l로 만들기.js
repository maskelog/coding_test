function solution(myString) {
    return myString.split('').map(char => {
return char.charCodeAt(0) < 108 ? 'l' : char}).join('');
}
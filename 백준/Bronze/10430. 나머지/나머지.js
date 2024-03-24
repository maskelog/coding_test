const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

readline.on('line', function(line) {
  input = line.split(' ').map(el => parseInt(el));
}).on('close', function(){
  const A = parseInt(input[0]);
  const B = parseInt(input[1]);
  const C = parseInt(input[2]);
  const first = (A + B) % C;
  const second = ((A % C) + (B % C)) % C; 
  const third = (A * B) % C; 
  const fourth = ((A % C) * (B % C)) % C;
  console.log(first);
  console.log(second);
  console.log(third);
  console.log(fourth);
  process.exit();
});
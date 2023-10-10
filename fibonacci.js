/*FIBONACCI SEQUENCE*/
function fibonacciSequenceLoop(n){
  let secuencia = [];
  let fibonacci = 0;
  let n1 = 0, n2 = 1;

  for (let i = 0; i <= n; i++){
    secuencia.push(fibonacci);
    fibonacci = n1 + n2;
    n2 = n1;
    n1 = fibonacci;
  } 
  return secuencia;
}

function fibonacciSequenceRecursion(n) {
  if (n === 0) {
    return [0];
  } else if (n === 1) {
    return [0, 1];
  } else {
    const sequence = fibonacciSequenceRecursion(n - 1);
    sequence.push(sequence[n - 1] + sequence[n - 2]);
    return sequence;
  }
}

//console.log(fibonacciSequenceLoop(7));
console.log(fibonacciSequenceRecursion(8))

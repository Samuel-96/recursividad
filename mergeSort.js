function mergeSort(array){
  if(array.length <= 1) {
    return array;
  }

  else {
    let tam = Math.ceil((array.length / 2));

    const arrayIzquierdo = array.slice(0,tam);
    const arrayDerecho = array.slice(tam,array.length);

    const arrayIzquierdoOrdenado = mergeSort(arrayIzquierdo);
    const arrayDerechoOrdenado = mergeSort(arrayDerecho);

    return ordenarArrays(arrayIzquierdoOrdenado, arrayDerechoOrdenado);
  }
}

function ordenarArrays(arrayIzquierdo, arrayDerecho){
  let arrayOrdenado = [];
  let indiceIzquierdo = 0;
  let indiceDerecho = 0;

  while(indiceIzquierdo < arrayIzquierdo.length && indiceDerecho < arrayDerecho.length){
    if(arrayIzquierdo[indiceIzquierdo] < arrayDerecho[indiceDerecho]){
      arrayOrdenado.push(arrayIzquierdo[indiceIzquierdo]);
      indiceIzquierdo++;
    } else {
      arrayOrdenado.push(arrayDerecho[indiceDerecho]);
      indiceDerecho++;
    }
  }
  
  return [...arrayOrdenado,...arrayIzquierdo.slice(indiceIzquierdo),...arrayDerecho.slice(indiceDerecho)]
}

const prueba = [-10,3.6,5,0,57,2000,32,5,30,654,23,465]
console.log(mergeSort(prueba));
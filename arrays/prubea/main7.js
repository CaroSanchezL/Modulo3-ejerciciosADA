const sumarSeccion = (array, comienzo, cantidad) => {
    let suma = 0
    for(let i = comienzo; i < (comienzo + cantidad) ; i++) {
        suma += array[i]
    }
  return suma
}

console.log(sumarSeccion([2, 2, 4, 3, 10, 20, 5], 0, 3))
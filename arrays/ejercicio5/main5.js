// Promedio de un curso 2

// Dado un array de cualquier cantidad de numeros, donde cada número representa la nota de una alumna, retornar el promedio final de nota del curso. (Nota: recordá que podes saber la longitud de un array con array.length)

const retornarPromedio = (array) => {
    let suma = 0
    for (let i = 0; i < array.length; i++) {
        suma += array[i];
    }
    let promedio = suma/array.length
    return promedio
}

console.log (retornarPromedio([4, 8, 10]))
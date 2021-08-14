// Promedio de un curso

// Dado un array de 3 numeros, donde cada número representa la nota de una alumna, retornar el promedio final de nota del curso.

const retornarPromedio = (array) => {
    let promedio = (array[0] + array[1] + array[2]) / 3;
    return promedio
}

console.log (retornarPromedio([4, 8, 10]))
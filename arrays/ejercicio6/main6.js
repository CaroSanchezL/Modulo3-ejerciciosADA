// Promedio de promoción

// Dado un array de 10 numeros, donde cada número representa la nota de una alumna, retornar el promedio tomando solo aquellas que tienen una nota mayor a 7.

const retornarPromedioAprobadas = (array) => {
    let suma = 0
    let divisor = 0 
    for (let i = 0; i <array.length; i++) {
        if (array[i] > 7) {
            suma += array[i]
            divisor++
        }
    }
    let promedio = suma/divisor;
    return promedio
}

console.log (retornarPromedioAprobadas([4, 6, 9, 8, 10]))
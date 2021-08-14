// Números positivos

// Dado un array de 10 números, retornar un numero que represente cuantos de ellos son positivos.

const contarPositivos = (array) => {
    let cantidadPositivos = 0
    for (let i = 0; i < array.length; i++) {
        if (array[i]>0) {
            cantidadPositivos++
        }
    }
    return cantidadPositivos
}

console.log(contarPositivos([-4, -3, -2, -1, 0, 1, 2, 3, 4, 5]))
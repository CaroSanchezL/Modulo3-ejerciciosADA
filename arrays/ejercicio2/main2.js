// Mostrar solo mayores a 5

// Dado un array de 10 números, mostrar solo los que son mayores a 5 en consola.

const mostrarMayorA5 = (array) => {
    for (let i = 0; i < array.length; i++) {
        if (array[i] > 5) {
            console.log(array[i])
        }
    }
}

let arrayEjemplo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

mostrarMayorA5(arrayEjemplo)
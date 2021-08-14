// Temperatura más alta

// Dado un array de cualquier longitud, compuesto por numeros que representan temperaturas de una región, se requiere retornar cuál fue la mayor temperatura.

const mayorTemperatura = (array) => {
    let mayor = 0
    for (let i = 0; i < array.length; i++) {
        if (array[i] > mayor) {
            mayor = array[i]
        }
    }
    return mayor
}

console.log (mayorTemperatura([4, 6, 9, 8, 10, 15, 35]))
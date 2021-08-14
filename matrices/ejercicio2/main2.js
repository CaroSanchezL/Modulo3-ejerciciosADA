// Mostrar en consola 2 

// Dado un array bidimensional, compuesto de dos arrays con 5 numeros cada uno, mostrar en consola solo los numeros mayores a 10.

const mayoresA10 = (matriz) => {
    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz[i].length; j++) {
            if (matriz[i][j] > 10) {
                console.log(matriz[i][j])
            }
        }
    }
}

let matrizEjemplo = [
    [7, 14, 21, 28, 35],
    [2, 4, 8, 10, 12]
]

mayoresA10 (matrizEjemplo)
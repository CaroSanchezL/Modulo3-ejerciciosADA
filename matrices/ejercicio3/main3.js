// Alumna más grande

// Dado un array bidimensional compuesto de dos arrays de 5 elementos cada uno, donde el primero esta compuesto de nombres y el segundo de edades, retornar el nombre de la persona con la mayor edad.

const mostrarAlumnaMayor = (matriz) => {
    let mayor = 0
    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz[i].length; j++) {
            if (matriz[i][j] > mayor) {
                mayor = matriz[i][j]

            }
        }
    }
    let posicionPersonaMayor = matriz[1].indexOf(mayor)
    return (matriz[0][posicionPersonaMayor])
}



let matrizEjemplo = [
    ["Pepa", "Pompina", "Petra", "Calabaza", "Aceituna"],
    [7, 14, 21, 28, 35]
]

console.log (mostrarAlumnaMayor(matrizEjemplo));


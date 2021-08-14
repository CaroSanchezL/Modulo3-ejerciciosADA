// Desempeño del curso

// Dado un array bidimensional, compuesto por un array de nombres y otro de notas numericas, hace una funcion que muestre en consola la calificación promedio del grupo y tambien muestre en consola la cantidad de estudiantes que obtuvieron una nota por encima del promedio del grupo.

const mostrarPromedioYSuperior = (matriz) => {
    let suma = 0;
    let divisor = matriz[1].length;
    let cantidadSuperiores = 0

    for (let i = 0; i < matriz[1].length; i++) {
            suma += matriz[1][i]
    }

    let promedio = suma / divisor

    for (let i = 0; i < matriz[1].length; i++) {
        if (matriz[1][i] > promedio) {
            cantidadSuperiores++
        }
    }

    return(`El promedio del curso es ${promedio} y la cantidad de alumnos por arriba de ese promedio es ${cantidadSuperiores}`)
}

let matrizEjemplo = [
    ["Pepa", "Pompina", "Petra", "Calabaza", "Aceituna"],
    [2, 4, 8, 10, 7]
]

console.log(mostrarPromedioYSuperior(matrizEjemplo))
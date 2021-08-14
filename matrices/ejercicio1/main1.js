// Mostrar en consola 

// Dado un array bidimensional, compuesto de dos arrays con 5 nombres cada uno, mostrar cada uno de los nombres en consola.

const mostrarNombres = (matriz) => {
    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz[i].length; j++) {
            console.log(matriz[i][j])
        }
    }
}

let matrizEjemplo = [
    ["Pepe", "Pompin", "Pedro", "Calabacín", "Aceituna"],
    ["Pepa", "Pompina", "Petra", "Calabaza", "Aceituno"]
]

mostrarNombres (matrizEjemplo)
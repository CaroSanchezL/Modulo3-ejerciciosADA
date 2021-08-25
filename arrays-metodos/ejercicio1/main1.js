const frozen = ["Elsa", "Hans", "Olaf", "Ana", "Kristoff"]
const moana = ["Moana", "Tamatoa", "Maui", "Hei Hei"]

// 1. Hacer una funcion "ordenarAlfabeticamente" que reciba un array y lo retorne ordenado alfabeticamente. 

const ordenarAlfabeticamente = (array) => {
    return array.sort()
}

console.log(ordenarAlfabeticamente(moana))
console.log(ordenarAlfabeticamente(frozen))
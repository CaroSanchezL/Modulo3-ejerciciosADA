const frozen = ["Elsa", "Hans", "Olaf", "Ana", "Kristoff"]
const moana = ["Moana", "Tamatoa", "Maui", "Hei Hei"]

// 4. Hacer una funcion "ultimosDos" que reciba un array y retorne un array con los ultimos dos elementos del original. 

const ultimosDos = (array) => {
    return array.slice(array.length - 2)
}

console.log(ultimosDos(moana)) 
console.log(ultimosDos(frozen))
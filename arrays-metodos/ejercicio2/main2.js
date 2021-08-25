const frozen = ["Elsa", "Hans", "Olaf", "Ana", "Kristoff"]
const moana = ["Moana", "Tamatoa", "Maui", "Hei Hei"]

// 2. Hacer una funcion "revertirOrden" que reciba un array y retorne sus elementos en orden inverso. 

const revertirOrden = (array) => {
    return array.sort().reverse()
}

console.log(revertirOrden(moana))
console.log(revertirOrden(frozen))
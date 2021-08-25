const frozen = ["Elsa", "Hans", "Olaf", "Ana", "Kristoff"]
const moana = ["Moana", "Tamatoa", "Maui", "Hei Hei"]

// 5. Hacer una función "conservarSoloConA" que reciba un array y retorne un nuevo array compuesto solo por los elementos del original que contienen la letra "A". 
// (pista: vas a necesitar ademas un metodo de strings)

const conservarSoloConA = (array) => {
    const nuevoArray = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i].includes("a")) {
            nuevoArray.push(array[i])
        }
    }
    return nuevoArray
}

console.log(conservarSoloConA(moana)) 
console.log(conservarSoloConA(frozen))
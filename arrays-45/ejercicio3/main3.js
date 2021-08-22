// Dado el mismo array, hacer un codigo que muestre en consola el siguiente mensaje:
// <li>Ana</li><li>Elsa</li><li>Ana</li><li>Olaf</li><li>Sven</li><li>Hans</li>

const concatenarConLi = (array) => {
    let arrayConcatenado = ""
    for (let i = 0; i < array.length; i++) {
        arrayConcatenado += `<li>${array[i]}</li>`
    }
    return arrayConcatenado
}

const nombres = ["Ana", "Elsa", "Olaf", "Sven", "Hans"]
console.log(concatenarConLi(nombres))
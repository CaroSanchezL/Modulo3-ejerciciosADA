// const nombres = ["Ana", "Elsa", "Olaf", "Sven", "Hans"]
// Dado el anterior array de nombres, hacer un codigo que recorra todos los nombres y muestre en consola el mensaje

// Ana - Elsa - Olaf - Sven - Hans - (con guiones)

const concatenarConGuiones = (array) => {
    let arrayConcatenado = ""
    for (let i = 0; i < array.length; i++) {
        arrayConcatenado += `${array[i]} - `
    }
    return arrayConcatenado
}

const nombres = ["Ana", "Elsa", "Olaf", "Sven", "Hans"]
console.log(concatenarConGuiones(nombres))
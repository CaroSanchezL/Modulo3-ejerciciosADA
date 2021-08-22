// Dado el mismo array, hacer un codigo que muestre en el HTML de la pagina una lista ordenada con todos los nombres. El "ul" ya deberia estar en el HTML. El resto se debe hacer con javascript.

const lista = document.querySelector(".lista")

const generarItems = (array) => {
    let htmlInterno = ""

    for (let i = 0; i < array.length; i++) {
        htmlInterno += `<li>${array[i]}</li>`;  
    }
    return htmlInterno
}

const nombres = ["Ana", "Elsa", "Olaf", "Sven", "Hans"]

lista.innerHTML = generarItems(nombres)

// const agregarItems = (array) => {
//     for (let i = 0; i < array.length; i++) {
//         lista.innerHTML += `<li>${array[i]}</li>`;  
//     }
//     return lista.innerHTML
// }

// const nombres = ["Ana", "Elsa", "Olaf", "Sven", "Hans"]

// agregarItems(nombres)
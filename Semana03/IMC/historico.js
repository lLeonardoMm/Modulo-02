window.onload = (event) => {
    let lista = JSON.parse(localStorage.getItem("imc"))

    const item = document.getElementById("item")

    for ( let i = 0; i < lista.length; i++ ) {
    var li = document.createElement('li')
    li.appendChild(document.createTextNode(lista[i]))
    item.appendChild(li)
    console.log(lista[i])
    }
}

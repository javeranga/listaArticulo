let listaDeMercado = JSON.parse(localStorage.getItem('productos'))

listaDeMercado = listaDeMercado ? JSON.parse(localStorage.getItem('productos')) : []
console.log('listaDeMercado --> ', listaDeMercado)

pintarProductos()

function pintarProductos() {
    let html=''
    listaDeMercado.forEach((lista, i)=> {
        html += `<tr><td>${lista.nombre}</td>`
        html += `<td>${lista.valor}</td>`
        html += `<td><a onclick="eliminarProducto(${i})">X</a></td></tr>`
        
    })
    document.getElementById('listaElementos').innerHTML = html
}

function agregarItem() {
    let nombre = document.getElementById('nombre').value;
    let valor = document.getElementById('valor').value;
    
    if(nombre && valor) {
        listaDeMercado.push({'nombre':nombre, 'valor': valor})
        pintarProductos();
        localStorage.setItem('productos', JSON.stringify(listaDeMercado))


        document.getElementById('nombre').value=''
        document.getElementById('valor').value=''
    } else {
        alert('Error')
    }
}


function eliminarProducto(posicionProducto) {
    listaDeMercado.splice(posicionProducto,1)
    localStorage.setItem('productos',JSON.stringify(listaDeMercado))
    pintarProductos()
}

function vaciarCarrito(){
    localStorage.removeItem('productos')
    document.getElementById('listaElementos').innerHTML = ''
    listaDeMercado = []
}
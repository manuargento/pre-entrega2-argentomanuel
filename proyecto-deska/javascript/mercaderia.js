const productos = [
    {nombre: "Remera Deska", precio: 1500 },
    {nombre: "Gorra Deska", precio: 750 },
    {nombre: "Vaso Deska", precio: 200 },
    {nombre: "Buzo Deska", precio: 2500 },
    {nombre: "Gorro Deska", precio: 600 },
    {nombre: "Bermuda Deska", precio: 950 },
]

let carrito = []

let seleccion = prompt("hola, desea comprar algun producto si o no");

while(seleccion != "si" && seleccion != "no"){
    alert("por favor ingresa si o no");
    seleccion = prompt("hola desea comprar algo si o no");
}

if(seleccion == "si"){
    alert("a continuacion nuestra lista de productos");
    let todoslosproductos = productos.map(
        (producto) => producto.nombre + " " + producto.precio + "$"
    );
    alert(todoslosproductos.join(" - "))
} else if (seleccion == "no"){
    alert("gracias por venir, hasta pronto!")
}

while(seleccion != "no"){
    let producto = prompt("agrega un producto al carrito");
    let precio = 0;

    if(producto == "Remera Deska" || producto == "Gorra Deska" || producto == "Vaso Deska" || producto == "Buzo Deska" || producto == "Gorro Deska" || producto == "Bermuda Deska"){
        switch(producto){
            case "Remera Deska":
            precio = 1500;
            break;
            case "Gorra Deska":
            precio = 750;
            break;
            case "Vaso Deska":
            precio = 200;
            break;
            case "Buzo Deska":
            precio = 2500;
            break;
            case "Gorro Deska":
            precio = 600;
            break;
            case "Bermuda Deska":
            precio = 950;
            break;
            default:
            break;
        }
        let unidades = parseInt(prompt("cuantas unidades quiere llevar"))

        carrito.push({producto, unidades, precio})
        console.log(carrito)
    } else{
        alert ("no tenemos ese producto")
    }

    seleccion = prompt("desea seguir comprando?")
    while(seleccion === "no"){
        alert("gracias por la compra! hasta pronto")
        carrito.forEach((carritoFinal) => {
            console.log(`producto: ${carritoFinal.producto}, unidades: &}${carritoFinal.unidades}, total a pagar por producto ${carritoFinal.unidades * carritoFinal.precio}`)
        }) 
        break;
    }
}

const total = carrito.reduce((acc, el) => acc + el.precio * el.unidades, 0)
console.log (`el total a pagar por su compra es: ${total}`)


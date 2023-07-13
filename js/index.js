// Variables
const valorGalletitas = 120;
const valorAlfajores = 100;
const valorAgua = 200;
const valorCerveza = 350;

// Proceso Inicial

alert ("Bienvenido a Maxikiosco FC");
let validacionsocio = prompt("Tiene cuenta creada? \nIngrese 'si' o 'no'");

const usuario = prompt("Ingrese su usuario");
const dniCuit = prompt("Ingrese su dni/cuit");

// Uso del while
while (validacionsocio != "si") {
    console.log ("No Socio, beneficio de fidelización del 20% en el primer pedido.");
    alert("No sos socio? Registrándote te hacemos un 20% de descuento en tu primer pedido.");
    break;
} 

console.log ("Pedido para " + usuario + "| Datos de facturacion: " + dniCuit);


//Toma de pedido
//Galletitas
const cantidadGalletitas = parseInt(prompt("Cuantas galletitas desea comprar? (Precio $"+ valorGalletitas + " c/u)"));
//Sumo pedido galletitas
const pedidoGalletitas = parseInt(cantidadGalletitas * valorGalletitas);
console.log ("Galletitas: " + cantidadGalletitas + " a $" +(cantidadGalletitas * valorGalletitas));

//Alfjaores
const cantidadAlfajores = parseInt(prompt("Cuantos alfajores desea comprar? (Precio $"+ valorAlfajores + " c/u)"));
//Sumo pedido alfajores
const pedidoAlfajores = parseInt (cantidadAlfajores * valorAlfajores);
console.log ("Alfajores: " + cantidadAlfajores + " a $" +(cantidadAlfajores * valorAlfajores));

//Agua
const cantidadAgua = parseInt(prompt("Cuantas aguas desea comprar? (Precio $" + valorAgua + " c/u)"));
//Sumoi pedido Aguas
const pedidoAgua = parseInt (cantidadAgua * valorAgua);
console.log ("Agua: " + cantidadAgua + " a $" +(cantidadAgua * valorAgua));

//Cerveza
const cantidadCerveza = parseInt(prompt("Cuantas cervezas desea comprar? (Precio $" + valorCerveza + " c/u)"));
//Sumo pedido cerveza
const pedidoCerveza = parseInt (cantidadCerveza * valorCerveza);
console.log ("Cerveza: " + cantidadCerveza + " a $" +(cantidadCerveza * valorCerveza));

// Detallo el pedido
alert ("El detalle de su pedido es: \nGalletitas: " + cantidadGalletitas + "\nAlfajores: " + cantidadAlfajores + "\nAgua: " + cantidadAgua + "\nCerveza: " + cantidadCerveza);

// Suma del pedido

const valorPedido = parseInt(pedidoGalletitas + pedidoAlfajores + pedidoAgua + pedidoCerveza);
console.log ("El valor total es: $" + valorPedido);
alert ("Su pedido es por un total de $" + valorPedido );

//Uso de switch para calcular valor de envio

let barrioEntrega = prompt("Ingrese su zona de entrega: \nCaba $400, \nZona Norte $500, \nZona Sur $600, \nZona Oeste $600");
console.log ("La zona de entrega elegida es: " + barrioEntrega);
let valorEntrega = 0
    switch (barrioEntrega){
        case 'Caba': 
            valorEntrega = (400 + valorPedido);
            console.log("El valor de su pedido con la entrega elegida es de: $" + valorEntrega);
            break;   
        case 'Zona Norte':
            valorEntrega = (500 + valorPedido);
            alert("El valor de su pedido con la entrega elegida es de: $" + valorEntrega);
            break;   
        case 'Zona Sur':
            valorEntrega = (600 + valorPedido);
            alert("El valor de su pedido con la entrega elegida es de: $" + valorEntrega);
            break;   
        case 'Zona Oeste':
            valorEntrega = (600 + valorPedido);
            alert("El valor de su pedido con la entrega elegida es de: $" + valorEntrega);
            break;              
        default:
            alert("Opcion invalida");
            break;
     } 
     console.log ("Valor total con entrega en zona " + barrioEntrega + " es de: $" + valorEntrega)

//Uso de function para hacer la suma final

let valortotal = 0
function socio(){
    if(validacionsocio == 'si'){
        console.log("Por ser socio aplicar descuento del 10%")
        const descuento = valorEntrega * 0.1;
        valortotal = valorEntrega - descuento;
        alert("Su pedido con descuento del 10% por ser socio es de: $" + valortotal);
        console.log("El valor final es de: $" + valortotal);
    } else {
        valortotal = valorEntrega
    }
}
socio();

alert ("Gracias por comprar con nosotros. \nTu pedido por $" + (valortotal+ " sera despachado cuanto antes."))
console.log ("Pedido para: " + usuario + " - Facturacion: " + dniCuit)
console.log ("A despachar a zona " + barrioEntrega +" por valor total de " + valortotal)
function bienvendaTienda (nombreTienda) {
    alert ("Bienvenido/a a " + nombreTienda + "!")
}
bienvendaTienda("Bodegas Rosario")

let edadPermitida = Number (prompt("Ingrese su edad"));

if (edadPermitida >= 18) {
    alert ("Tiene permitido el acceso a este Sitio Web.")
} else {
    alert ("No tiene permitido el ingreso a este Sitio Web.")
}

let nombreUsuarioValido = "lorereyes"
let contador = 0
do {
    nombreUsuarioIngresado = prompt ("Ingrese nombre de usuario")
    contador++
} while (contador < 3 && nombreUsuarioValido != nombreUsuarioIngresado)

if (nombreUsuarioValido == nombreUsuarioIngresado && contador <= 3) {
    alert ("Has ingresado correctamente a la Tienda!")
} else {
    alert ("Intente nuevamente más tarde.")
}

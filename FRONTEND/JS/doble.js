const estructura = 
`
<form class="doble">
    <input type="text" placeholder="Ingrese un numero" class="numDoble">
    <input type="submit" value="Enviar">
</form>
`
let numDoble;

document.writeln(estructura);
numDoble = document.querySelectorByClass(numDoble);
let resultado = numDoble * 2;

if (numDoble != null || numDoble != 0){
    document.writeln(`<p>el doble es: ${resultado}</p>`);
}

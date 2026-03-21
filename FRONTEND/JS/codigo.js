const saludar = () => {
    let name = prompt("Cual es tu nombre?");
    document.writeln("BIENVENIDO " + name + ",<br>");
}

saludar();

let  Frase = "Probando JavaScript, ";
document.writeln(Frase + "<br>");

for (let i = 0; i < 11; i++) {
    document.writeln(i);
    if (i == 10) { document.writeln(".<br>") }
}

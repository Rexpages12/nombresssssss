

function calcularMC() {
    let nombre = document.getElementById("nombre").value;
    let apellidos = document.getElementById("apellidos").value;
    let peso = parseFloat(document.getElementById("peso").value);
    let altura = parseFloat(document.getElementById("altura").value);

    if (nombre == "" || apellidos == "" || isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
        alert("Debes colocar lo que se te pide correctamente.");
        return;
    }

    let MC = peso / (altura * altura);
    document.getElementById("MC").textContent = `Su estado de masa corporal Sr. ${nombre} ${apellidos} es de ${MC.toFixed(2)}`;

    Imagenes(MC);
}

function volveintentar() {
    console.log("Ejecutando volverintentar...");
    if (nombre =="" && apellidos =="" && peso == 0 && altura ==0){
        alert("Debes colocar los datos indicados antes de ejecutar")
    }
    document.getElementById("nombre").value = "";
    document.getElementById("apellidos").value = "";
    document.getElementById("peso").value = "";
    document.getElementById("altura").value = "";

    document.getElementById("MC").textContent = "";
    document.getElementById("texto_final").textContent = "";
    document.getElementById("imagen_final").src = "";
}

function Imagenes(MC) {
    let textoFinal = document.getElementById("texto_final");
    let imagenFinal = document.getElementById("imagen_final");
    let imagen_final_2 = document.getElementById("imagen_final_2")
    textoFinal.textContent = "Su estado actual es:";

    if (MC < 18.5) {
        imagenFinal.src = "imagenes/IMC/bajo_peso.png";
        imagen_final_2.src = "imagenes/IMC/IMC.png"
    } else if (MC >= 18.5 && MC <= 24.9) {
        imagenFinal.src = "imagenes/IMC/ideal.png";
        imagen_final_2.src = "imagenes/IMC/IMC.png"
    } else if (MC >= 25 && MC <= 29.9) {
        imagenFinal.src = "imagenes/IMC/sobrepeso.png";
        imagen_final_2.src = "imagenes/IMC/IMC.png"
    } else if (MC >= 30 && MC <= 34.9) {
        imagenFinal.src = "imagenes/IMC/obesidad.png";
        imagen_final_2.src = "imagenes/IMC/IMC.png"
    } else if (MC >= 35 && MC <= 39.9) {
        imagenFinal.src = "imagenes/IMC/obesidad_severa.png";
        imagen_final_2.src = "imagenes/IMC/IMC.png"
    } else if (MC >= 40) {
        imagenFinal.src = "imagenes/IMC/obesidad_morbida.png";
        imagen_final_2.src = "imagenes/IMC/IMC.png"
    }
}

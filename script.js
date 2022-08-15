resistencia1 = document.getElementById("entrada1");
resistencia2 = document.getElementById("entrada2");
resistencia3 = document.getElementById("entrada3");
calcular = document.getElementById("calcular");
resultado = document.getElementById("resultado");
calcular.addEventListener("click", calcularResistencia);
var resisitenciaTotal;


function calcularResistencia(){
    tipoResistencia = document.querySelector('input[name="tipoResistencia"]:checked').value;
    // console.log(tipoResistencia);
    // console.log(resistencia1.value);
    // console.log( resistencia2.value);

    if(tipoResistencia == "serie"){
        // console.log(tipoResistencia);
        resisitenciaTotal = parseInt(resistencia1.value) + parseInt(resistencia2.value) + parseInt(resistencia3.value);
        // console.log("RESISTENCIA SERIE "+resisitenciaTotal);
        resultado.innerHTML = resisitenciaTotal+" Ω";
    } else{
        resisitenciaTotal = 1/((1/parseInt(resistencia1.value))+(1/parseInt(resistencia2.value))+(1/parseInt(resistencia3.value)));
        // console.log("RESISTENCIA PARALELA "+resisitenciaTotal);
        resultado.innerHTML = resisitenciaTotal+" Ω";
    }
}
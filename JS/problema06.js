function validarn(e){
    var teclado = (document.all)?e.keyCode:e.which;
    if(teclado == 8)return true;

    var patron = /[0-9\d .]/;

    var prueba = String.fromCharCode(teclado);
    return patron.test(prueba);
}

function calculo(){
    var valor1 = document.formulario.dia_actual.value;
    var valor2 = document.formulario.mes_actual.value;
    var valor3 = document.formulario.año_actual.value;
    var valor4 = document.formulario.dia_nacer.value;
    var valor5 = document.formulario.mes_nacer.value;
    var valor0 = document.formulario.año_nacer.value;
    var anioN = parseInt(valor0);
    var diaA = parseInt(valor1);
    var mesA = parseInt(valor2);
    var anioA = parseInt(valor3);
    var diaN = parseInt(valor4);
    var mesN = parseInt(valor5);

    
    var final = anioA - anioN;

    if (mesA>mesN) {
        document.formulario.final.value = final + " años";
        console.info(final+" 1")
    } else if (mesA<mesN){
        final -= 1;
        console.info(final+" 2")
        document.formulario.final.value = final + " años";
    }else if (mesA==mesN && diaA>=diaN) {
        console.info(final+" 3")
        document.formulario.final.value = final + " años";
    }else if (mesA==mesN && diaA<diaN) {
        final -= 1;
        console.info(final+" 4")
        document.formulario.final.value = final + " años";
    }
}

function borrar(){
    document.formulario.dia_actual.value = "";
    document.formulario.mes_actual.value = "";
    document.formulario.año_actual.value = "";
    document.formulario.dia_nacer.value = "";
    document.formulario.mes_nacer.value = "";
    document.formulario.año_nacer.value = "";
    document.formulario.final.value = "";
}

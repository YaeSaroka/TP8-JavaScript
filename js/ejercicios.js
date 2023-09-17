/*1*/
function ej01() {
    
    const nombre = prompt("Ingrese su nombre:");
    const fechaNacimiento = prompt("Ingrese su fecha de nacimiento (YYYY-MM-DD):");

    const edad = calcularEdad(fechaNacimiento);
    document.getElementById('resultado').innerHTML = `<p style="font-size:20px;">Hola ${nombre}, tienes <strong style="font-color:blue">${edad} años!</strong></p>`;
}
/*2*/
function ej02() {
    const frutas=[
        {nombre:"frutilla"},
        {nombre:"banana"},
        {nombre:"uva"},
        {nombre:"cereza"},
        {nombre:"kiwi"},
        {nombre:"frambuesa"},
        {nombre:"pera"},
        {nombre:"naranja"},
        {nombre:"manzana"},
        {nombre:"mandarina"}
    ]
    const fruta_elegir = prompt("Ingrese la fruta que desea:");
    const busqueda = frutas.find(fruta => fruta.nombre === fruta_elegir);
    if(busqueda == undefined) document.getElementById('resultado').innerHTML = `<strong> No, no tenemos <u style="color: blue"> ${fruta_elegir} </u> :( </strong>`
    else document.getElementById('resultado').innerHTML =`<strong> Sí, tenemos <u style="color: blue "> ${fruta_elegir} </u> :D  !!</strong>`
}
/*3*/
function ej03() {
    let booleano;
    console.log(10 == '10'); 
    console.log(10 === '10'); 
    console.log(typeof 10.6); 
    console.log(true == 1); 
    document.getElementById('resultado').innerHTML =`
    <strong>Punto A: <u style="color: blue "> true </u></strong>, aparece eso en la console porque tienen el <strong>mismo contenido</strong> :D  !!<br>
    <strong>Punto B: <u style="color: blue "> false </u></strong>, porque son de diferente tipo de <strong>variable</strong> :( <br>
    <strong>Punto C: <u style="color: blue "> number </u></strong>, aparece eso en la console porque identifica que es tipo <strong>int !</strong><br>
    <strong>Punto D: <u style="color: blue "> true </u></strong>, true y 1 se consideran como <strong>"verdaderos"<strong> en js  !!<br><br><br>

    <strong style="color: blue "><i><u>Entra a la consola y compruebalo<i></u></strong>
    `
}

/*4*/
function ej04(){
    const ciudad = {};
    let cadena_ciudad='';
    const resultado = document.getElementById('resultado');
    ciudad.Nombre = prompt("Nombre de la ciudad:");
    ciudad.FechaFundacion = prompt("Fecha de fundación de la ciudad (YYYY-MM-DD):");
    ciudad.Poblacion = parseInt(prompt("Número de población de la ciudad:"));
    ciudad.Extension = parseFloat(prompt("Extensión de la ciudad (en km²):"));
    if (isNaN(ciudad.Poblacion) || isNaN(ciudad.Extension)) {
        alert("Por favor, debe ingresar números en las categorías 'Población' y 'Extensión'");
    }
    else if(isNaN(Date.parse(ciudad.FechaFundacion))){
        alert("Por favor, debe ingresar una fecha válida en la categoría 'Fecha de fundacion'");
    }
    else{
        for (const atributo in ciudad) {
            const dato = ciudad[atributo];
            cadena_ciudad += `<strong style="margin-left:20px; font-size:20px">${atributo}:</strong> ${dato}<br>`;
        }
        resultado.innerHTML =`<strong style="color: blue; font-size:30px"><u>Ciudad</strong></u><br><br>` + cadena_ciudad;
    } 
}

/*5*/
function ej05(){
    var array_0=[1,2,3,4,5];
    var arrayduplicado= ar(array_0);
    document.getElementById('resultado').innerHTML = `<strong ><u style="color: blue; font-size:20px">Doble de elementos</u>: [${arrayduplicado}]</strong>`;
}


/*6a*/
function piramide_A(filas){
    let piramide= '';
    for(let i=0; i<filas;i++){
        let piso='';
        for(let y=0; y<i +1;y++){
            piso=piso+'*';
        }
        piramide += piso + '<br>'
    }
    document.getElementById('resultado').innerHTML = `<strong>Piramide A:<br><pre style="margin-left: 50px; font-size:30px;">${piramide}</pre></strong>`;
}

/*6b*/
function piramide_b(filas){
    let piramide = '';
    for(let i=0; i<filas;i++){
        let espacios='-'.repeat(filas-i -1);
        let asterisco='*'.repeat(2*i+1);
        piramide += espacios + asterisco + espacios + '\n';
    }
    document.getElementById('resultado').innerHTML = `<strong>Piramide A:<br><pre style="margin-left: 50px; font-size:30px;">${piramide}</pre></strong>`;
}

/*7*/
function ej07(){
    const nombres = prompt("Ingrese nombres separados por comas:");
    let vector_nombres=[];
    if(nombres== null || nombres.trim()===""){
        alert("No se ingresaron nombres.");
        return;
    }
    const nombres_separados = nombres.split(",");
    for(var i=0; i<nombres_separados.length;i++){
        const nombre = nombres_separados[i].trim();
        if(nombre.charAt(0)==='a' || nombre.charAt(0) === 'A'){
            vector_nombres.push(nombre);
        }
    }
    if (vector_nombres.length > 0) {
        document.getElementById('resultado').innerHTML = `<strong>Nombres que comienzan con <u style="color: blue">'A'</u>:</strong> [${vector_nombres.join(", ")}]`;
    } else {
        document.getElementById('resultado').innerHTML = "No se encontraron nombres que comiencen con 'A'.";
    }
}

/*8*/
function ej08(){
    const cadenaInicial = prompt("Cadena texto inicial: ");
    const palabraAcambiar = prompt("Palabra que desee reemplazar: ");
    const reemplazo = prompt("Palabra nueva: ");
    const cadenaModificada = cadenaInicial.replace(palabraAcambiar, reemplazo);

    document.getElementById('resultado').innerHTML = `<strong>Cadena nueva: </strong>[ ${cadenaModificada} ] <br> <p style="font-size: 12px"> <strong> Cadena inicial:</strong> [ ${cadenaInicial} ]<p>`;
}

function ej09(){
    const cadenaInicial = prompt("Cadena texto inicial: ");
    const num = prompt("Numero de caracteres que se mostrarán: ");
    const cadenaModificada = cadenaInicial.slice(0, num);

    document.getElementById('resultado').innerHTML =`<strong>Cadena cortada: </strong>[ ${cadenaModificada} ] <br> <p style="font-size: 12px"> <strong> Cadena inicial:</strong> [ ${cadenaInicial} ]<p>`
}
function ej10(){
    const cadenaInicial = prompt("Ingrese una lista de elementos separados por coma! :D");
    const elementos_separados = cadenaInicial.split(",");
    const unidos = elementos_separados.join(' - ');

    document.getElementById('resultado').innerHTML =`<strong> Elementos separados :</strong> [ ${unidos} ]`
}

function ej11(){
    const pedido = prompt("Ingrese una lista de pedidos con sus totales separados por coma (nombre:total, nombre:total') !!: ");
    let Recaudacion_Total = 0;
    const pedidos_separados = pedido.split(',');
    for (const pedido_ of pedidos_separados) {
        const [nombre, valor] = pedido_.split(':');
        const num = parseFloat(valor);
        Recaudacion_Total += num;
    }

    document.getElementById('resultado').innerHTML =`<strong> Recaudación total :</strong> [ $${Recaudacion_Total} ]`
}


// LLAMADO DE FUNCIONES !!
//-----------------------------------------------
    //ej01();
    //ej02();
    //ej03();
    //ej04();
    //ej05();
    //piramide_A(5);
    //piramide_b(5);
    //ej07();
    //ej08();
    //ej09();
    //ej10();
    //ej11();
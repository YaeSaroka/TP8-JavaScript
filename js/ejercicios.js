/*1*/
/*function ej01() {
    const nombre = prompt("Ingrese su nombre:");
    const fechaNacimiento = prompt("Ingrese su fecha de nacimiento (YYYY-MM-DD):");

    const edad = calcularEdad(fechaNacimiento);
    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = `Hola ${nombre}, tienes ${edad} años!`;
}*/
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
    console.log(frutas);
    const fruta_elegir = prompt("Ingrese la fruta que desea:");
    const busqueda = frutas.find(fruta => fruta.nombre == fruta_elegir);
    console.log(busqueda);
    if(busqueda == undefined) console.log(`No, no tenemos ${fruta_elegir} !`)
    else console.log(`Sí, tenemos ${fruta_elegir} !`)
}
/*3*/
function ej03() {
    let booleano;
    if(10 == '10') {
        booleano=true;
        console.log(booleano); 
    }
    else if( 10 === '10')  {
        console.log(booleano);
    }
    console.log("El tipo de boleano es: " + typeof 10.6);
    if(booleano == 1){
        console.log("no es lo mismo, 1 y true")
    }
}
/*4*/
const ciudad= new Object();
ciudad.nombre="Buenos Aires";
ciudad.FechaFundacion=1810-05-25;
ciudad.poblacion=50000000;
ciudad.extension=870000000;
for(const propiedad in ciudad){
    console.log(`${propiedad}:${ciudad[propiedad]}`)
}

/*5*/
function ej05(array){
let resultado= array.map(elem => elem*2)
return resultado;}


var array_0=[1,2,3,4,5];
var arrayduplicado= ej05(array_0);
console.log(arrayduplicado);

/*6a*/
function piramide_A(filas){
    for(let i=0; i<filas;i++){
        let piso='';
        for(let y=0; y<i +1;y++){
            piso=piso+'*';
        }
        console.log(piso)
    }
}

/*6b*/
function piramide_b(filas){
    for(let i=0; i<filas;i++){
        let espacios='-'.repeat(filas-i);
        let asterisco='*'.repeat(2*i-1)
        console.log(espacios+asterisco+espacios)
    }
}

/*7*/
function ej07(){
    const nombres = prompt("Ingrese nombres separados por comas:");
    let vector_nombres=[];
    if(nombres== null || nombres.trim()===""){
        alert("No se ingresaron nombres.");
        return;
    }
    const nombres_separados=nombres.split(",");
    for(var i=0; i<nombres_separados.length();i++){
        if(nombres_separados[i][0]=='a'){
            vector_nombres=nombres_separados[i];
        }
    }
   
   
  
    const mostrar=document.getElementById("resultado");
    mostrar.innerHTML=nombres_con_A;
}


//ej01();
//ej02();
//ej03();
//ej04();
//ej05();
//piramide_A(5);
//piramide_b(4); --> falta terminar un cachito
ej07();
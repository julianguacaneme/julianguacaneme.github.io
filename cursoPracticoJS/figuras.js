//Código del cuadrado
console.group("Cuadrado");
//const ladoCuadrado = 5;
//console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");

function perimetroCuadrado(lado) {
    return lado * 4;
}
perimetroCuadrado()

//console.log("El perímetro del cuadrado es: " + perimetroCuadrado + "cm");

function areaCuadrado(lado) {
    return lado * lado;
}

areaCuadrado()

//console.log("El área del cuadrado es: " +
//    areaCuadrado +
//    "cm cuadrados"
//);

console.groupEnd();

//Código del triángulo
console.group("Triangulo")
    //const ladoTriangulo1 = 6;
    //const ladoTriangulo2 = 6;
    //const baseTriangulo = 4;

//console.log("Los lados del triángulo miden: " +
//    ladoTriangulo1 +
//  "cm, " +
//ladoTriangulo2 +
//"cm, " +
//baseTriangulo +
//"cm"
//);

//const alturaTriangulo = 5.5;
//console.log("La altura del triangulo mide: " +
// alturaTriangulo +
//"cm");

function perimetroTriangulo(lado1, lado2, base) {
    return lado1 + lado2 + base;
}
perimetroTriangulo();

//console.log("El perímetro del triángulo es: " +
//  perimetroTriangulo +
//"cm");

function areaTriangulo(base, altura) {
    return (base * altura) / 2;
}

areaTriangulo();

//console.log("El área del triángulo es: " +
//  areaTriangulo +
//"cm^2"
//);

console.groupEnd();

//Código del circulo
console.group("Circulo");

//Radio
//const radioCirculo = 4;
//console.log("El radio d el circulo es: " + radioCirculo + "cm");

//Diámetro
function diametroCirculo(radio) {
    return radio * 2;
}
diametroCirculo();

//console.log("El diámetro del circulo es: " + diametroCirculo + "cm");
// PI
const PI = Math.PI;
//console.log("PI es igual a: " + PI);

//Circunferencia
function perimetroCirculo(radio) {
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}

perimetroCirculo()

//console.log("El perímetro del circulo es: " + perimetroCirculo + "cm");
//Area

function areaCirculo(radio) {
    return (radio * radio) * PI;
}

areaCirculo();

//console.log("El área del circulo es: " + areaCirculo + "cm^2");

console.groupEnd();

// Aqui interactuamos con el HTML
//CUADRADO
function calcularPerimetroCuadrado() {
    const input = document.getElementById("InputCuadrado"); //recibe todo el input
    const value = input.value; //recibe el valor escrito

    const perimetro = perimetroCuadrado(value);
    alert("El perímetro del cuadrado es: " + perimetro + "cm")
}

function calcularAreaCuadrado() {
    const input = document.getElementById("InputCuadrado"); //recibe todo el input
    const value = input.value; //recibe el valor escrito

    const area = areaCuadrado(value);
    alert("El área del cuadrado es: " + area + "cm^2")
}
//TRIÁNGULO
function calcularPerimetroTiangulo() {
    const inputLado1 = document.getElementById("Lado1");
    const valueLado1 = inputLado1.value;
    const inputLado2 = document.getElementById("Lado2");
    const valueLado2 = inputLado2.value;
    const inputBase = document.getElementById("Base");
    const valueBase = inputBase.value;

    const perimetro = perimetroTriangulo(valueLado1, valueLado2, valueBase);
    alert("El perímetro del triángulo es: " + perimetro + "cm")
}

function calcularAreaTiangulo() {
    const altura = document.getElementById("Altura");
    const valueAltura = altura.value;
    const inputBase = document.getElementById("Base");
    const valueBase = inputBase.value;

    const area = areaTriangulo(valueAltura, valueBase);
    alert("El área del triángulo es: " + area + "cm^2");
}

//CIRCULO

function calcularPerimetroCirculo() {
    const radio = document.getElementById("InputCirculo");
    const value = radio.value;

    const perimetro = perimetroCirculo(value);
    alert("El perímetro del círculo es: " + perimetro + "cm");
}


function calcularAreaCirculo() {
    const radio = document.getElementById("InputCirculo");
    const value = radio.value;

    const area = areaCirculo(value);
    alert("El área del círculo es: " + area + "cm^2");
}


function calcularMediaAritmetica(lista) {
//let sumaLista = 0;
//for (let i = 0; i < lista.length; i++) {
  //sumaLista = sumaLista + lista[i];
//}

//OTRA OPCIÓN CON METODO REDUCE
const sumaLista = lista.reduce(
    function (valorAcumulado = 0, nuevoElemento){
        return valorAcumulado + nuevoElemento;
    }
);
const promedioLista = sumaLista / lista.length;
return promedioLista;

}

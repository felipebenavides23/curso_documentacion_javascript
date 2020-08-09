var autos =[];

var cantidad_autos = parseInt( prompt("ingrese la cantidad de autos que quiera registras"));

function carro(marca,modelo,year){
    this.marca = marca;
    this.modelo =modelo;
    this.year =year;
}

for(var i=0;i<cantidad_autos;i++){
    var marca_a = prompt("ingrese la marca del auto")
    var modelo_a= prompt("ingrese el modelo del auto")
    var year_a= prompt("ingrese el año de auto")

    autos.push(new carro(marca_a,modelo_a,year_a))
}

for(i=0; i<autos.length;i++){
    console.log(autos[i])
}
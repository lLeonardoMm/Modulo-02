//Variaveis no javaScript é declarada por 3 tipos de tags que seria var, let e const e mais comum seria o var

var numero = 123456789; //variavel de numero é
//var declara uma variável, opcionalmente, inicializando-a com um valor.

let string = "Letra ou texto" //variavel de letra ou texto que seria a string é classificada por "aspas"
//let declara uma variável local de escopo do bloco, opcionalmente, inicializando-a com um valor.

const bool = true //variavel booleano é uma variavel se true ou false apenas
//const declara uma constante de escopo de bloco, apenas de leitura.

var nulo = null //nulo é a variavel que "nao tem valor"

var objetos = {  //Objetos são vareaveis em formato json que consite em vareveis dentro de {chaves}
    nome : "mesa",
    contruido : "01/01/2023",
    local : "São José"
}

var arreis = [95, 96, 97, 86, 99] //Array é a vareavel que o formato é baseado em [colchete] e o primeiro num começa em 0 e assim a seguir e ele é fixo


//-----------------------------------------------------------------------------------------------------------------------

//Funções serve pra fazer uma ação quando a função for chamada

var peso = 0;
var tara = 0;

function CalcularTara (peso){ //Função para calcular Tara que seria o peso que não dever ser contado
    tara -= (Number(peso))  // tara =- pois isso faz que o faz o peso ficar negativo e sendo assim ser descontado (Numeber para que sempre que receber um valor ele ser convertido em num)
    return tara // return para retornar o valor que eu quero
} 

function CalcularPeso (peso){
   if(tara <= -1 ){
    var resultado = peso + tara
   }
   else {
    resultado = peso
   }
   return resultado
}

function IMC (peso, altura){
    var resultado = peso / (altura * altura)
    return resultado.toFixed(2)
}
function MaiorOuNao() {
    let num = document.getElementById("numero").value;
    console.log(num)
    if (num > 10) {
        alert("É maior que 10")
    } else {
        alert("O número é menor ou igual a 10")
    }
}
function mostreNumeros() {
    for (let index = 1; index <= 20; index++) {
        console.log(index);
    }
}
function calculoSoma() {
    let num1 = document.getElementById("numero1").value;
    let num2 = document.getElementById("numero2").value;
    let resultado = parseInt(num1) + parseInt(num2)
    console.log(resultado)
}

function ConsoleLog() {
    const rg = [{
        nome: "Cris",
        idade: 20,
        anoDeNascimento: "25/04/2003",
    },
    {
        nome: "Sabrina",
        idade: 20,
        anoDeNascimento: "04/23/2003"
    },
    ]
    localStorage.setItem("certidao", JSON.stringify(rg))
    console.log(localStorage.getItem("certidao"))
    let voltadoObj = JSON.parse(localStorage.getItem("certidao"))
    console.log(voltadoObj)
    console.log(voltadoObj[0].nome)
}

function VinteNumeros() {

    let setTime = document.getElementById("Sets")

    for (let index = 1; index <= 20; index++) {
        const parar = setInterval(() => {
            setTime.innerHTML += `${index} `
        }, 1000)
        setTimeout(() => {
            clearInterval(parar)
        }, 2000)
    }
}
VinteNumeros()


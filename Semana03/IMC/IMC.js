window.addEventListener("load", function(){

    function ImcAvancado(){
        const peso = document.getElementById("Peso").value 
        const altura = document.getElementById("Altura").value
        const valorFinal = peso / (altura * altura);
        let resultadoFinal = '';
        let listaTeste = JSON.parse(localStorage.getItem("imc"))

        if (valorFinal < 18.5){
            resultadoFinal = "Seu IMC é " + valorFinal.toFixed(2) +  ". Abaixo do peso"
       }
       else if (valorFinal >= 18.5 && valorFinal < 25){
        resultadoFinal = "Seu IMC é " + valorFinal.toFixed(2) +  ". Peso normal"
       }
       else if (valorFinal >= 25 && valorFinal < 30){
        resultadoFinal = "Seu IMC é " + valorFinal.toFixed(2) +  ". Acima do peso"
       }
       else if (valorFinal >= 30 && valorFinal < 35){
        resultadoFinal = "Seu IMC é " + valorFinal.toFixed(2) +  ". Obesidade I"  
       }
       else if (valorFinal >= 35 && valorFinal < 40){
        resultadoFinal = "Seu IMC é " + valorFinal.toFixed(2) +  ". Obesidade II"   
       }
       else {
           resultadoFinal = "Seu IMC é " + valorFinal.toFixed(2) +  ". Obesidade III"
       }

        if(!listaTeste){
          const lista = []
          lista.push(resultadoFinal)
          localStorage.setItem("imc", JSON.stringify(lista))
        }else {
            listaTeste.push(resultadoFinal)
            localStorage.setItem("imc", JSON.stringify(listaTeste))
        }
    }
    let salvarIMC = document.getElementById("ImcCalculo")
    salvarIMC.addEventListener("click", function(){
        ImcAvancado();
    })
})
   
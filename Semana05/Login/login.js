function CriarConta(){
    const url = 'http://127.0.0.1:5501/Semana05/CriarCoonta.html';

    window.open(url, "_blank")
}
function EntrarHome(){
   
    const emailDigitado = document.getElementById("Email").value
    const senhaDigitada = document.getElementById("Senha").value
    const conta = JSON.parse(localStorage.getItem("conta"))
    const emailExiste = conta.some(obj => obj.email === emailDigitado)
    const senhaExiste = conta.some(obj => obj.senha === senhaDigitada)
    if (emailExiste && senhaExiste){
        const url = "http://127.0.0.1:5501/Semana05/Home.html"
        window.open(url, "_self")
    }else{
        window.alert("Dados inseriados incorretos, não está cadastrado")
    }
}

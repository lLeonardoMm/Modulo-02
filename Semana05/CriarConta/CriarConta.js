function Validacao(){
    const email = document.getElementById("Email").value
    const senha = document.getElementById("Senha").value
    const confSenha = document.getElementById("confirmarSenha").value
    const usuario = {email: email, senha: senha}
    const storage = JSON.parse(localStorage.getItem("conta"))
    if(senha.length > 10){   //Validação aqui pois o min no html n funcionou
    if (senha === confSenha){
        if(!storage){
            storage = []
            storage.push(usuario)
            localStorage.setItem("conta", JSON.stringify(storage))
            window.alert("Olha cai não cai no Else")
        }else if (storage){
            storage.push(usuario)
            localStorage.setItem("conta", JSON.stringify(storage))
            window.alert("Olha cai no Else")
        }
    }else{
        window.alert("Senhas Incorretas")
    }
} else {
    window.alert("A senha tem que ter pelo menos 10 letras")
}
}
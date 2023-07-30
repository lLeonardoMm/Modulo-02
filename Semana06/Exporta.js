export function buscarNomes(elementoA, elementoB, elementoC){
    fetch('https://servicodados.ibge.gov.br/api/v1/censos/nomes/ranking')
    .then(e => e.json())
    .then(dados => {
        for(let array of dados.reverse()){
            const nomes = array.nome
            const contemALetra = nomes.includes("A")
            
            if (contemALetra){ 
                const p = document.createElement("h3")
                p.innerText = nomes
                elementoA.appendChild(p)
            }else if(!contemALetra){
                const p = document.createElement("h3")
                p.innerText = nomes
                elementoB.appendChild(p)
            }
            if (nomes.length < 6){
                const p = document.createElement("h3")
                p.innerText = nomes
                elementoC.appendChild(p)
            }
        }
    })
    }


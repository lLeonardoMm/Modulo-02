const arrayObjetos = [              //Gerardo tudo pelo Chat gpt (menos as imgs)
    {
        titulo: "Introdução à Programação",
        imgURL: "https://cdn.pixabay.com/photo/2023/06/16/21/13/landscape-8068793_1280.jpg",
        subtitulo: "Aprenda os conceitos fundamentais da programação."
    },
    {
        titulo: "Desenvolvimento Web Moderno",
        imgURL: "https://cdn.pixabay.com/photo/2023/07/16/18/21/flowers-8131239_640.jpg",
        subtitulo: "Descubra as mais recentes tecnologias para desenvolver sites e aplicativos web."
    },
    {
        titulo: "Inteligência Artificial e Aprendizado de Máquina",
        imgURL: "https://cdn.pixabay.com/photo/2023/07/20/11/00/pie-8139063_640.jpg",
        subtitulo: "Explore o mundo da IA e do aprendizado de máquina para criar soluções inteligentes."
    },
    {
        titulo: "Ciência de Dados e Análise de Dados",
        imgURL: "https://cdn.pixabay.com/photo/2023/07/14/10/50/flower-8126748_640.jpg",
        subtitulo: "Descubra insights valiosos a partir de grandes conjuntos de dados."
    },
    {
        titulo: "Segurança Cibernética",
        imgURL: "https://cdn.pixabay.com/photo/2023/07/21/14/12/wild-flowers-8141725_640.jpg",
        subtitulo: "Proteja sistemas e dados contra ameaças cibernéticas."
    },
    {
        titulo: "Internet das Coisas (IoT)",
        imgURL: "https://cdn.pixabay.com/photo/2023/07/22/09/45/bee-8143028_640.jpg",
        subtitulo: "Conecte o mundo físico ao mundo digital com dispositivos inteligentes."
    },
    {
        titulo: "Realidade Virtual e Aumentada",
        imgURL: "https://cdn.pixabay.com/photo/2023/07/17/13/50/baby-snow-leopard-8132690_640.jpg",
        subtitulo: "Explore experiências imersivas com RV e RA."
    },
    {
        titulo: "Big Data e Armazenamento em Nuvem",
        imgURL: "https://cdn.pixabay.com/photo/2023/06/29/09/52/angkor-thom-8096092_640.jpg",
        subtitulo: "Gerencie grandes volumes de dados na nuvem."
    },
    {
        titulo: "Computação em Nuvem",
        imgURL: "https://cdn.pixabay.com/photo/2023/06/09/18/18/deer-8052359_640.jpg",
        subtitulo: "Aproveite recursos computacionais escaláveis e flexíveis na nuvem."
    }
];
function salvarStorage() {
    if (arrayObjetos) {
        const arrayString = JSON.stringify(arrayObjetos);
        localStorage.setItem("meuArray", arrayString);
    }
}
window.onload = CarregarConteudos

function CarregarConteudos() {

    arrayObjetos.forEach(function (arrayObjetos) {
        const section = document.createElement("section")
        const tituloFinal = document.createElement("h3")
        const imgFinal = document.createElement('img')
        const subtituloFinal = document.createElement("p")

        tituloFinal.setAttribute("class", "titulo")
        tituloFinal.innerHTML = arrayObjetos.titulo

        imgFinal.setAttribute('src', arrayObjetos.imgURL)
        imgFinal.setAttribute('width', '80%')
        imgFinal.setAttribute('alt', arrayObjetos.imgURL)

        subtituloFinal.setAttribute("class", "subTitulo")
        subtituloFinal.innerText = arrayObjetos.subtitulo

        section.setAttribute("tituloManipulavel", arrayObjetos.titulo.toLowerCase());

        
        section.setAttribute("subTituloManipulavel", arrayObjetos.subtitulo.toLowerCase());


        section.appendChild(tituloFinal)
        section.appendChild(imgFinal)
        section.appendChild(subtituloFinal)

        document.getElementById('Conteudos').appendChild(section)
    });
}
function Pesquisar() {
    const inputPesquisa = document.getElementById("pesquisa");
    const termoPesquisado = inputPesquisa.value.toLowerCase();

    arrayObjetos.forEach(function (objeto) {
        const tituloSeletor = objeto.titulo.toLowerCase();
        const subtituloSeletor = objeto.subtitulo.toLowerCase();
        const cardTitulo = document.querySelector(`[TituloManipulavel="${tituloSeletor}"]`);
        const cardSubTitulo = document.querySelector(`[subTituloManipulavel="${subtituloSeletor}"]`);


        if (cardTitulo || cardSubTitulo) {
            const cardVisivel = tituloSeletor.includes(termoPesquisado) || subtituloSeletor.includes(termoPesquisado);
            
            if (cardTitulo) {
                cardTitulo.style.display = cardVisivel ? "block" : "none";
              }
        
              if (cardSubTitulo) {
                cardSubTitulo.style.display = cardVisivel ? "block" : "none";
              }
        }
    });
};




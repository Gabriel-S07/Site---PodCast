const botaoMidiaMobile = document.querySelector("#controlesMobile")
const telaTodaMidiaMobile = document.querySelector("#telaMidiaMobile")
const divEps = document.querySelector(".eps")
const botaoFecharMobile = document.querySelector(".material-symbols-outlined")

botaoMidiaMobile.addEventListener("click", function(){
    telaTodaMidiaMobile.style.display = "flex"
    divEps.classList.add("escondido")
})

botaoFecharMobile.addEventListener("click", function(){
    telaTodaMidiaMobile.style.display = "none"
})


const listaEps = document.querySelectorAll(".eps")
const imgPrincipal = document.querySelector(".imgPrincipal")
const imgControlesMobile = document.querySelector(".fotinha img")
const imgMobile = document.querySelector("#midiaMobile img")
const tituloVideoClicado = document.querySelector(".tituloVideo p")
const tituloVideoClicadoMobile = document.querySelector("#controlesMobile .titulo")
const tituloMobileTopo = document.querySelector(".centralizarTitulo p")
const tituloMobile = document.querySelector(".seprarTextoTelaCheia .titulo")

let tituloClicado = "Kyan"
let codigoClicado = "168"
let epAtual = "1"

for(let i = 0; i < listaEps.length; i++)
{
    let epClicado = listaEps[i]
    epClicado.addEventListener("click", function(){
        tituloClicado = epClicado.getAttribute("title")
        codigoClicado = epClicado.getAttribute("ep")
        epAtual = epClicado.getAttribute("cd")

        console.log(tituloClicado);
        console.log(epAtual);

        imgPrincipal.src = `Thumbs/${tituloClicado}-${epAtual}-PDPH.jpg`
        imgControlesMobile.src = `Thumbs/${tituloClicado}-${epAtual}-PDPH.jpg`
        imgMobile.src = `Thumbs/${tituloClicado}-${epAtual}-PDPH.jpg`

        tituloVideoClicado.textContent = `PodPah - ${tituloClicado} - EP: #${codigoClicado}`
        tituloVideoClicadoMobile.textContent = `PodPah - ${tituloClicado} - EP: #${codigoClicado}`
        tituloMobileTopo.textContent = `PodPah - ${tituloClicado} - EP: #${codigoClicado}`
        tituloMobile.textContent = `PodPah - ${tituloClicado} - EP: #${codigoClicado}`
    })
}

const botaoProximo = document.querySelector("#proximo")
botaoProximo.addEventListener("click", function(){
    epAtual++
    if(epAtual == 8)
    {
        epAtual = 1
    }

    let proximoEp = listaEps[epAtual - 1]
    proximoEp = proximoEp.getAttribute("title")
    imgPrincipal.src = `Thumbs/${proximoEp}-${epAtual}-PDPH.jpg`
    imgControlesMobile.src = `Thumbs/${proximoEp}-${epAtual}-PDPH.jpg`
    imgMobile.src = `Thumbs/${proximoEp}-${epAtual}-PDPH.jpg`
})

const botaoAnterior = document.querySelector("#anterior")
botaoAnterior.addEventListener("click", function(){
    epAtual--
    console.log(epAtual);
    if(epAtual == 0)
    {
        epAtual = 7
    }
    console.log(epAtual);
    let epAnterior = listaEps[epAtual - 1]
    console.log(epAnterior);
    epAnterior = epAnterior.getAttribute("title")
    imgPrincipal.src = `Thumbs/${epAnterior}-${epAtual}-PDPH.jpg`
    imgControlesMobile.src = `Thumbs/${epAnterior}-${epAtual}-PDPH.jpg`
    imgMobile.src = `Thumbs/${epAnterior}-${epAtual}-PDPH.jpg`
})
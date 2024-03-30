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
const musica = document.querySelector("#musica")

let tituloClicado = "Kyan"
let codigoClicado = "168"
let epAtual = "1"

for(let i = 0; i < listaEps.length; i++)
{
    let epClicado = listaEps[i]

    console.log(i);

    epClicado.addEventListener("click", function(){
        
        if(listaEps[epAtual - 1].classList.contains("assistindo"))
        {
            listaEps[epAtual - 1].classList.remove("assistindo")
        }
       
        epClicado.classList.add("assistindo")

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

        musica.src = `Audios/${tituloClicado}-${epAtual}-PDPH-audio.mp3`
        botaoPlay.style.display = "none"
        botaoPause.style.display = "block"
        botaoPlayMobile.style.display = "none"
        botaoPauseMobile.style.display = "block"
    })
}

// Avançar - Retroceder

let nmProximoEp = ""
let cdProximoEp = ""
let nmAnteriorEp = ""
let cdAnteriorEp = ""

const botaoProximo = document.querySelector("#proximo")
botaoProximo.addEventListener("click", function(){
    epAtual++
    if(epAtual == 8)
    {
        epAtual = 1
    }

    let proximoEp = listaEps[epAtual - 1]
    nmProximoEp = proximoEp.getAttribute("title")
    cdProximoEp = proximoEp.getAttribute("ep")

    imgPrincipal.src = `Thumbs/${nmProximoEp}-${epAtual}-PDPH.jpg`
    imgControlesMobile.src = `Thumbs/${nmProximoEp}-${epAtual}-PDPH.jpg`
    imgMobile.src = `Thumbs/${nmProximoEp}-${epAtual}-PDPH.jpg`

    tituloVideoClicado.textContent = `PodPah - ${nmProximoEp} - EP: #${cdProximoEp}`
    tituloVideoClicadoMobile.textContent = `PodPah - ${nmProximoEp} - EP: #${cdProximoEp}`
    tituloMobileTopo.textContent = `PodPah - ${nmProximoEp} - EP: #${cdProximoEp}`
    tituloMobile.textContent = `PodPah - ${nmProximoEp} - EP: #${cdProximoEp}`

    musica.src = `Audios/${nmProximoEp}-${epAtual}-PDPH-audio.mp3`
    botaoPlay.style.display = "none"
    botaoPause.style.display = "block"
})

const botaoAnterior = document.querySelector("#anterior")
botaoAnterior.addEventListener("click", function(){
    epAtual--
    if(epAtual == 0)
    {
        epAtual = 7
    }
    let epAnterior = listaEps[epAtual - 1]
    nmAnteriorEp = epAnterior.getAttribute("title")
    cdAnteriorEp = epAnterior.getAttribute("ep")

    imgPrincipal.src = `Thumbs/${nmAnteriorEp}-${epAtual}-PDPH.jpg`
    imgControlesMobile.src = `Thumbs/${nmAnteriorEp}-${epAtual}-PDPH.jpg`
    imgMobile.src = `Thumbs/${nmAnteriorEp}-${epAtual}-PDPH.jpg`

    tituloVideoClicado.textContent = `PodPah - ${nmAnteriorEp} - EP: #${cdAnteriorEp}`
    tituloVideoClicadoMobile.textContent = `PodPah - ${nmAnteriorEp} - EP: #${cdAnteriorEp}`
    tituloMobileTopo.textContent = `PodPah - ${nmAnteriorEp} - EP: #${cdAnteriorEp}`
    tituloMobile.textContent = `PodPah - ${nmAnteriorEp} - EP: #${cdAnteriorEp}`

    musica.src = `Audios/${nmAnteriorEp}-${epAtual}-PDPH-audio.mp3`
    botaoPlay.style.display = "none"
    botaoPause.style.display = "block"
})

const botaoProximoMobile = document.querySelector("#proximoMobile")
botaoProximoMobile.addEventListener("click", function(){
    epAtual++
    if(epAtual == 8)
    {
        epAtual = 1
    }
    let proximoEp = listaEps[epAtual - 1]
    nmProximoEp = proximoEp.getAttribute("title")
    cdProximoEp = proximoEp.getAttribute("ep")

    imgPrincipal.src = `Thumbs/${nmProximoEp}-${epAtual}-PDPH.jpg`
    imgControlesMobile.src = `Thumbs/${nmProximoEp}-${epAtual}-PDPH.jpg`
    imgMobile.src = `Thumbs/${nmProximoEp}-${epAtual}-PDPH.jpg`

    tituloVideoClicado.textContent = `PodPah - ${nmProximoEp} - EP: #${cdProximoEp}`
    tituloVideoClicadoMobile.textContent = `PodPah - ${nmProximoEp} - EP: #${cdProximoEp}`
    tituloMobileTopo.textContent = `PodPah - ${nmProximoEp} - EP: #${cdProximoEp}`
    tituloMobile.textContent = `PodPah - ${nmProximoEp} - EP: #${cdProximoEp}`

    musica.src = `Audios/${nmProximoEp}-${epAtual}-PDPH-audio.mp3`
    botaoPlayMobile.style.display = "none"
    botaoPauseMobile.style.display = "block"
})

const botaoAnteriorMobile = document.querySelector("#anteriorMobile")
botaoAnteriorMobile.addEventListener("click", function(){
    epAtual--
    if(epAtual == 0)
    {
        epAtual = 7
    }
    let epAnterior = listaEps[epAtual - 1]
    nmAnteriorEp = epAnterior.getAttribute("title")
    cdAnteriorEp = epAnterior.getAttribute("ep")

    imgPrincipal.src = `Thumbs/${nmAnteriorEp}-${epAtual}-PDPH.jpg`
    imgControlesMobile.src = `Thumbs/${nmAnteriorEp}-${epAtual}-PDPH.jpg`
    imgMobile.src = `Thumbs/${nmAnteriorEp}-${epAtual}-PDPH.jpg`

    tituloVideoClicado.textContent = `PodPah - ${nmAnteriorEp} - EP: #${cdAnteriorEp}`
    tituloVideoClicadoMobile.textContent = `PodPah - ${nmAnteriorEp} - EP: #${cdAnteriorEp}`
    tituloMobileTopo.textContent = `PodPah - ${nmAnteriorEp} - EP: #${cdAnteriorEp}`
    tituloMobile.textContent = `PodPah - ${nmAnteriorEp} - EP: #${cdAnteriorEp}`

    musica.src = `Audios/${nmAnteriorEp}-${epAtual}-PDPH-audio.mp3`
    botaoPlayMobile.style.display = "none"
    botaoPauseMobile.style.display = "block"
})





// Play - Pause

const botaoPause = document.querySelector("#pause")
const botaoPlay = document.querySelector("#play")

botaoPause.addEventListener("click", function(){
    musica.play()
    botaoPlay.style.display = "block"
    botaoPause.style.display = "none"
})

botaoPlay.addEventListener("click", function(){
    musica.pause()
    botaoPlay.style.display = "none"
    botaoPause.style.display = "block"
})

const botaoPauseMobile = document.querySelector("#pauseMobile")
botaoPauseMobile.addEventListener("click", function(){
    musica.play()
    botaoPlayMobile.style.display = "block"
    botaoPauseMobile.style.display = "none"
})

const botaoPlayMobile = document.querySelector("#playMobile")
botaoPlayMobile.addEventListener("click", function(){
    musica.pause()
    botaoPlayMobile.style.display = "none"
    botaoPauseMobile.style.display = "block"
})
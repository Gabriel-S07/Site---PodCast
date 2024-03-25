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

for(let i = 0; i < listaEps.length; i++)
{
    let epClicado = listaEps[i]
    epClicado.addEventListener("click", function(){
        let idInput = epClicado.getAttribute("for")
        let input = document.querySelector(`#${idInput}`)
        tituloClicado = input.getAttribute("title")
        codigoClicado = input.getAttribute("ep")

        console.log(tituloClicado);
        console.log(codigoClicado);

        imgPrincipal.src = `Thumbs/${tituloClicado}-PDPH.jpg`
        imgControlesMobile.src = `Thumbs/${tituloClicado}-PDPH.jpg`
        imgMobile.src = `Thumbs/${tituloClicado}-PDPH.jpg`

        tituloVideoClicado.textContent = `PodPah - ${tituloClicado} - EP: #${codigoClicado}`
        tituloVideoClicadoMobile.textContent = `PodPah - ${tituloClicado} - EP: #${codigoClicado}`
        tituloMobileTopo.textContent = `PodPah - ${tituloClicado} - EP: #${codigoClicado}`
        tituloMobile.textContent = `PodPah - ${tituloClicado} - EP: #${codigoClicado}`
    })
}
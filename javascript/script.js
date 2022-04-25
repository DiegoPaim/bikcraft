
//Ativar links do menu
const linksmenu = document.querySelectorAll('.menu a')

function ativarlink (link) {
  const paglink = link.href
  const pag = window.location.href
  if (pag.includes(paglink)) {
    link.classList.add('ativo')
  }
}

linksmenu.forEach(ativarlink)

//Ativar items do orçamento

const parametros = new URLSearchParams(location.search)

function ativarparam (parametro) {
  const elemento = document.getElementById(parametro)
  elemento.checked = true;
}

parametros.forEach(ativarparam)

//Ativar perguntas

const perguntas = document.querySelectorAll('.perguntas button')

function ativarpergunt (e) {
  const perg = e.currentTarget;
  const controls = perg.getAttribute('aria-controls')
  const resposta = document.getElementById(controls)

  resposta.classList.toggle('ativa')
  const ativa = resposta.classList.contains('ativa')
  resposta.setAttribute('aria-expanded', ativa)
}

function evento (evento) {
  evento.addEventListener('click', ativarpergunt)
}

perguntas.forEach(evento)

// Galeria de bicicletas

const bicicletas = document.querySelectorAll(".bicicleta-imagem img")
const galeria = document.querySelector(".bicicleta-imagem")


function trocarimg(event) {
  const img = event.currentTarget
  matchMedia('(min-width: 1000px').matches
  if (media) {
    galeria.prepend(img)
  }
}

function clickimg(img) {
  img.addEventListener('click', trocarimg)
}

bicicletas.forEach(clickimg)
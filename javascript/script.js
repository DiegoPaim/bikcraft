
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
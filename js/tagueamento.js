// Preencha este arquivo com qualquer código que você necessite para realizar a
// coleta, desde a biblioteca analytics.js, gtag.js ou o snippet do Google Tag 
// Manager. No último caso, não é necessário implementar a tag <noscript>.
// O ambiente dispõe da $ 3.5.1, então caso deseje, poderá utilizá-la
// para fazer a sua coleta.
// Caso tenha alguma dúvida sobre o case, não hesite em entrar em contato.

$(document).ready(function () {
  ga('create', 'UA-12345-6', 'auto');
  ga('send', 'pageview');

  //Todas as páginas
  $(".menu-lista-contato").on("click", () => {
    ga('send', {
      hitType: 'event',
      eventCategory: 'menu',
      eventAction: 'entre_em_contato',
      eventLabel: 'link_externo'
    });
  });
  
  $(".menu-lista-download").on("click", () => {
    ga('send', {
      hitType: 'event',
      eventCategory: 'menu',
      eventAction: 'download_pdf',
      eventLabel: 'download_pdf'
    });
  });

  //Página analise.html
  $(".card-montadoras").each(function (){ 
    $(this).on("click", () => {
      ga('send', {
        hitType: 'event',
        eventCategory: 'analise',
        eventAction: 'ver_mais',
        eventLabel: $(this).data('name')
      });
    });
  });

  //Página sobre.html
  $("#nome").on("blur", function() {
    let valor = $(this).val();
    EnviarCampo(valor, 'nome')
  });

  $("#email").on("blur", function() {
    let valor = $(this).val();
    EnviarCampo(valor, 'email')
  });

  $("#telefone").on("blur", function() {
    let valor = $(this).val();
    EnviarCampo(valor, 'telefone')
  });

  $("#aceito").on("click", function() {
    let valor = $(this).val();
    EnviarCampo(valor, 'aceito')
  });
});

//Campo Preenchido
function EnviarCampo(valor, acao) {
  
  if(valor=='') {
    return;
  }
  
  ga('send', {
    hitType: 'event',
    eventCategory: 'contato',
    eventAction: acao,
    eventLabel: 'preencheu'
  });
}

  
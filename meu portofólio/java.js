// Menu responsivo
const menuBotao = document.querySelector("#menuBotao");
const navegacao = document.querySelector("#navegacao");

menuBotao.addEventListener("click", () => {
  const aberto = navegacao.classList.toggle("aberto");

  menuBotao.setAttribute("aria-expanded", String(aberto));
  menuBotao.setAttribute(
    "aria-label",
    aberto ? "Fechar menu" : "Abrir menu"
  );
});

// Fechar o menu ao clicar em uma seção
navegacao.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navegacao.classList.remove("aberto");
    menuBotao.setAttribute("aria-expanded", "false");
    menuBotao.setAttribute("aria-label", "Abrir menu");
  });
});

// Saudação dinâmica
function obterSaudacao(hora) {
  if (hora >= 5 && hora < 12) {
    return "Bom dia! Seja bem-vindo.";
  } else if (hora >= 12 && hora < 18) {
    return "Boa tarde! Seja bem-vindo.";
  } else {
    return "Boa noite! Seja bem-vindo.";
  }
}

document.querySelector("#saudacao").textContent =
  obterSaudacao(new Date().getHours());

// Atualizar o ano do rodapé
document.querySelector("#anoAtual").textContent =
  new Date().getFullYear();

// Filtro de projetos
const botoesFiltro = document.querySelectorAll(".filtro");
const projetos = document.querySelectorAll(".projeto-card");

botoesFiltro.forEach((botao) => {
  botao.addEventListener("click", () => {
    const filtro = botao.dataset.filtro;

    botoesFiltro.forEach((item) => {
      const ativo = item === botao;
      item.classList.toggle("ativo", ativo);
      item.setAttribute("aria-pressed", String(ativo));
    });

    projetos.forEach((projeto) => {
      projeto.hidden =
        filtro !== "todos" &&
        projeto.dataset.categoria !== filtro;
    });
  });
});

// Exibir mensagens de erro abaixo dos campos
function mostrarErro(campoId, erroId, mensagem) {
  const campo = document.getElementById(campoId);

  document.getElementById(erroId).textContent = mensagem;

  if (campo) {
    campo.setAttribute("aria-invalid", String(Boolean(mensagem)));
  }

  return Boolean(mensagem);
}

// Validar o formulário
function validarFormulario() {
  const nome = document.querySelector("#nome").value.trim();
  const email = document.querySelector("#email").value.trim();
  const mensagem = document.querySelector("#mensagem").value.trim();
  const consentimento =
    document.querySelector("#consentimento").checked;

  let invalido = false;

  invalido =
    mostrarErro(
      "nome",
      "erroNome",
      nome ? "" : "Digite seu nome."
    ) || invalido;

  const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  invalido =
    mostrarErro(
      "email",
      "erroEmail",
      emailValido ? "" : "Digite um e-mail válido."
    ) || invalido;

  invalido =
    mostrarErro(
      "mensagem",
      "erroMensagem",
      mensagem.length >= 20
        ? ""
        : "A mensagem deve ter pelo menos 20 caracteres."
    ) || invalido;

  document.querySelector("#erroConsentimento").textContent =
    consentimento ? "" : "Marque a caixa de consentimento.";

  if (!consentimento) {
    invalido = true;
  }

  return !invalido;
}

// Processar o envio do formulário
const formulario = document.querySelector("#formContato");
const resultado = document.querySelector("#resultadoForm");

formulario.addEventListener("submit", (evento) => {
  evento.preventDefault();
  resultado.textContent = "";

  if (validarFormulario()) {
    resultado.textContent =
      "Formulário validado com sucesso!";

    formulario.reset();

    formulario.querySelectorAll("[aria-invalid]").forEach((campo) => {
      campo.setAttribute("aria-invalid", "false");
    });
  } else {
    const primeiroErro =
      formulario.querySelector('[aria-invalid="true"]');

    if (primeiroErro) {
      primeiroErro.focus();
    }
  }
});
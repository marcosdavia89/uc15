
const formulario = document.getElementById("formNotas");
const resultado = document.getElementById("resultado");
const botaoLimpar = document.getElementById("limpar");

formulario.addEventListener("submit", function(event) {
    event.preventDefault();

    const nome = document.getElementById("nome").value.trim();
    const campo1 = document.getElementById("nota1").value.trim();
    const campo2 = document.getElementById("nota2").value.trim();
    const campo3 = document.getElementById("nota3").value.trim();

    if (nome === "") {
        mostrarErro("Digite o nome do estudante.");
        return;
    }

    if (campo1 === "" || campo2 === "" || campo3 === "") {
        mostrarErro("Preencha todas as três notas.");
        return;
    }

    const nota1 = Number(campo1);
    const nota2 = Number(campo2);
    const nota3 = Number(campo3);

    const notas = [nota1, nota2, nota3];

    if (!notas.every(nota =>
        Number.isFinite(nota) && nota >= 0 && nota <= 10
    )) {
        mostrarErro("As notas devem estar entre 0 e 10.");
        return;
    }

    const media = (nota1 + nota2 + nota3) / 3;

    let situacao;
    let classe;

    if (media >= 7) {
        situacao = "Aprovado(a)";
        classe = "aprovado";
    } else if (media >= 5) {
        situacao = "Recuperação";
        classe = "recuperacao";
    } else {
        situacao = "Reprovado(a)";
        classe = "reprovado";
    }

    resultado.innerHTML = `
        <h2>Resultado da consulta</h2>
        <p><strong>Estudante:</strong> ${escaparHTML(nome)}</p>
        <p class="media">Média: ${media.toFixed(2).replace(".", ",")}</p>
        <p>Situação: <span class="${classe}">${situacao}</span></p>
    `;
});

function mostrarErro(mensagem) {
    resultado.innerHTML = `
        <p class="erro">${mensagem}</p>
    `;
}

function escaparHTML(texto) {
    return texto.replace(/[&<>"']/g, caractere => ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;"
    })[caractere]);
}

botaoLimpar.addEventListener("click", function() {
    formulario.reset();
    resultado.innerHTML = "";
    document.getElementById("nome").focus();
});

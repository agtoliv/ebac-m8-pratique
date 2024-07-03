const form = document.getElementById("form-principal");
const nome = document.getElementById("nome");
const btn = document.getElementById("btn");

form.addEventListener('submit', function(event) {
    if (!nomeCompleto(nome.value)) {
        event.preventDefault();
        alert("O campo nome deve conter uma sequência de texto, espaço e texto.");
    }
});

function nomeCompleto(valor) {
    const partes = valor.split(' ');

    // Verifica se há exatamente duas partes, ambas contendo apenas letras
    if (partes.length === 2 && partes[0] && partes[1] && /^[A-Za-z]+$/.test(partes[0]) && /^[A-Za-z]+$/.test(partes[1])) {
        return true;
    }
    return false;
}
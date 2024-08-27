let textoSaida2;

function funcao_cripto(parametro) {
    let textoEntrada = document.querySelector('textarea').value;
    const reg = new RegExp(Object.keys(parametro).join("|"), "g");
    textoEntrada = textoEntrada.replace(reg, matched => parametro[matched]);

    let textoSaida = document.getElementById('texto__saida');
    textoSaida.innerHTML = textoEntrada;

    textoSaida2 = textoEntrada;

}

function autoselect() {
    let input = document.querySelector('textarea');
    input.focus();
    input.select();
}



autoselect();


function criptografar() {
    const cripto = {
        a: "ai",
        e: "enter",
        i: "imes",
        o: "ober",
        u: "ufat"

    }
    /* let textoEntrada = document.querySelector('textarea').value;
    const reg = new RegExp(Object.keys(cripto).join("|"), "g");
    textoEntrada = textoEntrada.replace(reg, matched => cripto[matched]);
    Object.keys(cripto).forEach((key) => {
        textoEntrada = textoEntrada.replaceAll(key, cripto[key]);

    let textoSaida = document.getElementById('texto__saida');
    textoSaida.innerHTML = textoEntrada;    */

    funcao_cripto(cripto);
    
}

function descriptografar() {
    const descripto = {
        ai: "a",
        enter: "e",
        imes: "i",
        ober: "o",
        ufat: "u"

    } 

    funcao_cripto(descripto);
}

function copiar_saida() {
    navigator.clipboard.writeText(textoSaida2);
    limparCampo();
    autoselect();

}

function limparCampo() {
    let textoEntrada = document.querySelector('textarea');
    textoEntrada.value = '';
}
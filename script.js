/* LETRA C = CLEAR, NESSE CASO, ELA IRÁ SELECIONAR OS DADOS DO RESULTADO
E SUBSTITUIR PELO VALOR ENTRE ASPAS */

alert("Olá! Essa ferramenta trata-se de uma aplicação para facilitar o dia a dia do analista de SAC. Por enquanto contém poucas funcionalidades. Logo será acrescentado um despertador e outras funções.Obrigado por usar essa aplicação :)")
function clearScreen() {
    document.getElementById("result")
    .value ="";
}

// FIM DA SEÇÃO


function updScreen(val) {
    var x =document.getElementById("result").value;

    document.getElementById("result").value = x + val;
}


/* Fiquei impressionado, pois necessito só dessa parte para fazer funcionar a calculadora */

function themeSwitcher() {
var dark =document.getElementById("dark-mode");

var th =document.getElementById("theme");

if (th.getAttribute('href') == 'css1.css'){
    th.href ='css2.css';
    dark.innerHTML="Modo claro";
} else { th.href ='css1.css';
dark.innerHTML = 'Modo Escuro';}
}
/*


document.getElementById("addarea").onclick = function myfunction() {
    document.getElementById("addarea").innerHTML="<textarea></textarea>"
}
*/


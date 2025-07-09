// Variaveis para as opções
var quantidade_a = 0;
var quantidade_b = 0;

// Função para cada select
function contarOpcao(select) {
    if (select.value == 'a') {
        quantidade_a++;
    } else if (select.value == 'b') {
        quantidade_b++;
    }
}

function lerSelects(){
    quantidade_a=0;
    quantidade_b=0;
    // Pega todos os <select> da página e guarda em uma variavel
    const selects = document.querySelectorAll('select');
    // Percorre cada select usando forEach (parecido com loop)
    selects.forEach(contarOpcao);
    // Mostra o resultado no console depois de rodar "todo o loop"
    console.log('Quantidade de A:', quantidade_a);
    console.log('Quantidade de B:', quantidade_b);
    mostrarResultado();
    atualizarPorcentagem();
}
// Maneira simples de mostrar os resultados
function mostrarResultado(){
    document.getElementById("resultado").innerHTML = "Sua afinidade com exatas é de:"+quantidade_a;
}
// Mostrando com barra de porcentagem
function atualizarPorcentagem(){
    const skillBar = document.getElementById('exatas');
    // Multiplicando por 10 pq temos 10 questões, mudem se tiverem números diferentes.
    skillBar.style.width = quantidade_a*10+'%';
    skillBar.innerHTML = quantidade_a*10+'%';
}

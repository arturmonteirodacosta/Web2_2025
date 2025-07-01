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
    // Pega todos os <select> da página e guarda em uma variavel
    const selects = document.querySelectorAll('select');
    // Percorre cada select usando forEach (parecido com loop)
    selects.forEach(contarOpcao);
    // Mostra o resultado no console depois de rodar "todo o loop"
    console.log('Quantidade de A:', quantidade_a);
    console.log('Quantidade de B:', quantidade_b);
}



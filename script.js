//Armazenar os dados 
let dados =[];

//Gerar ID aleatório com 5 dígitos
function gerald() {
    return Math.floor(10000 + Math.random()*90000);
}

//Adicionar dados à tabela
document.getElementById('form').addEventListener('submit', fuction(event){
    event.preventDefault();

    const descricao = document.getElementById('descricao').value;
    const valor = parseFloat(document.getElementById('valor').value.replace(',','.'))//Aceita centavos
    const tipo = document.getElementById('tipo').value;

    //Captura a data do input e formata corretamente
    const dataInput = new Date(document.getElementById('data').value);
    const data `${String(dataInput.getDate()).padStart(2,'0')}/${String(dataInput.getMonth()+ 1).padStart(2,'0')}/${dataInput.getFullYear()}`;// Formato DD/MM/AAAA

    // Adiciona os dados ao array
    dados.push({ id: gerald(), descricao, valor, tipo, data});

    // Limpa o formulário
    document.getElementById('form').reset();

    // Atualiza a tabela e o gráfico
    atualizarTabela();
    atualizarGrafico();
};

// Atualizar tabela com dados
function atualizarTabela(filtroData = null){
    const tabelaBody = document.getElementById('tabelaBody');
    
}
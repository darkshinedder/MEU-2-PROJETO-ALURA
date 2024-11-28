// Seleciona todos os elementos de "passo" e botões
const passos = document.querySelectorAll('.passo');
const botoesProximo = document.querySelectorAll('.btn-proximo');

// Função para alternar os passos
function alternarPasso(passoAtual, passoProximo) {
    const atual = document.getElementById(`passo-${passoAtual}`);
    const proximo = document.getElementById(`passo-${passoProximo}`);
    
    // Remove a classe 'ativo' do passo atual
    atual.classList.remove('ativo');
    
    // Adiciona a classe 'ativo' ao próximo passo
    proximo.classList.add('ativo');
}

// Adiciona evento de clique a cada botão
botoesProximo.forEach((botao) => {
    botao.addEventListener('click', () => {
        const passoAtual = botao.closest('.passo').id.split('-')[1]; // Identifica o passo atual
        const passoProximo = botao.dataset.proximo; // Obtém o próximo passo do atributo data-proximo
        alternarPasso(passoAtual, passoProximo); // Chama a função para alternar os passos
    });
});

// 1: Adicionar um contato
function adicionarContato() {
    let nome = document.getElementById('idInsereNome').value;
    // Se o nome estiver vazio, exibe um alerta e retorna
    if (nome === '') {
        alert('Insira um nome para o contato');
        return;
    }

    // Cria um novo item de lista (id com Date.now() para garantir que é único)
    let contato = document.createElement('li');
    contato.classList.add('classeItemContato');
    contato.innerHTML = `
        <span class="classeContato">
            <input type="radio" id="${Date.now()}" name="contato" required>
            <label for="${Date.now()}">${nome}</label>
        </span>
        <span class="classeBotaoRemover">remover</span>
    `;

    document.getElementById('idContatos').appendChild(contato);
    document.getElementById('idInsereNome').value = '';
}

// 2: Remover um contato específico
document.addEventListener('click', function (e) {
    if (e.target.classList.contains('classeBotaoRemover')) {
        e.target.parentElement.remove();
    }
});

// 3: Remover todos os contatos
function excluirContatos() {
    let contatos = document.querySelectorAll('.classeItemContato');
    let contatoSelecionado = document.querySelector('input[name="contato"]:checked');

    if (!contatoSelecionado) {
        alert('Selecione um contato para excluir');
        return;
    }

    let index = Array.from(contatos).indexOf(contatoSelecionado.parentElement.parentElement);

    if (index === 0) {
        if (!confirm(`Deseja excluir o 1º contato?`)) {
            return;
        }
    } else if (!confirm(`Deseja excluir do 1º contato até o ${index + 1}º contato?`)) {
        return;
    }

    for (let i = 0; i <= index; i++) {
        contatos[i].remove();
    }
}

// 4: Muda a classe classeAtivo para o item clicado e remove dos outros
function mudarLembrete(item) {
    document.querySelectorAll('.classeGuias li').forEach(function (item) {
        item.classList.remove('classeAtivo');
    });

    item.classList.add('classeAtivo');

    document.querySelectorAll('.classePainel').forEach(function (painel) {
        painel.classList.remove('classeAtivo');
    });

    document.getElementById(`idDiv${item.id.replace('idLembrete', 'Lembrete')}`).classList.add('classeAtivo');
}
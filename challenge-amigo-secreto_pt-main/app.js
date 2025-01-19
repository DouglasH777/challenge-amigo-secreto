let inputNomeInserido = document.getElementById('amigo');
let ulListaAmigos = document.getElementById('listaAmigos');
let ulResultado = document.getElementById('resultado');
let nomes = [];

function adicionarAmigo() {
    // Limpa o resultado anterior
    if (ulResultado.innerHTML !== '') {
        ulResultado.innerHTML = '';
    }

    // Valida se o nome inserido é válido
    if (inputNomeInserido.value.trim() === '') {
        alert('Insira um nome válido!');
    } else {
        nomes.push(inputNomeInserido.value.trim());
    }

    // Atualiza a lista de amigos
    atualizarLista();

    // Limpa o campo de entrada
    inputNomeInserido.value = '';
}

function atualizarLista() {
    ulListaAmigos.innerHTML = ''; // Limpa a lista de amigos

    // Cria os itens da lista com os nomes
    nomes.forEach((nome, index) => {
        let li = document.createElement('li');
        li.innerHTML = nome;

        // Adiciona botão para remover o amigo
        let btnRemover = document.createElement('button');
        btnRemover.textContent = 'Remover';
        btnRemover.onclick = () => {
            nomes.splice(index, 1); // Remove o nome do array
            atualizarLista(); // Atualiza a lista após remoção
        };

        li.appendChild(btnRemover); // Adiciona o botão ao item da lista
        ulListaAmigos.appendChild(li); // Adiciona o item na lista
    });
}

function sortearAmigo() {
    // Verifica se há amigos para sortear
    if (nomes.length === 0) {
        alert('Não há amigos para sortear!');
        return;
    }

    // Sorteia um amigo aleatório
    let indiceAleatorio = Math.floor(Math.random() * nomes.length);
    let li = document.createElement('li');
    
    ulListaAmigos.innerHTML = ''; // Limpa a lista (caso queira mostrar sorteio em outro lugar, remova isso)

    // Exibe o nome sorteado
    li.innerHTML = `Nome sorteado: ${nomes[indiceAleatorio]}`;

    // Limpa a lista de amigos após o sorteio
    nomes = [];

    ulResultado.appendChild(li); // Exibe o sorteio no resultado
}

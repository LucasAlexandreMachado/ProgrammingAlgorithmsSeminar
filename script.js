document.getElementById('ongForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Coleta os dados do formulário
    let ongName = document.getElementById('ongName').value;
    let projectName = document.getElementById('projectName').value;
    let projectDescription = document.getElementById('projectDescription').value;
    let contactPerson = document.getElementById('contactPerson').value;
    let contactEmail = document.getElementById('contactEmail').value;

    // Cria um novo elemento para exibir o registro
    let registro = document.createElement('div');
    registro.classList.add('registro');
    registro.innerHTML = `
        <p><strong>Nome da ONG:</strong> ${ongName}</p>
        <p><strong>Nome do Projeto:</strong> ${projectName}</p>
        <p><strong>Descrição do Projeto:</strong> ${projectDescription}</p>
        <p><strong>Pessoa de Contato:</strong> ${contactPerson}</p>
        <p><strong>Email de Contato:</strong> ${contactEmail}</p>
    `;

    // Adiciona o novo registro ao container de registros
    document.getElementById('registros').appendChild(registro);

    // Limpa o formulário
    document.getElementById('ongForm').reset();
});

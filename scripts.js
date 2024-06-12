document.addEventListener('DOMContentLoaded', () => {
    const projectForm = document.getElementById('project-form');
    const projectList = document.getElementById('project-list');
    let projects = [
        {'Nome da ONG': 'ONG Amazônia', 'CNPJ': '12.345.678/0001-90', 'Nome do Projeto': 'Amazônia', 'Descrição': 'Projeto de preservação da Amazônia', 'Email de Contato': 'amazonia@1234.com', 'Forma de Arrecadação': 'Pix: amazonia@1234.com', 'Status': 'Em andamento'},
        {'Nome da ONG': 'ONG Pantanal', 'CNPJ': '23.456.789/0001-01', 'Nome do Projeto': 'Pantanal', 'Descrição': 'Projeto de preservação do Pantanal', 'Email de Contato': 'pantanal@1234.com', 'Forma de Arrecadação': 'Pix: pantanal@1234.com', 'Status': 'Em andamento'},
        {'Nome da ONG': 'ONG Cerrado', 'CNPJ': '34.567.890/0001-12', 'Nome do Projeto': 'Cerrado', 'Descrição': 'Projeto de preservação do Cerrado', 'Email de Contato': 'cerrado@1234.com', 'Forma de Arrecadação': 'Pix: cerrado@1234.com', 'Status': 'Em andamento'},
        {'Nome da ONG': 'ONG Mata Atlântica', 'CNPJ': '45.678.901/0001-23', 'Nome do Projeto': 'Mata Atlântica', 'Descrição': 'Projeto de preservação da Mata Atlântica', 'Email de Contato': 'mataatlantica@1234.com', 'Forma de Arrecadação': 'Pix: mataatlantica@1234.com', 'Status': 'Em andamento'},
    ];

    const displayProjects = () => {
        projectList.innerHTML = '';
        projects.forEach(project => {
            const li = document.createElement('li');
            li.innerHTML = `
                <strong>Nome da ONG:</strong> ${project['Nome da ONG']}<br>
                <strong>CNPJ:</strong> ${project['CNPJ']}<br>
                <strong>Nome do Projeto:</strong> ${project['Nome do Projeto']}<br>
                <strong>Descrição:</strong> ${project['Descrição']}<br>
                <strong>Email de Contato:</strong> ${project['Email de Contato']}<br>
                <strong>Forma de Arrecadação:</strong> ${project['Forma de Arrecadação']}<br>
                <strong>Status:</strong> ${project['Status']}
            `;
            projectList.appendChild(li);
        });
    };

    const isValidCNPJ = (cnpj) => {
        const regex = /^\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2}$/;
        return regex.test(cnpj);
    };

    projectForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const cnpj = document.getElementById('cnpj').value;
        if (!isValidCNPJ(cnpj)) {
            alert('Por favor, insira um CNPJ válido no formato 00.000.000/0000-00');
            return;
        }

        const newProject = {
            'Nome da ONG': document.getElementById('ong-name').value,
            'CNPJ': cnpj,
            'Nome do Projeto': document.getElementById('project-name').value,
            'Descrição': document.getElementById('project-description').value,
            'Email de Contato': document.getElementById('contact-email').value,
            'Forma de Arrecadação': document.getElementById('funding-method').value,
            'Status': document.getElementById('status').value,
        };

        projects.push(newProject);
        displayProjects();

        projectForm.reset();
    });

    displayProjects();
});

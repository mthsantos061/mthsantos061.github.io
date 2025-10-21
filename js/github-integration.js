// Conteúdo NOVO E CORRETO para o arquivo js/github-integration.js

document.addEventListener('DOMContentLoaded', () => {
    const projectsContainer = document.getElementById('github-projects-container');

    // JÁ QUE SEUS PROJETOS SÃO PASTAS LOCAIS, VAMOS DEFINI-LOS AQUI:
    const meusProjetos = [
        {
            imagemUrl: 'images/adminpainel.png',
            titulo: 'Painel de Admin',
            descricao: 'Projeto simples feito durante o final do curso de análise e desenvolvimento de sistemas.',
            link: 'ProjetoAdmin/admin_tarefas.html'
        },
        {
            imagemUrl: 'images/banco.png',
            titulo: 'Banco Imobiliário',
            descricao: 'Projeto simples feito durante o curso de análise e desenvolvimento de sistemas.',
            link: 'Life game/Life game/index.html'
        }
        // PARA ADICIONAR UM NOVO PROJETO NO FUTURO, BASTA COPIAR E COLAR
        // UM BLOCO COMO ESTE ACIMA E ALTERAR AS INFORMAÇÕES.
        /*
        {
            imagemUrl: 'images/imagem_do_novo_projeto.png',
            titulo: 'Meu Novo Projeto',
            descricao: 'Uma breve descrição do que este novo projeto faz.',
            link: 'pasta_do_projeto/index.html'
        }
        */
    ];

    function carregarProjetosLocais() {
        if (!projectsContainer) {
            console.error('Container de projetos não encontrado!');
            return;
        }

        // Limpa a mensagem "Carregando..."
        projectsContainer.innerHTML = ''; 

        if (meusProjetos.length === 0) {
            projectsContainer.innerHTML = '<p>Nenhum projeto foi adicionado ainda.</p>';
            return;
        }

        // Cria o HTML para cada projeto na nossa lista
        meusProjetos.forEach(projeto => {
            const projectBox = document.createElement('div');
            projectBox.classList.add('portfolio-box');

            projectBox.innerHTML = `
                <img src="${projeto.imagemUrl}" alt="Imagem do projeto ${projeto.titulo}">
                <div class="portfolio-layer">
                    <h4>${projeto.titulo}</h4>
                    <p>${projeto.descricao}</p>
                    <a href="${projeto.link}" target="_blank" rel="noopener noreferrer"><i class='bx bx-link-external'></i></a>
                </div>
            `;
            projectsContainer.appendChild(projectBox);
        });
    }

    carregarProjetosLocais();
});
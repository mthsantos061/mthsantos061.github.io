// Conteúdo FINAL E COMPLETO para o arquivo js/auth.js

document.addEventListener('DOMContentLoaded', () => {
    const loginBtn = document.getElementById('login-btn');
    const userSessionDiv = document.getElementById('user-session');

    // !!! VERIFIQUE SE VOCÊ SUBSTITUIU ESTE VALOR !!!
    const clientId = 'Ov23liLYYrHv6v9n6kcb'; 
    const portfolioOwner = 'mthsantos061'; // Seu nome de usuário do GitHub

    // Função para buscar dados do usuário e exibir o estado "logado"
    async function showLoggedInUser(username) {
        if (!userSessionDiv) return;

        try {
            const response = await fetch(`https://api.github.com/users/${username}`);
            if (!response.ok) throw new Error('Usuário do GitHub não encontrado');
            
            const userData = await response.json();
            
            // O HTML gerado é um link <a> com um ID para o logout
            userSessionDiv.innerHTML = `
                <a href="#" id="logout-btn" class="github-user-link" title="Clique para deslogar">
                    <div class="github-user">
                        <img src="${userData.avatar_url}" alt="Avatar do GitHub" class="github-avatar">
                        <span class="github-name">${userData.login}</span>
                    </div>
                </a>
            `;

            // Adiciona o evento de clique para a função de logout
            const logoutBtn = document.getElementById('logout-btn');
            if (logoutBtn) {
                logoutBtn.addEventListener('click', (event) => {
                    event.preventDefault();
                    // Ação de logout: recarrega a página para o estado original
                    window.location.href = window.location.pathname;
                });
            }

        } catch (error) {
            console.error('Erro ao buscar dados do usuário:', error);
            userSessionDiv.innerHTML = `<p style="color: white; font-weight: bold;">Login OK</p>`;
        }
    }

    // Se o botão de login original existir, adiciona o evento de clique
    if (loginBtn) {
        loginBtn.addEventListener('click', (event) => {
            event.preventDefault();
            window.location.assign(`https://github.com/login/oauth/authorize?client_id=${clientId}&scope=read:user`);
        });
    }

    // Verifica se a URL contém o código de autorização do GitHub
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.has('code')) {
        // Limpa os parâmetros da URL
        window.history.replaceState({}, document.title, window.location.pathname);
        // Exibe o usuário "logado"
        showLoggedInUser(portfolioOwner);
    }
});
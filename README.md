# `PontoGo`

<img src="./public/img/imgLogoPontoGo.svg" width="300px">

#### Sistema fictício de registros de ponto. 
#### Utilizando a API GraphQL [Brainny](http://test.frontend.api.brainny.cc/graphql).
<img src="./src/assets/BrainnyLogoReadme.png" width="200px">

# `Link`

http://marleo-pontogo.surge.sh/

###### O site tem suporte "adicionar a tela inicial" ou "Instalar PWA" (Progressive Web App).

# `Descrição`

###### Sistema fictício que consiste em colaboradores conseguirem bater seu ponto e o administrador conseguir visualizar os registros de todos os colaboradores. 

###### O site oferece uma experiência intuitiva, permitindo:

- Navegação inicial pela Landing Page que da acesso ao sistema de ponto;
- Sistema com proteção que da acesso para registrar ponto apenas a nível de colaboradores;
- Colaboradores conseguem visualizar o histórico de registros;
- Sistema com proteção que da acesso para que apenas administradores consigam visualizar o registro de ponto de todos os colaboradores;

O repositório do projeto pode ser encontrado [aqui](https://github.com/marleopr/brainny-system)

| Landing Page                                  | Login                                  |
| --------------------------------------------- |   ------------------------------------ |
| <img src="src\assets\printLandingPage.png" >  | <img src="src\assets\printLogin.png" > |
| Dashboard do admin                            | Dashboard do colaborador               |
| <img src="src\assets\printAdmin.png" >        | <img src="src\assets\printUser.png" >  |
| Modal de registro de ponto                    | Página de erro                         |
| <img src="src\assets\printModal.png" >        | <img src="src\assets\printError.png" > |


# `Passo a Passo para Instalação do Projeto React:`

##### Pré-requisitos:

Certifique-se de ter o Node.js e o npm (ou yarn) instalados em sua máquina. Você pode baixá-los em https://nodejs.org/.
Git instalado em sua máquina. Você pode baixá-lo em https://git-scm.com/.

##### Clone o Repositório:

Abra o terminal (ou Git Bash) e navegue até o diretório onde deseja clonar o projeto.
Execute o comando: git clone https://github.com/marleopr/brainny-system.git

##### Acesse o Diretório do Projeto:

Navegue até o diretório do projeto: cd nome-do-repositorio

##### Instale as Dependências:

Execute o comando: npm install
Este comando irá instalar todas as dependências listadas no arquivo package.json.
Configure as Variáveis de Ambiente (se necessário):

##### Execute o Projeto:

Após instalar as dependências, inicie o servidor de desenvolvimento com o comando: npm start
O projeto será executado e estará disponível em http://localhost:3000 no seu navegador.

##### Personalize o Projeto:

Agora você pode personalizar o projeto de acordo com suas necessidades, fazendo alterações nos arquivos do diretório "src".

Se desejar criar uma versão otimizada do projeto para implantação, execute o comando: npm run build
Isso criará uma pasta "build" com os arquivos otimizados para produção.

Você pode implantar o projeto em um servidor web ou em plataformas de hospedagem, como GitHub Pages, Vercel, Surge, Netlify, entre outros.

# `Organização do código`

##### Eu optei por organizar o projeto dividindo em pastas:

- Assets: Contém todas as imagens necessárias ao site e arquivo styled.css.
- Components: Contém componentes reutilizáveis (loaders, inputs, buttons):
- - ClockLoader.js: Loader utilizado no carregamento de informações da API.
- - ButtonAll.js: Componente de botão do Chakra estilizado com extendTheme personalizável.
- - InputEmail.js: Componente de input de email do Chakra.
- - InputPassword.js: Componente de input de senha do Chakra.
- - ModalRegister.js: Componente que exibe a modal para registro de ponto.
- Constants:
- - colors.js: Arquivo para padronização de cores do site.
- - theme.js: Arquivo para padronização de cores do Chakra com extendTheme.
- Hooks:
- - Pagination.js: Lógica de paginação utilizada nas duas dashboards.
- - usePotectPage.js: Lógica de proteção de acesso a rotas.
- Pages:
- - Admin.js: Componente da dashboard de administrador do sistema.
- - ErrorPage.js: Página de erro.
- - LandingPage.js: Tela inicial de publicidade com acesso ao sistema PontoGo. 
- - Login.js: Componente inicial de acesso ao sistema.
- - User.js: Componente da dashboard de colaborador do sistema.
- Routes:
- - Coordinator / Router: Componentes do React Router Dom para roteamento de páginas.
- Utils:
- - Dates.js: Funções para padronização de data e hora.
- - handleInstallApp.js: Função para "adicionar site a tela inicial" ou "Instalar PWA" (Progressive Web App).

# `Tecnologias utilizadas`

<div>
<img src="https://img.shields.io/badge/Visual_Studio_Code-0078D4?style=for-the-badge&logo=visual%20studio%20code&logoColor=white">
<img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black">
<img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB">
<img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white">
<img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white">
<img src="https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white">
<img src="https://img.shields.io/badge/GIT-E44C30?style=for-the-badge&logo=git&logoColor=white">
<img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white">
<img src="https://img.shields.io/badge/Markdown-000000?style=for-the-badge&logo=markdown&logoColor=white">
<img src="https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white">
<img src="src\assets\chakraLogo.png" > 
<img src="src\assets\graphqlLogo.png" > 
<img src="src\assets\apolloLogo.png" > 
<img src="src\assets\surgeLogo.png" > 
</div>

# `Autor`

#### Márleo Piber da Rosa 
##### [GitHub](https://github.com/marleopr)
##### [Portfólio](https://marleo-portfolio.vercel.app/)

<img src="src\assets\marleopr.jpg">

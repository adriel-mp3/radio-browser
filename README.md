# radio-browser

Este repositório contém todos arquivos referentes ao front-end do radio-browser. Nele você tem acesso a uma interface interativa que consome os dados da api: [Radio API](https://de1.api.radio-browser.info/json/stations/search?limit=10).

## Funcionalidades
- Visualizar, editar, salvar e excluir estações de rádio (CRUD).
- Pesquisar uma rádio por seu nome.
- Escutar uma rádio.

## Tecnologias utilizadas
- Vue 3 
- Tailwind v4
- Axios
- Vite
- Playwright (e2e)
- Eslint
- TypeScript
- Prettier
- Docker

## Instalação do projeto

**Rodando localmente (sem Docker)**
Certifique-se de ter o node instalado em sua máquina.

```sh
# Clone o repositório
git clone https://github.com/seu-usuario/radio-browser.git

# Acesse o diretório do projeto
cd radio-browser

# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm run dev
```

O projeto estará acessível em http://localhost:5173

**Rodando com Docker**
Caso prefira rodar o projeto via Docker, siga os passos abaixo:

```sh
# Clone o repositório em sua maquina
git clone https://github.com/seu-usuario/radio-browser.git
cd radio-browser

# Construa a imagem do docker
docker-compose up --build
```

Caso precise parar o container, certifique-se que está acessando corretamente o diretorio do projeto e use:

```sh
docker-compose down
```

## Estrutura do projeto
Optei por utilizar uma estrutura mais básica, tendo em vista que são poucas funcionalidades. Foquei no fácil entendimento do fluxo da aplicação.

📂 src/
 ┣ 📂 components/        # Componentes Vue reutilizaveis, separados por páginas
 ┣ 📂 layouts/           # Layouts compartilhados
 ┣ 📂 pages/             # Páginas do projeto
 ┣ 📂 utils/             # Funções utilitárias
 ┣ 📂 composables/       # Abstrair lógica e reutilizar
 ┣ 📂 e2e/               # Testes Playwright
 ┣ 📜 main.ts            # Arquivo principal do Vue
 ┣ 📜 App.vue            # Componente raiz da aplicação

## Considerações finais

Este foi um ótimo desafio! Confesso que inicialmente subestimei sua complexidade, mas adorei a oportunidade de colocar em prática meus conhecimentos e explorar mais a API de áudio do navegador, com a qual até então nunca tinha tido contato.

Também gostei bastante do desafio de trabalhar com testes E2E. Acredito que ainda há espaço para melhorias que, devido ao tempo, não foram implementadas, como o uso de fixtures para abstrair algumas lógicas repetitivas.

Busquei utilizar ao máximo os recursos do Vue, incluindo componentização, hooks do ciclo de vida e outras funcionalidades para criar componentes reutilizáveis e eficientes.

Fiquei satisfeito com o resultado e, assim como em qualquer projeto, sempre há espaço para melhorias. No entanto, acredito que o desenvolvimento atendeu bem aos requisitos e demonstrou minhas habilidades de forma sólida.

>  This is a challenge by [Coodesh](https://coodesh.com/)

# Apresentação do projeto (vídeo)
[Link da apresentação](https://drive.google.com/file/d/1i0PSIk5S0lpXBjcQyalUu7Cu1_gkLwNh/view?usp=drive_link)
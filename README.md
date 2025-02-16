# radio-browser

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) to make the TypeScript language service aware of `.vue` types.

## Customize configuration

See [Vite Configuration Reference](https://vite.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Run End-to-End Tests with [Playwright](https://playwright.dev)

```sh
# Install browsers for the first run
npx playwright install

# When testing on CI, must build the project first
npm run build

# Runs the end-to-end tests
npm run test:e2e
# Runs the tests only on Chromium
npm run test:e2e -- --project=chromium
# Runs the tests of a specific file
npm run test:e2e -- tests/example.spec.ts
# Runs the tests in debug mode
npm run test:e2e -- --debug
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
**Obrigatório 1 -** Você deverá atender aos seguintes casos de uso:

[x] - Como usuário, posso adicionar uma rádio na minha lista;
[x] - Como usuário, ver minha lista de rádios adicionadas;
[x] - Como usuário, posso remover uma rádio da minha lista;
[X] - Como usuário posso editar informações da rádio escolhida;
[x] - Como usuário, posso ouvir a rádio selecionado ao clicar o play;
[x] - Como usuário, posso parar de ouvir a rádio selecionada ao clicar no stop;
[x] - Como usuário, posso pesquisar a rádio que tenho interesse.

**Obrigatório 2 -** [x] Filtrar por nome da rádio, país ou idioma com paginação mostrando 10 rádios por vez.

**Obrigatório 3 -** [x] Salvar as informações para quando o usuário retornar na aplicação deve ter as rádios salvas.

**Obrigatório 4 -** [x] Seguir a base do [wireframe](https://www.figma.com/file/TDuhDdbwdzIVQjNV3GF9Qi/Radio?node-id=0%3A1) (estilização ao seu critério)

Além do desafio proposto temos alguns diferenciais:

**Diferencial 1 -** Escrever Unit Tests ou E2E Test. Escolher a melhor abordagem e biblioteca;

**Diferencial 2 -** Configurar Docker no Projeto para facilitar o Deploy da equipe de DevOps;

**Diferencial 3 -** Publique o projeto em alguma plataforma, como por exemplo a [Vercel](https://vercel.com/), [Netlify](https://www.netlify.com/) ou outra de sua preferência.

## Readme do Repositório

- Deve conter o título do projeto
- Uma descrição sobre o projeto em frase
- Deve conter uma lista com linguagem, framework e/ou tecnologias usadas
- Como instalar e usar o projeto (instruções)
- Não esqueça o [.gitignore](https://www.toptal.com/developers/gitignore)
- Se está usando github pessoal, referencie que é um challenge by coodesh:  

>  This is a challenge by [Coodesh](https://coodesh.com/)

## Finalização e Instruções para a Apresentação

1. Adicione o link do repositório com a sua solução no teste
2. Adicione o link da apresentação do seu projeto no README.md.
3. Verifique se o Readme está bom e faça o commit final em seu repositório;
4. Envie e aguarde as instruções para seguir. Sucesso e boa sorte. =)

## Suporte

Use a [nossa comunidade](https://discord.gg/rdXbEvjsWu) para tirar dúvidas sobre o processo ou envie uma mensagem diretamente a um especialista no chat da plataforma. 


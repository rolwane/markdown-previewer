const initialExample = `# Markdown Previewer 👀

Esse projeto nasceu da necessidade de ter um ambiente simples, prático e seguro para escrever readmes para projetos com um preview o mais próximo possível do resultado final no Github.

<br/>

## Requisitos ⚙️

Para rodar esse projeto localmente você precisa ter instalado na sua máquina o NodeJS ou Docker e o git para clonar o repositório.

<br/>

## Rodando o projeto com Docker 🐳

1. Clone este repositório: \`\`\`git clone https://github.com/rolwane/markdown-previewer\`\`\`

2. Na raíz do projeto execute o comando: \`\`\`npm run compose:up\`\`\`

3. O servidor inciará na porta: 3000 - acesse <http://localhost:3000>

<br/>

## Rodando o projeto sem Docker 🍃

1. Clone este repositório: \`\`\`git clone https://github.com/rolwane/markdown-previewer\`\`\`

2. Na raiz do projeto, instale as dependências: \`\`\`npm install\`\`\`

3. Execute a aplicação com o comando: \`\`\`npm start\`\`\`

4. O servidor inciará na porta: 3000 - acesse <http://localhost:3000>

<br/>

## Features 💡

- [x] Preview 👀
- [x] Botoẽs de formatação ✏️
- [x] Emojis 😍
- [x] Atalhos de teclado ⌨️
- [ ] Imagens e icones de tecnologias prontas para uso 🚀

<br/>

## Atalhos 🚀

<br/>

|           Atalho         |                         Ação                         |
|--------------------------|------------------------------------------------------|
|\`\`\`Control + b\`\`\`         |  Deixa o texto selecionado negrito                   |
|\`\`\`Control + i\`\`\`         |  Deixa o texto selecionado italico                   |
|\`\`\`Control + s\`\`\`         |  Deixa o texto selecionado tachado                   |
|\`\`\`Control + h + 1\`\`\`     |  Cria um H1 com o texto selecionado                  |
|\`\`\`Control + h + 2\`\`\`     |  Cria um H2 com o texto selecionado                  |
|\`\`\`Control + h + 2\`\`\`     |  Cria um H3 com o texto selecionado                  |
|\`\`\`Control + l\`\`\`         |  Adiciona um link                                    |
|\`\`\`Control + Shift + t\`\`\` |  Adiciona uma tabela                                 |
|\`\`\`Control + Shift + c\`\`\` |  Mostra o texto selecionado como um código           |
|\`\`\`Control + '\`\`\`         |  Mostra o texto selecionado como um bloco de citação |
|\`\`\`Control + Shift + y\`\`\` |  Adiciona uma lista não ordenada                     |
|\`\`\`Control + Shift + o\`\`\` |  Adiciona uma lista ordenada                         |
|\`\`\`Control + e\`\`\`         |  Abre a caixa de emojis                              |

<br/>

##  Tecnologias e Bibliotecas 🛠️

As seguintes ferramentas foram usadas na construção do projeto:

- [React](https://pt-br.reactjs.org/) 🚀
- [Tailwind CSS](https://tailwindcss.com/) ✏️
- [Marked](https://marked.js.org/) 🪄
- [Emoji Picker](https://github.com/ealush/emoji-picker-react) 😍
- [React Icons](https://react-icons.github.io/react-icons/) 🔥

<br/>

## Autor
**[Rolwane Borges](https://www.linkedin.com/in/rolwane)**

<br/>

## Licença

![license](https://img.shields.io/static/v1?label=license&message=MIT&color=40AEF0)

<br/>
`;

export default initialExample;

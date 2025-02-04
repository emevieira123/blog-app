# Blog Mix

### Este projeto foi desenvolvido com o framework [Next.js](https://nextjs.org/).

## Ações necessárias para rodar o projeto localmente

Para rodar o projeto web, é necessário ter instalado na sua máquina:

- [Node.js](https://nodejs.org/en/) (Versão LTS)<br/><br/>

Na raiz do projeto crie um arquivo `.env`, nesse arquivo adicione a seguinte variavel

```bash
NEXT_PUBLIC_API_BASE_URL="http://localhost:3333"
```

## Instale as dependências do projeto

No terminal execute o comando

```bash
npm install
# or
yarn
```

## Execute o servidor json-server

No terminal execute o seguinte comando para startar o servidor

```bash
npm run dev:json-server
```

## Executando o projeto

Por fim execute o projeto com o comando:

```bash
npm run dev
# or
yarn dev
```

Abra seu navegador em [http://localhost:3000](http://localhost:3000).

# Informações sobre o projeto

- Você pode ver o projeto em execução em [BlogMix](https://blog-mix.netlify.app/)

- O codigo fonte está disponivel no [GitHub - Front-End](https://github.com/emevieira123/blog-app)

## Tecnologias usadas para o desenvolvimento

- ReactJS com o framework NextJS
- TailwindCSS
- React-Toastify
- Json-server
- React-hook-form
- Zod

## Funcionalidades do projeto

- Listagem de posts
- Detalhes do post
- Page aministrativa para cadastro de post

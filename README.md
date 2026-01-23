# Sobre o Projeto Portifolio 

O Portfolio é uma aplicação full stack que integra tecnologias populares do mercado para criar uma vitrine digital das habilidades, experiências e projetos de um desenvolvedor.

## Como rodar este projeto

Requisitos:
 - Node.js instalado

Execução:
 - Clone este repositório
 - Acesse o diretório do projeto
 - Copie as variáveis de ambiente listadas, crie um arquivo .env na pasta backend e preencha com as seguintes informações:
```sh
DATABASE_URL=
DIRECT_URL=
PORT=
```
 - Para preencher essas variaveis, pegue esses valores da sua conta do Supabase:
   - Acesse sua conta no Supabase ou crie uma nova conta.
   - Navegue até o projeto no Supabase e clique no botão connect.
   - Clique em selecionar ORM e selecione o ORM Prisma.
     
Obs: Caso o valor da porta não seja adicionado, a aplicação rodará por padrão na porta 4000

- Instale as dependências dos projetos frontend e backend com o comando npm i em cada uma das pastas
- Execute a migrate para criar as tabelas no bd
```sh
npx prisma migrate dev
```
 - Abra as pastas web e backend em dois terminais diferentes e rode o comando npm run dev ou npm run start:dev em cada um dos terminais para executar o projeto.

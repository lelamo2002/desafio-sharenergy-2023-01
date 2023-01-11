# Desafio para o processo seletivo SHARENERGY 2023/01 - Entrega

Este é o repositório com a solução para o desafio proposto pela SHARENERGY. A aplicação foi desenvolvida com ReactJS para o frontend, NodeJS com Express para o backend e MongoDB como banco de dados.

## Tecnologias utilizadas

| Frontend | Backend          | Database | TypeScript | Styles     |
| -------- | ---------------- | -------- | ---------- | ---------- |
| ReactJS  | NodeJS + Express | MongoDB  | &#10003;   | HTML + CSS |

## Aplicação

- A página inicial da aplicação é uma `Login Page`, onde é possível realizar o login utilizando o username `desafiosharenergy` e password `sh@r3n3rgy`. Além disso, é possível utilizar o recurso `remember me` para realizar logins automáticos, sem a necessidade de digitar username e password após o primeiro acesso.

- Após o login, a página principal contém uma listagem de usuários gerada a partir da api [Random User Generator](https://randomuser.me/), a lista contém a foto do usuário, nome completo, email, username e idade. Os resultados são paginados, com 9 resultados por página e inclui uma busca para buscar usuários por nome, email ou username.
- Em uma segunda página, é possível selecionar um status code http e, após a seleção, é retornada uma imagem da api [HTTP Cat](https://http.cat/) relacionada ao status escolhido, caso não exista tal imagem, é retornada uma imagem do codigo 404 not found.
- Em uma terceira página, há um botão de refresh que, ao ser clicado, retorna uma imagem aleatória da api [Random Dog](https://random.dog/).
- Em uma quarta página, há uma lista de clientes, através da qual é possível cadastrar novos clientes, visualizar informações de um cliente específico e deletar clientes. O cadastro possui nome, email, telefone, endereço e cpf.

## Rodando a aplicação

### Backend

#### Requisitos
- Docker
- Docker Compose

Observação: Normalmente, seria necessário configurar o arquivo `.env` para definir o banco de dados e a porta em que o backend rodará. No entanto, para facilitar a testagem da aplicação, o `.env` já está configurado e não foi incluído no gitignore.

#### Instruções

1. Inicie o backend com o comando `docker-compose up`

### Frontend

#### Requisitos
- Node.js
- npm ou yarn

#### Instruções
1. Abra o terminal e navegue até a pasta `frontend`: `cd frontend`
2. Instale as dependências com o comando `npm install` ou `yarn`
3. Inicie o frontend com o comando `npm run dev` ou `yarn dev`
4. Acesse a aplicação em `http://localhost:5173/login`




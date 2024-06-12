# Desafio Serverless

Fornece endpoints para realizar operações CRUD (Create, Read, Update, Delete) em recursos de funcionários.

## Endpoints

### GET /employee/:id

Retorna um funcionário específico com o ID fornecido.

#### Parâmetros

- `id` (string): O ID único do funcionário.

#### Respostas

- 200 OK: Retorna os detalhes do funcionário.
- 404 Not Found: Se o funcionário com o ID fornecido não for encontrado.
- 500 Internal Server Error: Se ocorrer um erro durante a busca do funcionário.

### POST /employee

Cria um novo funcionário com os dados fornecidos.

#### Corpo da Requisição

- `id` (string): Id do funcionário.
- `name` (string): Nome do funcionário.
- `age` (number): Idade do funcionário.
- `role` (string): Cargo do funcionário.

#### Respostas

- 201 Created: Retorna os detalhes do novo funcionário criado.
- 500 Internal Server Error: Se ocorrer um erro durante a criação do funcionário.

### PATCH /employee/:id

Atualiza os dados de um funcionário existente com o ID fornecido.

#### Parâmetros

- `id` (string): O ID único do funcionário.

#### Corpo da Requisição

- `name` (string): Nome atualizado do funcionário.
- `age` (number): Idade atualizada do funcionário.
- `role` (string): Cargo atualizado do funcionário.

#### Respostas

- 200 OK: Retorna os detalhes do funcionário atualizado.
- 404 Not Found: Se o funcionário com o ID fornecido não for encontrado.
- 500 Internal Server Error: Se ocorrer um erro durante a atualização do funcionário.

### DELETE /employee/:id

Remove um funcionário existente com o ID fornecido.

#### Parâmetros

- `id` (string): O ID único do funcionário.

#### Respostas

- 200 OK: Retorna uma mensagem indicando que o funcionário foi excluído com sucesso.
- 404 Not Found: Se o funcionário com o ID fornecido não for encontrado.
- 500 Internal Server Error: Se ocorrer um erro durante a exclusão do funcionário.
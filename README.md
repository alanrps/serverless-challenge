# Desafio Serverless

## Descrição

Este projeto foi desenvolvido utilizando TypeScript, serverless framework e express como framework web, seguindo os princípios da arquitetura limpa. O objetivo é criar uma API RESTful para gerenciar funcionários. O Jest foi utilizado para desenvolver os testes unitários e a documentação foi feita em markdown.

O desafio consiste em desenvolver uma solução para uma vaga na Stefanini, em parceria com o cliente Raízen, seguindo os seguintes passos:

1. Utilizar Clean Architecture.
2. Versionar o projeto no GitHub, em um repositório público.
3. Documentar claramente o projeto.
4. Um funcionário deve possuir os seguintes atributos: Id, Idade, Nome e Cargo.
5. As informações devem ser armazenadas em um banco de dados, relacional ou não relacional, hospedado em uma infraestrutura AWS.
6. A Lambda deve ser capaz de consultar, deletar e atualizar um funcionário, e a API deve ser acessível via internet.
7. Os recursos podem ser provisionados utilizando Serverless Framework ou Terraform.
8. Realizar testes unitários utilizando Jest. 

## Como Executar

1. Execute `npm install` para instalar as dependências.
2. Configure as chaves de acesso da AWS, podendo ser configuradas utilizando o AWS CLI.

### Executando Localmente

Execute o comando para rodar offline:

```bash
sls offline --stage prd
```

### Implantação na AWS

Execute o comando para implantar na AWS e testar:

```bash
serverless deploy --stage prd
```


Certifique-se de ter as permissões necessárias e que sua conta AWS esteja corretamente configurada para implantar os recursos especificados no Serverless Framework.

### Endpoint

Para testar o desafio, realizei o deploy na aws visando facilitar o processo de teste, o endpoint é: https://nxnghockli.execute-api.us-east-1.amazonaws.com

### Execução dos testes

```
npm run test
```

## Melhorias

Uma maneira de aumentar ainda mais a confiabilidade do código seria incluir testes de unidade que abranjam todo o código, além de adicionar testes de integração. Embora não tenha sido possível desenvolvê-los devido a restrições de tempo, também seria benéfico considerar a inclusão de uma biblioteca para facilitar a criação de documentação de forma mais dinâmica.

## Repositório desafio

A descrição do desafio está disponível no seguinte repositório do GitHub:

[Link para o Repositório](https://github.com/mvdornellas/serverless-challenge)
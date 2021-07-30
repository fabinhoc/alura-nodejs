### Informações gerais
Curso alura REST com nodejs: API com Express e MySQL

### Pré-requisitos
  * [Docker](https://www.docker.com/) V.20.10.2

### Instalação
```sh
$ git clone https://github.com/fabinhoc/alura-nodejs.git
$ cd alura-nodejs
```
#### Subir container mysql
```sh
$ docker-compose up -d
```
#### Instalar dependências do projeto
```sh
$ npm install
```
#### Iniciar servidor
```sh
$ npm start
```
#### Rotas disponíveis
```sh
GET     - http://localhost:3000/
GET     - http://localhost:3000/atendimentos
GET     - http://localhost:3000/atendimentos/:id
POST    - http://localhost:3000/atendimentos
PATCH   - http://localhost:3000/atendimentos/:id
DELETE  - http://localhost:3000/atendimentos/:id
```

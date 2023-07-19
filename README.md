# Car Trade API

Este projeto consiste em uma API REST para utilização em site de negociação de veículos. Nela atualmente é possível _criar_, _editar_ e _remover_ veículos, assim como também _criar_ usuários e usá-lo para obter o token de autenticação das rotas

### Executando o projeto

1. Clone o repositório

2. Execução via Docker:

```
npm run up:system
```

ou

```
yarn up:system
```

3. URL da API: http://localhost:3000/

4. URL Adminer: http://localhost:8080/

### Rotas

| Método   | Rota         | Sub-Rota  | Funcionalidade                                                                     |
| -------- | ------------ | --------- | ---------------------------------------------------------------------------------- |
| _POST_   | users        |           | Cadastro de usuários                                                               |
| _POST_   | authenticate |           | Validação de usuário e senha do usuário, autenticação e retorno do token de acesso |
| _POST_   | cars         | paginated | Listagem de veículos de forma paginada                                             |
| _GET_    | car          | :id       | Retorno de carro pelo ID                                                           |
| _POST_   | car          |           | Cadastro de veículo                                                                |
| _PATCH_  | car          | :id       | Atualização de veículo                                                             |
| _DELETE_ | car          | :id       | Remoção de veículo                                                                 |

- [POST /users](http://localhost:3000/users)

```
{
    name: string,
    email: string,
    password: string
}
```

- [POST /authenticate](http://localhost:3000/authenticate)

```
{
    email: string,
    password: string
}
```

- [POST /cars](http://localhost:3000/cars)

```
{
    page: number,
    itemsPerPage: number,
    order: "ASC" ou "DESC"
}
```

- [GET /car](http://localhost:3000/car/{id})

```

```

- [POST /car](http://localhost:3000/cars)

```
{
    name: string,
    brand: string,
    model: string,
    city: string,
    state: string,
    year: number,
    modelYear: number,
    km: number,
    transmission: string,
    fuel: string,
    color: string,
    paidIpva: boolean,
    paidLicensing: boolean,
    price: number,
    oldPrice?: number,
    principalImage: Base64 Image string,
    motorPower: string,
    ports: number,
    description: string
}

Header:
{
    authorization: 'Bearer ...'
}
```

- [PATCH /car/{id}](http://localhost:3000/car/{id})

```
{
    name: string,
    brand: string,
    model: string,
    city: string,
    state: string,
    year: number,
    modelYear: number,
    km: number,
    transmission: string,
    fuel: string,
    color: string,
    paidIpva: boolean,
    paidLicensing: boolean,
    price: number,
    oldPrice?: number,
    principalImage: Base64 Image string,
    motorPower: string,
    ports: number,
    description: string
}

Header:
{
    authorization: 'Bearer ...'
}
```

- [DELETE /car/{id}](http://localhost:3000/car/{id})

```
{
    id: number
}

Header:
{
    authorization: 'Bearer ...'
}
```

### Desenvolvido com

- [NodeJS](https://nodejs.org/en/)
- [Express](https://expressjs.com/pt-br/)
- [TypeScript](https://www.typescriptlang.org/)
- [TypeORM](https://typeorm.io/#/)
- [Docker](https://www.docker.com/)
- [PostgreSQL](https://www.postgresql.org/)
- [Adminer](https://www.adminer.org/)
- [JWT](https://jwt.io/)
- [Bcrypt](https://www.npmjs.com/package/bcrypt)
- [Eslint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [EditorConfig](https://editorconfig.org/)
- [Clean Code](https://www.amazon.com.br/Clean-Code-Handbook-Software-Craftsmanship/dp/0132350882)
- [SOLID](https://www.amazon.com.br/Princ%C3%ADpios-Pr%C3%A1ticos-Programa%C3%A7%C3%A3o-Agile-Profissionais/dp/8550804627)
- [Design Patterns](https://www.amazon.com.br/Design-Patterns-Elements-Reusable-Object-Oriented/dp/0201633612)
- [Clean Architecture](https://www.amazon.com.br/Clean-Architecture-Craftsmans-Software-Structure/dp/0134494164)

### Projeto Front-End

- [Car Trade Front](https://github.com/mrgreque/car-trade-front)

## Autor

- **Gabriel Greque** - _Desenvolvedor Full Stack_ - [Github](https://github.com/mrgreque)

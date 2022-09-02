# Movie API

The project is a CRUD of movies collections. It was built to study the technologies:

1. TypeScript
2. Nest.js
3. TypeORM
4. Swagger
5. Docker
6. Redis
7. PostgreSQL


## Instalation

It works locally (I want to make deploy on AWS EC2 eventually). First runs:

    docker-compose up -d

Then:

    npm run start:dev

Project documentation is going to run on http://localhost3000/api-docs with Swagger.

## Api

The Api authenticate users by Json Web Token provided when the login is succeed. The token should be provided at header authorization of request.

It also Caches the movies list.

* It is an on going project, but it was useful to understand how Nestjs facilitate swagger, redis, authorization, authentication and database configs. 
<p align="center" >
<img src="https://i.imgur.com/SbhNaFr.png" />
</p>
<h1 align="center">NLW - Valoriza</h1>


"NLW Valoriza" code developed on the NodeJS track with the teacher [Dani Leao](https://github.com/danileao).

## 💻 Technologies used
- [Typescript](https://www.typescriptlang.org/)
- [Express](https://expressjs.com)
- [TypeORM](https://typeorm.io/)
- [SQLite](https://www.sqlite.org/index.html)

## ⚙️ Routes

- POST / GET - /users
- POST / GET - /tags 
- POST - /complements
- POST - /login 
- GET - /users/complements/receive
- GET - /users/complements/send

## ⚙️ Config

Para a aplicação iniciar, você terá que configurar o banco de dados no `ormconfig.json`, se você não sabe sobre isso, dê uma olhada no [Quick Start](https://typeorm.io/#/) do TypeORM!

## 🚀 How to execute

- Clone repositorie
- Run `yarn` to download dependencies
- Run `yarn typeorm migration:run` to create tables from database
- Run `yarn dev` to start the application

Finally, the application will be available at `http: // localhost: 3000`

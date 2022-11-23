# Rainify
Mobile music streaming app for learning purposes

Built using 
- [react](https://reactjs.org/)
- [redux](https://redux-toolkit.js.org/)
- [adonis](https://adonisjs.com/)

Project structure based off [bulletproof-react](https://github.com/alan2207/bulletproof-react)

### Running the project for the first time
- Ensure you have [Postgres](https://www.postgresql.org/download/),
[Node](https://nodejs.org/en/) >= v14, and [Yarn](https://yarnpkg.com/getting-started/install)

#### Server
1. Navigate to `/server`
2. Create a `.env` file following the example of `server/.env.example`
3. Install dependencies with `yarn`
4. Run `node ace migration:run`
5. Run `node ace db:seed`
6. Start the server with `node ace serve --watch`

#### Client
1. Navigate to `/client`
2. Create a `.env` file following the example of `client/.env.example`
3. Install dependencies with `yarn`
4. Start app with `yarn start`

App should now be running on `http://localhost:3000`

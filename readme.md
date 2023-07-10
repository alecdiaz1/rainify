# Rainify
Mobile music streaming app for learning purposes

https://github.com/alecdiaz1/rainify/assets/23247241/f2d523da-1396-42a8-ae27-80d515cf31c7

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


### TODO:
1. Figure out where to properly store song data
2. Implement infinite scrolling on home page (since it should show all the songs)
3. Pick a random song to play next if queue is empty. Will need to
be able to get some random songs from API to put into queue.
4. Implement searching
5. Implement loading (skeleton)/error screens
6. Add album pages and album displays on profiles
7. Add more metadata to songs (genre, year, label, etc.)
8. Create portal for uploading/approving songs/viewing data
9. Add looping and shuffle

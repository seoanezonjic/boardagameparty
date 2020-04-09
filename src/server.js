// src/server.js
const Server = require("boardgame.io/server").Server;
const TicTacToe = require("./game").TicTacToe;

const PORT = process.env.PORT || 8000;
const server = Server({ games: [TicTacToe] });

server.run(PORT, () => {
  console.log(`Serving at: http://localhost:${PORT}/`);
});
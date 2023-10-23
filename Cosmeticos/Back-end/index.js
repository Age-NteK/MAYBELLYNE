const server = require("./src/server");
const { conn } = require("./src/db");
const DB_connect = require("./src/DB_connect/DB_connect.js");
const PORT = 3001;

conn
  .sync({ force: true })
  .then(() => {
    DB_connect();
    server.listen(PORT, () => {
      console.log(`♥ Server listening on port: ${PORT} ♥`);
    });
  })
  .catch((error) => console.error(error.message));

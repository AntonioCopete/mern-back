const app = require("./server");
const config = require("./config/config");
const connect = require("./db/connect");

connect().then(console.log("Connected to DB"));

app.listen(config.app.PORT, () => {
  console.log(`Server listening on http:localhost:4000`);
});

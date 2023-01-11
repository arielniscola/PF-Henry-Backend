const server = require('./src/app.js');
const { conn } = require('./src/db.js');
require("dotenv").config();
const {createUsersBk} = require("./src/services/client.service.js")

const port = process.env.PORT || 3001;

conn.sync().then(async () => {
  server.listen(port, async () => {
    console.log('%s listening at 3001'); 
    await createUsersBk()
  });
});

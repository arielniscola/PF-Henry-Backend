const server = require('./src/app.js');
const { conn } = require('./src/db.js');
require("dotenv").config();

const port = process.env.PORT || 3001;

conn.sync({alter: true}).then(() => {
  server.listen(port, async () => {
    console.log('%s listening at 3001'); 
  });
});

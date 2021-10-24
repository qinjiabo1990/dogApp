const express = require('express');
const cors = require('./middleware/cors');
const routes = require('./routes');

const app = express();
app.use(express.json());
app.use(cors);
app.use(routes);

app.listen(8000, ()=>{
  console.log(`service starts at post 8000`)
})
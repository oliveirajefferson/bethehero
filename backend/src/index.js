const express = require('express'); 
const cors = require('cors'); 
const routes = require('./routes');

const app = express();

app.use(cors()); //permissões de acesso para o diretóriio
app.use(express.json()); //Entende as requisições no formato json
app.use(routes);

app.listen(3333);



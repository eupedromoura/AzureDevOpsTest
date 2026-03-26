const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.listen(3000, () => {
  console.log('Teste 2 para abertura de Change com o Azure DevOps');
  console.log('Servidor rodando na porta 3000');
});

const express = require('express');
const taskRoutes = require('./routes/taskRoutes'); 
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.use('/api/tasks', taskRoutes);

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});

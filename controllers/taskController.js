const tasks = [
  { id: 1, title: 'Tarefa 1', completed: false },
  { id: 2, title: 'Tarefa 2', completed: true },
];

const listTasks = (req, res) => {
  res.json(tasks);
};

const createTask = (req, res) => {
  const { title, completed } = req.body;

  if (!title || typeof completed !== 'boolean') {
    return res.status(400).json({ error: 'Dados inválidos' });
  }

  const newTask = {
    id: tasks.length + 1,
    title,
    completed,
  };

  tasks.push(newTask);

  res.status(201).json(newTask);
};

const updateTask = (req, res) => {
  const taskId = parseInt(req.params.id);
  const task = tasks.find((t) => t.id === taskId);

  if (!task) {
    return res.status(404).json({ error: 'Tarefa não encontrada' });
  }

  const { title, completed } = req.body;

  if (title) {
    task.title = title;
  }

  if (completed !== undefined) {
    task.completed = completed;
  }

  res.json(task);
};

const deleteTask = (req, res) => {
  const taskId = parseInt(req.params.id);
  const taskIndex = tasks.findIndex((t) => t.id === taskId);

  if (taskIndex === -1) {
    return res.status(404).json({ error: 'Tarefa não encontrada' });
  }

  tasks.splice(taskIndex, 1);

  res.json({ message: 'Tarefa excluída com sucesso' });
};

module.exports = {
  listTasks,
  createTask,
  updateTask,
  deleteTask,
};

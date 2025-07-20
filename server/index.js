const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Правильное использование express.static
app.use(express.static(path.join(__dirname, '..')));

app.listen(PORT, () => {
  console.log(`Сервер запущен на порту ${PORT}`);
  console.log(`Откройте: http://localhost:${PORT}`);
});
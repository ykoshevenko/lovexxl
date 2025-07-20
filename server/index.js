const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

// Middleware для статических файлов
app.use(express.static(path.join(__dirname, '../')));

// Базовый маршрут
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../index.html'));
});

// Все остальные запросы перенаправляем на index.html (для SPA)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../index.html'));
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
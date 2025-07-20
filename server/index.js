const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

// Раздаём статические файлы из корня проекта
app.use(express.static(path.join(__dirname, '../')));

// Все запросы перенаправляем на index.html (для SPA)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../index.html'));
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
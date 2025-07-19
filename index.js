const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Просто отдаем статические файлы из текущей директории
app.use(express.static(__dirname));

app.listen(PORT, () => {
  console.log(`Сервер запущен на порту ${PORT}`);
});
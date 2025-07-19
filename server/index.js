const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Определяем абсолютный путь к корневой директории проекта
const rootDir = path.resolve(__dirname, '../'); // Поднимаемся на уровень выше из server/

// Раздаём статические файлы из корневой директории
app.use(express.static(rootDir));

// Все GET-запросы отправляем на index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(rootDir, 'index.html'));
});

// Запускаем сервер
app.listen(PORT, () => {
  console.log(`Сервер запущен на порту ${PORT}`);
  console.log(`Откройте http://localhost:${PORT} в браузере`);
});
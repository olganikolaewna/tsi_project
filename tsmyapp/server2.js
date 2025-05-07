import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Массив для хранения данных
let dataStore = [];

// Обработка POST-запросов
app.post('/data', (req, res) => {
  const newData = req.body;
  dataStore.push(newData);
  res.status(201).json(newData);
});

// Обработка GET-запросов
app.get('/data', (req, res) => {
  res.json(dataStore); // Возвращаем все данные
});

// Запуск сервера
app.listen(PORT, () => {
  console.log(`Сервер запущен на http://localhost:${PORT}`);
});

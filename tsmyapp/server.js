import express from 'express';
import cors from 'cors';

const app = express();
const PORT = 5000;

app.use(cors()); // Разрешает кросс-доменные запросы
app.use(express.json()); // Для обработки JSON

// Пример данных
const products = [
    {
        id: 1,
        title: "Продукт 1",
        description: "Описание продукта 1",
        price: "1000",
    },
    {
        id: 2,
        title: "Продукт 2",
        description: "Описание продукта 2",
        price: "2000",
    },
    {
        id: 3,
        title: "Продукт 3555",
        description: "Описание продукта 3",
        price: "3000",
    },
];

// Обработчик для корневого маршрута
app.get('/', (req, res) => {
    res.json(products);
});


// Запуск сервера
app.listen(PORT, () => {
    console.log(`Сервер запущен на http://localhost:${PORT}`);
});

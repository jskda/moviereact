require("dotenv").config(); // Для работы с переменными окружения
const axios = require('axios');
const cors = require("cors");
const express = require("express");
const morgan = require("morgan");

const app = express();
app.use(cors({
    origin: 'https://moviereact-flame.vercel.app',
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type', 'Authorization'],
}));
app.use(express.json());
app.use(morgan("dev"));

// Настройки API
const API_BASE_URL = "https://portal.lumex.host/api";
const CLIENT_ID = process.env.CLIENT_ID;
const API_TOKEN = process.env.API_TOKEN;

// Проверка работы API
app.get("/", (req, res) => {
    res.send("Сервер для работы c балансером настроен и запущен.");
});

// Эндпоинт: Получение статистики балансера
app.get("/api/stats", async (req, res) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/stats`, {
            headers: {
                "Client-ID": CLIENT_ID,
                "Authorization": `Bearer ${API_TOKEN}`,
            },
        });
        res.json(response.data);
    } catch (error) {
        console.error("Ошибка при запросе статистики:", error.response?.data || error.message);
        res.status(error.response?.status || 500).json({ error: "Ошибка при запросе к API балансера" });
    }
});

// Эндпоинт: Получение списка фильмов
app.get("/api/movies", async (req, res) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/movies`, {
            params: {
                api_token: process.env.API_TOKEN,
            },
        });
        res.json(response.data);
    } catch (error) {
        console.error("Ошибка при запросе списка фильмов:", error.response?.data || error.message);
        res.status(error.response?.status || 500).json({ error: "Ошибка при получении списка фильмов" });
    }
});

// Эндпоинт: Получение детальной информации о фильме
app.get("/api/movie/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const response = await axios.get(`${API_BASE_URL}/movie/${id}`, {
            headers: {
                "Client-ID": CLIENT_ID,
                "Authorization": `Bearer ${API_TOKEN}`,
            },
        });
        res.json(response.data);
    } catch (error) {
        console.error("Ошибка при запросе информации о фильме:", error.response?.data || error.message);
        res.status(error.response?.status || 500).json({ error: "Ошибка при получении информации о фильме" });
    }
});

// Запуск сервера
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Сервер запущен на порту ${PORT}`));

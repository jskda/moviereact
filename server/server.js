const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// Пример эндпоинта для работы с VideoCDN
app.get("/api/movies", async (req, res) => {
    try {
        const { query } = req;
        const response = await axios.get(`https://videocdn-api.example.com/movies`, {
            params: query,
            headers: { Authorization: `Bearer YOUR_API_KEY` },
        });
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: "Ошибка сервера." });
    }
});

// Запуск сервера
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

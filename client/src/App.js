import React, { useEffect, useState } from 'react';  // Добавить useEffect и useState
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000';

function App() {
  const [movies, setMovies] = useState([]);  // Состояние для хранения данных о фильмах

  // Используем useEffect для получения данных с API
  useEffect(() => {
    // console.log('API URL:', API_URL);
    fetch(`${API_URL}/api/movies?api_token=YOUR_API_TOKEN&direction=desc&limit=10&page=1`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);  // Посмотреть в консоли, что приходит от API
        setMovies(data.data);  // Обновить состояние
      })
      .catch((error) => {
        console.error('Error fetching movies:', error);
      });
  });  // Пустой массив зависимостей, чтобы хук сработал только при монтировании компонента

  return (
    <Router>
      <Routes>
        {/* Главная страница */}
        <Route path="/" element={<Home movies={movies} />} />  {/* Передаем список фильмов в компонент */}
      </Routes>
    </Router>
  );
}

export default App;
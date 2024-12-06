import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <Routes>
        {/* Главная страница */}
        <Route path="/" element={<Home />} />
        {/* Можно добавить другие страницы */}
      </Routes>
    </Router>
  );
}

export default App;
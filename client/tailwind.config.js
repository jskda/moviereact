module.exports = {
  purge: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  important: true, // Добавьте эту строку для приоритета стилей
  theme: {
    extend: {},
  },
  plugins: [],
}
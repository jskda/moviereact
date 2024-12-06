import React from 'react';

function Home({movies}) {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <header className="bg-gray-800 p-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">MovieReact</h1>
          <nav className="space-x-4">
            <a href="#" className="hover:text-gray-400">Home</a>
            <a href="#" className="hover:text-gray-400">About</a>
            <a href="#" className="hover:text-gray-400">Contact</a>
          </nav>
          <button className="bg-blue-600 px-4 py-2 rounded hover:bg-blue-700">
            Search
          </button>
        </div>
      </header>

      <section className="bg-gray-700 py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Discover Popular Movies</h2>
          <p className="text-gray-300">Explore the best movies available on our platform.</p>
        </div>
      </section>

      <section className="container mx-auto py-8">
        <h3 className="text-3xl font-bold mb-6">Latest Movies</h3>
        {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <h1>Movies List</h1>
            <ul>
              {movies.map((movie, index) => (
                <li key={index}>{movie}</li>
              ))}
            </ul>
        </div> */}

<h1>Movies List</h1>
<ul>
  {movies && movies.length > 0 ? (
    movies.map((movie, index) => (
      <li key={index}>{movie.ru_title}</li>
    ))
  ) : (
    <li>Loading...</li>
  )}
</ul>


      </section>

      <section className="container mx-auto py-8">
        <h3 className="text-3xl font-bold mb-6">Latest Movies</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-gray-800 p-4 rounded">
            <img
              src="https://via.placeholder.com/300x450"
              alt="Movie Poster"
              className="w-full h-auto rounded mb-4"
            />
            <h4 className="text-xl font-semibold">Movie Title</h4>
            <p className="text-gray-400">Rating: 8.5</p>
          </div>
        </div>
      </section>

      <footer className="bg-gray-800 p-4 mt-8">
        <div className="container mx-auto text-center text-gray-400">
          <p>© 2024 MovieReact. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default Home;
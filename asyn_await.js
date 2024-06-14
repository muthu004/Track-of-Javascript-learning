
//async function always returns a promise


async function fetchMovies() {
    const response = await fetch('https://api.example.com/movies');
    const movies = await response.json();
    return movies;
  }

  async function fetchAndDisplayMovies() {
    try {
      const movies = await fetchMovies();
      console.log(movies);
    } catch (error) {
      console.error('There was a problem fetching the movies:', error);
    }
  }

  fetchAndDisplayMovies()
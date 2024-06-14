
//async function always returns a promise

// the below function is also an example for fetch as it containes fetch()

/*The simplest use of fetch() takes one argument — the path to the resource you want to fetch — and does not directly
 return the JSON response body but instead returns a promise that resolves with a Response object.*/

 /*The Response object, in turn, does not directly contain the actual JSON response body but is instead a
  representation of the entire HTTP response. So, to extract the JSON body content from the Response object, we use the json() method, 
  which returns a second promise that resolves with the result of parsing the response body text as JSON.*/

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
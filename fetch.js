
//fetch

// fetch is promise based

/*The simplest use of fetch() takes one argument — the path to the resource you want to fetch — and does not directly
 return the JSON response body but instead returns a promise that resolves with a Response object.*/

 /*The Response object, in turn, does not directly contain the actual JSON response body but is instead a
  representation of the entire HTTP response. So, to extract the JSON body content from the Response object, we use the json() method, 
  which returns a second promise that resolves with the result of parsing the response body text as JSON.*/

async function logMovies() {
    const response = await fetch("http://example.com/movies.json");
    const movies = await response.json();
    console.log(movies);
  }
  

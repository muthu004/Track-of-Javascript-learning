//resolve


// resolve() is a function used inside a Promise constructor to indicate that the asynchronous operation has been successfully completed.
// When resolve() is called, the promise is fulfilled with the specified value passed to resolve().
// It transitions the promise's state from pending to fulfilled, triggering any attached .then() handlers.
const promise1 = new Promise((resolve, reject) => {
    // Asynchronous operation
    setTimeout(() => {
      resolve("Data fetched successfully");
    }, 2000);
  });
  
  promise1.then((data) => {
    console.log(data); // Output: Data fetched successfully
  });

  //reject

// reject() is a function used inside a Promise constructor to indicate that the asynchronous operation has failed.
// When reject() is called, the promise is rejected with the specified reason passed to reject().
// It transitions the promise's state from pending to rejected, triggering any attached .catch() handlers.
  const promise2 = new Promise((resolve, reject) => {
    // Asynchronous operation
    setTimeout(() => {
      reject(new Error("Failed to fetch data"));
    }, 2000);
  });
  
  promise2.catch((error) => {
    console.error(error); // Output: Error: Failed to fetch data
  });
  

  //then

// then() is a method used to handle the successful fulfillment of a promise.
// It takes one or two callback functions as arguments:
// The first callback function is called when the promise is fulfilled, and it receives the resolved value as its argument.
// The second callback function (optional) is called when the promise is rejected, and it receives the reason for rejection as its argument.
// It returns a new promise, allowing for method chaining.

  const promise3 = new Promise((resolve, reject) => {
    // Asynchronous operation
    setTimeout(() => {
      resolve("Data fetched successfully");
    }, 2000);
  });
  
  promise3.then(
    (data) => {
      console.log(data); // Output: Data fetched successfully
    },
    (error) => {
      console.error(error); // This won't be executed in this example
    }
  );

  //catch

// catch() is a method used to handle promise rejections.
// It takes a single callback function as its argument, which is called when the promise is rejected.
// It's a shorthand for .then(undefined, errorCallback).
// It returns a new promise, allowing for method chaining.

  const promise4 = new Promise((resolve, reject) => {
    // Asynchronous operation
    setTimeout(() => {
      reject(new Error("Failed to fetch data"));
    }, 2000);
  });
  
  promise4.catch((error) => {
    console.error(error); // Output: Error: Failed to fetch data
  });
  
  //with both then  and catch

//The fetchData() function returns a Promise that simulates an asynchronous operation (fetching data).
// Inside the Promise constructor, we use resolve() to indicate success (data fetched successfully) and reject() to indicate failure (failed to fetch data).
// We chain .then() to handle the successful fulfillment of the Promise. If the Promise is fulfilled (data fetched successfully), the success callback passed to then() is executed, logging the fetched data.
// We also chain .catch() to handle any rejections of the Promise. If the Promise is rejected (failed to fetch data), the error callback passed to catch() is executed, logging the error.


//Using function

function fetchData() {
    return new Promise((resolve, reject) => {
      // Simulating an asynchronous operation
      setTimeout(() => {
        const success = Math.random() < 0.8; // 80% chance of success
        if (success) {
          resolve("Data fetched successfully");
        } else {
          reject(new Error("Failed to fetch data"));
        }
      }, 2000);
    });
  }
  
  // Using both then() and catch()
  fetchData()
    .then((data) => {
      console.log(data); // Output: Data fetched successfully
    })
    .catch((error) => {
      console.error(error); // Output: Error: Failed to fetch data
    });
  

    //Without using function

    
    const promise5=new Promise((resolve, reject) => {
        // Simulating an asynchronous operation
        setTimeout(() => {
          const success = Math.random() < 0.8; // 80% chance of success
          if (success) {
            resolve("Data fetched successfully");
          } else {
            reject(new Error("Failed to fetch data"));
          }
        }, 2000);
      });
    
    
    // Using both then() and catch()
    
      promise5.then((data) => {
        console.log(data); // Output: Data fetched successfully
      })
      .catch((error) => {
        console.error(error); // Output: Error: Failed to fetch data
      });
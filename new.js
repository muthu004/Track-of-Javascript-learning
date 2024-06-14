
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
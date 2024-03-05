// Helper function to simulate an asynchronous API call
function simulateAPICall(data, success = true, delay = 1000) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (success) {
          resolve(`Data received: ${data}`);
        } else {
          reject(new Error(`Failed to retrieve data: ${data}`));
        }
      }, delay);
    });
  }
  
  // Helper function to perform multiple asynchronous operations concurrently
  async function performConcurrentAPICalls(dataArray) {
    const promises = dataArray.map(data => simulateAPICall(data));
  
    try {
      const results = await Promise.all(promises);
      console.log("All API calls completed successfully:", results);
    } catch (error) {
      console.error("Error during API calls:", error.message);
    }
  }
  
  // Demo using the helper functions
  try {
    const apiDataArray = ["endpoint1", "endpoint2", "endpoint3"];
    performConcurrentAPICalls(apiDataArray);
  } catch (error) {
    console.error("Error:", error.message);
  }
  
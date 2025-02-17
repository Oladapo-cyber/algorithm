async function iterateWithAsyncAwait(values) {
  for (const value of values) {
    console.log("Value:", value);
    // Wait for 1 second (1000 milliseconds) before logging the next value
    await new Promise((resolve) => setTimeout(resolve, 1000));
  }
}

async function awaitCall() {
  try {
    // Simulated API call with a 50% chance to fail
    const data = await new Promise((resolve, reject) => {
      setTimeout(() => {
        if (Math.random() > 0.5) {
          resolve("Fake API data received");
        } else {
          reject(new Error("Simulated API fetch error"));
        }
      }, 1000);
    });
    console.log("API response:", data);
  } catch (error) {
    console.error(
      "Error fetching API data. Please try again later. Error:",
      error.message
    );
  }
}

async function asyncFunction1() {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  console.log("First async function complete");
}

async function asyncFunction2() {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  console.log("Second async function complete");
}

async function asyncFunction3() {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  console.log("Third async function complete");
}

async function chainedAsyncFunctions() {
  await asyncFunction1();
  await asyncFunction2();
  await asyncFunction3();
}

async function concurrentRequests() {
  const simulatedApiCall = (id) =>
    new Promise((resolve) => {
      setTimeout(() => resolve(`Result from API call ${id}`), 1000);
    });

  try {
    // Execute two API calls concurrently
    const results = await Promise.all([
      simulatedApiCall(1),
      simulatedApiCall(2),
    ]);
    console.log("Concurrent API call results:", results);
  } catch (error) {
    console.error("Error in concurrent API calls:", error);
  }
}

async function parallelCalls(urls) {
  // Simulated fetch function that returns a response after 1 second.
  const simulatedFetch = (url) =>
    new Promise((resolve) => {
      setTimeout(() => resolve(`Response from ${url}`), 1000);
    });

  try {
    const responses = await Promise.all(urls.map((url) => simulatedFetch(url)));
    console.log("Parallel call responses:", responses);
  } catch (error) {
    console.error("Error in parallel calls:", error);
  }
}

# Unhandled Exception in Node.js HTTP Server using Async/Await

This repository demonstrates a common, yet subtle, error encountered when using async/await within the requestListener function of a Node.js HTTP server created using the `http` module. The error manifests as a cryptic exception, making debugging challenging.  The solution involves proper handling of asynchronous operations and potential errors within the request listener.

## Bug Description

The provided `bug.js` file contains a simple HTTP server. However, attempting to use async/await within the `requestListener` leads to an unhandled exception and the server failing to start properly.  This is because async/await functions inherently return promises, and improper handling of their resolution can lead to silent failures.

## Solution

The `bugSolution.js` file demonstrates a corrected version of the server that properly handles asynchronous operations, preventing the unhandled exception. The key change is demonstrating how to use promises and error handling within the async function.
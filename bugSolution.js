const http = require('http');

const requestListener = async (request, response) => {
  try {
    response.writeHead(200);
    // Simulate an asynchronous operation
    await new Promise(resolve => setTimeout(resolve, 100));
    response.end('Hello, World!');
  } catch (error) {
    console.error('Error handling request:', error);
    response.writeHead(500);
    response.end('Internal Server Error');
  }
};

const server = http.createServer(requestListener);

server.listen(8080, () => {
  console.log('Server listening on port 8080');
});

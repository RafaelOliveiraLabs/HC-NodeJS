const http = require("http");

const hostname = "127.0.0.1";
const port = 3000;

const server = http.createServer((req, res) => {
  //pegar a pergunta na URL
  //verificar a pergunta e escolher uma resposta
  //retornar a resposta escolhida

  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("Hello World Weee");
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

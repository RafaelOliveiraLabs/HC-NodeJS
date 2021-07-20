const http = require("http");
const url = require("url");
const queryString = require("query-string");
const fs = require("fs");

const hostname = "127.0.0.1";
const port = 3000;

const server = http.createServer((req, res) => {
  var resposta;
  const urlParse = url.parse(req.url, true);
  const params = queryString.parse(urlParse.search);

  //criar usuário & att usuário
  if (urlParse.pathname == "/criar-atualizar-usuario") {
    //receber informações
    console.log(params);
    //salvar informações
    fs.writeFile("users/" + params.id + ".txt", JSON.stringify(params), function (err) {
      if (err) throw err;
      console.log("Saved!");
      resposta = "Usuário criado com sucesso";

      res.statusCode = 200;
      res.setHeader("Content-Type", "text/plain");
      res.end(resposta);
    });

    resposta = "Usuário criado com sucesso.";
  }

  //selecionar usuário
  else if (urlParse.pathname == "/selecionar-usuario") {
    fs.readFile("users/" + params.id + ".txt", function (err, data) {
      resposta = data;

      res.statusCode = 200;
      res.setHeader("Content-Type", "application/json");
      res.end(resposta);
    });
  }

  //deletar usuário
  else if (urlParse.pathname == "/remover-usuario") {
    fs.unlink("users/" + params.id + ".txt", function (err) {
      console.log("File deleted!");
      resposta = err ? "Usuário não encontrado" : "Usuário removido";

      res.statusCode = 200;
      res.setHeader("Content-Type", "text/plain");
      res.end(resposta);
    });
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

//http://127.0.0.1:3000/criar-atualizar-usuario?nome=rafael&idade=23&id=1
//http://127.0.0.1:3000/selecionar-usuario?id=1
//http://127.0.0.1:3000/remover-usuario?id=1
